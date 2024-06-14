<template>
  <div class="loading-container">
    <p>Loading...</p>
  </div>
</template>

<script setup>
definePagemeta({
  layout: false
})
</script>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
}
</style>
