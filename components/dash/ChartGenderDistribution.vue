<template>
  <div class="container  w-44  h-48  bg-slate-200  rounded-lg p-3 ">
    <h3 class="text-xs text-slate-900 text-center" >Distribucion De Genero</h3>
    <Pie :data="dataC" :options="chartOptions" class="opacity-100" />

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
  maintainAspectRatio: true,
  options: {
    interaction: {
      intersect: false,
      mode: 'index'
    }
  },
  plugins: {
      title: {
        display: true,
        text: 'Chart Title',
      },
      tooltip:{
        callbacks:{
          footer: ()=>{return `Total: ${genderDistribution.total}`}
        }
      }
    }
})

const plugins = [
  { title: { display: true, text: "Text" } }
]



</script>

<style></style>