import React from 'react'
import { useComparison } from './CompareContext.jsx';
import NavBar from '../../components/NavBar.jsx';
import Footer from '../../components/Footer.jsx';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

export default function Compare() {
  const { products , dispatch } = useComparison();
  return (
    <>
      <NavBar />
    <div className="container py-10 min-h-[561px]">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Compare Products</h1>
      {products.length > 2 ? (
        <>
          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full text-left border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 border-b border-gray-200"></th>
                  {products.map((product) => (
                    <th key={product.id} className="p-4 border-b border-gray-200 text-center">
                      <div className="flex flex-col items-center">
                        <img 
                          src={product.images[0]} 
                          alt={product.name} 
                          className="w-20 h-20 object-contain mb-2"
                        />
                        <span className="font-semibold text-gray-700">{product.name}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 border-b border-gray-200 font-medium text-gray-700">Price</td>
                  {products.map((p) => (
                    <td key={p.id} className="p-4 border-b border-gray-200 text-center">
                      <span className="font-semibold">${p.price}</span>
                      {p.originalPrice && (
                        <span className="ml-2 text-sm text-gray-500 line-through">${p.originalPrice}</span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 border-b border-gray-200 font-medium text-gray-700">Brand</td>
                  {products.map((p) => (
                    <td key={p.id} className="p-4 border-b border-gray-200 text-center">{p.brand}</td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 border-b border-gray-200 font-medium text-gray-700">Rating</td>
                  {products.map((p) => (
                    <td key={p.id} className="p-4 border-b border-gray-200 text-center">
                      <div className="flex items-center justify-center">
                        <span className="text-yellow-500 mr-1">{p.rating}</span>
                        <span>⭐</span>
                        <span className="text-gray-500 text-sm ml-1">({p.reviewCount ?? Math.floor((Math.random()*20)) })</span>
                      </div>
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 border-b border-gray-200 font-medium text-gray-700">Availability</td>
                  {products.map((p) => (
                    <td key={p.id} className="p-4 border-b border-gray-200 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        p.inStock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {p.inStock > 0 ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </td>
                  ))}
                </tr>
                {/* Add more specifications as needed */}
              </tbody>
            </table>
          </div>

          <button
            onClick={()=> dispatch({ type: "items/clear" })}
            className="mt-6 bg-primary text-white py-1 px-5 rounded-lg hover:text-primary hover:bg-transparent border-2 border-primary transition-colors duration-200"
          >
            Clear Comparison
          </button>
        </>
      ) : (
        <div className="text-center py-8 text-gray-900">
          <p>No products selected for comparison <FontAwesomeIcon className='ms-2' icon={faBasketShopping} /></p>
          <Link
            to={"/products"}
            className="mt-6 inline-block bg-primary text-white py-1 px-5 rounded-lg hover:text-primary hover:bg-transparent border-2 border-primary transition-colors duration-200"
          >
            Shop Now
          </Link>
        </div>
      )}
    </div>
    <footer className="bg-gray-900 text-white py-10">
      <Footer />
    </footer>
    </>
  );
}
