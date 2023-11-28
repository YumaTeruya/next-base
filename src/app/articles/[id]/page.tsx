import React from "react";
import { getDetailArticles } from "../../../blogApi";
import DeleteButton from "@/app/components/DeleteButton";

const Article = async ({ params }: { params: { id: string } }) => {
  const res = await getDetailArticles(params.id);

  return (
    <>
      <div>{res.contents}</div>
      <DeleteButton id={params.id} />
    </>
  );
};

export default Article;
