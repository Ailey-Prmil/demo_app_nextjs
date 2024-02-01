import Link from "next/link";
import Styles from "./home.module.css";
import ImgSlides from "@/components/imgSlides";

export default function Home() {
  return (
    <>
      <header className={Styles.header}>
        <div className={Styles.slidesContainer}>
          <ImgSlides />
        </div>
        <div>
          <div className={Styles.about}>
            <h1>NextLevel food for NextLevel Buddy</h1>
            <p>Delicious meals, shared by a food-loving community.</p>
          </div>
          <div className={Styles.linksContainer}>
            <Link href="/meals">
              See this menu!
            </Link>
            <Link href="/community">
              Join our community!
            </Link>
          </div>
        </div>
      </header>

      <main>
      <section className={Styles.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={Styles.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
