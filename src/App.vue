<script setup></script>

<template>
  <div class="bg-gray-700 text-gray-200 h-screen w-screen">
    <header class="bg-gray-800">
      <p>this will be the header</p>
    </header>
    <aside class="h-full w-3/12 bg-gray-900">this will be the sidebar</aside>
    <main>
      <router-view />
    </main>
    <footer>maybe some footer</footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
