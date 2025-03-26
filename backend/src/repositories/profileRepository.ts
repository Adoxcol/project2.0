import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

export const findProfileByUserId = async (userId: number) => {
  return await prisma.profile.findUnique({ where: { userId } });
};