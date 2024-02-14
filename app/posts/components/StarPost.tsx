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
  const [isPostStarred, setIsPostStarred] = useState(isStarred);

  const handleStar = () => {
    if (session?.user) {
      if (isPostStarred) {
        removeStar(isPostStarred).then(() => {
          setIsPostStarred(undefined);
        });
      } else {
        addStar(session.user.id, postId).then((val) => setIsPostStarred(val.id));
      }
    }
  };
  return (
    <Chip
      component={MotionButton}
      label={stars.toString()}
      whileTap={{ scale: 1.1 }}
      onClick={handleStar}
      icon={
        Boolean(isPostStarred) ? (
          <Star className="text-yellow-500" />
        ) : (
          <StarBorder className="dark:text-slate-50" />
        )
      }
    />
  );
}
