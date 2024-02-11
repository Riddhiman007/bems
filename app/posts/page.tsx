import { allStarredUsers, fetchAllPosts, isStarredPost } from "@/lib/prisma";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  InputAdornment,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import React, { Suspense } from "react";
import { PostCard } from "./components";
import { auth } from "@/lib/auth";
import { Search } from "@mui/icons-material";

const FallBack = () => {
  return (
    <>
      <Card className="dark:bg-slate-900">
        <CardMedia>
          <Skeleton height={200} width={200} />
        </CardMedia>
        <CardContent className="flex flex-col gap-2">
          <Skeleton height={20} width="10rem" />
          <Skeleton height={14} width="10rem" />
          <Skeleton height={10} width="10rem" />
        </CardContent>
      </Card>
    </>
  );
};
export default async function Posts() {
  const posts = await fetchAllPosts();
  const session = await auth();
  return (
    <Container className="mt-20 flex flex-col gap-7">
      <Box className="flex flex-row justify-center">
        <TextField
          className=""
          placeholder="Search posts..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          variant="filled"
        />
      </Box>
      <Box className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <Suspense fallback={<FallBack />}>
          {posts.map(async (post) => {
            const { id, title, desc } = post;
            let isStarred = await isStarredPost(id, session?.user?.id);
            let allStars = await allStarredUsers(id);
            return (
              <PostCard
                key={post.id}
                post={{
                  id,
                  title,
                  desc,
                  isStarred: isStarred?.id,
                  stars: allStars,
                }}
                session={session}
              />
            );
          })}
        </Suspense>
      </Box>
    </Container>
  );
}
