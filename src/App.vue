<script setup>
import { ref } from '@vue/reactivity';

const sidebarVisible = ref(false);
const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value;
};
const closeSidebar = () => {
  sidebarVisible.value = false;
};
</script>

<template>
  <div class="bg-gray-700 text-gray-200 dashboard w-screen h-screen">
    <header class="header bg-gray-800">
      <button class="p-4" @click="toggleSidebar">click</button>
    </header>
    <aside class="sidebar fixed h-screen w-9/12 top-0 bg-gray-900 md:flex transform" :class="sidebarVisible ? 'translate-x-0' : '-translate-x-full'">
      this will be the sidebar
    </aside>
    <main @click="closeSidebar">
      <router-view />
    </main>
    <footer class="footer sticky bottom-0">maybe some footer</footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.dashboard {
  display: grid;
  grid-template-rows: max-content auto max-content;
  grid-template-columns: 1fr;
}

.header {
  grid-row: 1;
}

.sidebar {
  transition: transform 0.2s ease;
}

.left-neg-100 {
  transform: translateX(-100%);
}

.footer {
  grid-row: 3;
}
</style>
