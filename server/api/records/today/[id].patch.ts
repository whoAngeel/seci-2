import { updateRecord } from "../../../controllers/recordController";

export default defineEventHandler(async (event) => {
	try {
		const id = getRouterParam(event, "id");
		const data = await readBody(event);
    const record = await updateRecord(id, data)
		return record;
	} catch (error) {
		console.log("ERROR today.patch.ts", error);
		return { error: "Error al actualizar el registro de hoy" };
	}
});
