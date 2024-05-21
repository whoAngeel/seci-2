import {
	getRecords,
	adjustCareerCount,
	createOrUpdateRecord,
	getOrCreateTodayRecord,
} from '../../controllers/recordController';

// connectDB()

export default defineEventHandler(async (event) => {
	const records = await getRecords();
	return {
		records,
	};
});
