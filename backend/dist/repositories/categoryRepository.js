"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategory = void 0;
const client_1 = require(".prisma/client");
const prisma = new client_1.PrismaClient();
const createCategory = async (data) => {
    return await prisma.category.create({ data });
};
exports.createCategory = createCategory;
