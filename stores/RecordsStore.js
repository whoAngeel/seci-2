import axios from "axios"

import { defineStore } from 'pinia';

export const useRecordsStore = defineStore('records', () => {
  const records = ref([])
  const dates = ref([])
  const isLoading = ref(false)
  
  const fetchRecords = async ()=>{
    try {
      isLoading.value = true
      const response = await axios.get('/api/records');
      // const fetchedRecords = response.data.ordered || []; // Obtener los registros o un array vacío si no hay datos
      
      records.value = response.data.ordered; // Asignar los registros obtenidos
      dates.value = response.data.ordered.map(r => r.date); 
      
    } catch (error) {
      console.log(error.message);
    } finally{
      isLoading.value = false
    }
  }

  return {
    records, dates, fetchRecords, isLoading
  }
});


