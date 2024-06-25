import { TiPlus } from "react-icons/ti";
import { BsArrowClockwise } from "react-icons/bs";
import { useState } from "react";
import { useGlobal } from "../../contexts/GlobalContext";

const Form = ({ dataEdit, onSubmit }) => {

    const { tags, categories } = useGlobal();

    const initialData = dataEdit || {
        title: '',
        content: '',
        image: '',
        categoryId: '',
        published: '',
        tags: []
    }
    const [formData, setFormData] = useState(initialData);

    const handleField = (key, value) => {
        setFormData(curr => ({ ...curr, [key]: value }));
    }

    const handleTags = (id) => {
        const curr = formData.tags;
        const newTags = curr.includes(id) ?
            curr.filter(element => element !== id) :
            [...curr, id];
        handleField('tags', newTags);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData(initialData);
    }

    return (
        <div className="card">
            <form onSubmit={handleSubmit} className="card-body">
                <div className="row">
                    <div className="col-6">

                        {/* Titolo */}
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Titolo del post</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                placeholder="Titolo del post"
                                name="title"
                                value={formData.title}
                                onChange={(e) => handleField('title', e.target.value)}
                            />
                        </div>

                        {/* Immagine */}
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Immagine del post</label>
                            <input
                                type="file"
                                className="form-control"
                                id="image"
                                name="image"
                                onChange={(e) => handleField('image', e.target.files[0])}
                            />
                        </div>

                        {/* Select Categoria */}
                        <div className="mb-3">
                            <p>Seleziona una categoria</p>
                            <select
                                value={formData.categoryId}
                                className="form-select"
                                name="categories"
                                onChange={(e) => handleField('categoryId', e.target.value)}
                            >
                                <option value="" disabled>Seleziona una categoria</option>
                                {categories.map(({ id, label }) => (
                                    <option
                                        key={`category-${id}`}
                                        value={id}
                                    >
                                        {label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Switch Pubblicato */}
                        <div className="mb-3">
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="published"
                                    checked={formData.published}
                                    onChange={(e) => handleField('published', e.target.checked)}
                                />
                                <label className="form-check-label" htmlFor="published">Post pubblicato</label>
                            </div>
                        </div>

                    </div>
                    <div className="col-6">

                        {/* Contenuto */}
                        <div className="mb-3">
                            <label htmlFor="content" className="form-label">Contenuto del Post</label>
                            <textarea
                                className="form-control"
                                id="content"
                                rows="6"
                                onChange={(e) => handleField('content', e.target.value)}
                                value={formData.content}
                            ></textarea>
                        </div>

                    </div>
                    <div className="col">

                        {/* Tags */}
                        <p className="text-center">Tags</p>
                        <div className="checks d-flex justify-content-center">
                            {tags.map(({ id, label }) => (
                                <div key={`tag-${id}`} className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={`tag-${id}`}
                                        checked={formData.tags.includes(id)}
                                        onChange={() => handleTags(id)}
                                    />
                                    <label className="form-check-label" htmlFor={`tag-${id}`}>{label}</label>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                <div className="buttons d-flex justify-content-center gap-3 my-4">

                    {/* Bottoni */}
                    <button className="btn btn-success d-flex align-items-center gap-1"><TiPlus />Crea</button>
                    <button type="reset" className="btn btn-warning d-flex align-items-center gap-1"><BsArrowClockwise />Reset</button>

                </div>
            </form>
        </div>
    )
}

export default Form;