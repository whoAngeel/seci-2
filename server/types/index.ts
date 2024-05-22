export interface Career {
	nombre: string;
	mujeres: number;
	hombres: number;
	total: number;
}

export interface RecordState {
	record: {
		carreras: Career[];
	} | null;
	isLoading: boolean;
	error: string | null;
}
