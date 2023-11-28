"use client";
import React from "react";
import { deleteArticle } from "../../blogApi";
import { useRouter } from "next/navigation";

type DeleteButtonProps = {
  id: string;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    await deleteArticle(id);

    router.push("/");
    router.refresh();
  };

  return <button onClick={handleDelete}>削除</button>;
};

export default DeleteButton;
