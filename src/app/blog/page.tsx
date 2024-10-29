import { useMemo } from "react";
import { Blog } from "../_types/Blog";
import BlogOutline from "./_components/blog-outline/BlogOutline";
import PageLayout from "../_components/page-layout/PageLayout";

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
        <PageLayout>
            <h1>Writing</h1>

            {blogs.map((blog, index) => {
                return <BlogOutline blog={blog} key={index} />
            })}
        </PageLayout>
    );
}

export default BlogHomepage;