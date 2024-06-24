import axios from "axios";
import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import { Link } from "react-router-dom";

const apiUrl = import.meta.env.VITE_BASE_API_URL;

const Posts = () => {

    const [posts, setPosts] = useState(null);

    const fetchPosts = async () => {
        const res = await axios.get(`${apiUrl}/posts`);
        const newPosts = res.data.data;
        setPosts(newPosts);
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <section className="container">
            <div className="row g-4">
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="mb-2">Lista dei Posts</h1>
                    <Link
                        to={'create'}
                        className="btn btn-success h-75 d-flex align-items-center justify-content-center gap-1">
                        <FaPlus />Crea Post
                    </Link>
                </div>
                {posts?.map(({ id, title, content, category, tags, user, slug }) => (
                    <div key={id} className="col-4">
                        <Card
                            title={title}
                            content={content}
                            category={category}
                            tags={tags}
                            user={user}
                            slug={slug}
                        />
                    </div>
                ))}
            </div>
        </section >
    )
}

export default Posts;