import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const login = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

export const register = async (email: string, password: string) => {
  const response = await api.post('/auth/register', { email, password });
  return response.data;
};

export const getProfile = async (token: string) => {
  const response = await api.get('/api/profile', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getPosts = async () => {
  const response = await api.get('/api/posts');
  return response.data;
};

export const getCategories = async () => {
  const response = await api.get('/api/categories');
  return response.data;
};