import axios from "axios"

import { defineStore } from 'pinia';

export const useRecordsStore = defineStore('records', () => {
  const records = ref([])
  const dates = ref([])
  const isLoading = ref(false)
  
  const fetchRecords = ()=>{
      isLoading.value = true
      const response =axios.get('/api/records').then(res=>{
        records.value = res.data.ordered
        dates.value = res.data.ordered.map(r=>r.date)
      }).catch(err=>console.log(err.message)).finally(()=>isLoading.value = false)
      // const fetchedRecords = response.data.ordered || []; // Obtener los registros o un array vacío si no hay datos
     
  }

  return {
    records, dates, fetchRecords, isLoading
  }
});


