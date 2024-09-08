import { Appbar } from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handlePublish = async () => {
        if (!title || !description) {
            setError("Title and content cannot be empty.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog/create`, {
                title,
                content: description
            }, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });
            navigate(`/blog/${response.data.id}`);
        } catch (err) {
            setError("Failed to publish the post. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Appbar />
            <div className="flex justify-center w-full pt-8"> 
                <div className="max-w-screen-lg w-full">
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Title"
                        value={title}
                    />
                    <TextEditor
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                    {error && <div className="text-red-500 mt-2">{error}</div>}
                    <button
                        onClick={handlePublish}
                        type="button"
                        className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                        disabled={loading}
                    >
                        {loading ? 'Publishing...' : 'Publish post'}
                    </button>
                </div>
            </div>
        </div>
    );
};

function TextEditor({ onChange, value }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void; value: string }) {
    return (
        <div className="mt-2">
            <div className="w-full mb-4">
                <div className="flex items-center justify-between border">
                    <div className="my-2 bg-white rounded-b-lg w-full">
                        <label htmlFor="editor" className="sr-only">Content</label>
                        <textarea
                            onChange={onChange}
                            id="editor"
                            rows={8}
                            className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2"
                            placeholder="Write an article..."
                            required
                            value={value}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
