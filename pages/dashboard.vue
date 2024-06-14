<template>
  <main class="w-full h-full flex flex-col items-stretch">
    <div v-if="store.isLoading" class="parent">
      <div class="div1 flex-col m-1 p-2 rounded-lg">
        <ChartGenderDistribution />
      </div>
      <div class="div2 m-1 p-2 rounded-lg flex gap">
        <AlumnosTotales :alumnosTotales="store.alumnosTotales" />
        <AlumnosTotales :alumnosTotales="store.alumnosTotales" />
      </div>
      <div class="div3 m-1 p-2 rounded-lg">
        <BarsRecords />
      </div>
      <div class="div4 m-1 p-2 rounded-lg">
        <BarsCareersToday />
      </div>
    </div>
    <div v-else>
      cargando...
    </div>
  </main>
</template>

<script setup>
import ChartGenderDistribution from '../components/dash/ChartGenderDistribution.vue';
import BarsRecords from '~/components/dash/BarsRecords.vue';
import BarsCareersToday from '~/components/dash/BarsCareersToday.vue';
import NoVueChart from '~/components/dash/noVueChart.vue';
import AlumnosTotales from '~/components/dash/AlumnosTotales.vue';
import loader from '~/components/ui/loader.vue';

const store = useDashboardStore()
// const { isLoading } = storeToRefs(store)


onMounted(async () => {
  await store.fetchData()
})


</script>


<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.div1 {
  grid-area: 1 / 1 / 7 / 2;
}

.div2 {
  grid-area: 1 / 2 / 7 / 3;
}

.div3 {
  grid-area: 1 / 3 / 4 / 6;
}

.div4 {
  grid-area: 4 / 3 / 7 / 6;
}
</style>