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
const lambert_server_1 = require("lambert-server");
const lambert_db_1 = require("lambert-db");
const db = new lambert_db_1.MongoDatabase();
const fs_1 = __importDefault(require("fs"));
const bcrypt_1 = __importDefault(require("bcrypt"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const config_ = fs_1.default.readFileSync(__dirname + "/config.json");
        const config = JSON.parse(config_.toString());
        if (!config || !config.salt) {
            throw "config missing";
        }
    }
    catch (error) {
        console.warn("No Config.json");
        const salt = yield bcrypt_1.default.genSalt(Math.floor(Math.random() * 1000) + 1);
        fs_1.default.writeFileSync(__dirname + "/config.json", JSON.stringify({ salt }));
    }
}))();
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield db.init();
    const server = new lambert_server_1.Server();
    yield server.registerRoutes(__dirname + "/routes/");
    yield server.start();
}))();
exports.default = db;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBbUQ7QUFDbkQsMkNBQXFEO0FBQ3JELE1BQU0sRUFBRSxHQUFhLElBQUksMEJBQWEsRUFBRSxDQUFDO0FBQ3pDLDRDQUFvQjtBQUNwQixvREFBNEI7QUFFNUIsQ0FBQyxHQUFTLEVBQUU7SUFDWCxJQUFJO1FBQ0gsTUFBTSxPQUFPLEdBQUcsWUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLENBQUM7UUFDNUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUM1QixNQUFNLGdCQUFnQixDQUFDO1NBQ3ZCO0tBQ0Q7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMvQixNQUFNLElBQUksR0FBRyxNQUFNLGdCQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLFlBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3ZFO0FBQ0YsQ0FBQyxDQUFBLENBQUMsRUFBRSxDQUFDO0FBRUwsQ0FBQyxHQUFTLEVBQUU7SUFDWCxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixNQUFNLE1BQU0sR0FBRyxJQUFJLHVCQUFNLEVBQUUsQ0FBQztJQUM1QixNQUFNLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDO0lBQ3BELE1BQU0sTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3RCLENBQUMsQ0FBQSxDQUFDLEVBQUUsQ0FBQztBQUVMLGtCQUFlLEVBQUUsQ0FBQyJ9