import { loadInstance } from '@/utils/http';

const client = loadInstance('TestService', {
  baseURL: '/TestService',
});

export default {
  async get() {
    return await client.get('/include/themecast/targetAndPanels.json');
  },
};
