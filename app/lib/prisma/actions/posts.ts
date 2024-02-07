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
  return await prisma.starredPost.create({ data: { postId: post_id, userId: user_id } });
}
export async function removeStar(id: string) {
  await prisma.starredPost.delete({ where: { id } });
}

export async function isStarredPost(postId: string, userId?: string) {
  if (userId) {
    let starredPost = await prisma.starredPost.findUnique({
      where: { postId_userId: { postId, userId } },
    });
    return starredPost;
  }
  // return false;
}

export async function fetchAllStarredUsers(postId: string) {
  let t = await prisma.starredPost.findMany({ where: { postId } });
  // revalidatePath("/posts");
  return t;
}
