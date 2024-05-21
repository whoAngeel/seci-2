import {model} from 'mongoose'

import {CareerSchema,RecordSchema} from './records'

const CareerModel = model("Carrera", CareerSchema)
const RecordModel = model('Registro', RecordSchema)

export {
    CareerModel,
    RecordModel
}