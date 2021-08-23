import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
//ACCOUNT
export const login = (user) => axios.post(url + '/users/login', user);

//Buy
export const listBuy = () => axios.get(url + '/buy');
export const createBuy = (item) => axios.post(url + '/buy/create',item);
export const editBuy = (id,item) => axios.patch(url + '/buy/edit/'+ id,item);
export const deleteBuy = (id) => axios.delete(url + '/buy/delete/' + id);