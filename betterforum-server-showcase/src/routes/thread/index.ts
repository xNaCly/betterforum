import { Router, Request, Response } from "express";
import { HTTPError, check } from "lambert-server";
import { salt } from "./../../config.json";
import bcrypt from "bcrypt";
import { ThreadSchema, ThreadModel, ThreadCreateSchema } from "../../models/Thread";
import db from "./../../index";

const router = Router();

// router.post("/", check(ThreadCreateSchema), async (req: Request, res: Response) => {
// 	let AuthorName;
// 	if (req.body.author) {
// 		AuthorName = await bcrypt.hash(req.body.author, salt);
// 	}

// 	let thread: ThreadModel = {
// 		...req.body,
// 		author: AuthorName ?? "Anonymous#" + Math.random().toString(36).substring(2, 6),
// 		image: req.body.image,
// 		comments: [],
// 		createdAt: Date.now(),
// 		id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
// 	};

// 	await db.data.threads.push(thread);
// 	res.status(201).send({ status: "created thread", thread });
// });

router.get("/", async (req: Request, res: Response) => {
	const threads = await db.data.threads().get({ _id: false, comments: false });
	res.status(200).send(threads);
});

export default router;
