import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import profilePic from "@/public/profile-pic.jpeg";

const Header: React.FC = () => (
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
            <Link href="/blog"><div className={styles.headerButton}>Blog</div></Link>
        </div>
    </div>
)

export default Header;