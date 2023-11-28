import { Article } from "@/types";
import React from "react";
import ArticleCard from "./ArticleCard";

type ArticleListProps = {
  articles: Article[];
};

function ArticleList({ articles }: ArticleListProps) {
  return (
    <div>
      {articles.map((article) => (
        <ArticleCard article={article} />
      ))}
    </div>
  );
}

export default ArticleList;
