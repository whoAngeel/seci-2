import { createPinia, defineStore } from "pinia";

import axios from "axios";

export const useDashboardStore = defineStore("dashboard", {
	state: () => ({genderDistribution:{}, isLoading: false}),
	getters: {

  },
	actions: {
		async fetchData() {
      this.isLoading = true
      try {
        const res = await axios.get('/api/dash')
        this.genderDistribution = res.data?.genderDistribution
      } catch (error) {
        console.log(error);
      }finally{
        this.isLoading = false
      }
      // this.isLoading = true
			// axios
			// 	.request("/api/dash")
			// 	.then((res) => {
			// 		this.genderDistribution= res.data?.genderDistribution;
			// 	})
			// 	.catch((error) => {
			// 		console.log(error);
			// 	}).finally(()=>{
      //     this.isLoading=false
      //   })
		},
	},
});
