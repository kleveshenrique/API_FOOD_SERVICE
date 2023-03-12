import mongoose from 'mongoose';
const { Schema } = mongoose;

const snackSchema = new Schema({  
  snack: {
    type: String,
    require:[true,'Snack obrigatório']
  },
  name :{
    type: String,
    require:[true,'Nome obrigatório']
  },
  description: {
    type: String,
    require:[true,'Descrição obrigatório']
  },
  price : {
    type: Number,
    require:[true,'Preço obrigatório']
  },
  image : {
    type: String,
    require:[true,'Link da imagem obrigatório']
  },
  createdAt : {
    type: Date,
    default : Date.now
  }
});

export default mongoose.model("Snack",snackSchema);

