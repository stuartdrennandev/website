import styles from "./page.module.css";
import Image from "next/image";
import profilePic from "../../../public/profile-pic.jpeg"
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.header}>
                    <Link href="/">
                        <Image
                            src={profilePic}
                            alt={"A picture of me!"}
                            title={"A picture of me!"}
                            height={150}
                        />
                    </Link>

                    <div className={styles.headerButtonContainer}>
                        <Link href="/about"><div className={styles.headerButton}>About</div></Link>
                        <div className={styles.headerButton}>Resume</div>
                    </div>

                </div>

                <h1>Stuart Drennan</h1>

                <p>Hi there!</p>
                <p>I'm Stuart, a software engineer from Ireland, currently based in BC, Canada.</p>
                <h2>About me</h2>
                <p>I completed a degree in Computer Science at Queen's University Belfast, completing a placement year at Verint Software in my 3rd year. After university, I spent nearly three great years working at Instil Software, where I worked on various full stack projects for the consultancy's clients. More about all that on my CV.</p>
                <h2>Why the website</h2>
                <p>I'm currently taking a short career break to explore Canada, but after a long summer of hiking and golfing, I've got the itch to return to building things. I also want to write - and this website is going to be the home for that. I'll be documenting my return to software engineering, and writing about things I find interesting along the way.</p>
            </main>
        </div>
    );
}