import { reactive, readonly } from '@vue/reactivity';

const state = reactive({
  isVisible: false,
});
const setVisibility = (isVisible) => {
  state.isVisible = isVisible;
};

const sidebar = {
  state: readonly(state),
  setVisibility,
};

export default sidebar;
