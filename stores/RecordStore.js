import { defineStore } from "pinia";
import dayjs from "dayjs";
import axios from "axios";

export const useMyRecordStore = defineStore("record", () => {
	const recordToday = ref(null);
	const isLoading = ref(false);
	const carreras = ref([]);
	const error = ref(null);
	const totalDia = ref(0);
	let now = dayjs().format("DD/MM/YYYY");

	const setRecord = (record) => {
		recordToday.value = record;
		carreras.value = record.carreras || [];
		totalDia.value = record.totalDia || 0;
	};

	const fetchRecordToday = () => {
		isLoading.value = true;
		axios
			.get("/api/records/today")
			.then((res) => {
				setRecord(res.data);
			})
			.catch((err) => {
				error.value = err.message;
			})
			.finally(() => (isLoading.value = false));
		;
	};
	function updateCareer(name, gender, inc) {
		const career = carreras.value.find((counter) => counter.name === name);
		// console.log(career.name);
		if (career) {
			if (inc) {
				career[gender] += 1;
				career.total += 1;
				totalDia.value += 1;
			} else {
				career[gender] -= 1;
				career.total -= 1;
				totalDia.value -= 1;
			}
		}
	}

	function saveRecordToday() {
		axios({
			method: "PATCH",
			url: `/api/records/today/${recordToday.value?.id}`,
			data: {
				carreras: carreras.value,
				totalDia: totalDia.value,
			},
		})
			.then((res) => {
				console.log("");
			})
			.catch((err) => {
				console.log(err.message);
			});
	}
	return {
		saveRecordToday,
		recordToday,
		fetchRecordToday,
		isLoading,
		error,
		updateCareer,
		carreras,
		setRecord,
		totalDia,
		now,
	};
});
