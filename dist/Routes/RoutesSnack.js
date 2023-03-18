"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SnackController_1 = __importDefault(require("../Controllers/SnackController"));
const validateSnack_1 = require("../Middleware/validateSnack");
const register_sckema_1 = require("../Schemas/register-sckema");
const routesSnack = (0, express_1.Router)();
routesSnack.post("/snack", register_sckema_1.schemaSnack, validateSnack_1.SchemaValidation, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { snack, name, description, price, image } = req.body;
    const Snack = yield SnackController_1.default.create({ snack, name, description, price, image });
    return res.json(Snack);
}));
routesSnack.get("/snacks", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const snacks = yield SnackController_1.default.getSnacks();
    return res.json(snacks);
}));
routesSnack.get("/snacks/:snackName", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const snackName = req.params.snackName;
    const snacks = yield SnackController_1.default.getSnacksBySnackName(snackName);
    return res.json(snacks);
}));
routesSnack.delete("/snack/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    try {
        const snackDelected = yield SnackController_1.default.deleteSnackById(id);
        // console.log(snackDelected)
        return res.json(snackDelected);
    }
    catch (error) {
        return res.json({ "messages": "Erro ao deletar o snack" });
    }
}));
routesSnack.put("/snack", register_sckema_1.schemaSnack, validateSnack_1.SchemaValidation, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const snack = req.body;
    const snackUpdated = yield SnackController_1.default.updateSnack(snack);
    return res.json(snackUpdated);
}));
exports.default = routesSnack;
//# sourceMappingURL=RoutesSnack.js.map