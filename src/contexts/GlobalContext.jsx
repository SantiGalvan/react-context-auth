import { createContext, useContext, useEffect, useState } from "react";
import axios from "../utils/axiosClient.js";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [tags, setTags] = useState([]);
    const fetchTags = async () => {
        const res = await axios.get('/tags');
        const apiTags = res.data;
        setTags(apiTags);
    }

    const [categories, setCategories] = useState([]);
    const fetchCategories = async () => {
        const res = await axios.get('/categories');
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