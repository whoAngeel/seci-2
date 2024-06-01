<template>
  <div class="stats stats-vertical shadow ">

    <div class="stat">
      <div class="text-3xl font-bold text-center">Total</div>

      <div class="stat-value text-6xl text-center font-bold mt-2">{{ store.totalDia }}</div>
    </div>



  </div>
  
</template>

<script setup>
const store = useMyRecordStore()


</script>
