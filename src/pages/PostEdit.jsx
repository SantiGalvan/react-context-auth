import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Form from "../components/Form/Form";

const apiUrl = import.meta.env.VITE_BASE_API_URL;

const PostEdit = () => {

    const { slug } = useParams();

    const navigate = useNavigate();

    const [dataToEdit, setDataToEdit] = useState(null);

    const fetchDataToEdit = async () => {
        const res = await axios.get(`${apiUrl}/posts/${slug}`);
        const { title, content, image, categoryId, published, tags } = res.data;
        setDataToEdit({
            title,
            content,
            image,
            categoryId,
            published,
            tags: tags.map(tag => tag.id)
        })
    }

    useEffect(() => {
        fetchDataToEdit();
        return () => {
            setDataToEdit(null);
        }
    }, [slug]);

    const updatePost = async (formData) => {
        const res = await axios.put(`${apiUrl}/posts/${slug}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        if (res.status < 400) navigate(`/posts/${res.data.slug}`)
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
                <h1>Modifica il tuo Post</h1>
            </div>
            {dataToEdit === null ?
                <div>Loading...</div> :
                <Form
                    dataEdit={dataToEdit}
                    onSubmit={updatePost}
                />}
        </section>
    )
}

export default PostEdit;