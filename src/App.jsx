import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CategoryPage from "./pages/CategoryPage"
import ProductDetails from "./pages/ProductDetails"
import CartPage from "./pages/CartPage"
import CategoriesPage from "./pages/CategoriesPage"
import Products from "./pages/Products"
import NotFound from "./pages/NotFound"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:categoryName" element={<CategoryPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
