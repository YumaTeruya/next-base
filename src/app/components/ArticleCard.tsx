import React from "react";
import Link from "next/link";
import type { Article } from "../../types";

type ArticleCardProps = {
  article: Article;
};

const ArticleCart = ({ article }: ArticleCardProps) => {
  return (
    <div key={article.id}>
      <div>{article.title}</div>
      <div>
        {article.contents.length > 10
          ? `${article.contents.substring(0, 10)}...`
          : article.contents}
      </div>
      <div>{article.createdAt}</div>
      <Link href={`/articles/${article.id}`}>詳細を見る</Link>
    </div>
  );
};

export default ArticleCart;
