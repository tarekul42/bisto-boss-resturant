import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import Dashboard from "../Layout/DashBoard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'menu',
                element: <Menu />
            },
            {
                path: 'order/:category',
                element: <Order />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <SignUp />
            },
            {
                path: 'secret',
                element: <PrivateRoute><Secret /></PrivateRoute>
            }
        ] 
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: 'mycart',
                element: <MyCart />
            },
            {
                path: 'allusers',
                element: <AllUsers />
            },
        ]
    }
]);