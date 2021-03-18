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
const index_1 = __importDefault(require("./../../index"));
const flags_json_1 = require("../../flags.json");
const router = express_1.Router();
const Theme = {
    theme: String,
};
router.put("/", lambert_server_1.check(Theme), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (flags_json_1.disablePOSTPUT) {
        throw new lambert_server_1.HTTPError("this method is disabled on the showcase REST", 405);
    }
    yield index_1.default.data.config({}).set({ theme: req.body.theme });
    res.status(201).send({ status: "set new default theme" });
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { theme } = yield index_1.default.data.config({}).get({ theme: true, _id: false });
    res.status(200).send({ theme });
}));
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3RoZW1lL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQW9EO0FBQ3BELG1EQUFrRDtBQUNsRCwwREFBK0I7QUFDL0IsaURBQWtEO0FBRWxELE1BQU0sTUFBTSxHQUFHLGdCQUFNLEVBQUUsQ0FBQztBQUV4QixNQUFNLEtBQUssR0FBRztJQUNiLEtBQUssRUFBRSxNQUFNO0NBQ2IsQ0FBQztBQUVGLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLHNCQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDbkUsSUFBSSwyQkFBYyxFQUFFO1FBQ25CLE1BQU0sSUFBSSwwQkFBUyxDQUFDLDhDQUE4QyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ3pFO0lBQ0QsTUFBTSxlQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLHVCQUF1QixFQUFFLENBQUMsQ0FBQztBQUMzRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDckQsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLE1BQU0sZUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM1RSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGtCQUFlLE1BQU0sQ0FBQyJ9