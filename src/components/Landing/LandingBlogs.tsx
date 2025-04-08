import React from "react";
import { articles } from "../../core/constants/mock/ArticelsMock";
import ArticleCard from "../cards/landing/ui/ArticlesSec";

const ArticlesSection: React.FC = () => {
  return (
    <section className="w-4/5 mx-auto py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">اخبار و مقالات</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="bg-white shadow-md p-5 rounded-lg">
          <img
            src="https://source.unsplash.com/500x300/?study"
            alt="مقاله اصلی"
            className="w-full rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold">
            چگونه مطالعه موثر را برای شما آسان‌تر کنیم.
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و طراحی
            گرافیک...
          </p>
          <div className="flex items-center text-xs text-gray-500 mt-2">
            <span>۱۴۰۳/۰۷/۰۲</span>
            <span className="mx-2">•</span>
            <span>۲۳ بازدید</span>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
          مشاهده همه
        </button>
      </div>
    </section>
  );
};

export default ArticlesSection;
