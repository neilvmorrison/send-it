import { Forum } from ".prisma/client";
import { prisma } from "@/utils/prisma";

import makeSlug from "@/utils/helpers/makeSlug";

interface ICreateForum {
  name: string;
  description: string;
  isNsfw?: boolean;
  isPrivate?: boolean;
}

export async function createForum(payload: ICreateForum): Promise<Forum> {
  const newPayload = {
    ...payload,
    slug: makeSlug(payload.name),
  };
  const createdForum = await prisma.forum.create({ data: newPayload });
  return createdForum;
}

export async function getForumBySlug(slug: string): Promise<Forum | null> {
  return prisma.forum.findUnique({ where: { slug } });
}

// get popular forums

// get subscribed forums

// update existing forum

export async function updateForum(
  slug: string,
  payload: Partial<Forum>
): Promise<Forum> {
  return prisma.forum.update({ where: { slug }, data: { ...payload } });
}

// add admin to forum

// remove admin from forum

// subscribe to forum

// ban user from forum
