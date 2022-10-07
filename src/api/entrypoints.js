import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://chocofood.kz/',
});

export default {
  instance,
};
