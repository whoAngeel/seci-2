import mongoose from "mongoose";

const CareerSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		nombre: {
			type: String,
			required: true,
		},
		hombres: {
			type: Number,
			default: 0,
		},
		mujeres: {
			type: Number,
			default: 0,
		},
	},
	{
		versionKey: false,
		toObject: {
			virtuals: true,
		},
		toJSON: {
			virtuals: true,
		},
		collection: "carreras",
	}
);
CareerSchema.virtual("total").get(function () {
	return this.hombres + this.mujeres;
});

const RecordSchema = new mongoose.Schema(
	{
		date: {
			type: String,
			unique: true,
			required: true,
		},
		carreras: [CareerSchema],
	},
	{
		versionKey: false,
		toObject: {
			virtuals: true,
		},
		toJSON: {
			virtuals: true,
		},
		collection: "registros",
	}
);

RecordSchema.virtual("totalDia").get(function () {
	let total = 0;
	this.carreras.forEach((carrera) => {
		total += carrera.total;
	});
	return total;
});

// 
export {
    RecordSchema,
    CareerSchema
}