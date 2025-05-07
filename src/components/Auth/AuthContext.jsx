import { act, createContext, useContext, useEffect, useReducer } from 'react';
import { getUserAsync, loginAsync, registerAsync, updateUserAsync } from '../../Services/Auth.js'; // Adjust the import path as necessary
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
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error:"",
      };
    case "user/login":
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
        isLoading: false,
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
        isLoading : false,
        error: action.payload,
      };
    case "user/loadedfailed":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };
    case "user/loaded":
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        error:"",
        user: action.payload,
      };
    case "user/update":{
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      }
    }
      default:
        return state;
  }
}

function AuthProvider({ children }) {
  const [{user , isAuthenticated , isLoading , error} , dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchUser(){
      dispatch({ type: "waiting", payload: true });
      const storedUserId = localStorage.getItem("userId");
      if (storedUserId) {
        console.log("Stored User ID:", storedUserId);
        try{
          const fetchedUser = await getUserAsync(storedUserId);
          console.log("Stored User:", fetchedUser);
          dispatch({ type: "user/loaded", payload: fetchedUser });
        }
        catch(error){
          console.error("Error fetching user:", error);
          dispatch({ type: "user/loadedfailed", payload: { error: "Failed to load user" } });
        }
      }
      else {
        dispatch({ type: "user/loadedfailed", payload: null });
      }
    }

    fetchUser();
  }, []);

  async function login(email , password) {
    dispatch({ type: "waiting", payload: true });
    try{
      const user = await loginAsync(email, password);
      console.log("User:", user);
      dispatch({ type: "user/login", payload:  user });
    }
    catch(error){
      console.error("Login Failed:", error);
      dispatch({ type: "error", payload: error.message });
    }
  }

  async function register(user) {
    try{
      dispatch({ type: "waiting", payload: true });
      const createdUser = await registerAsync(user);
      dispatch({ type: "user/register", payload: createdUser });
    }
    catch(error){
      console.error("Registration Failed:", error);
      dispatch({ type: "error", payload: error.message });
    }
  }

  async function updateUser(id, user) {
    dispatch({ type: "waiting", payload: true });
    try{
      const updatedUser = await updateUserAsync(id, user);
      console.log("Updated User:", updatedUser);
      dispatch({ type: "user/update", payload: updatedUser });
    }
    catch(error){
      console.error("Update Failed:", error);
      dispatch({ type: "error", payload: error.message });
    }
  }

  function logout() {
    localStorage.removeItem("userId");
    dispatch({ type: "user/logout" });
  }

  return (
    <AuthContext.Provider 
      value={{
        login,
        register,
        updateUser,
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