<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
</template>

<script setup>

const recordStore = useMyRecordStore()

const toast = useToast()
onBeforeMount(() => {
  recordStore.fetchRecordToday()
  if (recordStore.error) {
    toast.add({ title: "Error al cargar los datos de hoy" })
  }
})
</script>