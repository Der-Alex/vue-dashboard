<script setup></script>

<template>
  <header class="shadow-md">
    <p>this will be the header</p>
  </header>
  <aside>this will be the sidebar</aside>
  <main>
    <router-view />
  </main>
  <footer>maybe some footer</footer>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
