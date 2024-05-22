import { defineStore } from "pinia";
import dayjs from "dayjs";

export const useMyRecordStore = defineStore("record", () => {
	const recordToday = ref(null);
	const isLoading = ref(false);
	const carreras = ref([]);
	const error = ref(null);
	const totalDia = ref(0)
	let now = dayjs().format("DD/MM/YYYY");

	
	const setCarreras = (carreras) => {
		console.log('setenado carreras');
		carreras.value = carreras

	};


	return {
		recordToday,
		isLoading,
		error,
		carreras,
		setCarreras,
		totalDia
	};
});
