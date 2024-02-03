import sql from 'better-sqlite3';
import xss from 'xss';
import slugify from 'slugify';
import fs from 'node:fs';

const db = sql('meals.db');

export async function getMeals() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    //throw new Error('Oopsie!!...');
    return (db.prepare('SELECT * FROM meals').all());
};

export function getMealBySlug(slug) {
    const meal = db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
    return meal;
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const imgFileName = `${meal.slug}.${extension}`;
    const stream = fs.createWriteStream(`public/${imgFileName}`);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error){
            throw new Error ("Saving image failed")
        }
    });

    meal.image = `/${imgFileName}`;
    db.prepare(`
        INSERT INTO meals (
            title, summary, image, instructions, creator, creator_email, slug
        )
        VALUES (
            @title, 
            @summary, 
            @image, 
            @instructions, 
            @creator,
            @creator_email,
            @slug
        )`
    ).run(meal);
}