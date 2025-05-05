import { createContext, useContext, useEffect, useReducer } from 'react';
import { getUserAsync, loginAsync, registerAsync } from '../../Services/Auth.js'; // Adjust the import path as necessary
const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: "",
  users:[],
};

const AuthContext = createContext();

function reducer(state , action){
  switch (action.type) { 
    case "user/register":
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        isLoading: false,
        error:"",
      };
    case "user/login":
      console.log("User logged in:", action.payload);
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error:"",
      };
    case "user/logout":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error:"",
      };
    case "waiting":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "error":
      return {
        ...state,
        error: action.payload,
      };
    case "failed":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: action.payload.error,
      };
    case "user/loaded":
      return {
        ...state,
        user: action.payload,
      };
      default:
      break;
  }
}

function AuthProvider({ children }) {
  const [{user , isAuthenticated , isLoading , error} , dispatch] = useReducer(reducer, initialState);

  useEffect(function(){
    async function fetchUser(){
      const storedUserId = localStorage.getItem("userId");
      if (storedUserId) {
        const user = await getUserAsync(storedUserId);
        console.log("Stored User:", user);
        dispatch({ type: "user/loaded", payload: user });
      }
    }
    fetchUser();
  } 
  , []);

  async function login(email , password) {
    dispatch({ type: "waiting", payload: true });
    const user = await loginAsync(email, password);
    console.log("User:", user);
    dispatch({ type: "user/login", payload:  user });
  }

  async function register(user) {
    
    dispatch({ type: "waiting", payload: true });
    const createdUser = await registerAsync(user);
    dispatch({ type: "user/register", payload: {createdUser} });
  }

  function logout() {
    dispatch({ type: "user/logout" });
  }

  return (
    <AuthContext.Provider 
      value={{
        login,
        register,
        logout,
        user,
        isAuthenticated,
        error,
        isLoading,
      }}
      >
      {children}
    </AuthContext.Provider>
  );
}


function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };