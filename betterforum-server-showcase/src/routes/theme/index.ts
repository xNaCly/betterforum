import { Router, Request, Response } from "express";
import { HTTPError, check } from "lambert-server";
import db from "./../../index";

const router = Router();

const Theme = {
	theme: String,
};

// router.put("/", check(Theme), async (req: Request, res: Response) => {
// 	await db.data.config({}).set({ theme: req.body.theme });
// 	res.status(201).send({ status: "set new default theme" });
// });

router.get("/", async (req: Request, res: Response) => {
	const { theme } = await db.data.config({}).get({ theme: true, _id: false });
	res.status(200).send({ theme });
});

export default router;
