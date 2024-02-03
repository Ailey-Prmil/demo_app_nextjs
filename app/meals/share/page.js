"use client";
import { ImagePicker, ImagePreview } from "@/components/meals/imagePicker";
import { SubmitHandler } from "@/lib/submitAction";
import classes from "./page.module.css";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import SubmitFormButtion from "@/components/meals/submitFormButton";

export default function ShareMealPage() {
  const [pickedImage, setPickedImage] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [formState, formStateFunctions] = useFormState(SubmitHandler, {message:  null});

  useEffect(() => {
    if (!pickedImage) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    }

    reader.readAsDataURL(pickedImage);
  }, [pickedImage]);

  
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formStateFunctions}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker
            label="Meal Image"
            name="image"
            onImgChange={(e) => setPickedImage(e.target.files[0])}
          />
          <p className={classes.actions}>
            {formState.message && <p className=" text-rose-600 text-center text-2xl">{formState.message}</p>}
            <SubmitFormButtion />
          </p>
        </form>
        <ImagePreview image={previewUrl} className=" grid-cols-2" />
        
      </main>
    </>
  );
}
