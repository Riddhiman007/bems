"use client";
import { Star, StarBorder } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import testImg from "@/explosion.png";
import { MotionButton } from "@/components/Motion";
import { Session } from "next-auth";
import Link from "next/link";
import { addStar, removeStar } from "@/lib/prisma";
interface Post {
  id: string;
  title: string;
  desc?: string | null;
}
export default function PostCard({
  key,
  post: { id, title, desc },
  session,
}: {
  key: string;
  post: Post;
  session: Session | null;
}) {
  const [isStarred, setIsStarred] = useState<any>(false);

  const handleStar = () => {
    if (isStarred && session?.user) {
      removeStar(isStarred.StarredPost.id, id).then(() => setIsStarred(false));
    }
    if (!isStarred && session?.user) {
      let t = addStar(session.user?.id, id).then((val) => {
        setIsStarred(val);
      });
    }
  };

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
      <CardActions className="flex flex-row justify-end">
        <IconButton
          component={MotionButton}
          whileTap={{ scale: 1.1 }}
          onClick={handleStar}
        >
          {isStarred ? (
            <Star className="text-yellow-500" />
          ) : (
            <StarBorder className="dark:text-slate-50" />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
}
