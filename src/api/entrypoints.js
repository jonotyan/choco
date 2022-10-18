import axios from 'axios';
// http://127.0.0.1:5000/
export const instance = axios.create({
  baseURL: 'https://chocofood.kz/',
});

export const placeHolderInstance = axios.create({
  baseURL: 'http://localhost:3002/',
});

export default {
  instance,
  placeHolderInstance,
};
