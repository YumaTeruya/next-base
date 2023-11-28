import { resolve } from "path";
import { Article } from "./types";
import { notFound } from "next/navigation";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch("http://localhost:3001/posts", { cache: "no-store" });

  if (!res.ok) {
    throw new Error("errrrrroooooooor");
  }

  await new Promise((resolve) => setTimeout(resolve, 1500));

  const articles = res.json();
  return articles;
};

export const getDetailArticles = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    next: { revalidate: 60 },
  });

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("errrrrroooooooor");
  }

  await new Promise((resolve) => setTimeout(resolve, 1500));

  const articles = res.json();
  return articles;
};

export const createArticle = async (
  id: string,
  title: string,
  contents: string
): Promise<Article> => {
  const currentDate = new Date().toISOString();

  const res = await fetch(`http://localhost:3001/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, title, contents, createdAt: currentDate }),
  });

  if (!res.ok) {
    throw new Error("errrrrroooooooor");
  }

  await new Promise((resolve) => setTimeout(resolve, 1500));

  const newArticles = res.json();
  return newArticles;
};

export const deleteArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("errrrrroooooooor");
  }

  await new Promise((resolve) => setTimeout(resolve, 1500));

  const deleteArticles = res.json();
  return deleteArticles;
};
