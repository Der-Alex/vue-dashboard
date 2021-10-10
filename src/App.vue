<script setup>
import { provide } from '@vue/runtime-core';
import MainHeader from './components/ui/header/MainHeader.vue';
import Sidebar from './components/ui/sidebar/Sidebar.vue';
import sidebar from '@/store/modules/ui/sidebar';
import swapi from '@/store/modules/ui/swapi';

provide('sidebar', sidebar);
provide('swapi', swapi);
</script>

<template>
  <div class="dashboard bg-primary-darker text-gray-200 w-screen h-screen grid grid-cols-1">
    <main-header />
    <sidebar />
    <main class="p-8 md:pl-72 transition-all">
      <router-view />
    </main>
    <footer class="footer sticky bottom-0">maybe some footer</footer>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.dashboard {
  grid-template-rows: max-content auto max-content;
}
</style>
