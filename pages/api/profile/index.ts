import type { NextApiRequest, NextApiResponse } from "next";
import { Profile } from ".prisma/client";
import { createProfile } from "./profile.service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Profile | Error>
) {
  if (req.method === "POST") {
    const { body } = req;
    try {
      const profile = await createProfile(body);
      res.status(200).json(profile);
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  }

  if (req.method === "GET") {
    console.log(req);
  }
}
