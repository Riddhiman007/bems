import { fetchAllPosts } from "@/lib/prisma";
import { Container } from "@mui/material";
import React from "react";
import { PostCard } from "./components";
import { auth } from "@/lib/auth";
export default async function Posts() {
  const posts = await fetchAllPosts();
  const session = await auth();
  return (
    <Container className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {posts.map((post) => {
        const { id, title, desc } = post;
        return <PostCard key={post.id} post={{ id, title, desc }} session={session} />;
      })}
    </Container>
  );
}
