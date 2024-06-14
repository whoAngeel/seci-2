<template>
  <!-- <div wfu></div> -->
  <div class="tooltip tooltip-success w-full" :data-tip="largeFormattedNumber">
    <div class="stats shadow ">

      <div class="stat bg-info text-info-content ">
        <div class="stat-title text-info-content">Total Alumnos Ingresados</div>
        <span class="stat-value ">{{ shorNumber }}</span>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import numeral from 'numeral';
const props = defineProps({
  alumnosTotales: { type: Number, required: true }
})

const shorNumber = computed(() => {
  return numeral(props.alumnosTotales).format('0.0 a')
})

const largeFormattedNumber = computed(() => {
  return `${numeral(props.alumnosTotales).format('0,0')} personas`
})
</script>

<style></style>