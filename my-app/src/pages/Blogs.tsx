// src/pages/Blogs.tsx
import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { NoBlogsBanner } from "../components/NoBlogsBanner"; // Import the NoBlogsBanner component
import { useBlogs } from "../hooks";

export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return (
            <div>
                <Appbar />
                <div className="flex justify-center">
                    <div>
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div>
                    {blogs.length === 0 ? (
                        <NoBlogsBanner />
                    ) : (
                        blogs.map(blog => (
                            <BlogCard
                                key={blog.id}
                                id={blog.id}
                                authorName={blog.author.name || "Anonymous"}
                                title={blog.title}
                                content={blog.content}
                                publishedDate={new Date(blog.publishedDate).toLocaleDateString()}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};
