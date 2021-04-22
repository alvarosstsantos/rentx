"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("reflect-metadata");
require("dotenv/config");
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var upload_1 = __importDefault(require("@config/upload"));
var AppErrors_1 = require("@shared/errors/AppErrors");
var typeorm_1 = __importDefault(require("@shared/infra/typeorm"));
require("@shared/container");
var swagger_json_1 = __importDefault(require("../../../swagger.json"));
var routes_1 = require("./routes");
typeorm_1.default();
var app = express_1.default();
exports.app = app;
app.use(express_1.default.json());
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use("/avatar", express_1.default.static(upload_1.default.tmpFolder + "/avatar"));
app.use("/cars", express_1.default.static(upload_1.default.tmpFolder + "/cars"));
app.use(routes_1.router);
app.use(
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function (err, request, response, next) {
    if (err instanceof AppErrors_1.AppError) {
        return response.status(err.statusCode).json({
            message: err.message,
        });
    }
    return response.status(500).json({
        status: "error",
        message: "internal server error - " + err.message,
    });
});
