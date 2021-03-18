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
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_json_1 = require("./../../../../config.json");
const index_1 = __importDefault(require("../../../../index"));
const Comment_1 = require("../../../../models/Comment");
const flags_json_1 = require("../../../../flags.json");
const router = express_1.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Thread = yield index_1.default.data.threads({ id: req.params.THREADID }).get({ _id: true });
    if (!Thread) {
        throw new lambert_server_1.HTTPError(`Cant find a Thread with the ID: ${req.params.THREADID}`, 404);
    }
    const Comments = yield index_1.default.data.threads({ id: req.params.THREADID }).get({ _id: false, comments: true });
    res.send(Comments);
}));
router.post("/", lambert_server_1.check(Comment_1.CommentCreateSchema), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (flags_json_1.disablePOSTPUT) {
        throw new lambert_server_1.HTTPError("this method is disabled on the showcase REST", 405);
    }
    const Thread = yield index_1.default.data.threads({ id: req.params.THREADID }).get({ _id: true });
    if (!Thread) {
        throw new lambert_server_1.HTTPError(`Cant find a Thread with the ID: ${req.params.THREADID}`, 404);
    }
    let AuthorName;
    if (req.body.author) {
        AuthorName = yield bcrypt_1.default.hash(req.body.author, config_json_1.salt);
    }
    const Comment = Object.assign(Object.assign({}, req.body), { thread_id: req.params.THREADID, createdAt: Date.now(), comments: [], author: AuthorName !== null && AuthorName !== void 0 ? AuthorName : "Anonymous#" + Math.random().toString(36).substring(2, 6), id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) });
    yield index_1.default.data.threads({ id: req.params.THREADID }).comments().push(Comment);
    res.send({ success: "comment added", Comment });
}));
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvcm91dGVzL3RocmVhZC8jVEhSRUFESUQvY29tbWVudHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBb0Q7QUFDcEQsbURBQWtEO0FBQ2xELG9EQUE0QjtBQUM1QiwyREFBaUQ7QUFDakQsOERBQW1DO0FBQ25DLHdEQUErRTtBQUMvRSx1REFBd0Q7QUFFeEQsTUFBTSxNQUFNLEdBQUcsZ0JBQU0sRUFBRSxDQUFDO0FBRXhCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ3JELE1BQU0sTUFBTSxHQUFHLE1BQU0sZUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3JGLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDWixNQUFNLElBQUksMEJBQVMsQ0FBQyxtQ0FBbUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNuRjtJQUVELE1BQU0sUUFBUSxHQUFHLE1BQU0sZUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDeEcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsc0JBQUssQ0FBQyw2QkFBbUIsQ0FBQyxFQUFFLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ2xGLElBQUksMkJBQWMsRUFBRTtRQUNuQixNQUFNLElBQUksMEJBQVMsQ0FBQyw4Q0FBOEMsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUN6RTtJQUVELE1BQU0sTUFBTSxHQUFHLE1BQU0sZUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3JGLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDWixNQUFNLElBQUksMEJBQVMsQ0FBQyxtQ0FBbUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNuRjtJQUVELElBQUksVUFBVSxDQUFDO0lBQ2YsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNwQixVQUFVLEdBQUcsTUFBTSxnQkFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxrQkFBSSxDQUFDLENBQUM7S0FDdEQ7SUFFRCxNQUFNLE9BQU8sbUNBQ1QsR0FBRyxDQUFDLElBQUksS0FDWCxTQUFTLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQzlCLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQ3JCLFFBQVEsRUFBRSxFQUFFLEVBQ1osTUFBTSxFQUFFLFVBQVUsYUFBVixVQUFVLGNBQVYsVUFBVSxHQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQy9FLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUM3RixDQUFDO0lBRUYsTUFBTSxlQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDakQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGtCQUFlLE1BQU0sQ0FBQyJ9