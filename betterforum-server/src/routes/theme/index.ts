import { Router, Request, Response } from "express";
import { HTTPError, check } from "lambert-server";
import db from "./../../index";
import { disablePOSTPUT } from "../../flags.json";

const router = Router();

const Theme = {
	theme: String,
};

router.put("/", check(Theme), async (req: Request, res: Response) => {
	if (disablePOSTPUT) {
		throw new HTTPError("this method is disabled on the showcase REST", 405);
	}
	await db.data.config({}).set({ theme: req.body.theme });
	res.status(201).send({ status: "set new default theme" });
});

router.get("/", async (req: Request, res: Response) => {
	const { theme } = await db.data.config({}).get({ theme: true, _id: false });
	res.status(200).send({ theme });
});

export default router;
