import styles from "./page.module.css";
import Image from "next/image";
import profilePic from "../../public/profile-pic.jpeg"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src={profilePic}
          alt={"A picture of me!"}
          title={"A picture of me!"}
          height={100}
        />

        <h1>Stuart Drennan</h1>
        <p>A software engineer trying to get better at his craft, and documenting that process</p>
      </main>
    </div>
  );
}
