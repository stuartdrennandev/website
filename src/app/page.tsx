import styles from "./page.module.css";
import Link from "next/link";
import BlogOutline from "./blog/_components/blog-outline/BlogOutline";
import { Blog } from "./_types/Blog";
import PageLayout from "./_components/page-layout/PageLayout";

const dummyBlog: Blog = {
  title: "My blog title",
  description: "My blog description",
  date: new Date()
};

const Home: React.FC = () => (
  <PageLayout>
    <h1>Stuart Drennan</h1>

    <p>Hi there, I'm Stuart, a software engineer from Ireland. More about me&nbsp;<Link href="/about" className={styles.link}>here</Link>.</p>

    <BlogOutline blog={dummyBlog} />
  </PageLayout>
);

export default Home;
