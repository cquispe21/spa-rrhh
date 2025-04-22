import { Navigate, Outlet } from "react-router-dom";


export default function ProtectedRoute() {
  const isLoggedIn = localStorage.getItem("token") !== null;
 
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
