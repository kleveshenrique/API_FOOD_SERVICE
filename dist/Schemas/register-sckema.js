"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaSnack = void 0;
const express_validator_1 = require("express-validator");
const schemaSnack = [
    (0, express_validator_1.body)("snack").exists().withMessage("Snack obrigtório").isLength({ min: 5 }).withMessage('Snack com no mínimo 5 caracteres'),
    (0, express_validator_1.body)("name").exists().withMessage("Nome obrigtório").isLength({ min: 3 }).withMessage('Nome com no mínimo 3 caracteres'),
    (0, express_validator_1.body)("description").isLength({ min: 10 }).withMessage('Descrição com no mínimo 10 caracteres'),
    (0, express_validator_1.body)("price").exists().withMessage('Preço Obrigatório').isLength({ min: 1 }).withMessage("Mínimo de 1,00"),
    (0, express_validator_1.body)("image").exists()
];
exports.schemaSnack = schemaSnack;
//# sourceMappingURL=register-sckema.js.map