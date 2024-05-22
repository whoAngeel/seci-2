import { getOrCreateTodayRecord } from "../../controllers/recordController";

export default defineEventHandler(async (event) => {
	try {
		const recordToday = await getOrCreateTodayRecord();
		return  recordToday ;
	} catch (error) {
		console.log("ERROR today.get.ts", error);
		return { error: "Error obteniendo el registro de hoy" };
	}
});
