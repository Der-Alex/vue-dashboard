<script setup>
import { inject } from '@vue/runtime-core';
import { reactive, ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import Card from '../components/ui/card/Card.vue';
const swapi = inject('swapi');
let state = reactive({
  person: {},
});
onMounted(async () => {
  //const person = await swapi.fetchPeople(1);
  state.person.name = 'Hans Peter';
});
</script>

<template>
  <suspense>
    <card>
      <template v-slot:card-header>
        <h1>This is the Home View</h1>
      </template>
      <template v-slot:card-content>
        <p v-if="state.person.name">
          {{ state.person.name }}
        </p>
        <p v-else>fetching</p>
      </template>
      <template v-slot:card-footer>
        <p>Footer</p>
      </template>
    </card>
  </suspense>
</template>
