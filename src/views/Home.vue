<script setup>
import Card from '../components/ui/card/Card.vue';
</script>

<template>
  <card type="success" :fullColored="false">
    <template v-slot:card-header>
      <h1>This is the Home View</h1>
    </template>
    <template v-slot:card-content>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga tenetur hic expedita et doloribus unde magnam soluta molestias similique aperiam eos
        laudantium pariatur, ratione, quae voluptas vero rem. Molestiae, corrupti?
      </p>
    </template>
    <template v-slot:card-footer>
      <p>Footer</p>
    </template>
  </card>
</template>
