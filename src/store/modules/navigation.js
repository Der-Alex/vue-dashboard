import { reactive, readonly } from '@vue/reactivity';
import navigationMock from '@/mock/navigation.js';

const state = reactive({
  navigation: navigationMock,
});

const navigation = {
  state: readonly(state),
};

export default navigation;
