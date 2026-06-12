import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import ProtectedRoute from "../components/routes/ProtectedRoute";
import Navbar from "../layouts/Navbar";

const AppRouter = ({ theme, handlerTheme }) => {
    return (
        <>
            <Navbar
                theme={theme}
                handlerTheme={handlerTheme}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </>
    )
};

export default AppRouter;