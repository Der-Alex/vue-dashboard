<template>
  <section class="card shadow border border-gray-800" :class="props.fullColored ? typeClass : 'bg-special-gray'">
    <div class="header p-4 border border-t-0 border-l-0 border-r-0 border-gray-800 font-bold" :class="typeClass">
      <slot name="card-header" />
    </div>
    <div class="content p-4">
      <slot name="card-content" />
    </div>
    <div class="footer p-4 font-bold">
      <slot name="card-footer" />
    </div>
  </section>
</template>
<script setup>
import { computed } from '@vue/reactivity';

const props = defineProps({
  type: {
    type: String,
    default: '',
  },
  fullColored: {
    type: Boolean,
    default: '',
  },
});

const typeClass = computed(() => {
  switch (props.type) {
    case 'success':
      return 'bg-green-800';
    default:
      return '';
  }
});
console.log('TypeClass', typeClass.value);
</script>
