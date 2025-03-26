import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

export const findAllPosts = async () => {
  return await prisma.post.findMany();
};

export const createPost = async (data: { title: string; content: string; authorId: number }) => {
  return await prisma.post.create({ data });
};