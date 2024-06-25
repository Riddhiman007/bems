"use client";
import { MotionButton } from "@/_components/Motion";
import { addStar, removeStar } from "@/_lib/prisma";
import { UnauthenticatedError } from "@/errors";
import { Star, StarBorder } from "@mui/icons-material";
import { Button } from "@nextui-org/button";
import { Session } from "next-auth";
import React, { useState, useReducer } from "react";
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
  const [starId, setStarId] = useState(isStarred);
  interface StarInfo {
    isStarred: Boolean;
    stars: number;
  }

  const [starInfo, dispatchStar] = useReducer<React.Reducer<StarInfo, "add" | "remove">>(
    (state, action) => {
      switch (action) {
        case "add":
          return { isStarred: true, stars: state.stars + 1 };
        case "remove":
          return { isStarred: false, stars: state.stars - 1 };
      }
    },
    {
      isStarred: Boolean(isStarred),
      stars,
    },
  );
  const handleStar = async () => {
    if (!session?.user) {
      throw new UnauthenticatedError();
    }
    if (starInfo.isStarred) {
      dispatchStar("remove");
      await removeStar(starId);
      setStarId(undefined);
    }
    if (!starInfo.isStarred) {
      dispatchStar("add");
      let res = await addStar(session.user.id, postId);
      setStarId(res.id);
    }
  };
  return (
    <Button
      as={MotionButton}
      whileTap={{ scale: 1.1 }}
      onPress={handleStar}
      size="sm"
      className="flex flex-row gap-2"
    >
      {starInfo.isStarred ? (
        <Star className="size-6 fill-yellow-500" />
      ) : (
        <StarBorder className="size-6 fill-default-foreground" />
      )}
      <p>{starInfo.stars}</p>
    </Button>
  );
}
