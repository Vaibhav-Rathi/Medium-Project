import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@vaibhavvaibhav6/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: ""
    });

    // Email validation function
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Password validation function
    const validatePassword = (password: string) => {
        return password.length >= 5;
    };

    // Input validation function
    const validateInputs = () => {
        let valid = true;
        const newErrors = { name: "", email: "", password: "" };

        if (type === "signup" && !postInputs.name.trim()) {
            newErrors.name = "Name is required";
            valid = false;
        }

        if (!validateEmail(postInputs.email)) {
            newErrors.email = "Invalid email format";
            valid = false;
        }

        if (!validatePassword(postInputs.password)) {
            newErrors.password = "Password must be at least 5 characters";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    async function sendRequest() {
        if (!validateInputs()) return; // Stop the request if inputs are invalid

        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        } catch (e) {
            alert("Error while signing up or signing in");
        }
    }

    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            {type === "signup" ? "Create an account" : "Sign in to your account"}
                        </div>
                        <div className="text-slate-500">
                            {type === "signin" ? "Don't have an account?" : "Already have an account?"}
                            <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                                {type === "signin" ? "Sign up" : "Sign in"}
                            </Link>
                        </div>
                    </div>
                    <div className="pt-8">
                        {type === "signup" && (
                            <LabelledInput
                                label="Name"
                                placeholder="Enter name"
                                onChange={(e) => setPostInputs({ ...postInputs, name: e.target.value })}
                                error={errors.name}
                            />
                        )}
                        <LabelledInput
                            label="Email"
                            placeholder="Enter email"
                            onChange={(e) => setPostInputs({ ...postInputs, email: e.target.value })}
                            error={errors.email}
                        />
                        <LabelledInput
                            label="Password"
                            type="password"
                            placeholder="Enter password"
                            onChange={(e) => setPostInputs({ ...postInputs, password: e.target.value })}
                            error={errors.password}
                        />
                        <button
                            onClick={sendRequest}
                            type="button"
                            className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        >
                            {type === "signup" ? "Sign up" : "Sign in"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Updated LabelledInput component with error display
interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    error?: string;  // Optional error message
}

function LabelledInput({ label, placeholder, onChange, type = "text", error = "" }: LabelledInputType) {
    return (
        <div>
            <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
            <input
                onChange={onChange}
                type={type}
                className={`bg-gray-50 border ${error ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                placeholder={placeholder}
                required
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>} {/* Show error message if exists */}
        </div>
    );
}
