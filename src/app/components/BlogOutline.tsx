import styles from "./BlogOutline.module.css";

export type Blog = {
    title: string;
    date: Date;
    description: string;
}

interface Props {
    blog: Blog;
}

export default function BlogOutline(
    props: Props
) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.date}>{props.blog.date.toDateString()}</div>
            <div className={styles.title}>{props.blog.title}</div>
            <div className={styles.description}>{props.blog.description}</div>
        </div>
    );
}
