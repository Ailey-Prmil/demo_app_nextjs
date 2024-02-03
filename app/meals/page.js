import Link from 'next/link';
import { Suspense } from 'react';
import MealsGrid from '@/components/meals/mealsGrid';
import { getMeals } from '@/lib/meals';
import Styles from './mealsPage.module.css';

async function ShowMeals() {
    const meals = await getMeals()
    return (
        <MealsGrid meals={meals} />
    
    )
}

export default function MealsPage() {
    return (
        <>
        <header className={Styles.header}>
            <h1>Meals <span className={Styles.highlight}>CREATED BY YOU</span></h1>
            <p>Delicious meals for the whole family</p>
            <p>Your <span className={Styles.highlight}>FOOD</span> reflects your <span className={Styles.highlight}>AURA</span></p>
            <div className={Styles.cta}>
                <Link href='/meals/share'>Let them know your favorite meal</Link>
            </div>
        </header>
        <main>
            <Suspense fallback = {<p className={Styles.loading}>Fetching some famous meals...</p>}>
                <ShowMeals />
            </Suspense>

        </main>
        </>
    )
}