<template>
  <div class="bg-primary">
    <title class="text-sm font-bold">{{ career.nombre }}</title>
  </div>
</template>

<script  setup>
import Career from '../server/types/Career';
const props = defineProps(['career'])
</script>

<style>

</style>