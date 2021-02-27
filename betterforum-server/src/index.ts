import { Server, HTTPError } from "lambert-server";
import { MongoDatabase, Database } from "lambert-db";
const db: Database = new MongoDatabase();

(async () => {
	await db.init();
	const server = new Server();
	await server.registerRoutes(__dirname + "/routes/");
	await server.start();
})();

export default db;
