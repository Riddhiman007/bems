"use client";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

import Image from "next/image";
import React from "react";
import StarPost from "./StarPost";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
interface Post {
  id: string;
  title: string;
  stars: number;
  desc?: string | null;
  isStarred?: string;
}
export default function PostCard({
  post: { id, title, desc, stars, isStarred },
  session,
}: {
  post: Post;
  session: Session | null;
}) {
  const router = useRouter();
  return (
    <Card onPress={() => router.push(`/posts/${id}`)}>
      <CardHeader className="flex w-auto flex-row">
        <Avatar ImgComponent={Image}>R</Avatar>
      </CardHeader>
      <Divider />
      {/* <Image src={testImg} alt="test" className="inset-0 mx-auto max-h-[200px]" /> */}

      <CardBody className="flex w-auto flex-col gap-1">
        <h4 className="text-3xl font-bold">{title}</h4>
        {desc && <p className="">{desc}</p>}
      </CardBody>
      <Divider />
      <CardFooter className="flex w-auto flex-col justify-center">
        <div className="flex w-full flex-row justify-end">
          <StarPost postId={id} session={session} stars={stars} isStarred={isStarred} />
        </div>
      </CardFooter>
    </Card>
  );
}
