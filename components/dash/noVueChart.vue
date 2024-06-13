<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';

// Registrar todos los componentes de Chart.js
Chart.register(...registerables);

// Referencia al canvas del gráfico
const chartCanvas = ref<HTMLCanvasElement | null>(null);

// Datos para el gráfico (puedes pasarlos como props)
const chartData = {
  labels: ['Hombres', 'Mujeres'],
  datasets: [
    {
      label: 'Distribución de Género',
      backgroundColor: ['#36A2EB', '#FF6384'],
      data: [5, 14], // Puedes reemplazar estos datos con tus propios datos
    },
  ],
};

// Opciones del gráfico
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

onMounted(() => {
  if (chartCanvas.value) {
    new Chart(chartCanvas.value, {
      type: 'bar', // Tipo de gráfico
      data: chartData,
      options: chartOptions,
    });
  }
});
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 40vh;
  width: 80vw;
}
</style>