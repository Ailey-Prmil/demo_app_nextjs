'use client';
import imgLogo from "@/assets/logo.png";
import Styles from "./mainHeader.module.css";
import { usePathname } from "next/navigation"
import Link from "next/link";
import Image from "next/image";

export default function MainHeader() {
    const path = usePathname();
    return (
        <div className={Styles.container}>
            <div className={Styles.logo}>
                <Image src={imgLogo} alt="Meals Logo" priority className={Styles.header_logo} />
                <h1 className={Styles.logo_name}>NEXTLEVEL FOOD</h1>
            </div>
            <nav className={Styles.head_bar}>
                <ul>
                    <li>
                        <Link href="/" className={path ==='/' ? Styles.active : undefined}>Home Page</Link>
                    </li>
                    <li>
                        <Link href="/meals" className={path.startsWith('/meals') ? Styles.active : undefined}>Meals Collection</Link>
                    </li>
                    <li>
                        <Link href="/community" className={path.startsWith('/community') ? Styles.active : undefined}>Community</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}