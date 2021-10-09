import { createStore } from 'vuex';
import sidebar from './modules/ui/sidebar';

const store = createStore({
  modules: {
    sidebar,
  },
});

export default store;
