import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";

export const Appbar = () => {
    return (
        <header className="bg-white shadow-md border-b border-gray-200 mb-10">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo Section */}
                <Link to="/blogs" className="text-4xl font-extrabold text-gray-900 hover:text-gray-800 transition duration-300">
                    Medium
                </Link>

                {/* Actions Section */}
                <div className="flex items-center space-x-4">
                    <Link to="/publish">
                        <button
                            type="button"
                            className="bg-green-600 text-white font-semibold rounded-full px-6 py-2.5 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300"
                        >
                            New Post
                        </button>
                    </Link>

                    <Link to="/user-profile" className="flex items-center">
                        <Avatar size="big" name="Vaibhav" />
                    </Link>
                </div>
            </div>
        </header>
    );
};
