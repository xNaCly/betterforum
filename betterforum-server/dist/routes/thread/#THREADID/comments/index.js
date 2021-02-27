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
const index_1 = __importDefault(require("../../../../index"));
const Comment_1 = require("../../../../models/Comment");
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
    var _a;
    const Thread = yield index_1.default.data.threads({ id: req.params.THREADID }).get({ _id: true });
    if (!Thread) {
        throw new lambert_server_1.HTTPError(`Cant find a Thread with the ID: ${req.params.THREADID}`, 404);
    }
    const Comment = Object.assign(Object.assign({}, req.body), { thread_id: req.params.THREADID, createdAt: Date.now(), author: (_a = req.body.author) !== null && _a !== void 0 ? _a : "Anonymous#" + Math.random().toString(36).substring(2, 6), id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) });
    yield index_1.default.data.threads({ id: req.params.THREADID }).comments().push(Comment);
    res.send({ success: "comment added", Comment });
}));
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvcm91dGVzL3RocmVhZC8jVEhSRUFESUQvY29tbWVudHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBb0Q7QUFDcEQsbURBQWtEO0FBQ2xELDhEQUFtQztBQUNuQyx3REFBK0U7QUFFL0UsTUFBTSxNQUFNLEdBQUcsZ0JBQU0sRUFBRSxDQUFDO0FBRXhCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ3JELE1BQU0sTUFBTSxHQUFHLE1BQU0sZUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3JGLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDWixNQUFNLElBQUksMEJBQVMsQ0FBQyxtQ0FBbUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNuRjtJQUVELE1BQU0sUUFBUSxHQUFHLE1BQU0sZUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDeEcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsc0JBQUssQ0FBQyw2QkFBbUIsQ0FBQyxFQUFFLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFOztJQUNsRixNQUFNLE1BQU0sR0FBRyxNQUFNLGVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNyRixJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ1osTUFBTSxJQUFJLDBCQUFTLENBQUMsbUNBQW1DLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDbkY7SUFFRCxNQUFNLE9BQU8sbUNBQ1QsR0FBRyxDQUFDLElBQUksS0FDWCxTQUFTLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQzlCLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQ3JCLE1BQU0sUUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sbUNBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDcEYsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQzdGLENBQUM7SUFFRixNQUFNLGVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUNqRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsa0JBQWUsTUFBTSxDQUFDIn0=