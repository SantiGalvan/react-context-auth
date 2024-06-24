import FormLogin from "../components/Forms/FormLogin";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
    const { login } = useAuth();

    const handleLogin = () => {
        login();
    }

    return (
        <section className="container">
            <FormLogin submitForm={handleLogin} />
        </section>
    )
}

export default Login;