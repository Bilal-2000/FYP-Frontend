import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";
const RequireAuth = () => {
    const { auth, setAuth } = useAuth();
    const location = useLocation();
    const isLoggedIn = window.localStorage.getItem("isLoggedIn")
    return (
        isLoggedIn === "true"
            ? <Outlet />
            : <Navigate to="/SignIn" state={{ from: location }} replace />
    )
}
export default RequireAuth;