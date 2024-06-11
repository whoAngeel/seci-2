<template>
  <div>
    <Bar :data="data" :options="chartOptions" />
  </div>
</template>

<script lang="ts" setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)



const chartOptions = reactive({
  responsive: true,
  maintainAspectRatio: false,
  options: {
    interaction: {
      intersect: false,
      mode: 'index'
    },


  },
  plugins: {

    legend: { display: false, position: 'right' },
    
    title: {
      display: true,
      text: 'Ultimos Registros',
    },
    
  }
})

</script>

<style>

</style>