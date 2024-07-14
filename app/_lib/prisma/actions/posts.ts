"use server";
import { auth } from "@/_lib/auth";
import prisma from "..";
import { redirect } from "next/navigation";
import { revalidatePath, revalidateTag } from "next/cache";
import { SerializedEditorState } from "lexical";
import { PostInput } from "@/_utils/types";

export async function createPost({
  category,
  content,
  subCategory,
  title,
  desc,
}: PostInput) {
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
        // postedOn: new Date(Date.now()),
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
  let post = await prisma.post.findUnique({
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
  return post;
}

export async function fetchAllPosts() {
  let posts = await prisma.post.findMany({
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
  return posts;
}

export async function addStar(user_id: string, post_id: string) {
  let addedStar = await prisma.starredPost.create({
    data: { postId: post_id, userId: user_id },
  });
  revalidatePath("/posts");
  return addedStar;
}
export async function removeStar(id: string) {
  let removedStar = await prisma.starredPost.delete({ where: { id } });
  revalidateTag("/posts");
  return removedStar;
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

export async function allStarredUsers(postId: string) {
  let stars = await prisma.starredPost.count({ where: { postId } });
  return stars;
}

export async function createComment(
  content: SerializedEditorState,
  postId: string,
  userId: string,
) {
  let comment = await prisma.comment.create({
    data: {
      // @ts-ignore
      content: content,
      post: { connect: { id: postId } },
      user: { connect: { id: userId } },
    },
  });
  revalidatePath(`/posts/${postId}`);
  return comment;
}

export async function fetchAllComments(postId: string) {
  let comments = await prisma.comment.findMany({
    where: { postId },
    // orderBy: { createdOn: "desc" },
    include: { user: true },
  });
  return comments;
}
