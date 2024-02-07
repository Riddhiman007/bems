import { fetchAllPosts, fetchAllStarredUsers, isStarredPost } from "@/lib/prisma";
import { Box, Container, InputAdornment, TextField, Typography } from "@mui/material";
import React, { Suspense } from "react";
import { PostCard } from "./components";
import { auth } from "@/lib/auth";
import { Search } from "@mui/icons-material";
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
        <Suspense fallback={<Typography variant="h3">Loading...</Typography>}>
          {posts.map(async (post) => {
            const { id, title, desc } = post;
            let isStarred = await isStarredPost(id, session?.user?.id);
            let allStars = await fetchAllStarredUsers(id);
            return (
              <PostCard
                key={post.id}
                post={{
                  id,
                  title,
                  desc,
                  isStarred: isStarred?.id,
                  stars: allStars.length,
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
