import { NextRequest } from "next/server";
import { handlers } from "@/lib/auth";

export const runtime = "nodejs";
const { GET: AuthGET, POST } = handlers;
export { POST };

export async function GET(request: NextRequest) {
  const res = await AuthGET(request);
  return res;
}
