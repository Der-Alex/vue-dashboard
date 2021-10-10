<template>
  <header class="header bg-primary-dark h-14 border-gray-900 border-b">
    <button class="p-4 md:hidden" @click="toggleSidebar"><menu-icon class="h-6 w-6" /></button>
  </header>
</template>

<script setup>
import { MenuIcon } from '@heroicons/vue/outline';
import { inject } from '@vue/runtime-core';

const sidebar = inject('sidebar');
const toggleSidebar = () => {
  sidebar.setVisibility(!sidebar.state.isVisible);
};
</script>
