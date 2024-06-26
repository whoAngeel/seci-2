import { CareerModel as Career, RecordModel as Record } from "../models/models";
import dayjs from "dayjs";
import { getRecords } from "./recordController";

export const genderDistribution = async () => {
	const todayDate = dayjs().format("DD/MM/YYYY");
	try {
		const record = await Record.findOne({ date: todayDate });
		if (!record) {
			throw Error("No se pudo encontrar el registro de hoy");
		}
		if (record.totalDia <= 0) {
			throw Error("Aun no se ha actualizado el registro de hoy");
		}
		const totalMujeres = record.carreras.reduce(
			(sum, career) => sum + career.mujeres,
			0
		);
		const totalHombres = record.carreras.reduce(
			(sum, career) => sum + career.hombres,
			0
		);
		return {
			totalHombres,
			totalMujeres,
			total: totalMujeres + totalHombres,
		};
	} catch (error) {
		return {
			error: error.message,
		};
	}
};

export const trends = async () => {
	try {
		const trends = await Record.find().limit(30);
		const ordered = trends.sort((a, b) => {
			const [dayA, monthA, yearA] = a.date.split("/").map(Number);
			const [dayB, monthB, yearB] = b.date.split("/").map(Number);

			const dateA = new Date(yearA, monthA - 1, dayA);
			const dateB = new Date(yearB, monthB - 1, dayB);

			return dateA - dateB; // Invertir el orden
		});

		const formattedTrends = ordered.map((record) => ({
			date: record.date,
			totalDia: record.totalDia,
		}));

		return formattedTrends;
	} catch (error) {
		return {
			error: error.message,
		};
	}
};

export const top3CarrerasHoy = async () => {
	const todayDate = dayjs().format("DD/MM/YYYY");

	try {
		const record = await Record.findOne({ date: todayDate });
		if (!record) {
			throw Error("No se pudo encontrar el registro de hoy");
		}
		if (record.totalDia <= 0) {
			throw Error("Aun no se ha actualizado el registro de hoy");
		}
		const top = record.carreras.sort((a, b) => b.total - a.total).slice(0, 3);
		return top;
	} catch (error) {
		return {
			error: error.message,
		};
	}
};

export const top3CarrerasTodo = async () => {
	try {
		const records = await getRecords();
		if (!records || records.length === 0)
			throw Error("Sin registros encontrados");
		const careerTotals = {};
		records.forEach((record) => {
			record.carreras.forEach((carrera) => {
				if (!careerTotals[carrera.nombre]) {
					careerTotals[carrera.nombre] = 0;
				}
				careerTotals[carrera.nombre] += carrera.total;
			});
		});

		const top3 = Object.keys(careerTotals)
			.map((nombre) => ({ nombre, total: careerTotals[nombre] }))
			.sort((a, b) => b.total - a.total)
			.slice(0, 3);
		return top3;
	} catch (error) {
		return {
			error: error.message,
		};
	}
};

export const totalStudents = async () => {
	try {
		const records = await getRecords();
		if (!records || records.length === 0)
			throw Error("Sin registros encontrados");
		let total = 0;
		total = records.reduce((acc, current) => {
			return (acc += current.totalDia);
		}, 0);
		return total
	} catch (error) {
		return {
			error: error.message
		}
	}
};
