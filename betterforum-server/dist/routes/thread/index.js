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
const lambert_server_1 = require("lambert-server");
const config_json_1 = require("./../../config.json");
const bcrypt_1 = __importDefault(require("bcrypt"));
const Thread_1 = require("../../models/Thread");
const index_1 = __importDefault(require("./../../index"));
const flags_json_1 = require("../../flags.json");
const router = express_1.Router();
router.post("/", lambert_server_1.check(Thread_1.ThreadCreateSchema), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (flags_json_1.disablePOSTPUT) {
        throw new lambert_server_1.HTTPError("this method is disabled on the showcase REST", 405);
    }
    let AuthorName;
    if (req.body.author) {
        AuthorName = yield bcrypt_1.default.hash(req.body.author, config_json_1.salt);
    }
    let thread = Object.assign(Object.assign({}, req.body), { author: AuthorName !== null && AuthorName !== void 0 ? AuthorName : "Anonymous#" + Math.random().toString(36).substring(2, 6), image: req.body.image, comments: [], createdAt: Date.now(), id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) });
    yield index_1.default.data.threads.push(thread);
    res.status(201).send({ status: "created thread", thread });
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const threads = yield index_1.default.data.threads().get({ _id: false, comments: false });
    res.status(200).send(threads);
}));
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3RocmVhZC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFvRDtBQUNwRCxtREFBa0Q7QUFDbEQscURBQTJDO0FBQzNDLG9EQUE0QjtBQUM1QixnREFBb0Y7QUFDcEYsMERBQStCO0FBQy9CLGlEQUFrRDtBQUVsRCxNQUFNLE1BQU0sR0FBRyxnQkFBTSxFQUFFLENBQUM7QUFFeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsc0JBQUssQ0FBQywyQkFBa0IsQ0FBQyxFQUFFLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ2pGLElBQUksMkJBQWMsRUFBRTtRQUNuQixNQUFNLElBQUksMEJBQVMsQ0FBQyw4Q0FBOEMsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUN6RTtJQUVELElBQUksVUFBVSxDQUFDO0lBQ2YsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNwQixVQUFVLEdBQUcsTUFBTSxnQkFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxrQkFBSSxDQUFDLENBQUM7S0FDdEQ7SUFFRCxJQUFJLE1BQU0sbUNBQ04sR0FBRyxDQUFDLElBQUksS0FDWCxNQUFNLEVBQUUsVUFBVSxhQUFWLFVBQVUsY0FBVixVQUFVLEdBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDL0UsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUNyQixRQUFRLEVBQUUsRUFBRSxFQUNaLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQ3JCLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUM3RixDQUFDO0lBRUYsTUFBTSxlQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUM1RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDckQsTUFBTSxPQUFPLEdBQUcsTUFBTSxlQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDN0UsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGtCQUFlLE1BQU0sQ0FBQyJ9