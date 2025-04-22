import { products } from "../../data/prodcuts";

const prodcutData = products;
function useFilter(filter){
  if(filter.length == 0) return prodcutData;
  const filterdProducts = [];
  filter.map((f) => {
    filterdProducts.push(prodcutData.filter((product) => {
      return product.category === f || product.brand === f;
    }))
  })
  console.log(filterdProducts);
  return filterdProducts.flat();
}

export default useFilter;