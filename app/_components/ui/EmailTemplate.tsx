import React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import config from "@/tailwind.config";
interface Props {
  fullname?: string;
  url: string;
}
export default function EmailTemplate({ fullname, url }: Props) {
  return (
    <Html className="dark">
      <Head />
      <Preview>Login link for {fullname || "user"}</Preview>
      <Tailwind config={config}>
        <Body>
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px] dark:border-[#969faccf]">
            <Section className="mb-[20px]">
              <Text className="text-[28px] leading-[14px]">
                Welcome to <strong>Braves English Medium School</strong>
              </Text>
            </Section>
            <Section align="left">
              <Text className="text-[14px] leading-[10px]">
                Dear {fullname || "user"},
              </Text>
              <Text className="text-[14px] leading-[10px]">
                Please click on the below button to complete your login.
              </Text>
            </Section>
            <Section align="center">
              <Button
                className="border-success-50 bg-success px-4 py-2 text-success-foreground"
                href={url}
              >
                Login
              </Button>
            </Section>
            <Section align="center">
              <Text className="text-center text-[10px] font-light leading-[10px] text-[#656d7da7]">
                If you did&apos;t request it, you can safely ignore it.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
