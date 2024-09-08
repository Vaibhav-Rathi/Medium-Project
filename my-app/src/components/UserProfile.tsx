import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { Spinner } from "../components/Spinner";

export const UserProfile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/user/profile`, {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                });
                const userData = response.data;
                setName(userData.name);
                setEmail(userData.email);
                setPassword(userData.profilePic || "default-profile-pic-url"); // Replace with a default profile pic URL if needed
            } catch (err) {
                setError("Failed to fetch user profile.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    const handleUpdateProfile = async () => {
        setLoading(true);
        setError(null);
        try {
            await axios.put(`${BACKEND_URL}/api/v1/user/profile`, {
                name,
                email,
                password
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            navigate('/profile'); // Redirect to the profile page or any other page as needed
        } catch (err) {
            setError("Failed to update profile. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner />
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-3xl font-bold mb-6 text-center">{name}'s Profile</h1>
                {error && <div className="text-red-500 text-center mb-4">{error}</div>}
                <div className="flex justify-center mb-6">
                    <div className="flex justify-center w-20 h-20 rounded-full bg-gray-700">
                        <div className="mt-4 text-5xl text-slate-300">
                            {name[0]}
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input
                        type="passsword"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter new password"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <button
                    onClick={handleUpdateProfile}
                    className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {loading ? 'Updating...' : 'Update Profile'}
                </button>
            </div>
        </div>
    );
};
