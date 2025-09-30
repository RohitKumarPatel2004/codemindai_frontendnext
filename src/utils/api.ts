import axios from "axios";

// Base URL for your backend API
const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://codemindai-backend.onrender.com/api";

/**
 * Sign Up a new user
 * @param data { username, email, password }
 */
export const signupUser = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  const response = await axios.post(`${API_URL}/auth/signupAuthData`, data, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

/**
 * Sign In an existing user
 * @param data { email, password }
 */
export const signinUser = async (data: { email: string; password: string }) => {
  const response = await axios.post(`${API_URL}/auth/login`, data, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};
