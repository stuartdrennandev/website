import styles from "./page.module.css";
import Image from "next/image";
import profilePic from "../../public/profile-pic.jpeg"
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

        <p>blogs incoming...</p>

      </main>
    </div>
  );
}
