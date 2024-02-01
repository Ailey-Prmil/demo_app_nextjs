"use client";
import ImagePicker, { ImagePreview } from "@/components/meals/imagePicker";
import classes from "./page.module.css";
import { useState, useEffect } from "react";

export default function ShareMealPage() {
  const [pickedImage, setPickedImage] = useState();
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    if (pickedImage) {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(pickedImage);
      fileReader.onloadend = () => {
        setPreviewUrl(fileReader.result);
      };
    }
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
        <form className={classes.form}>
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
            onImgChange={(e) => setPickedImage(e.currentTarget.files[0])}
          />
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
        <ImagePreview image={previewUrl} className=" grid-cols-2" />
      </main>
    </>
  );
}
