import { CareerModel as Career, RecordModel as Record } from "../models/models";
import dayjs from "dayjs";

export const getRecords = async () => {
	try {
		return await Record.find()
	} catch (error) {
		console.log(error);
		return {
			error: "Error al encontrar todos los registros",
		};
	}
};

export const getTotalRecords = async () => {
	try {
		return await Record.estimatedDocumentCount();
	} catch (error) {
		return {
			error: "Error en la peticion",
		};
	}
};

export const updateRecord = async (recordId, data) => {
	try {
		const record = await Record.findByIdAndUpdate(recordId, data);
		return record;
	} catch (error) {
		return {
			error: "Error al actualizar los registros",
		};
	}
};

export const getOrCreateTodayRecord = async () => {
	const todayDate = dayjs().format("DD/MM/YYYY");
	// console.log(todayDate, typeof todayDate);

	try {
		let todayRecord = await Record.findOne({
			date: todayDate,
		});
		if (!todayRecord) {
			console.log("no existe el registro de hoy, vamos a crearlo");
			todayRecord = new Record({
				date: todayDate,
				carreras: [
					new Career({ name: "civil", nombre: "Civil" }),
					new Career({ name: "quimica", nombre: "Química" }),
					new Career({ name: "industrial", nombre: "Industrial" }),
					new Career({ name: "electronica", nombre: "Electrónica" }),
					new Career({ name: "electrica", nombre: "Eléctrica" }),
					new Career({ name: "administracion", nombre: "Administración" }),
					new Career({ name: "gestion", nombre: "Gestión" }),
					new Career({ name: "contaduria", nombre: "Contaduria" }),
					new Career({ name: "sistemas", nombre: "Sistemas" }),
					new Career({ name: "mecanica", nombre: "Mecánica" }),
					new Career({ name: "externo", nombre: "Externo" }),
					new Career({ name: "docente", nombre: "Docente" }),
					new Career({ name: "maestria", nombre: "Maestría" }),
					new Career({ name: "doctorado", nombre: "Doctorado" }),
				],
			});
			await todayRecord.save();
		}
		return todayRecord;
	} catch (error) {
		return {
			error: "obteniendo el registro de hoy",
		};
	}
};

export const createOrUpdateRecord = async (date, careers) => {
	const existingRecord = await Record.findOne({ date });

	if (existingRecord) {
		existingRecord.careers = careers;
		await existingRecord.save();
	} else {
		const newRecord = new Record({ date, careers });
		await newRecord.save();
	}
	return {
		success: true,
	};
};

export const adjustCareerCount = async (date, careerName, gender, increment) => {
	try {
		const record = await Record.findOne({ date });
		if (!record) {
			return {
				error: "Record not found",
			};
		}

		if (!record.carreras || !Array.isArray(record.carreras)) {
			return {
				error: "No careers found in record",
			};
		}

		const career = record.carreras.find((career) => career.name === careerName);
		if (!career) return { error: "Career not found" };
		if (gender == "male") {
			career.hombres += increment ? 1 : -1;
		} else if (gender == "female") {
			career.mujeres += increment ? 1 : -1;
		}

		career.total = career.hombres + career.mujeres;
		await record.save();
		console.log("actualizando");
		return {
			success: true,
			record,
		};
	} catch (error) {
		return {
			error: "Error updating career count",
		};
	}
};
