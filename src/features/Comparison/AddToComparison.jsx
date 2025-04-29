import React from 'react'
import { useComparison } from './CompareContext';

export default function AddToComparison({product}) {
  const { products, dispatch } = useComparison();
  const isInComparison = products.find(item => item.id == product.id) === undefined;
  function handleAddToComparison() {
    dispatch({ type: "item/add", payload: product });
  }
  function handleRemoveFromComparison() {
    dispatch({ type: "item/delete", payload: product });
  }

  return (isInComparison ?  <button
      onClick={handleAddToComparison}
      className="text-sm bg-primary hover:bg-transparent hover:text-primary border-2 border-primary  text-white px-3 py-1 rounded-xl hover:bg-accent mt-2 duration-200"
    >
      Compare
    </button>: <button
      onClick={handleRemoveFromComparison}
      className="text-sm bg-danger border-2 border-danger mt-2 text-white px-3 py-1 rounded-xl hover:bg-transparent hover:text-danger duration-200"
    >
      Remove from Comparison
    </button>
  )
}
