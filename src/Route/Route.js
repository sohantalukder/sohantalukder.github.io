import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
]);

export default Route;
