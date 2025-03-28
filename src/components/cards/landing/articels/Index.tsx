import React from "react";
import { Article } from "../../../../core/constants/Types";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="flex gap-4 items-center p-4 bg-white shadow-md rounded-lg">
      <img
        src={article.image}
        alt={article.title}
        className="w-24 h-24 rounded-lg"
      />
      <div>
        <h3 className="text-lg font-semibold">{article.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">
          {article.description}
        </p>
        <div className="flex items-center text-xs text-gray-500 mt-2">
          <span>{article.date}</span>
          <span className="mx-2">•</span>
          <span>{article.views} بازدید</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
