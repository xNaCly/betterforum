import { Router, Request, Response } from "express";
import { HTTPError, check } from "lambert-server";
import { ThreadUpdateSchema } from "../../../models/Thread";
import db from "./../../../index";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
	const Thread = await db.data.threads({ id: req.params.THREADID }).get({
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
		throw new HTTPError(`Cant find a Thread with the ID: ${req.params.THREADID}`, 404);
	}
	return res.status(200).send(Thread);
});

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

export default router;
