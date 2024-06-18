<template>
  <div class="w-full h-full static">
    <p class="absolute top-5 text-2xl font-semibold  text-center">Generar reporte</p>

    <div class="flex justify-evenly">
      <div class="flex gap-2">
        <div class="flex gap-2 items-center justify-between">
          <div class="tooltip " data-tip="Limpiar">  
            <button @click="cleanDates" class="btn btn-square btn-sm" v-if="startDate || endDate">
              <Icon name="icon-park-solid:clear-format" />
            </button>
          </div>
          <span>Fecha inicial:</span>
          <select v-model="startDate" @change="updateEndDate" class="select select-accent select-sm "
            aria-placeholder="Tef">
            <option disabled selected>Fecha Inicial</option>
            <option v-for="date in store.dates" :key="date" :value="date">{{ date }}</option>
          </select>
        </div>

        <div class="flex gap-2 items-center justify-between" v-if="enableEndDate || endDate">
          <span>Fecha final:</span>
          <select v-model="endDate" class="select select-accent select-sm">
            <option disabled value="">Seleccionar fecha final</option>
            <option v-for="date in fechasDisponibles" :key="date" :value="date">{{ date }}</option>
          </select>
          <div class="tooltip " data-tip="Recargar">  
            <button class="btn btn-square btn-sm" v-if="endDate" @click="actualizarRegistros">
              <Icon name="material-symbols:directory-sync" />
            </button>
          </div>
        </div>
        

        <!-- <input type="date" placeholder="Type here" class="input input-bordered input-success input-sm " /> -->
      </div>
      <button class='btn btn-sm btn-primary disabled:btn-disabled' :disabled="!enableExportButton || !validButton">
        <Icon name="material-symbols:download-rounded"/>
        Exportar</button>
    </div>

    <!--  Registros -->
    <section class="">
      <table-records :records="store.records"></table-records>
    </section>
  </div>

</template>

<script setup>
import axios from 'axios';
import TableRecords from '../components/Reports/table.vue';
const store = useRecordsStore()

const startDate = ref(null)
const endDate = ref(null)
const validButton = ref(true)
const enableEndDate = ref(false)

const fechasDisponibles = computed(() => {
  if (startDate.value && store.dates.length > 0) {
    const fechaInicialIndex = store.dates.indexOf(startDate.value);
    if (fechaInicialIndex !== -1) {
      return store.dates.slice(0, fechaInicialIndex + 1)
    }
  }
  return [];
});

const cleanDates=()=>{
  startDate.value = null
  endDate.value = null
  validButton.value = false
}

const enableExportButton = computed(() => {
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
  // return enableEndDate.value || endDate.value!=null
};

const actualizarRegistros = ()=>{

  // axios.get('/')
}

onMounted(async () => {
  await store.fetchRecords();

});
</script>

<style></style>