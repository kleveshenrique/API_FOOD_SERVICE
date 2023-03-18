"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaValidation = void 0;
const express_validator_1 = require("express-validator");
function SchemaValidation(req, res, next) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}
exports.SchemaValidation = SchemaValidation;
//# sourceMappingURL=validateSnack.js.map