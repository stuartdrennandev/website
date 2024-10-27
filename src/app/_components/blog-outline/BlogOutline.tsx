import { Blog } from "../../_types/Blog";
import styles from "./BlogOutline.module.css";

interface Props {
    blog: Blog;
}

const BlogOutline: React.FC<Props> = (
    {
        blog
    }
) => (
    <div className={styles.wrapper}>
        <div className={styles.date}>{blog.date.toDateString()}</div>
        <div className={styles.title}>{blog.title}</div>
        <div className={styles.description}>{blog.description}</div>
    </div>
);

export default BlogOutline;
