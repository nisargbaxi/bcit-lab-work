"use server";
import { db } from "@/db";
import { redirect } from "next/navigation";

export default async function deleteCodeBlock(id: number) {
  await db.codeblock.delete({ where: { id: id } });
}

export async function loadData(id: number) {
  "use server";
  const data = await db.codeblock.findFirst({
    where: {
      id: id,
    },
  });

  return data;
}

export async function fetchData(id: number) {
  "use server";
  const data = await db.codeblock.findFirst({
    where: {
      id: id,
    },
  });

  return data;
}

export async function updateCodeBlock(formData: FormData) {
  "use server";
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;
  const recordId = parseInt(formData.get("id") as string);
  if (title && code && recordId > 0) {
    await db.codeblock.update({
      data: {
        title,
        code,
      },
      where: {
        id: recordId,
      },
    });
    redirect("/");
  }
}

export async function updateCodeBlockRating(
  id: number | undefined,
  rating: number
) {
  "use server";
  await db.codeblock.update({
    data: {
      rating: rating,
    },
    where: {
      id: id,
    },
  });
}

export async function createCodeBlock(formData: FormData) {
  "use server";
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;
  if (title && code) {
    await db.codeblock.create({
      data: {
        title,
        code,
        rating: 3,
      },
    });
    redirect("/");
  }
}
