import Styles from "./detailsPage.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getMealBySlug } from "@/lib/meals";

export default function MealsDetailPage({params}) {
    const meal = getMealBySlug(params.mealSlug);
    if (!meal) {
        notFound();
    }
    meal.instructions = meal.instructions.replace(/\n/g, '<br />');
    return (
        <>
            <header className={Styles.header}>
                <div className={Styles.image}>
                    <Image src={meal.image} alt={meal.alt} fill />
                </div>
                <div className={Styles.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={Styles.creator}>
                        by <a href={'mailto:${meal.creator_email}'}>{meal.creator}</a>
                    </p>
                    <p className={Styles.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <div className={Styles.instructions} dangerouslySetInnerHTML={{
                    __html: meal.instructions
                }}></div>
            </main>
        </>
    )
}