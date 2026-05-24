import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../layouts/MainLayout";
import TimeLine from "../Pages/TimeLine";
import ErrorPage from "../Pages/ErrorPage";
import FriendDetails from "../Components/FriendDetails";
import Stats from "../Pages/Stats";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/timeline",
                element: <TimeLine></TimeLine>
            },
            {
                path: "/friend/:id",
                element: <FriendDetails></FriendDetails>
            },
            {
                path: "/stats",
                element: <Stats></Stats>
            },
        ]
    }
]);