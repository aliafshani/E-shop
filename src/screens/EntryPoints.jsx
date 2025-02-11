import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import Login from "./beforLogin/Login";
import Home from "./afterLogin/Home";
import Signup from "./beforLogin/Signup";
import ShopCenter from "./afterLogin/ShopCenter/ShopCenter";
import DietCenter from "./afterLogin/DietCenter/DietCenter";
import AboutCenter from "./afterLogin/AboutCenter/AboutCenter";
import QuestionCenter from "./afterLogin/QuestionCenter/QuestionCenter";
import UserPanel from "./afterLogin/UserPanel/UserPanel";
import ShopCenterCategory from "./afterLogin/ShopCenterCategory/ShopCenterCategory";
import ShopCenterProduct from "./afterLogin/ShopCenterProduct/ShopCenterProduct";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/E-shop/login" element={<Login />} />
            <Route path="/E-shop/signup" element={<Signup />} />
            <Route path="/E-shop" element={<Home />} />
            {/* shop center */}
            <Route path="/E-shop/shop-center" element={<ShopCenter />} />
            <Route path="/E-shop/shop-center/:category" element={<ShopCenterCategory />} />
            <Route path="/E-shop/shop-center/:category/:product" element={<ShopCenterProduct />} />

            {/* end shop center */}
            <Route path="/E-shop/diet-center" element={<DietCenter />} />
            <Route path="/E-shop/about-center" element={<AboutCenter />} />
            <Route path="/E-shop/faq" element={<QuestionCenter />} />
            <Route path="/E-shop/user-panel" element={<UserPanel />} />
        </>
    )
);

export default router