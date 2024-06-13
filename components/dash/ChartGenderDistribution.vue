<template>
  <div
    class="container w-full h-48 bg-slate-200 rounded-lg p-5 flex flex-row items-center content-between justify-center">
    <h3 class="text-xs text-slate-950 font-bold">Distribución De Género (Hoy)</h3>
    <Pie :data="dataC" :options="chartOptions" class="" />
  </div>
</template>

<script setup>
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(ArcElement, Tooltip, Legend);

const { genderDistribution, fetchData } = useDashboardStore();

const dataC = {
  labels: ['Hombres', 'Mujeres'],
  datasets: [
    {
      backgroundColor: ['#82cdff', '#ffa0b4'],
      data: [genderDistribution.totalHombres, genderDistribution.totalMujeres],
    },
  ],
};

const chartOptions = reactive({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'top' },
    tooltip: {
      callbacks: {
        footer: () => `Total: ${genderDistribution.total}`,
      },
    },
    datalabels: {
      color: '#fff',
      formatter: (value, context) => {
        const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
        const percentage = ((value / total) * 100).toFixed(2) + '%';
        return percentage;
      },
    },
    title: {
      display: false,
      text: 'Chart Title',
    },
    subtitle: {
      display: false,
      text: 'Chart Subtitle',
      color: 'blue',
      font: {
        size: 12,
        family: 'tahoma',
        weight: 'normal',
        style: 'italic',
      },
      padding: {
        bottom: 10,
      },
    },
  },
  datalabels: {
    display: true,
    color: '#fff',
    formatter: (value, context) => {
      const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
      const percentage = ((value / total) * 100).toFixed(2) + '%';
      return percentage;
    },
  },
});

onBeforeMount(() => {
  fetchData();
});
</script>

<style></style>
