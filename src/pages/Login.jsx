import { useState } from "react";
import FormLogin from "../components/Forms/FormLogin";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
    const { login } = useAuth();

    const [loginError, setLoginError] = useState(null);


    const handleLogin = async (formData) => {
        try {
            await login(formData);
        } catch (err) {
            setLoginError(err)
            console.error(err);
        }
    }

    return (
        <section className="container">
            <FormLogin submitForm={handleLogin} />
        </section>
    )
}

export default Login;