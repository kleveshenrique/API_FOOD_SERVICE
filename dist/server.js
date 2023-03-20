"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const RoutesSnack_1 = __importDefault(require("./Routes/RoutesSnack"));
const app = (0, express_1.default)();
const port = 3033;
mongoose_1.default.connect("mongodb+srv://kleves:Lu294470@cluster0.9rchtf8.mongodb.net/test").then(() => {
    console.log("MongoDB connected with success");
}).catch((err) => {
    console.log(`Error conection to MongoDB : ${err}`);
});
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// var corsOptions = {
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200
// }
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://food-comerce.netlify.app");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use((0, cors_1.default)());
    next();
});
// app.use(cors(corsOptions));
app.get('/', (req, res) => {
    return res.send('Api Server ON ');
});
app.use(RoutesSnack_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=server.js.map