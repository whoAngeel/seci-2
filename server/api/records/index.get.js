import { RecordModel } from '~/server/models/models';
import {
	getRecords,
	adjustCareerCount,
	createOrUpdateRecord,
	getOrCreateTodayRecord,
} from '../../controllers/recordController';

// connectDB()

export default defineEventHandler(async (event) => {
	const records = await RecordModel.find({})
	const ordered = records.sort((a, b) => {
		const [dayA, monthA, yearA] = a.date.split("/").map(Number);
		const [dayB, monthB, yearB] = b.date.split("/").map(Number);

		const dateA = new Date(yearA, monthA - 1, dayA);
		const dateB = new Date(yearB, monthB - 1, dayB);

		return dateB - dateA; // Invertir el orden
	});

	return {
		ordered,
	};
});
