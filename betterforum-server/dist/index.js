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
Object.defineProperty(exports, "__esModule", { value: true });
const lambert_server_1 = require("lambert-server");
const lambert_db_1 = require("lambert-db");
const db = new lambert_db_1.MongoDatabase();
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield db.init();
    const server = new lambert_server_1.Server();
    yield server.registerRoutes(__dirname + "/routes/");
    yield server.start();
}))();
exports.default = db;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxtREFBbUQ7QUFDbkQsMkNBQXFEO0FBQ3JELE1BQU0sRUFBRSxHQUFhLElBQUksMEJBQWEsRUFBRSxDQUFDO0FBRXpDLENBQUMsR0FBUyxFQUFFO0lBQ1gsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsTUFBTSxNQUFNLEdBQUcsSUFBSSx1QkFBTSxFQUFFLENBQUM7SUFDNUIsTUFBTSxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUNwRCxNQUFNLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN0QixDQUFDLENBQUEsQ0FBQyxFQUFFLENBQUM7QUFFTCxrQkFBZSxFQUFFLENBQUMifQ==