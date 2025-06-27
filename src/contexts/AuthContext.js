import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

const initialState = {
  token: null,
  user: null,
  isAuthenticated: false,
  email: null,
  loading: false,
  error: null,
};

function authReducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload, error: null };
    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };
    case "SET_CREDENTIALS":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "LOGOUT":
      return {
        ...initialState,
        token: null,
        user: null,
        isAuthenticated: false,
        email: null,
      };
    case "CLEAR_ERROR":
      return { ...state, error: null };
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load token from localStorage on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch({
        type: "SET_CREDENTIALS",
        payload: { token, user: null },
      });
    }
  }, []);

  // Save token to localStorage when it changes
  useEffect(() => {
    if (state.token) {
      localStorage.setItem("token", state.token);
    } else {
      localStorage.removeItem("token");
    }
  }, [state.token]);

  const value = {
    ...state,
    dispatch,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
