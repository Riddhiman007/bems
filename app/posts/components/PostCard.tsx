import {
  Avatar,
  div,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import testImg from "@/explosion.png";
import Link from "next/link";
import StarPost from "./StarPost";
import { isStarredPost } from "@/lib/prisma";
import { Session } from "next-auth";
interface Post {
  id: string;
  title: string;
  stars: number;
  desc?: string | null;
}
export default async function PostCard({
  post: { id, title, desc, stars },
  session,
}: {
  post: Post;
  session: Session | null;
}) {
  const isStarred = await isStarredPost(id, session?.user?.id);
  return (
    <Card className="dark:bg-slate-900">
      <CardActionArea component={Link} href={`/posts/${id}`}>
        <CardHeader
          className="flex flex-row"
          avatar={
            <Avatar className="border-2 border-solid border-transparent ring-2 ring-white">
              R
            </Avatar>
          }
          title="Riddhiman"
          titleTypographyProps={{ variant: "h6" }}
          subheader="Student"
          subheaderTypographyProps={{ className: "dark:text-slate-100 text-sm" }}
        />

        <CardMedia className="flex flex-row items-stretch justify-stretch">
          <Image src={testImg} alt="test" className="inset-0 mx-auto max-h-[200px]" />
        </CardMedia>
        <CardContent className="flex flex-col gap-1">
          <Typography className="text-3xl font-bold">{title}</Typography>
          {desc && <Typography className="">{desc}</Typography>}
        </CardContent>
      </CardActionArea>
      <Divider />
      <CardActions className="flex flex-col justify-center">
        <div className="flex w-full flex-row justify-end">
          <StarPost
            postId={id}
            session={session}
            stars={stars}
            isStarred={isStarred?.id}
          />
        </div>
      </CardActions>
    </Card>
  );
}
