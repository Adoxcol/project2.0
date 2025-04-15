"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findProfileByUserId = void 0;
const client_1 = require(".prisma/client");
const prisma = new client_1.PrismaClient();
const findProfileByUserId = async (userId) => {
    return await prisma.profile.findUnique({ where: { userId } });
};
exports.findProfileByUserId = findProfileByUserId;
