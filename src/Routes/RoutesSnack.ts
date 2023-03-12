import { Router } from "express";
import SnackController from "../Controllers/SnackController";
import SnackSchema from "../Models/SnackSchema";


const routesSnack = Router()

routesSnack.post("/snack",async (req,res)=>{
    const {snack,name,description,price,image} = req.body;

    const Snack = await SnackController.create({snack,name,description,price,image})
   

    return res.json(Snack)

})

routesSnack.get("/snacks",async (req,res)=>{
    const snacks =await SnackController.getSnacks()
    return res.json(snacks)
})

routesSnack.get("/snacks/:snackName",async (req,res)=>{
    const snackName = req.params.snackName
    const snacks = await SnackController.getSnacksBySnackName(snackName)
    return res.json(snacks)
})

routesSnack.delete("/snack/:id", async (req,res)=>{
    let id = req.params.id
    const snackDelected = await SnackController.deleteSnackById(id)
    return res.json(snackDelected)
})

routesSnack.put("/snack",async (req,res)=>{
    const snack = req.body
    const snackUpdated = await SnackController.updateSnack(snack)

    return res.json(snackUpdated)
})

export default routesSnack ;