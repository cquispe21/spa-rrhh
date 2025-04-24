import { Navigate } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import { LoginoProvider } from "./Context/LoginContext";
import { EmployeesoProvider } from "../Register/Context/EmployeesContext";
import { RegisteroProvider } from "../Register/Context/RegisterContext";

export default function IndexLogin() {
  const isLoggedIn = localStorage.getItem("token") !== null;
  if (isLoggedIn) {
    return <Navigate to="/360" />;
  }
  return (
    <LoginoProvider>
      <EmployeesoProvider>
        <RegisteroProvider>
          <LoginForm />
        </RegisteroProvider>
      </EmployeesoProvider>
    </LoginoProvider>
  );
}
