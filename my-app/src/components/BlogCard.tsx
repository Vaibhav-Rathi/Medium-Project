import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string; // Assuming this is in ISO format or a valid date string
    id: string;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return date.toLocaleDateString(undefined, options);
    };

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 border border-gray-200 mb-6 max-w-screen-md mx-auto">
            <div className="flex items-center space-x-4">
                <Avatar name={authorName} />
                <div className="flex-1">
                    <div className="text-lg font-semibold text-gray-800">
                        {authorName.toUpperCase()}
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                        <Circle />
                        <span>{formatDate(publishedDate)}</span>
                    </div>
                </div>
                <Link to={`/update/${id}`}>
                    <button className="bg-blue-500 text-white font-semibold py-1 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                        Update Post
                    </button>
                </Link>
            </div>
            
            <div className="mt-4">
                <Link to={`/blog/${id}`} className="text-2xl font-bold text-gray-900 hover:underline">
                    {title}
                </Link>
                <p className="text-gray-700 mt-2">
                    {content.slice(0, 150)}{content.length > 150 ? "..." : ""}
                </p>
                <div className="mt-4 text-sm text-gray-500">
                    {`${Math.ceil(content.length / 100)} minute(s) read`}
                </div>
            </div>
        </div>
    );
};

export function Circle() {
    return <div className="h-2 w-2 rounded-full bg-gray-400"></div>;
}

export function Avatar({ name, size = "small" }: { name: string; size?: "small" | "big" }) {
    return (
        <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-8 h-8" : "w-12 h-12"}`}>
            <span className={`${size === "small" ? "text-base" : "text-lg"} text-gray-300`}>
                {name[0].toUpperCase()}
            </span>
        </div>
    );
}
