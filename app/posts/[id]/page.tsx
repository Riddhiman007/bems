import Editor, { DisplayContent } from "@/components/Editor";
import { fetchAllComments, fetchAllPosts, fetchPost } from "@/lib/prisma";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import { SerializedEditorState } from "lexical";
import React, { Suspense } from "react";
import { CreateComment } from "./components";
import { auth } from "@/lib/auth";

// export const dynamic = "error";
export const dynamicParams = true;
export async function generateStaticParams() {
  let allPosts = await fetchAllPosts();
  return allPosts.map((post) => ({ id: post.id }));
}
export default async function Post({ params: { id } }: { params: { id: string } }) {
  let post = await fetchPost(id);
  const session = await auth();
  if (!post) {
    return (
      <Card className="mx-auto mt-10">
        <CardContent className="flex flex-row px-4 py-3 align-middle text-lg ">
          <Typography>Sorry, can&apos;t find a post</Typography>
        </CardContent>
      </Card>
    );
  }
  const {
    StarredPost,
    author,
    category,
    content,
    desc,
    subCategory,
    title,
    id: postId,
  } = post;
  let allComments = await fetchAllComments(postId);
  return (
    <Container className="my-20 flex flex-col gap-7">
      <Box>
        <Typography className="text-center text-2xl font-bold md:text-4xl lg:text-6xl">
          {title}
        </Typography>

        <DisplayContent editorState={post?.content as unknown as SerializedEditorState} />
        <Box className="flex w-full flex-row justify-end">
          <Box className="flex flex-row gap-4">
            <Avatar>R</Avatar>
            <Box className="flex flex-col gap-1">
              <Typography className="text-sm font-semibold md:text-base lg:text-lg">
                {post?.author.fullname}
              </Typography>
              {author.role === "Student" && (
                <Box className="flex-col justify-self-end text-slate-800 dark:text-slate-300">
                  <Box className="flex flex-row justify-end gap-x-1">
                    <Typography className="text-xs md:text-sm lg:text-base">
                      {author.role}
                    </Typography>
                    <Typography className="text-xs italic md:text-sm lg:text-base dark:text-slate-400">
                      of
                    </Typography>
                    <Typography className="text-xs font-semibold italic md:text-sm lg:text-base dark:text-slate-200">
                      {author.student?.grade_name}
                    </Typography>
                  </Box>
                </Box>
              )}
              {author.role === "Teacher" && (
                <Box className="flex-col justify-self-end text-slate-800 dark:text-slate-200">
                  <Box className="flex flex-row justify-end gap-x-1">
                    <Typography className="text-xs md:text-sm lg:text-base">
                      {author.role}
                    </Typography>
                    <Typography className="text-xs italic md:text-sm lg:text-base">
                      of
                    </Typography>
                    <Typography className="text-xs font-semibold italic md:text-sm lg:text-base">
                      {author.teacher?.class?.grade}
                    </Typography>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box className="flex flex-col gap-4">
        <Typography className="text-xl font-semibold md:text-2xl lg:text-5xl">
          Comments
        </Typography>
        <Divider className="mx-2" />
        {session?.user && (
          <Box className="mx-2 flex w-full flex-col gap-3">
            <Typography className="text-lg font-medium md:text-xl lg:text-4xl">
              Your Comment
            </Typography>
            <Box className="flex w-full flex-row gap-4">
              <Avatar>{`${session.user.fullname.split(" ")[0][0]}${
                session.user.fullname.split(" ")[1][0]
              }`}</Avatar>
              <Box className="w-full rounded-md border border-solid px-4 py-2 dark:border-slate-200">
                <CreateComment postId={postId} userId={session.user.id} />
              </Box>
            </Box>
          </Box>
        )}
        <Divider className="mx-2" />
        <Box className="flex flex-col gap-4">
          <Suspense fallback={<Typography>Loading...</Typography>}>
            {allComments.map((comment) => (
              <Box className="flex flex-row gap-4" key={comment.id}>
                <Avatar>{`${comment.user.fullname.split(" ")[0][0]}${
                  comment.user.fullname.split(" ")[1][0]
                }`}</Avatar>
                <Box className=" rounded-md border border-solid px-4 py-2 dark:border-slate-200">
                  <DisplayContent
                    editorState={comment.content as unknown as SerializedEditorState}
                  />
                </Box>
              </Box>
            ))}
          </Suspense>
        </Box>
      </Box>
    </Container>
  );
}
