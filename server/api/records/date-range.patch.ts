import { getByDateRange } from "~/server/controllers/recordController"

export default defineEventHandler(async (event) => {
  const {startDate, endDate}  = await readBody(event)
  const ordered = await getByDateRange(startDate, endDate)
  return ordered

})
