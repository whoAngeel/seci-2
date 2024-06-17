<template>
  <div class="w-full h-full static">
    <p class="absolute top-5 text-2xl font-semibold  text-center">Descargar registros</p>

    <div class="flex justify-evenly">
      <div class="flex gap-2">
        <div class="flex gap-2 items-center justify-between">
          <span>Fecha inicial:</span>
          <select v-model="startDate" @change="updateEndDate" class="select select-accent select-sm "
            aria-placeholder="Tef">
            <option disabled selected>Fecha Inicial</option>
            <option v-for="date in store.dates" :key="date" :value="date">{{ date }}</option>
          </select>
        </div>

        <div class="flex gap-2 items-center justify-between" v-if="enableEndDate">
          <span>Fecha final:</span>
          <select v-model="endDate" class="select select-accent select-sm">
            <option disabled value="">Seleccionar fecha final</option>
            <option v-for="date in fechasDisponibles" :key="date" :value="date">{{ date }}</option>
          </select>
        </div>

        <!-- <input type="date" placeholder="Type here" class="input input-bordered input-success input-sm " /> -->
      </div>
      <button class='btn btn-sm btn-primary disabled:btn-disabled' :disabled="!enableExportButton">Exportar</button>
    </div>

    <!--  Registros -->
    <section class="">
      <table-records :records="store.records"></table-records>
    </section>
  </div>

</template>

<script setup>
import TableRecords from '../components/Reports/table.vue';
const store = useRecordsStore()

const startDate = ref(null)
const endDate = ref(null)
const validDate = ref(true)
const enableEndDate = ref(false)

const fechasDisponibles = computed(() => {
  if (startDate.value && store.dates.length > 0) {
    const fechaInicialIndex = store.dates.indexOf(startDate.value);
    if (fechaInicialIndex !== -1) {
      return store.dates.slice(0, fechaInicialIndex+1)
    }
  }
  return [];
});

const enableExportButton = computed(()=>{
  if (startDate.value && endDate.value) {
    return true; // Ambas fechas seleccionadas
  } else if (startDate.value && !endDate.value) {
    return false; // Solo fecha inicial seleccionada
  } else {
    return true; // Ninguna fecha seleccionada
  }
})

const updateEndDate = () => {
  enableEndDate.value = true;
};

onMounted(async () => {
  await store.fetchRecords();

});
</script>

<style></style>