import mongoose, { SchemaTypes } from 'mongoose';

const categoriaSchema = mongoose.Schema({
    Imagen : {
        type: String,
        required: true,
        trim: true,
    },
    CategoriaNombre : {
        type: String,
        required: true,
        trim: true,
    },
    Descripcion : {
        type: String,
        required: true,
        trim: true,
    }
},
{
    timestamps: true,
}
)
const Categoria = mongoose.model("Categoria",categoriaSchema)
export default Categoria;

//MongoDb ---> no USa SchemaTypes
//MOONGOSE ---> USa SchemaTypes