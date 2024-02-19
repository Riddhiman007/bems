"use client";
import { MotionButton } from "@/components/Motion";
import { addStar, removeStar } from "@/lib/prisma";
import { Star, StarBorder } from "@mui/icons-material";
import { Chip } from "@mui/material";
import { Session } from "next-auth";
import React, { useState } from "react";
export const revalidate = 5;
export default function StarPost({
  session,
  stars,
  postId,
  isStarred,
}: {
  stars: number;
  postId: string;
  session: Session | null;
  isStarred?: string;
}) {
  const [isPostStarred, setIsPostStarred] = useState({
    isStarred: Boolean(isStarred),
    stars,
  });
  const [starId, setStarId] = useState(isStarred);
  const handleStar = async () => {
    if (session?.user) {
      if (isPostStarred.isStarred) {
        setIsPostStarred({ isStarred: false, stars: isPostStarred.stars - 1 });
        // @ts-ignore
        await removeStar(starId);
        setStarId(undefined);
      } else {
        setIsPostStarred({ isStarred: true, stars: isPostStarred.stars + 1 });
        let res = await addStar(session.user.id, postId);
        setStarId(res.id);
      }
    }
  };
  return (
    <Chip
      component={MotionButton}
      label={isPostStarred.stars.toString()}
      whileTap={{ scale: 1.1 }}
      onClick={handleStar}
      icon={
        isPostStarred.isStarred ? (
          <Star className="text-yellow-500" />
        ) : (
          <StarBorder className="dark:text-slate-50" />
        )
      }
    />
  );
}
