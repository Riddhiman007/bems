import { allStarredUsers, fetchAllPosts, isStarredPost } from "@/_lib/prisma";
import { Skeleton } from "@nextui-org/skeleton";
import React, { Suspense } from "react";
import PostCard from "./_components/PostCard";
import { auth } from "@/_lib/auth";
import { Search } from "@mui/icons-material";
import { Input } from "@nextui-org/input";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

const FallBack = () => {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row gap-2">
          <Skeleton className="size-8 rounded-full" />
          <div className="flex flex-col gap-1">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-2 w-6" />
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-col">
          <Skeleton className="size-12" />
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-4 w-12" />
        </CardBody>
      </Card>
    </>
  );
};
export default async function Posts() {
  const posts = await fetchAllPosts();
  const session = await auth();
  return (
    <div className="container mt-20 flex flex-col gap-7">
      <div className="flex flex-row justify-center">
        <Input
          classNames={{ input: "border-none" }}
          placeholder="Search posts..."
          startContent={<Search className="size-6 fill-default-400" />}
          variant="flat"
        />
      </div>
      {posts.length === 0 && (
        <div className="mt-10 flex flex-row justify-center">
          <h3 className="text-content4-foreground">Nothing to display...</h3>
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <Suspense fallback={<FallBack />}>
          {posts.map(async (post) => {
            const { id, title, desc } = post;
            let allStars = await allStarredUsers(id);
            const isStarred = await isStarredPost(id, session?.user?.id);
            return (
              <PostCard
                key={post.id}
                post={{
                  id,
                  title,
                  desc,
                  stars: allStars,
                  isStarred: isStarred?.id,
                }}
                session={session}
              />
            );
          })}
        </Suspense>
      </div>
    </div>
  );
}
