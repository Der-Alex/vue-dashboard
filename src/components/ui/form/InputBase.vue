<template>
  <div class="control flex flex-col justify-center py-2">
    <label class="text-blue-400 pb-1" :for="id">{{ label }}</label>
    <input :id="id" :type="type" class="p-1 bg-primary-darker border-0 focus:outline-none focus:ring-2 focus:ring-blue-600" :class="typeClass" />
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';

const props = defineProps({
  type: {
    type: String,
    required: true,
    default: 'text',
  },
  id: {
    type: String,
  },
  label: {
    type: String,
  },
});
const typeClass = computed(() => {
  console.log(props.type);
  switch (props.type) {
    case 'checkbox': {
      return 'form-checkbox h-4 w-4 text-primary-darker';
    }
  }
});
</script>
