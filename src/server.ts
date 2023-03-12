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
app.use(routesSnack)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})