import {
	genderDistribution,
	top3CarrerasHoy,
	top3CarrerasTodo,
	totalStudents,
	trends,
} from "~/server/controllers/statsController";

export default defineEventHandler(async (event) => {
	const genderDist:any = await genderDistribution();
	const recordTrends:any = await trends();
	const top3careersToday = await top3CarrerasHoy();
	const top3careersAll= await top3CarrerasTodo()
	return {
		genderDistribution: genderDist,
		recordTrends,
		top3careersToday,
		top3careersAll,
		totales: await totalStudents()
	};
});
