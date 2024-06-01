<template>
  <div class="stats bg-secondary stats-vertical shadow">

    <div class="stat">
      <div class="text-3xl font-bold">Total Dia</div>
      <div class="stat-value">{{ store.totalDia }}</div>
      <div class="stat-desc">Jan 1st - Feb 1st</div>
    </div>




  </div>
</template>

<script setup>
const store = useMyRecordStore()


</script>
