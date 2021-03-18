import { Server, HTTPError } from "lambert-server";
import { MongoDatabase, Database } from "lambert-db";
const db: Database = new MongoDatabase();
import fs from "fs";
import bcrypt from "bcrypt";

(async () => {
	try {
		const config_ = fs.readFileSync(__dirname + "/config.json");
		const config = JSON.parse(config_.toString());
		if (!config || !config.salt) {
			throw "config missing";
		}
	} catch (error) {
		console.warn("No Config.json");
		const salt = await bcrypt.genSalt(Math.floor(Math.random() * 1000) + 1);
		fs.writeFileSync(__dirname + "/config.json", JSON.stringify({ salt }));
	}
})();

(async () => {
	await db.init();
	const server = new Server();
	await server.registerRoutes(__dirname + "/routes/");
	await server.start();
})();

export default db;
