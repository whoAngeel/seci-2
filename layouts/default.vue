<template>
  <div class="flex h-screen">
    <div class="w-16 h-screen">
      <sidebar/>
    </div>
    <div class="flex-1 w-10/12 flex h-screen items-center justify-center">
      <div class="h-5/6 w-11/12">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup> 
import sidebar from '../components/ui/sidebar.vue';
</script>

<style>

</style>