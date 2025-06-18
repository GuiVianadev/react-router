import { Routes, Route } from "react-router"
import { Layout } from "../components/layout"
import { Home } from "../pages/home"

import { Details } from "../pages/details"
import { Products } from "../pages/products"
import { NotFound } from "../pages/notFound"

export function AppRoutes() {
    return (
        <Routes>

            <Route path="/" element={<Layout />}>
                <Route path="/" index element={<Home />} />
                <Route path="/products" element={<Products />} />
            </Route>

            <Route path="/details/:id" element={<Details />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}