import { useSearchParams } from "react-router-dom";

function useSort(products) {
  const [searchParams] = useSearchParams();

  const sortBy = searchParams.get('sort') || 'all';
  const sortedProducts = [...products];

  switch (sortBy) {
    case 'priceAsc':
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case 'priceDesc':
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      sortedProducts.sort((a, b) => b.rating - a.rating);
      break;
    case 'new':
      sortedProducts.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
      break;
    default:
      break;
  }
  return sortedProducts;
}

export default useSort;