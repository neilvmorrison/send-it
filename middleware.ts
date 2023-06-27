import type { NextApiRequest } from "next";
import { middleware1, middleware2 } from "./middlewares";
import { NextResponse } from "next/server";

export default async function middleware(request: NextApiRequest) {
  const response = NextResponse.next();
  const compositeMiddleware = [middleware1, middleware2];
  await Promise.all(
    compositeMiddleware.map(async (ware) => {
      await ware();
    })
  );
}
