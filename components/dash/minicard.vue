<template>
  <div>
    {{ text }}
    <div>
      <slot/>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: {type: String, required: true}
})
</script>

<style>

</style>