import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CategoryPage from "./pages/CategoryPage"
import ProductDetails from "./pages/ProductDetails"
import CartPage from "./features/cart/CartPage"
import CategoriesPage from "./pages/CategoriesPage"
import Products from "./pages/Products"
import NotFound from "./pages/NotFound"
import { CartProvider } from "./features/cart/CartContext"
import Contact from "./pages/Contact"
import Compare from "./features/Comparison/Compare"
import { ComparisonProvider } from "./features/Comparison/CompareContext"
function App() {

  return (
    <CartProvider>
      <ComparisonProvider>
      <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/:name" element={<CategoryPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={ <CartPage />} />
            <Route path="/contact" element={ <Contact />} />
            <Route path="/compare" element={ <Compare />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
      </ComparisonProvider>
    </CartProvider>
  )
}

export default App
