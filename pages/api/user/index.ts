import type { NextApiRequest, NextApiResponse } from "next";
import { User } from ".prisma/client";
import { createUser } from "./user.service";
import { createProfile } from "../profile/profile.service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | Error>
) {
  if (req.method === "POST") {
    const { body } = req;
    try {
      const user = await createUser(body);
      if (user) {
        await createProfile({ userId: user.id, username: user.email });
      }
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  }
}
