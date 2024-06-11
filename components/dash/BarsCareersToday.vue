<template>
  <div class="w-full h-full bg-slate-200 rounded-lg p-3">
    <Bar :data="datac" :options="chartOptions" />
  </div>
</template>

<script setup>
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
const { carreras } = useMyRecordStore()
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)



const datac = {
  labels: carreras.map(item => { return item.nombre }),
  datasets: [
    {
      label: "Hombres",
      backgroundColor: '#82cdff',
      data: carreras.map(item => { return item.hombres })
    },
    {
      label: "Mujeres",
      backgroundColor: "#ffa0b4",
      data: carreras.map(item => { return item.mujeres })
    }
  ]
}
const chartOptions = reactive({
  responsive: true,
  maintainAspectRatio: false,
  options: {
    interaction: {
      intersect: false,
      mode: 'index'
    },


  }, scales: {
    x: { stacked: true },
    y: { stacked: true }
  },

  plugins: {

    legend: { display: false, position: 'right' },

    title: {
      display: true,
      text: 'Carreras (Hoy)',
    },

  }
})

</script>

<style></style>