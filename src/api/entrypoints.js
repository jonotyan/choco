import axios from 'axios';

class RequestInterceptors {
  constructor(instance = {}) {
    this.instance = instance;
  }

  requestInterceptor() {
    return this.instance.interceptors.request.use(
      (request) => request,
      (error) => Promise.reject(error),
    );
  }
}

export const instanceChocofood = axios.create({
  baseURL: 'https://chocofood.kz/',
});

export const instanceLocalhost = axios.create({
  baseURL: 'http://localhost:3002/',
});

const requestInterceptorChoco = new RequestInterceptors(instanceChocofood);
const requestInterceptorLocalHost = new RequestInterceptors(instanceLocalhost);
requestInterceptorChoco.requestInterceptor();
requestInterceptorLocalHost.requestInterceptor();

export default {
  instanceLocalhost,
};
