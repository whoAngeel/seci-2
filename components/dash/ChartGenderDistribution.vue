<template>
  <div
    class="container  w-full  h-48  bg-slate-200  rounded-lg p-5 flex flex-row items-center content-between justify-center">
    <h3 class="text-xs text-slate-950 font-bold  ">Distribución De Género</h3>
    <Pie :data="dataC" :options="chartOptions" class=" " />

  </div>
</template>

<script setup>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)

const { genderDistribution, isLoading } = useDashboardStore()
// console.log(props.datachart);
const dataC = {
  labels: ['Hombres', 'Mujeres'],
  datasets: [
    {
      backgroundColor: ['#82d1f1', '#e08fb6'],
      data: [genderDistribution.totalHombres, genderDistribution.totalMujeres]
    }
  ],

}

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
    
    legend: { position: 'right' },
    tooltip: {
      callbacks: {
        footer: () => { return `Total: ${genderDistribution.total}` }
      }
    },
    title: {
      display: true,
      text: 'Chart Title',
    },
    subtitle: {
      display: true,
      text: 'Chart Subtitle',
      color: 'blue',
      font: {
        size: 12,
        family: 'tahoma',
        weight: 'normal',
        style: 'italic'
      },
      padding: {
        bottom: 10
      }
    }
  }
})





</script>

<style></style>