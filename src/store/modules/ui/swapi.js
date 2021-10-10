import { reactive, readonly } from '@vue/reactivity';

const state = reactive({
  people: [],
});
const fetchPeople = async (index) => {
  console.log('fetching');
  const result = await fetch('https://swapi.dev/api/people/' + index + '/?format=json', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await result.json();
  console.log(data);
  return data;
};

const swapi = {
  state: readonly(state),
  fetchPeople,
};

export default swapi;
