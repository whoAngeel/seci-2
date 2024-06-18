import { RecordModel } from '~/server/models/models';
import {
	getRecords,
	adjustCareerCount,
	createOrUpdateRecord,
	getOrCreateTodayRecord,
	getOrderedRecords,
} from '../../controllers/recordController';

// connectDB()

export default defineEventHandler(async (event) => {
	const ordered = await getOrderedRecords();

	return {
		ordered,
	};
});
