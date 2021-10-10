<template>
  <div class="overlay md:hidden" :class="sidebar.state.isVisible ? 'bg-black opacity-50 fixed w-screen h-screen z-10' : 'hidden'" @click="closeSidebar"></div>
  <aside
    class="
      sidebar
      fixed
      z-20
      h-screen
      w-64
      top-0
      bg-special-gray
      border border-l-0 border-t-0 border-b-0 border-gray-800
      transform
      transition-transform
      shadow-lg
      md:translate-x-0 md:shadow-none
    "
    :class="sidebar.state.isVisible ? 'translate-x-0' : '-translate-x-full'"
  >
    <div class="sidebar-header h-14 border border-l-0 border-r-0 border-t-0 border-gray-800 w-full flex items-center justify-center">
      <h2>Dashboard</h2>
    </div>
    <nav class="sidebar-nav pt-8">
      <ul>
        <li class="p-4 bg-blue-900 bg-opacity-40 font-bold">Test</li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { inject } from '@vue/runtime-core';
const sidebar = inject('sidebar');

console.log('sidebar', sidebar);

const closeSidebar = () => {
  if (sidebar.state.isVisible) {
    sidebar.setVisibility(false);
  }
};
</script>
