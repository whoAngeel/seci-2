import { adjustCareerCount } from "../../controllers/recordController";
export default defineEventHandler(async (event) => {
	const { date, careerName, gender, increment } = await readBody(event);
	try {
		const res = await adjustCareerCount(date, careerName, gender, increment);
		if (res.error) {
			return {
				statusCode: 400,
				message: JSON.stringify({
					error: res.error,
				}),
			};
		}
		return {
			statusCode: 200,
			body: JSON.stringify(res.record),
		};
	} catch (error) {
		console.log("Error actualizando. ", error);
		return {
			statusCode: 500,
			body: JSON.stringify({ error: "Error interno del servidor" }),
		};
	}
});
