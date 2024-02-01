import Styles from './mealsGrid.module.css';
import MealItem from './mealsItem';

export default function MealsGrid({meals}) {
    return (
        <ul className={Styles.meals}>
            {meals.map((meal) => (
                <li key={meal.id}>
                    <MealItem {...meal} />                
                </li>
            ))}
        </ul>
    );
}