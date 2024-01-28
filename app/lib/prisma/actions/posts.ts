"use server";

import { auth } from "@/lib/auth";
import prisma, { PostFields } from "..";
import { Session } from "next-auth";
import { redirect } from "next/navigation";
export async function createPost({
  category,
  content,
  subCategory,
  title,
  desc,
}: PostFields) {
  const session = await auth();
  if (session) {
    const { user } = session;
    console.log("retrieved logged user");
    console.log(`before push: ${{ category, content, subCategory, title, desc }}`);
    const post = await prisma.post.create({
      data: {
        category,
        subCategory,
        desc,
        title,
        author: { connect: { id: user?.id } },
        content: content,
      },
    });
    console.log(post + "\n Created post successfully.");
    return post;
  }
  redirect("/err?code=unauthenticated");
  // let post = await prisma.post.create({data:{}})
}
