import { User, Profile } from ".prisma/client";
import { prisma } from "@/utils/prisma";
import { v4 } from "uuid";

interface ICreateUser {
  email: string;
}

export async function createUser(payload: ICreateUser): Promise<User> {
  return prisma.user.create({
    data: payload,
  });
}

// export async function getProfileById(id: string): Promise<Profile | null> {
//   return prisma.profile.findFirst({ where: { id } });
// }

// export async function getProfilesByUserId(
//   userId: string
// ): Promise<Profile[] | null> {
//   return prisma.profile.findMany({ where: { userId } });
// }

// export async function updateProfile(
//   id: string,
//   payload: Partial<Profile>
// ): Promise<Profile> {
//   return prisma.profile.update({ where: { id }, data: payload });
// }

// export async function deleteProfile(id: string): Promise<null> {
//   await prisma.profile.update({
//     where: { id },
//     data: { deletedAt: new Date(Date.now()) },
//   });
//   return null;
// }
