import { useContext , useReducer , createContext } from "react";


const initialState = {
  cart : [
    // { 
    //   id: 1, 
    //   name: "Sony Crime 10", 
    //   price: 1462, 
    //   images: "https://m.media-amazon.com/images/I/51kg8-8XG9L._AC_UF350,350_QL80_.jpg",
    //   quantity : 1,
    // }
  ],
  total : 0,
}
const CartContext = createContext(initialState);

function cartReducer(state, action) {
  switch (action.type) {
    case "item/delete":
      return{
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        total: state.total - action.payload.price,
      }
    case "item/add":
      var item = state.cart.find((item) => item.id === action.payload.id);
      return{
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + action.payload.price,
      }

    // productID , quantity => {1,-1}
    case "item/update":
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + action.payload.quantity,
          };
        }
        return item;
      });

      const itemToRemove = updatedCart.find((item) => item.id === action.payload.id);
      if (itemToRemove.quantity <= 0) {
        return {
          ...state,
          cart: updatedCart.filter((item) => item.id !== action.payload.id),
          total: state.total - (itemToRemove.price * itemToRemove.quantity),
        };
      }

      return {
        ...state,
        cart: updatedCart,
        total: updatedCart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      };
    
    case "cart/clear":
      return {
        ...state,
        cart: [],
        total: 0,
      }
    
    case "item/search":
      var item = state.cart.find((item) => item.id === action.payload.id);
      if(!item) return false;
      return true;
    default:
      break;
  }
}

function CartProvider ({ children }) {
  const [{cart , total }, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ cart, total , dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export { CartProvider, useCart };