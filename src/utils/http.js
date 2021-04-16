import axios from 'axios';
import Vue from 'vue';
import http from 'http';
import https from 'https';

const instance = (config) => {
  const client = axios.create({
    ...config,
    httpAgent: new http.Agent({ keepAlive: true, maxSockets: 10 }),
    httpsAgent: new https.Agent({ keepAlive: true, maxSockets: 10 }),
  });

  client.interceptors.request.use((_config) => _config);
  client.interceptors.response.use((response) => response, (error) => {
    if (error.response.status === 500) {
      // Vue.router({ name: 'Page500' });
      return false;
    }

    if (error.response.status === 404) {
      // Vue.router({ name: 'Page404' });
      return false;
    }

    if (error.response.status === 401) {
      Vue.router({ path: '/login' });
      return false;
    }

    if (error.response) {
      if (error.response.data.message) {
        return error.response;
      }
    }

    return false;
  });

  return client;
};

const instanceMap = {};

export const loadInstance = (serviceName, config) => {
  let httpClient = instanceMap[serviceName];
  if (!httpClient) {
    httpClient = instance(config);
  }
  return httpClient;
};

export default instance;
