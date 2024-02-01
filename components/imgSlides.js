'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';
import Styles from './imgSlides.module.css';

const images = [
  { image: burgerImg, alt: 'A delicious, juicy burger' },
  { image: curryImg, alt: 'A delicious, spicy curry' },
  { image: dumplingsImg, alt: 'Steamed dumplings' },
  { image: macncheeseImg, alt: 'Mac and cheese' },
  { image: pizzaImg, alt: 'A delicious pizza' },
  { image: schnitzelImg, alt: 'A delicious schnitzel' },
  { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

export default function ImgSlides() {
    const [curImage, setCurImage] = useState(0);

    useEffect(
        () => {
            const interval = setInterval(() => {
                setCurImage((prevImage) => {
                    if (prevImage >= images.length - 1) {
                        return 0;
                    }
                    return prevImage + 1;
                });
            }, 3000);
            return () => clearInterval(interval);
        },
        []);


    return (
        <div className={Styles.slideshow}>
            {images.map((image, index)=>(
                <Image 
                src={image.image}
                alt={image.alt}
                key={index}
                className={curImage === index ? Styles.active : Styles.inactive} />
                )
            )}
        </div>
    );
}