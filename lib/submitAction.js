'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
function isvalidText(text) {
  if (text.trim !== '') {
    return true;
  }
  return false;
}

export async function SubmitHandler(preState, formData) {
  

    const mealData = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image'),
      creator: formData.get('name'),
      creator_email: formData.get('email')
    };

    if (
      !isvalidText(mealData.title) || 
      !isvalidText(mealData.summary) || 
      !isvalidText(mealData.instructions) || 
      !isvalidText(mealData.creator) || 
      !isvalidText(mealData.creator_email) ||
      !mealData.creator_email.includes('@') ||
      !mealData.image || mealData.image.size > 0) 
    {
      return ({
        message: 'Invalid input'
      })
    }


    await saveMeal(mealData);
    revalidatePath('/meals');
    redirect('/meals');
    


}