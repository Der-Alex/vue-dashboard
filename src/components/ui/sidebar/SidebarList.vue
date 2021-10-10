<template>
  <ul class="transition-all">
    <li class="cursor-pointer select-none px-4 py-2 text-blue-400 flex items-center justify-between flex-wrap">
      <span @click="toggleDropdown">Some Navigation</span
      ><chevron-right-icon class="h-4 w-4 transition-all transform" :class="dropdownActive ? 'rotate-90' : 'rotate-0'" />
      <ul class="w-full pl-2 overflow-hidden transition-all duration-300" ref="subnav" :class="dropdownActive ? 'max-h-screen' : 'max-h-0'">
        <li><span>Subnav 1</span></li>
        <li><span>Subnav 2</span></li>
        <li><span>Subnav 3</span></li>
      </ul>
    </li>
    <li class="px-4 py-2 text-blue-400 flex items-center justify-between"><span>Some Navigation</span><chevron-right-icon class="h-4 w-4" /></li>
    <li class="px-4 py-2 text-blue-400 flex items-center justify-between"><span>Some Navigation</span><chevron-right-icon class="h-4 w-4" /></li>
    <li class="px-4 py-2 text-blue-400 flex items-center justify-between"><span>Some Navigation</span><chevron-right-icon class="h-4 w-4" /></li>
  </ul>
</template>
<script setup>
import { ChevronRightIcon } from '@heroicons/vue/outline';
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
const dropdownActive = ref(false);
const dropdownHeight = ref(0);
const subnav = ref(null);
const toggleDropdown = () => {
  dropdownActive.value = !dropdownActive.value;
  dropdownHeight.value = subnav.value.clientHeight;
  console.log(subnav.value, subnav.value.clientHeight, dropdownHeight.value);
};
</script>
