import Form from "../components/Forms/Form";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import axios from "../utils/axiosClient.js";

const PostCreate = () => {

    const navigate = useNavigate();

    const createPost = async (formData) => {
        const res = await axios.post('/posts', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        if (res.status < 400) navigate(`/posts/${res.data.slug}`);
    }

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
            <Form onSubmit={createPost} />
        </section>
    )
}

export default PostCreate;