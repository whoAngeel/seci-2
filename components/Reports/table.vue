<template>
  <div>
    <div class="overflow-x-auto mt-6">
      <table class="table table-xs">
        <thead>
          <tr>
            <th class="w-1/12 font-bold text-sm">Fecha</th>
            <template v-if="records.length">
              <template v-for="(carrera, index) in records[0].carreras" :key="index">
                <th class="w-2/12">
                  <div class="font-bold text-sm">{{ carrera.nombre }} </div>
                  <div class="flex flex-row justify-between items-center w-full">
                    <div class="text-xs opacity-85">H</div>
                    <div class="text-xs opacity-85">M</div>
                  </div>
                </th>
              </template>
            </template>
            <th class="w-1/12 text-sm font-bold">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="record in records" :key="record._id" class="hover:bg-slate-500 my-2 ">
            <td class="w-1/12">{{ record.date }}</td>
            <template v-for="(carrera, index) in record.carreras" :key="index">
              <td class="w-1/24 hover:bg-slate-300 hover:text-slate-800 p-2">
                <div class="flex flex-row justify-between items-center w-full ">
                  <div class="font-bold">{{ carrera.hombres }}</div>
                  <div class="font-bold">{{ carrera.mujeres }}</div>
                </div>
              </td>
            </template>
            <td class="w-1/12 p-2 stat-value text-xs">{{ record.totalDia }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  records: {
    type: Array, required: true
  }
})

</script>

<style></style>