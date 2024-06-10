<template>
  <div class="w-full  h-full flex flex-col items-stretch">
    <ChartGenderDistribution />

  </div>
</template>

<script setup>
import ChartGenderDistribution from '../components/dash/ChartGenderDistribution.vue';

const store = useDashboardStore()

onBeforeMount(()=>{
  store.fetchData()
})

onBeforeUnmount(()=>{
  store.fetchData()
})

</script>
