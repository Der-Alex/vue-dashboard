<template>
  <div class="overlay md:hidden" :class="sidebar.state.isVisible ? 'bg-black opacity-50 fixed w-screen h-screen z-10' : 'hidden'" @click="closeSidebar"></div>
  <aside
    class="sidebar fixed z-20 h-screen w-64 top-0 bg-primary-dark transform transition-transform shadow-lg md:translate-x-0"
    :class="sidebar.state.isVisible ? 'translate-x-0' : '-translate-x-full'"
  >
    <div class="sidebar-header h-14 border-b border-gray-900 w-full flex items-center justify-center">
      <h2>Dashboard</h2>
    </div>
    <nav class="sidebar-nav h-full overflow-y-auto">
      <ul class="pt-2 pb-20">
        <sidebar-group
          v-for="navigationGroup in navigation.state.navigation"
          :key="navigationGroup.groupName"
          :title="navigationGroup.groupName"
          :navigationItems="navigationGroup.links"
        />
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { inject } from '@vue/runtime-core';
import SidebarGroup from './SidebarGroup.vue';
const sidebar = inject('sidebar');
const navigation = inject('navigation');

console.log('sidebar', sidebar);

const closeSidebar = () => {
  if (sidebar.state.isVisible) {
    sidebar.setVisibility(false);
  }
};
</script>
