import React from 'react'
import { useComparison } from './CompareContext';
import Button from '../../components/Button';

export default function AddToComparison({product}) {
  const { products, dispatch } = useComparison();
  const isInComparison = products.find(item => item.id == product.id) === undefined;
  function handleAddToComparison() {
    dispatch({ type: "item/add", payload: product });
  }
  function handleRemoveFromComparison() {
    dispatch({ type: "item/delete", payload: product });
  }

  return (isInComparison ?  <Button
      onClick={handleAddToComparison}
      variation="primary"
    >
      Compare
    </Button>: <Button
      onClick={handleRemoveFromComparison}
      variation="danger"    
      >
      Remove from Comparison
    </Button>
  )
}
