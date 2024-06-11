<template>
  <div class="w-full h-full bg-slate-200 rounded-lg p-3 ">
    <Line :data="datac" :options="chartOptions" />
  </div>
</template>

<script setup>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

const { recordTrends } = useDashboardStore()

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const datac = {
  labels: recordTrends.map(item => { return item.date }),
  datasets: [
    {
      label: "registros",
      backgroundColor: '#b387fa',
      data: recordTrends.map(item => { return item.totalDia })
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

<style></style>