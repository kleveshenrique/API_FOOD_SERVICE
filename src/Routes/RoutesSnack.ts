import { Request, Response, Router } from "express";
import SnackController from "../Controllers/SnackController";
import { SchemaValidation } from "../Middleware/validateSnack";
import SnackSchema from "../Models/SnackSchema";
import { schemaSnack } from "../Schemas/register-sckema";


const routesSnack = Router()

routesSnack.post("/snack",schemaSnack,SchemaValidation,async (req:Request,res:Response)=>{
    const {snack,name,description,price,image} = req.body;

    const Snack = await SnackController.create({snack,name,description,price,image})
   

    return res.json(Snack)

})

routesSnack.get("/snacks",async (req,res)=>{
    const snacks =await SnackController.getSnacks()
    return res.json(snacks)
})

routesSnack.get("/snacks/:snackName",async (req,res)=>{

    res.setHeader("Access-Control-Allow-Origin", "http://food-comerce.netlify.app")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );


    const snackName = req.params.snackName
    const snacks = await SnackController.getSnacksBySnackName(snackName)
    return res.json(snacks)
})

routesSnack.delete("/snack/:id", async (req,res)=>{
    let id = req.params.id
    try {
        const snackDelected:any = await SnackController.deleteSnackById(id)
        // console.log(snackDelected)
        return res.json(snackDelected)
    } catch (error) {
        return res.json({"messages":"Erro ao deletar o snack"})
    }
    
   
})

routesSnack.put("/snack",schemaSnack,SchemaValidation,async (req:Request,res:Response)=>{
    const snack = req.body
    const snackUpdated = await SnackController.updateSnack(snack)

    return res.json(snackUpdated)
})

export default routesSnack ;