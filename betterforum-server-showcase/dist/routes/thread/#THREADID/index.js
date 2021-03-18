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
const index_1 = __importDefault(require("./../../../index"));
const router = express_1.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Thread = yield index_1.default.data.threads({ id: req.params.THREADID }).get({
        _id: false,
        id: true,
        title: true,
        content: true,
        image: true,
        author: true,
        // comments: true,
        createdAt: true,
    });
    if (!Thread) {
        throw new lambert_server_1.HTTPError(`Cant find a Thread with the ID: ${req.params.THREADID}`, 404);
    }
    return res.status(200).send(Thread);
}));
// ! editing and deleting threads disabled due to no way of auth if the editor/deleter is the comment author (this is due to the noSignIn dogma)
// ? check if editor is creator
// router.put("/", check(ThreadUpdateSchema), async (req: Request, res: Response) => {
// 	const Thread = await db.data.threads({ id: req.params.THREADID }).get({ title: true, content: true, image: true });
// const { title, content, image } = Thread;
// 	if (!Thread) {
// 		throw new HTTPError(`Cant find a Thread with the ID: ${req.params.THREADID}`, 404);
// 	}
// 	await db.data.threads({ id: req.params.THREADID }).set({ title: req.body.title, content: req.body.content });
// 	return res.status(204).send({});
// });
// ? only for mods
// router.delete("/", async (req: Request, res: Response) => {
// 	const Thread = await db.data.threads({ id: req.params.THREADID }).get({ _id: false, id: true });
// 	if (!Thread) {
// 		throw new HTTPError(`Cant find a Thread with the ID: ${req.params.THREADID}`, 404);
// 	}
// 	await db.data.threads({ id: req.params.THREADID }).delete();
// 	return res.status(200).send({ success: true, message: "deleted thread", thread: Thread });
// });
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcm91dGVzL3RocmVhZC8jVEhSRUFESUQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBb0Q7QUFDcEQsbURBQWtEO0FBRWxELDZEQUFrQztBQUVsQyxNQUFNLE1BQU0sR0FBRyxnQkFBTSxFQUFFLENBQUM7QUFFeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDckQsTUFBTSxNQUFNLEdBQUcsTUFBTSxlQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3JFLEdBQUcsRUFBRSxLQUFLO1FBQ1YsRUFBRSxFQUFFLElBQUk7UUFDUixLQUFLLEVBQUUsSUFBSTtRQUNYLE9BQU8sRUFBRSxJQUFJO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxNQUFNLEVBQUUsSUFBSTtRQUNaLGtCQUFrQjtRQUNsQixTQUFTLEVBQUUsSUFBSTtLQUNmLENBQUMsQ0FBQztJQUNILElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDWixNQUFNLElBQUksMEJBQVMsQ0FBQyxtQ0FBbUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNuRjtJQUNELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGdKQUFnSjtBQUNoSiwrQkFBK0I7QUFDL0Isc0ZBQXNGO0FBQ3RGLHVIQUF1SDtBQUV2SCw0Q0FBNEM7QUFDNUMsa0JBQWtCO0FBQ2xCLHdGQUF3RjtBQUN4RixLQUFLO0FBRUwsaUhBQWlIO0FBQ2pILG9DQUFvQztBQUNwQyxNQUFNO0FBRU4sa0JBQWtCO0FBQ2xCLDhEQUE4RDtBQUM5RCxvR0FBb0c7QUFFcEcsa0JBQWtCO0FBQ2xCLHdGQUF3RjtBQUN4RixLQUFLO0FBRUwsZ0VBQWdFO0FBQ2hFLDhGQUE4RjtBQUM5RixNQUFNO0FBRU4sa0JBQWUsTUFBTSxDQUFDIn0=