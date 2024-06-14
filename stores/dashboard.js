// stores/dashboard.js
import { defineStore } from "pinia";
import axios from "axios";

export const useDashboardStore = defineStore("dashboard", {
  state: () => ({
    genderDistribution: {},
    isLoading: false,
    recordTrends: [],
    alumnosTotales: 0,
    top3AllRecords: []
  }),
  actions: {
    async fetchData() {
      this.isLoading = true;
      try {
        const res = await axios.get("/api/dash");
        this.genderDistribution = res.data?.genderDistribution || {};
        this.recordTrends = res.data?.recordTrends || [];
        this.alumnosTotales = res.data?.totales || 0;
        this.top3AllRecords = res.data?.top3careersAll || []
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    }
  }
});
