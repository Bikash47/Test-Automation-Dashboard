import axios from "axios";
import { APP_BASE_URL } from "./RestServicesURL";
// import Alert from "../module/LoginModule/Alert";

const getClientAxios = () => {
  debugger;
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const options = {
    baseURL: APP_BASE_URL,
    headers: {
      Accept: "application/json"
    }
  };

  if (currentUser) {
    options.headers.Authorization = "Bearer " + currentUser.token;
    // options.headers.role = '' + currentUser.role === '0' ? 'admin' : 'editor';
  }

  const clientAxios = axios.create(options);
  debugger;
  return clientAxios;
};

export default class ApiClient {
  constructor() {
    this.client = getClientAxios();
  }

  get(url, conf = {}) {
    return this.client
      .get(url, conf)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  }

  delete(url, conf = {}) {
    return this.client
      .delete(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  head(url, conf = {}) {
    return this.client
      .head(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  options(url, conf = {}) {
    return this.client
      .options(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  post(url, data = {}, conf = {}) {
    debugger;
    return this.client
      .post(url, data, conf)
      .then(response => {
        debugger;
        return Promise.resolve(response.data);
      })
      .catch(error => {
        alert(error);
        return Promise.reject(error);
      });
  }

  put(url, data = {}, conf = {}) {
    return this.client
      .put(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  patch(url, data = {}, conf = {}) {
    return this.client
      .patch(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }
}
