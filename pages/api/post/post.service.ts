import { Post } from ".prisma/client";
import { prisma } from "@/utils/prisma";

export function createPost(payload: Post): Promise<Post> {
  return prisma.post.create({ data: payload });
}

// export function getPostByPostId(id: string): Promise<Post | undefined> {
//   return undefined;
// }
