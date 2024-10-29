import styles from "./page.module.css";
import Link from "next/link";
import BlogOutline from "./_components/blog-outline/BlogOutline";
import { Blog } from "./_types/Blog";
import Header from "./_components/header/Header";

const dummyBlog: Blog = {
  title: "My blog title",
  description: "My blog description",
  date: new Date()
};

const Home: React.FC = () => (
  <div className={styles.page}>
    <main className={styles.main}>
      <Header />

      <h1>Stuart Drennan</h1>

      <p>Hi there, I'm Stuart, a software engineer from Ireland. More about me&nbsp;<Link href="/about" className={styles.link}>here</Link>.</p>

      <BlogOutline blog={dummyBlog} />
    </main>
  </div>
);

export default Home;
