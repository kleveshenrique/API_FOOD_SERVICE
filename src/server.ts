import cors from "cors";
import express from "express"
import mongoose from 'mongoose';
import routesSnack from "./Routes/RoutesSnack";

const app = express()
const port = 3033

mongoose.connect("mongodb+srv://kleves:Lu294470@cluster0.9rchtf8.mongodb.net/test").then(()=>{
    console.log("MongoDB connected with success")
}).catch((err)=>{
    console.log(`Error conection to MongoDB : ${err}`)
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const corsOptions = {
  origin:'https://food-comerce.netlify.app/', 
  credentials:true,
  optionSuccessStatus: 200
}
app.use(cors(corsOptions))

// app.use((req, res, next) => {  
//   res.header('Access-Control-Allow-Origin','https://food-comerce.netlify.app/')
//   res.header("Access-Control-Allow-Methods",'GET,PUT,POST,DELETE') 
//   res.header("") 
//   cors()
//   next()
// });

// app.use((req,res,next)=>{ 
//     res.header("Access-Control-Allow-Origin","https://food-comerce.netlify.app")
//     res.header("Access-Control-Allow-Methods",'GET,PUT,POST,DELETE')
//     app.use(cors(corsOptions))
//     next()
// })
// app.use(cors(corsOptions));
// app.get('/', (req, res) => {
//     return res.send('Api Server ON ')
// })

app.use(routesSnack)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})