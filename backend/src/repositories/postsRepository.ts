import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

export const findAllPosts = async () => {
  return await prisma.post.findMany();
};