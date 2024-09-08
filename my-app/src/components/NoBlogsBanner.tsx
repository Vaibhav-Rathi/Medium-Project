import { useNavigate } from "react-router-dom";

export const NoBlogsBanner = () => {
    const navigate = useNavigate();

    const handleCreateBlog = () => {
        navigate("/publish");
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
                <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
                <h1 className="text-2xl font-bold text-gray-700 mt-4">No Blogs Found</h1>
                <p className="text-gray-500 mt-2">It looks like you haven’t created any blogs yet. Start writing and share your thoughts with the world!</p>
                <button
                    onClick={handleCreateBlog}
                    className="mt-6 px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Create Your First Blog
                </button>
            </div>
        </div>
    );
};
