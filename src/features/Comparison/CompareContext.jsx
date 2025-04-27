import { createContext, useContext, useReducer, useState } from "react";

const initialState= {products : []};

const CompareContext = createContext();
// action => add , delete , clear
function comparisonReducer(state, action){
  console.log("action", action);
  console.log("state", state);
  switch (action.type) {
    case "item/add":
      return {
        ...state,
        products: [...state.products, action.payload],
      }
    case "item/delete":
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload.id),
      }
    case "item/serach":
      var item = state.products.find((item) => item.id === action.payload.id);
      if(!item) return false;
      return true;
    case "items/clear":
      return {
        ...state,
        products: [],
      }
    default:
      break;
  }
}

function ComparisonProvider({children}) {
  const [{products}, dispatch] = useReducer(comparisonReducer, initialState);

  return (
    <CompareContext.Provider value={{products, dispatch}}>
      {children}
    </CompareContext.Provider>
  )
}


function useComparison(){
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error("useComparison must be used within a ComparisonProvider");
  }
  return context;
}

export { ComparisonProvider, useComparison };
