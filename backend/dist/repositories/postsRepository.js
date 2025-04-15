"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = exports.findAllPosts = void 0;
const client_1 = require(".prisma/client");
const prisma = new client_1.PrismaClient();
const findAllPosts = async () => {
    return await prisma.post.findMany();
};
exports.findAllPosts = findAllPosts;
const createPost = async (data) => {
    return await prisma.post.create({ data });
};
exports.createPost = createPost;
