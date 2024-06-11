import {
	genderDistribution,
	top3CarrerasHoy,
	top3CarrerasTodo,
	trends,
} from "~/server/controllers/statsController";

export default defineEventHandler(async (event) => {
	const genderDist:any = await genderDistribution();
	const recordTrends:any = await trends();
	const top3careers = await top3CarrerasHoy();
	const top3careersAll= await top3CarrerasTodo()
	return {
		genderDistribution: genderDist,
		recordTrends,
		top3careers,
		top3careersAll
	};
});
