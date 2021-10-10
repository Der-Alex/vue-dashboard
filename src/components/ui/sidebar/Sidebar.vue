<template>
  <div class="overlay md:hidden" :class="sidebar.state.isVisible ? 'bg-black opacity-50 fixed w-screen h-screen z-10' : 'hidden'" @click="closeSidebar"></div>
  <aside
    class="sidebar fixed z-20 h-screen w-64 top-0 bg-primary-dark transform transition-transform shadow-lg md:translate-x-0"
    :class="sidebar.state.isVisible ? 'translate-x-0' : '-translate-x-full'"
  >
    <div class="sidebar-header h-14 border-b border-gray-900 w-full flex items-center justify-center">
      <h2>Dashboard</h2>
    </div>
    <nav class="sidebar-nav pt-8">
      <sidebar-list />
    </nav>
  </aside>
</template>

<script setup>
import { inject } from '@vue/runtime-core';
import SidebarList from './SidebarList.vue';
const sidebar = inject('sidebar');

console.log('sidebar', sidebar);

const closeSidebar = () => {
  if (sidebar.state.isVisible) {
    sidebar.setVisibility(false);
  }
};
</script>
