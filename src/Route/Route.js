import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='/blog/:id' element={<Blog />} />
        </Route>
    )
);

export default router;
