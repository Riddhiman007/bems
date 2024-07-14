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
          <Container>
            <Section>
              <Text className="text-2xl font-bold">
                Welcome to Braves English Medium School
              </Text>
            </Section>
            <Section>
              <Text>Dear {fullname || "user"},</Text>
              <Text>Please click on the below button to complete your login.</Text>
            </Section>
            <Section>
              <Button
                className="border-success-50 bg-success px-4 py-2 text-success-foreground"
                href={url}
              >
                Login
              </Button>
            </Section>
            <Section>
              <Text className="text-center text-sm text-secondary-foreground">
                If you did&apos;t request it, you can safely ignore it.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
