<template>
  <table class="table table-xs w-1/3 ">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Hombres</th>
          <th>Mujeres</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="carrera in recordToday.carreras" :key="carrera.id" class="hover">
          <td class="uppercase ">{{ carrera.nombre }}</td>
          <td class="slashed-zero tabular-nums">
              {{ carrera.hombres }}
          </td>
          <td class="slashed-zero tabular-nums  font-medium">
            {{ carrera.mujeres }}
          </td>
          <td class="slashed-zero tabular-nums">
            <span class=" font-bold text-sm">
              {{ carrera.total }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script setup>
const props = defineProps(['recordToday'])
</script>

<style>

</style>