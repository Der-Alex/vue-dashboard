<template>
  <li class="pt-1">
    <router-link :to="props.url">{{ props.text }}</router-link>
  </li>
</template>

<script setup>
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>
