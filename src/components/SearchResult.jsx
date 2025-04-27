import React, { useEffect, useState } from 'react'
import useSearch from '../hooks/useSearch';
import { Link } from 'react-router-dom';

export default function SearchResult({search}) {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const { filteredProducts, filteredBrands, filteredCategories } = useSearch(search);
    setProducts(filteredProducts);
    setBrands(filteredBrands);
    setCategories(filteredCategories);
  }, [search])
  console.log(products, brands, categories);
  if(products.length === 0 && brands.length === 0 && categories.length === 0) 
    return <div className='py-2 absolute top-full left-0 translate-y-4 w-full bg-white z-10 rounded-lg rounded-t-none flex items-center justify-center'>
      <p className='text-gray-600 font-medium'>NO RESULT</p>
    </div>
  return (
    <div className='py-2 absolute top-full left-0 translate-y-4 w-full max-h-80 overflow-y-scroll overflow-x-hidden bg-white z-10 rounded-lg rounded-t-none'>
      {/* Products */}
      {products.length > 0 && 
        <>
          <p className='px-2 font-semibold text-gray-600'>Products</p>
          <ul>
            {products.map((product)=>{
              return (<Link to={`/products/${product.id}`} key={product.id}
                className='text-gray-950 cursor-pointer block hover:text-gray-700 hover:bg-[#f42c3733]  dark:hover:text-white duration-200'
              >
                <li 
                  className='hover:translate-x-1  bg-transparent px-2 py-2 my-1 duration-200'
                  >
                    {product.name}
                </li>
              </Link> 
              )
            })}
          </ul>
        </>
      }

      {/* Category */}
      {categories.length>0 &&
        <>
          <p className='px-2 font-semibold text-gray-600'>Categories</p>
          <ul>
            {categories.map((category)=>{
              return (<Link to={`/categories/${category.id}`} key={category.id}
                className='text-gray-950 cursor-pointer block hover:text-gray-700 hover:bg-[#f42c3733]  dark:hover:text-white duration-200'
              >
                <li 
                  className='hover:translate-x-1  bg-transparent px-2 py-2 my-1 duration-200'
                  >
                    {category.name}
                </li>
              </Link> 
              )
            })}
          </ul>
        </>
      }

      {/* Brands */}
      {brands.length > 0 &&
        <>
          <p className='px-2 font-semibold text-gray-600'>Brands</p>
          <ul>
            {brands.map((brand)=>{
              return (<Link to={`/brands/${brand.id}`} key={brand.id}
                className='text-gray-950 cursor-pointer block hover:text-gray-700 hover:bg-[#f42c3733]  dark:hover:text-white duration-200'
              >
                <li 
                  className='hover:translate-x-1  bg-transparent px-2 py-2 my-1 duration-200'
                  >
                    {brand.name}
                </li>
              </Link> 
              )
            })}
          </ul>
        </>
      }
    </div>
  )
}
