import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://chocofood.kz/',
});

export const placeHolderInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export default {
  instance,
  placeHolderInstance,
};
