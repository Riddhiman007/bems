import { DisplayContent } from "@/components/Editor";
import { fetchAllPosts, fetchPost } from "@/lib/prisma";
import { Avatar, Box, Card, CardContent, Container, Typography } from "@mui/material";
import { SerializedEditorState } from "lexical";
import React from "react";

// export async function generateStaticParams() {
//   let allPosts = await fetchAllPosts();
//   return {
//     params: {

//     }
//   };
// }
export default async function Post({ params: { id } }: { params: { id: string } }) {
  let post = await fetchPost(id);
  if (!post) {
    return (
      <Card className="mx-auto mt-10">
        <CardContent className="flex flex-row px-4 py-3 align-middle text-lg ">
          <Typography>Sorry, can&apos;t find a post</Typography>
        </CardContent>
      </Card>
    );
  }
  const { StarredPost, author, category, content, desc, subCategory, title } = post;
  return (
    <Container className="mt-20 flex flex-col gap-4">
      <Box>
        <Typography className="text-center text-2xl font-bold md:text-4xl lg:text-6xl">
          {title}
        </Typography>
      </Box>
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
    </Container>
  );
}
