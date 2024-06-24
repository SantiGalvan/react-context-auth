import Form from "../components/Form/Form";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
const apiUrl = import.meta.env.VITE_BASE_API_URL;

const PostCreate = () => {

    const navigate = useNavigate();

    const [tags, setTags] = useState([]);
    const fetchTags = async () => {
        const res = await axios.get(`${apiUrl}/tags`);
        const apiTags = res.data;
        setTags(apiTags);
    }

    const [categories, setCategories] = useState([]);
    const fetchCategories = async () => {
        const res = await axios.get(`${apiUrl}/categories`);
        const apiCategories = res.data;
        setCategories(apiCategories);
    }

    useEffect(() => {
        fetchTags();
        fetchCategories();
    }, [])

    return (
        <section className="container">
            <div className="mb-4 d-flex align-items-center justify-content-between">
                <button
                    onClick={() => { navigate(-1) }}
                    className='btn btn-secondary h-75 d-flex align-items-center gap-1'
                >
                    <FaArrowLeft />Torna indietro
                </button>
                <h1>Crea il tuo Post</h1>
            </div>
            <Form
                tags={tags}
                categories={categories}
                onCreate={data => navigate(`/posts/${data.slug}`)}
            />
        </section>
    )
}

export default PostCreate;