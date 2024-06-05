import { getTotalRecords } from "~/server/controllers/recordController";

export default defineEventHandler(async (event) => {
    const total = await getTotalRecords()

	return {
        total
    }
});
