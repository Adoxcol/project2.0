"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postsController_1 = require("../controllers/postsController");
const router = express_1.default.Router();
router.get('/', postsController_1.getPosts);
router.post('/', postsController_1.createPostHandler);
exports.default = router;
