import {products} from "../data/prodcuts.js";
import brands from "../data/brands.js";
import categories from "../data/categories.js";
function useSearch(search){
  if(search.length == 0) return{filteredProducts : [],filteredBrands : [], filteredCategories:[]};
  const term = search.toLowerCase();
  console.log(term);
  console.log(search);

  var filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(term) 
      || product.brand.toLowerCase().includes(term) 
      || product.category.toLowerCase().includes(term); 
  })
  var filteredBrands = brands.filter((brand) => {
    return brand.name.toLowerCase().includes(term);  
  })
  var filteredCategories = categories.filter((category) => {
    return category.name.toLowerCase().includes(term);  
  })
  return { filteredProducts, filteredBrands, filteredCategories };
}

export default useSearch;