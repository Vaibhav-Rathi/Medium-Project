import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";


export interface Blog {
    "content": string;
    "title": string;
    "id": string;
    "publishedDate" : Date;
    "author": {
        "name": string
    }
}

export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setBlog(response.data.blog);
                setLoading(false);
            })
    }, [id])

    return {
        loading,
        blog
    }

}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/my/blogs`, {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                });
                setBlogs(response.data.blogs && Array.isArray(response.data.blogs) ? response.data.blogs : []);
            } catch (err) {
                console.error("Failed to fetch blogs", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return { loading, blogs };
};
