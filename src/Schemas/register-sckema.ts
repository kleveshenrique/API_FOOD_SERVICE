import { body } from "express-validator";

const schemaSnack = [
    body("snack").exists().withMessage("Snack obrigtório").isLength({min:5}).withMessage('Snack com no mínimo 5 caracteres'),
    body("name").exists().withMessage("Nome obrigtório").isLength({min:3}).withMessage('Nome com no mínimo 3 caracteres'),
    body("description").isLength({min:10}).withMessage('Descrição com no mínimo 10 caracteres'),
    body("price").exists().withMessage('Preço Obrigatório').isLength({min:1}).withMessage("Mínimo de 1,00"),
    body("image").exists()
]

export {schemaSnack}