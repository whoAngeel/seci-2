<template>
  <main class="w-full h-full flex flex-col items-stretch parent">
      <div class="div1 flex-col m-1 p-2 rounded-lg">
        <ChartGenderDistribution />
      </div>
      <div class="div2  p-2 rounded-lg flex  content-between justify-center">
        <AlumnosTotales :alumnosTotales="store.alumnosTotales" class="basis-1/4"/>
        <div class="">
          <h3 class="text-base font-semibold text-center mb-2">Top 3 carreras (Todos los registros)</h3>
          <top-3-all/>
        </div>
        <div class=" ">
          <top-3-all/>
        </div>
      </div>
      <div class="div3  p-2 rounded-lg">
        <BarsRecords />
      </div>
      <div class="div4  p-2 rounded-lg">
        <BarsCareersToday />
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
import Top3All from '~/components/dash/Top3All.vue';


const store = useDashboardStore();

onBeforeMount(() => {
   store.fetchData();
});
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