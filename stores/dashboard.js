import { createPinia, defineStore } from "pinia";

import axios from "axios";

export const useDashboardStore = defineStore("dashboard", {
	state: () => ({ genderDistribution: {}, isLoading: false, recordTrends: [], alumnosTotales: 0}),
	getters: {},
	actions: {
		async fetchData() {
			this.isLoading = true;
			try {
				const res = await axios.get("/api/dash");
				this.genderDistribution = res.data?.genderDistribution;
				this.recordTrends = res.data?.recordTrends
				this.alumnosTotales = res.data?.totales
			} catch (error) {
				console.log(error);
			} finally {
				this.isLoading = false;
			}
			
		},
	},
});
