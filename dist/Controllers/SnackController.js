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
const SnackSchema_1 = __importDefault(require("../Models/SnackSchema"));
class SnackController {
    create(snack) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Snack = yield SnackSchema_1.default.create(snack);
                return Snack;
            }
            catch (error) {
                return { error };
            }
        });
    }
    getSnacks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const snacks = yield SnackSchema_1.default.find();
                return snacks;
            }
            catch (error) {
                return error;
            }
        });
    }
    getSnacksBySnackName(snackName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const snacks = yield SnackSchema_1.default.find({ snack: snackName });
                return snacks;
            }
            catch (error) {
                return error;
            }
        });
    }
    updateSnack(snack) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const snackUpdated = yield SnackSchema_1.default.findByIdAndUpdate(snack._id, snack, { new: true });
                if (snackUpdated == null) {
                    return { error: "Snack não encontrado" };
                }
                return { "message": "Snack atualizado com sucesso" };
            }
            catch (error) {
                return { error };
            }
        });
    }
    deleteSnackById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const idDelected = yield SnackSchema_1.default.findByIdAndRemove(id);
                if (idDelected == null) {
                    return { error: "Snack não encontrado" };
                }
                return { "message": "Snack excluído com sucesso" };
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.default = new SnackController();
//# sourceMappingURL=SnackController.js.map