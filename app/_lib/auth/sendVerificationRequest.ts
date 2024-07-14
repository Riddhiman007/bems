import { NodemailerConfig } from "next-auth/providers/nodemailer";
import { Theme } from "@auth/core/types";
import { createTransport } from "nodemailer";
import { render } from "@react-email/render";
import { EmailTemplate } from "@/_components/ui";
import prisma from "@/_lib/prisma";

export async function sendVerificationRequest({
  provider,
  url,
  identifier,
}: {
  identifier: string;
  url: string;
  expires: Date;
  provider: NodemailerConfig;
  token: string;
  theme: Theme;
  request: Request;
}) {
  const user = await prisma.user.findUnique({
    where: { email: identifier },
    select: { fullname: true },
  });
  const transport = createTransport(provider.server);
  const result = await transport.sendMail({
    to: identifier,
    from: provider.from,
    subject: `Sign in to BEMS`,
    text: `Click on ${url} to sign in.`,
    html: render(EmailTemplate({ url, fullname: user?.fullname })),
  });
  const failed = result.rejected.concat(result.pending).filter(Boolean);
  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`);
  }
}
