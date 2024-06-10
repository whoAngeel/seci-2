<template>
  <div class="container  w-40  h-40  bg-slate-200  rounded-lg p-3">
    <Pie :data="dataC" :options="chartOptions" class="opacity-100"/>
    
  </div>
</template>

<script setup>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)

const {genderDistribution, isLoading}= useDashboardStore()
// console.log(props.datachart);
const dataC = {
  labels: ['Hombres', 'Mujeres'],
  datasets: [
    {
      backgroundColor: ['#82d1f1', '#e08fb6'],
      data: [genderDistribution.totalHombres,genderDistribution.totalMujeres]
    }
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: true
}



</script>

<style>

</style>