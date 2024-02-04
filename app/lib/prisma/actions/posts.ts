"use server";
import { auth } from "@/lib/auth";
import prisma, { PostFields } from "..";
import { Session } from "next-auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

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
        // @ts-ignore
        content: content,
      },
    });
    console.log(post + "\n Created post successfully.");
    revalidatePath("/posts");
    return post;
  }
  redirect("/err?code=unauthenticated");
  // let post = await prisma.post.create({data:{}})
}

export async function fetchPost(id: string) {
  return await prisma.post.findUnique({
    where: { id },
    include: {
      author: {
        include: {
          student: { select: { grade_name: true } },
          teacher: { select: { class: { select: { grade: true } } } },
        },
      },
      StarredPost: true,
    },
  });
}

export async function fetchAllPosts() {
  return await prisma.post.findMany({
    include: {
      author: {
        include: {
          student: { select: { grade_name: true } },
          teacher: { select: { class: { select: { grade: true } } } },
        },
      },
      StarredPost: true,
    },
  });
}

export async function addStar(user_id: string, post_id: string) {
  let t = await prisma.post.update({
    data: { StarredPost: { create: { starringUser: { connect: { id: user_id } } } } },
    where: { id: post_id },
    include: { StarredPost: true },
  });
  return t;
}
export async function removeStar(star_id: string, post_id: string) {
  await prisma.post.update({
    where: { id: post_id },
    data: { StarredPost: { delete: { id: star_id } } },
  });
}
