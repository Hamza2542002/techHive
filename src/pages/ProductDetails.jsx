import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/prodcuts";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import UpdateItemQuantity from "../features/cart/UpdateItemQuantity";
import { useCart } from "../features/cart/CartContext";
import AddToCart from "../features/cart/AddToCart";
import AddToComparison from "../features/Comparison/AddToComparison";
import ShowComparison from "../features/Comparison/ShowComparison";

export default function ProductDetails() {
  const { id } = useParams();
  const [product,setProduct] = useState(products.find((p) => p.id === parseInt(id)));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return <div className="text-center py-10 text-red-600 font-semibold">Product not found</div>;
  }
  return (
    <div className="min-h-screen bg-gray-50  ">
      <NavBar />
      <div className="container py-10 relative z-0">
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto bg-white p-6 rounded-2xl shadow">
        {/* Image Section */}
        <div className="flex flex-col items-center">
          <img
            src={product.images[0]}
            alt={product.name}
            className="rounded-xl object-cover w-full max-w-md"
          />
        </div>
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2 text-primary">{product.name}</h1>
          <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 text-xl mr-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>{i < Math.round(product.rating) ? "★" : "☆"}</span>
                ))}
              </div>
              <span className="text-sm text-gray-600">{product.rating.toFixed(1)} / 5</span>
              <span className="text-sm text-gray-500 ml-2">({product.reviews.length} reviews)</span>
            </div>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <div className="mb-4">
            <span className="text-xl font-bold text-accent">${product.price}</span>
            {product.discount > 0 && (
              <span className="ml-2 text-sm text-green-600">
                ({product.discount}% OFF)
              </span>
            )}
          </div>
          <p className="mb-2 text-sm text-gray-600">
            Brand: <strong>{product.brand}</strong>
          </p>
          <p className="mb-4 text-sm text-gray-600">
            Category: <strong>{product.category}</strong>
          </p>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Specifications:</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              {Object.entries(product.specifications).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        <div className='flex flex-col justify-between mt-2 gap-2'>
          <AddToCart product={product} />
          <AddToComparison product={product} />
        </div>
        </div>
      </div>
      {/* Reviews */}
        <div className="max-w-6xl mx-auto mt-10">
          <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
          <div className="space-y-4">
            {product.reviews.map((review, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow border">
                <p className="font-medium">{review.user}</p>
                <p className="text-sm text-gray-600 my-2">Rating: {review.rating}⭐</p>
                <p className="text-sm mt-1 text-gray-700 font-semibold">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mt-16">
        <h2 className="text-3xl font-semibold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {product.relatedProductIds
            .map((id) => products.find((p) => p.id === id))
            .filter(Boolean)
            .map((related) => (
              <div
              key={related.id}
                className="bg-white rounded-2xl shadow p-4 hover:shadow-lg border border-borderColor"
              >
                <img
                  src={related.images[0]}
                  alt={related.name}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
                <p className="font-semibold text-textPrimary">{related.name}</p>
                <p className="text-accent font-bold mt-2 mb-3">${related.price}</p>
                <Link to={`/products/${related.id}`} onClick={() => setProduct(products.find((p) => p.id === parseInt(related.id)))} className="bg-primary text-sm text-white px-4 py-1 rounded-full hover:bg-white hover:text-primary border-2 border-primary transition">
                  View Product
                </Link>
              </div>
            ))}
        </div>
      </div>
      <ShowComparison /> 
      <footer className="bg-gray-900 text-white py-10 mt-10">
        <Footer />
      </footer>
    </div>
  );
}