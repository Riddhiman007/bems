import { allStarredUsers, fetchAllPosts } from "@/lib/prisma";
import {
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
import PostCard from "./components/PostCard";
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
      <div className="flex flex-row justify-center">
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
      </div>
      {posts.length === 0 && (
        <div className="mt-10 flex flex-row justify-center">
          <Typography className="dark:text-slate-700" variant="h3">
            Nothing to display...
          </Typography>
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <Suspense fallback={<FallBack />}>
          {posts.map(async (post) => {
            const { id, title, desc } = post;
            let allStars = await allStarredUsers(id);
            return (
              <PostCard
                key={post.id}
                post={{
                  id,
                  title,
                  desc,
                  stars: allStars,
                }}
                session={session}
              />
            );
          })}
        </Suspense>
      </div>
    </Container>
  );
}
