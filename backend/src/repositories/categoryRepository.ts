import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

export const createCategory = async (data: { name: string }) => {
  return await prisma.category.create({ data });
};