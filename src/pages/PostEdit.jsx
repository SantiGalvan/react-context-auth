import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const apiUrl = import.meta.env.VITE_BASE_API_URL;

const PostEdit = () => {

    const { slug } = useParams();

    return (
        <section className="container">
            <form>
                form di: {slug}
            </form>
        </section>
    )
}

export default PostEdit;