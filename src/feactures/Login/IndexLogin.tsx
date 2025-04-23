import { Navigate } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import { LoginoProvider } from "./Context/LoginContext";

export default function IndexLogin() {
    const isLoggedIn = localStorage.getItem("token") !== null;
    if (isLoggedIn) {
        return <Navigate to="/360" />;
    }
    return (
       <LoginoProvider>
        <LoginForm/>
       </LoginoProvider>
    )
}