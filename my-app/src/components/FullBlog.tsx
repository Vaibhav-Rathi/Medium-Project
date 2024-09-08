import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
    // Debugging: Log the blog object to ensure it's being passed correctly
    console.log(blog);

    // Error handling for missing blog prop
    if (!blog) {
        return <div>Error: Blog data is not available.</div>;
    }

    // Convert publishedDate to a formatted string with month name if it's a Date object
    const formatDateToMonthName = (date: Date) => {
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    const formattedDate = typeof blog.publishedDate === 'string'
        ? formatDateToMonthName(new Date(blog.publishedDate))
        : formatDateToMonthName(blog.publishedDate);

    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-xl">
                    <div className="col-span-8">
                        <div className="text-5xl font-extrabold">
                            {blog.title}
                        </div>
                        <div className="text-slate-500 pt-2">
                            {formattedDate}
                        </div>
                        <div className="pt-4">
                            {blog.content}
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="flex w-full">
                            <div className="pr-4 flex flex-col ">
                                <Avatar size="big" name={blog.author.name || "Anonymous"} />
                            </div>
                            <div className="text-xl font-bold mt-1">
                                {blog.author.name || "Anonymous"}
                            </div>                            
                        </div>  
                        <div className="ml-1 pt-2 text-slate-500">
                            Dear, {blog.author.name} Update your about in your profile to showcase your abilities.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
