<template>
  <div class="stats bg-secondary stats-vertical shadow">

    <div class="stat">
      <div class="text-3xl font-bold">Total Dia</div>
      <div class="stat-value">{{ totalDia }}</div>
      <div class="stat-desc">Jan 1st - Feb 1st</div>
    </div>




  </div>
</template>

<script setup>
const { data, error, pending, refresh } = await useAsyncData('record', () => $fetch('/api/records/today'))
const totalDia = ref(0)

const updateTotalDia = () => {
  if (data && data.value) {
    totalDia.value = data.value.totalDia
  }
}
watch(data, () => {
  updateTotalDia()
}, { immediate: true })

</script>
