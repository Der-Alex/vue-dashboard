<template>
  <button class="flex items-center justify-between pl-4 pr-2 py-2" :class="typeClass">
    <span>
      <slot name="buttonText" />
    </span>
    <span class="pl-4" v-if="hasIconSlot">
      <slot name="icon" />
    </span>
  </button>
</template>
<script setup>
import { useSlots, computed } from '@vue/runtime-core';
const props = defineProps({
  type: {
    type: String,
    default: 'default',
  },
});

const typeClass = computed(() => {
  switch (props.type) {
    case 'default':
      return 'bg-blue-500 hover:bg-blue-600 focus:outline-none active:bg-blue-900 active:outline-none active:ring-1 active:ring-blue-600 active:ring-opacity-50';
  }
});

const slots = useSlots();
const hasIconSlot = computed(() => !!slots.icon);
</script>
