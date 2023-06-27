import { Profile } from ".prisma/client";
import { prisma } from "@/utils/prisma";
import { getRandomDefaultColor } from "./utils";

interface ICreateProfile {
  username: string;
  userId: string;
  color?: string;
}

export async function createProfile(payload: ICreateProfile): Promise<Profile> {
  const newPayload = {
    ...payload,
    color: payload.color || getRandomDefaultColor(),
  };
  return prisma.profile.create({ data: newPayload });
}

export async function getProfileById(id: string): Promise<Profile | null> {
  return prisma.profile.findFirst({ where: { id } });
}

export async function getProfilesByUserId(
  userId: string
): Promise<Profile[] | null> {
  return prisma.profile.findMany({ where: { userId } });
}

export async function updateProfile(
  id: string,
  payload: Partial<Profile>
): Promise<Profile> {
  return prisma.profile.update({ where: { id }, data: payload });
}

export async function deleteProfile(id: string): Promise<null> {
  await prisma.profile.update({
    where: { id },
    data: { deletedAt: new Date(Date.now()) },
  });
  return null;
}
