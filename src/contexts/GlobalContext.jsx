import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_BASE_API_URL;

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
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
    }, []);

    return (
        <GlobalContext.Provider value={{
            tags,
            categories
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobal = () => {
    const value = useContext(GlobalContext);

    if (value === undefined) throw new Error('Non sei dentro al Global Provider');

    return value;
}

export { GlobalProvider, useGlobal }