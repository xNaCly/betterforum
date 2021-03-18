import { Router, Request, Response } from "express";
import { check, HTTPError } from "lambert-server";
import bcrypt from "bcrypt";
import { salt } from "./../../../../config.json";
import db from "../../../../index";
import { CommentCreateSchema, CommentModel } from "../../../../models/Comment";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
	const Thread = await db.data.threads({ id: req.params.THREADID }).get({ _id: true });
	if (!Thread) {
		throw new HTTPError(`Cant find a Thread with the ID: ${req.params.THREADID}`, 404);
	}

	const Comments = await db.data.threads({ id: req.params.THREADID }).get({ _id: false, comments: true });
	res.send(Comments);
});

// router.post("/", check(CommentCreateSchema), async (req: Request, res: Response) => {
// 	const Thread = await db.data.threads({ id: req.params.THREADID }).get({ _id: true });
// 	if (!Thread) {
// 		throw new HTTPError(`Cant find a Thread with the ID: ${req.params.THREADID}`, 404);
// 	}

// 	let AuthorName;
// 	if (req.body.author) {
// 		AuthorName = await bcrypt.hash(req.body.author, salt);
// 	}

// 	const Comment: CommentModel = {
// 		...req.body,
// 		thread_id: req.params.THREADID,
// 		createdAt: Date.now(),
// 		comments: [],
// 		author: AuthorName ?? "Anonymous#" + Math.random().toString(36).substring(2, 6),
// 		id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
// 	};

// 	await db.data.threads({ id: req.params.THREADID }).comments().push(Comment);
// 	res.send({ success: "comment added", Comment });
// });

export default router;
