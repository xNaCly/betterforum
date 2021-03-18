import { Router, Request, Response } from "express";
import { check, HTTPError } from "lambert-server";
import bcrypt from "bcrypt";
import { salt } from "./../../../../../config.json";
import db from "./../../../../../index";
import { CommentCreateSchema, CommentModel } from "./../../../../../models/Comment";
import { disablePOSTPUT } from "../../../../../flags.json";

const router = Router();

router.post("/", check(CommentCreateSchema), async (req: Request, res: Response) => {
	if (disablePOSTPUT) {
		throw new HTTPError("this method is disabled on the showcase REST", 405);
	}

	const Thread = await db.data.threads({ id: req.params.THREADID }).get({ _id: true });
	if (!Thread) {
		throw new HTTPError(`Cant find a Thread with the ID: ${req.params.THREADID}`, 404);
	}

	const comment = await db.data
		.threads({ id: req.params.THREADID })
		.comments({ id: req.params.COMMENTID })
		.get({ _id: true });
	if (!comment) {
		throw new HTTPError(`Cant find a Comment with the ID: ${req.params.COMMENTID}`, 404);
	}

	let AuthorName;
	if (req.body.author) {
		AuthorName = await bcrypt.hash(req.body.author, salt);
	}

	const Comment: CommentModel = {
		...req.body,
		thread_id: req.params.THREADID,
		createdAt: Date.now(),
		author: AuthorName ?? "Anonymous#" + Math.random().toString(36).substring(2, 6),
		id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
	};

	await db.data.threads({ id: req.params.THREADID }).comments({ id: req.params.COMMENTID }).comments().push(Comment);
	res.send({ success: "comment added", Comment });
});

export default router;
