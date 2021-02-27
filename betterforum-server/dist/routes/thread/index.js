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
const Thread_1 = require("../../models/Thread");
const index_1 = __importDefault(require("./../../index"));
const router = express_1.Router();
router.post("/", lambert_server_1.check(Thread_1.ThreadCreateSchema), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let thread = Object.assign(Object.assign({}, req.body), { author: (_a = req.body.author) !== null && _a !== void 0 ? _a : "Anonymous#" + Math.random().toString(36).substring(2, 6), image: req.body.image, comments: [], createdAt: Date.now(), id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) });
    yield index_1.default.data.threads.push(thread);
    res.status(201).send({ status: "created thread", thread });
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const threads = yield index_1.default.data.threads().get({ _id: false, comments: false });
    res.status(200).send(threads);
}));
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3RocmVhZC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFvRDtBQUNwRCxtREFBa0Q7QUFDbEQsZ0RBQW9GO0FBQ3BGLDBEQUErQjtBQUUvQixNQUFNLE1BQU0sR0FBRyxnQkFBTSxFQUFFLENBQUM7QUFFeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsc0JBQUssQ0FBQywyQkFBa0IsQ0FBQyxFQUFFLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFOztJQUNqRixJQUFJLE1BQU0sbUNBQ04sR0FBRyxDQUFDLElBQUksS0FDWCxNQUFNLFFBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLG1DQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3BGLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFDckIsUUFBUSxFQUFFLEVBQUUsRUFDWixTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUNyQixFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FDN0YsQ0FBQztJQUVGLE1BQU0sZUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDNUQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ3JELE1BQU0sT0FBTyxHQUFHLE1BQU0sZUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzdFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxrQkFBZSxNQUFNLENBQUMifQ==