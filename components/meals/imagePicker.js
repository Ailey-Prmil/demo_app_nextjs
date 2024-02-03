"use client";
import Styles from "./imagePicker.module.css";
import { useRef } from "react";

export function ImagePicker({ label, name, onImgChange }) {
  const imagePickerRef = useRef();

  function imagePickHandler() {
    imagePickerRef.current.click();
  }

  return (
    <div className={Styles.picker}>
      <label htmlFor="image">{label}</label>
      <div className={Styles.controls}>
        <input
          className={Styles.input}
          type="file"
          id="image"
          name={name}
          accept="image/*"
          ref={imagePickerRef}
          onChange={onImgChange}
        />

        <button
          className={Styles.button}
          type="button"
          onClick={imagePickHandler}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}

export function ImagePreview({ image }) {
  return (
    <div className={Styles.preview}>
      {!image && <p>No image picked.</p>}
      {image && (
        <img src={image} alt="Preview" className="w-full h-full object-cover" />
      )}
    </div>
  );
}
