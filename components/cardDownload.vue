<template>
  <UCard class="bg-base-100">
    <template #header >
      <h3 class="text-xl font-bold text-center">Formatos para descargar</h3>
    </template>

    <div class="flex justify-evenly">
      <button class="btn btn-primary">
        <Icon name="vscode-icons:file-type-pdf2" class="text-2xl"/>
        PDF</button>
      <button class="btn btn-primary">
        <Icon name="vscode-icons:file-type-excel" class="text-2xl"/>
        Excel</button>

    </div>
      
  </UCard>
</template>

<script lang="ts" setup>

</script>

<style>

</style>