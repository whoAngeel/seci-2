<template>
  <div class="w-full  h-full flex flex-col items-stretch parent ">
    <div class="div1 flex-col m-1 p-2 bg-slate-500  border-[1px] rounded-lg">
      <h3 class="text-lg font-extrabold text-center my-2">Titulo</h3>
      <ChartGenderDistribution />
    </div>
    <div class="div2 m-1 p-2 bg-slate-500 border-[1px] rounded-lg"></div>
    <div class="div3 m-1 p-2 bg-slate-500 border-[1px] rounded-lg">
      <bars-records />
    </div>
    <div class="div4 m-1 p-2 bg-slate-500 border-[1px] rounded-lg">
      <bars-careers-today/>
    </div>

  </div>
</template>

<script setup>
import ChartGenderDistribution from '../components/dash/ChartGenderDistribution.vue';
import BarsRecords from '~/components/dash/BarsRecords.vue';
import BarsCareersToday from '~/components/dash/BarsCareersToday.vue';
const store = useDashboardStore()

onBeforeMount(() => {
  store.fetchData()
})

onBeforeUnmount(() => {
  store.fetchData()
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

.div1 { grid-area: 1 / 1 / 7 / 2; }
.div2 { grid-area: 1 / 2 / 7 / 3; }
.div3 { grid-area: 1 / 3 / 4 / 6; }
.div4 { grid-area: 4 / 3 / 7 / 6; }
</style>