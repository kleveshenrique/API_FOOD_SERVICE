"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const snackSchema = new Schema({
    snack: {
        type: String,
        require: [true, 'Snack obrigatório']
    },
    name: {
        type: String,
        require: [true, 'Nome obrigatório']
    },
    description: {
        type: String,
        require: [true, 'Descrição obrigatório']
    },
    price: {
        type: Number,
        require: [true, 'Preço obrigatório']
    },
    image: {
        type: String,
        require: [true, 'Link da imagem obrigatório']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
exports.default = mongoose_1.default.model("Snack", snackSchema);
//# sourceMappingURL=SnackSchema.js.map