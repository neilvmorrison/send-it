import { Forum } from ".prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { createForum } from "./forum.service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Forum | string>
) {
  if (req.method === "GET") {
    res.status(200).send("Forum endpoint");
  }

  if (req.method === "POST") {
    const forum = await createForum(req.body);
    res.status(200).json(forum);
  }
}
