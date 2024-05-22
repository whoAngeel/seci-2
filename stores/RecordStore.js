import { defineStore } from "pinia";
import dayjs from "dayjs";

export const useMyRecordStore = defineStore("record", () => {
	const recordToday = ref(null);
	const isLoading = ref(false);
	const error = ref(null);
	let now = dayjs().format("DD/MM/YYYY");

	const fetchTodayRecord = async () => {
		isLoading.value = true;
		try {
			const { data, error: fetchError } = await useFetch("/api/records/today");
			if (fetchError.value) {
				console.log("fetch error");
				error.value = fetchError.value.message || "Error fetching record";
			} else {
				console.log("Registro", toRaw(data.value));
				// recordToday.value = data.value
				// recordToday.value = data.value?.record;
				// recordToday.value = data.value;
			}
		} catch (err) {
			console.log("err");
			error.value = err.message;
		} finally {
			isLoading.value = false;
		}
	};
	const updateCount = async (careerName, gender, increment) => {
		isLoading.value = true;
		try {
			const {
				status,
				data,
				pending,
				error: fetchError,
			} = await $fetch("/api/records/update", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					date: now,
					careerName,
					gender,
					increment,
				}),
			});
			if (fetchError) {
				error.value = "Error updating counter";
			} else {
				const updatedCareer = recordToday.value?.carreras.find(
					(career) => career.nombre == careerName
				);
				if (updatedCareer) {
					if (gender == "male")
						updatedCareer.hombres += increment ? 1 : -1;
					else if (gender === "female")
						updatedCareer.mujeres += increment ? 1 : -1;
					updatedCareer.total =
						updatedCareer.hombres + updatedCareer.mujeres;
				}
			}
		} catch (err) {
			error.value = err.message;
		} finally {
			isLoading.value = false;
		}
	};

	return { fetchTodayRecord, updateCount, recordToday, isLoading, error };
});
