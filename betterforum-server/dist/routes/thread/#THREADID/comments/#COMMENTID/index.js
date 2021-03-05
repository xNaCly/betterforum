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
const config_json_1 = require("./../../../../../config.json");
const index_1 = __importDefault(require("./../../../../../index"));
const Comment_1 = require("./../../../../../models/Comment");
const router = express_1.Router();
router.post("/", lambert_server_1.check(Comment_1.CommentCreateSchema), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Thread = yield index_1.default.data.threads({ id: req.params.THREADID }).get({ _id: true });
    if (!Thread) {
        throw new lambert_server_1.HTTPError(`Cant find a Thread with the ID: ${req.params.THREADID}`, 404);
    }
    const comment = yield index_1.default.data
        .threads({ id: req.params.THREADID })
        .comments({ id: req.params.COMMENTID })
        .get({ _id: true });
    if (!comment) {
        throw new lambert_server_1.HTTPError(`Cant find a Comment with the ID: ${req.params.COMMENTID}`, 404);
    }
    let AuthorName;
    if (req.body.author) {
        AuthorName = yield bcrypt_1.default.hash(req.body.author, config_json_1.salt);
    }
    const Comment = Object.assign(Object.assign({}, req.body), { thread_id: req.params.THREADID, createdAt: Date.now(), author: AuthorName !== null && AuthorName !== void 0 ? AuthorName : "Anonymous#" + Math.random().toString(36).substring(2, 6), id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) });
    yield index_1.default.data.threads({ id: req.params.THREADID }).comments({ id: req.params.COMMENTID }).comments().push(Comment);
    res.send({ success: "comment added", Comment });
}));
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvcm91dGVzL3RocmVhZC8jVEhSRUFESUQvY29tbWVudHMvI0NPTU1FTlRJRC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFvRDtBQUNwRCxtREFBa0Q7QUFDbEQsb0RBQTRCO0FBQzVCLDhEQUFvRDtBQUNwRCxtRUFBd0M7QUFDeEMsNkRBQW9GO0FBRXBGLE1BQU0sTUFBTSxHQUFHLGdCQUFNLEVBQUUsQ0FBQztBQUV4QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxzQkFBSyxDQUFDLDZCQUFtQixDQUFDLEVBQUUsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDbEYsTUFBTSxNQUFNLEdBQUcsTUFBTSxlQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckYsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNaLE1BQU0sSUFBSSwwQkFBUyxDQUFDLG1DQUFtQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ25GO0lBRUQsTUFBTSxPQUFPLEdBQUcsTUFBTSxlQUFFLENBQUMsSUFBSTtTQUMzQixPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNwQyxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUN0QyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNyQixJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ2IsTUFBTSxJQUFJLDBCQUFTLENBQUMsb0NBQW9DLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDckY7SUFFRCxJQUFJLFVBQVUsQ0FBQztJQUNmLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDcEIsVUFBVSxHQUFHLE1BQU0sZ0JBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsa0JBQUksQ0FBQyxDQUFDO0tBQ3REO0lBRUQsTUFBTSxPQUFPLG1DQUNULEdBQUcsQ0FBQyxJQUFJLEtBQ1gsU0FBUyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUM5QixTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUNyQixNQUFNLEVBQUUsVUFBVSxhQUFWLFVBQVUsY0FBVixVQUFVLEdBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDL0UsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQzdGLENBQUM7SUFFRixNQUFNLGVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuSCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQ2pELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxrQkFBZSxNQUFNLENBQUMifQ==