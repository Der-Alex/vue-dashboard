<script setup>
import { inject } from '@vue/runtime-core';
import { reactive, ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import Card from '../components/ui/card/Card.vue';
import ButtonBase from '../components/ui/button/ButtonBase.vue';
import { CloudDownloadIcon } from '@heroicons/vue/outline';
import InputBase from '../components/ui/form/InputBase.vue';
const swapi = inject('swapi');
let state = reactive({
  person: {},
});
const blub = () => {
  console.log('hallo');
};
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
        <div v-if="state.person.name">
          <p>
            {{ state.person.name }}
          </p>
          <p>
            <button-base @click="blub">
              <template v-slot:buttonText>Hallo</template>
              <template v-slot:icon><cloud-download-icon class="h-5 w-5" /></template>
            </button-base>
          </p>
          <p>
            <input-base type="text" label="First Name" id="first-name" />
            <input-base type="email" label="E-Mail" id="email" />
            <input-base type="checkbox" />
            <input-base type="radio" />
            <input-base type="password" />
            <input-base type="number" />
            <input-base type="date" />
          </p>
        </div>
        <p v-else>fetching</p>
      </template>
      <template v-slot:card-footer>
        <p>Footer</p>
      </template>
    </card>
  </suspense>
</template>
