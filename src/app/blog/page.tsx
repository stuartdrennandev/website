import { useMemo } from "react";
import Header from "../_components/header/Header";
import { Blog } from "../_types/Blog";
import BlogOutline from "../_components/blog-outline/BlogOutline";
import styles from "./page.module.css";

const BlogHomepage: React.FC = () => {
    const blogs: Blog[] = useMemo(() => [
        {
            title: "Blog 1",
            description: "blog 1 description",
            date: new Date()
        },
        {
            title: "Blog 2",
            description: "blog 2 description",
            date: new Date()
        }

    ], []);

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Header />
                <h1>Writing</h1>

                {blogs.map((blog, index) => {
                    return <BlogOutline blog={blog} key={index} />
                })}
            </main>
        </div>
    );
}

export default BlogHomepage;