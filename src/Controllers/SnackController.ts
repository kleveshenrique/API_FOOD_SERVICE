import { Request, Response } from "express"
import SnackSchema from "../Models/SnackSchema"
import { SnackProps } from "../Types/Snack";

interface SnackPropsWithId {
    _id: String,
    snack : String,
    name : String,
    description: String,
    price: Number,
    image: String
}


class SnackController {
    
    
    async create(snack:SnackProps) {
              
        try {
           
            const Snack = await SnackSchema.create(snack)
            
            return Snack;

        } catch (error) {

            return {error}
            
        }
    }

    async getSnacks(){
        try {
            const snacks = await SnackSchema.find()
            return snacks;
        } catch (error) {
            return error;
        }
    }

    async getSnacksBySnackName(snackName:String){
        try {
            const snacks = await SnackSchema.find({snack:snackName})
                         
                return snacks;
          
        } catch (error) {
            return error;
        }
    }

   
    async updateSnack(snack:SnackPropsWithId) {
              
        try {
            const Snack = await SnackSchema.findByIdAndUpdate(snack._id,snack,{new:true})
            
            return Snack;

        } catch (error) {

            return {error}
            
        }
    }

    async deleteSnackById(id:String){
        try {            
            const idDelected = await SnackSchema.findByIdAndRemove(id)
            console.log(idDelected)

            if (idDelected==null) {
                return {error:"Snack não encontrado"}
            }
            return true
        } catch (error) {
            return error
        }
    }

}

export default new SnackController();