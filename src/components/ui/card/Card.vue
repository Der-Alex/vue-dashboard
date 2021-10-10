<template>
  <section class="card shadow-md" :class="props.fullColored ? typeClass : 'bg-primary-dark'">
    <div class="header p-4 border-b border-gray-900 font-bold" :class="typeClass">
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
