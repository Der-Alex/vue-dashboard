<template>
  <li class="cursor-pointer select-none px-4 py-2 text-blue-400 flex items-center justify-between flex-wrap">
    <span @click="toggleDropdown">{{ props.title }}</span
    ><chevron-right-icon class="h-4 w-4 transition-all transform" :class="dropdownActive ? 'rotate-90' : 'rotate-0'" />
    <ul class="w-full pl-1 pt-2 overflow-hidden transition-all duration-300" ref="subnav" :class="dropdownActive ? 'max-h-screen' : 'max-h-0'">
      <sidebar-item v-for="navigationItem in navigationItems" :key="navigationItem.text" :text="navigationItem.text" :url="navigationItem.url" />
    </ul>
  </li>
</template>
<script setup>
import { ChevronRightIcon } from '@heroicons/vue/outline';
import { ref } from '@vue/reactivity';
import SidebarItem from './SidebarItem.vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  navigationItems: {
    type: Array,
    required: true,
  },
});

const dropdownActive = ref(false);
const dropdownHeight = ref(0);
const subnav = ref(null);
const toggleDropdown = () => {
  dropdownActive.value = !dropdownActive.value;
  dropdownHeight.value = subnav.value.clientHeight;
  console.log(subnav.value, subnav.value.clientHeight, dropdownHeight.value);
};
</script>
