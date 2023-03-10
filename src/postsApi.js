import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export const getPosts = () => api.get("/posts").then((res) => res.data.posts);
export const getPost = (id) => api.get(`/posts/${id}`).then((res) => res.data);
export const updatePost = ({ id, ...updatedPost }) => api.put(`/posts/${id}`, updatedPost).then((res) => res.data);
export const deletePost = (id) => api.delete(`/posts/${id}`).then((res) => res.data);


export default api;
