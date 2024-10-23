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
const externalAPI_1 = require("./externalAPI");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const cachingRoutes_1 = __importDefault(require("./cachingRoutes"));
// router.get("/", async (req: Request, res: Response, next: NextFunction) => {
// router.get("/", async (req: Request, res: Response, next: NextFunction) => {
// the cache(10) will return a function
router.get("/", (0, cachingRoutes_1.default)(10), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send("all users!");
    try {
        const data = yield (0, externalAPI_1.getAllUsers)();
        // TRANSFORM
        const arr = Object.entries(data).map(externalAPI_1.transformationOne);
        // we cannot use send because we want to execute the next
        // middleware and if you used send, other middlewares
        // wouldn't be used
        console.log(arr);
        res.json(arr);
    }
    catch (err) {
        next(err);
    }
}));
router.get("/city/:nameCity", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send(`users from city ${req.params.nameCity}`);
    try {
        const data = yield (0, externalAPI_1.getSomeUsers)(req.params.nameCity);
        // TRANSFORM
        const arr = Object.entries(data).map(externalAPI_1.transformationOne);
        res.json(arr);
    }
    catch (err) {
        next(err); //?
    }
}));
exports.default = router;
