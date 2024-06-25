import { createContext, useContext } from "react";
import useStorage from "../hooks/useStorage";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axiosClient.js";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const navigate = useNavigate();

    const [user, setUser] = useStorage(null, 'user');
    const isLoggedIn = user !== null;

    const login = async (payload) => {

        try {
            const { data: response } = await axios.post('/auth/login', payload);
            setUser(response.data);
            localStorage.setItem('accessToken', response.token);
            navigate('/');

        } catch (err) {
            const { errors } = err.response.data;
            const error = new Error(errors ? 'Errore di login' : err.response.data);
            error.errors = errors;
            throw error;
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("accessToken");
        navigate('/login');
    }

    const value = {
        user,
        isLoggedIn,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const value = useContext(AuthContext);
    if (value === undefined) {
        throw new Error('Non sei dentro al Auth Provider.');
    }
    return value;
}

export { AuthProvider, useAuth };