"use client";

import type React from "react";

import { useState } from "react";
import { Calendar, Eye, ArrowLeft, Search } from "lucide-react";
import { motion } from "framer-motion";

interface Article {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
  views: number;
  category: string;
}

export default function ArticlesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("همه");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const categories = ["همه", "برنامه نویسی", "طراحی", "هوش مصنوعی", "دیتابیس"];

  const articles: Article[] = [
    {
      id: 1,
      title: "چگونه مطالعه موثر را برای شما آسانتر کنیم.",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپارگراف و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.",
      image: "/placeholder.svg?height=200&width=300",
      date: "۱۴۰۲/۷/۲۲",
      views: 36,
      category: "برنامه نویسی",
    },
    {
      id: 2,
      title: "آموزش پایتون برای مبتدیان: از صفر تا صد",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپارگراف و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.",
      image: "/placeholder.svg?height=200&width=300",
      date: "۱۴۰۲/۷/۱۸",
      views: 42,
      category: "برنامه نویسی",
    },
    {
      id: 3,
      title: "اصول طراحی رابط کاربری مدرن",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپارگراف و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.",
      image: "/placeholder.svg?height=200&width=300",
      date: "۱۴۰۲/۷/۱۵",
      views: 29,
      category: "طراحی",
    },
    {
      id: 4,
      title: "چگونه مطالعه موثر را برای شما آسانتر کنیم.",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپارگراف و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.",
      image: "/placeholder.svg?height=400&width=600",
      date: "۱۴۰۲/۷/۱۰",
      views: 78,
      category: "هوش مصنوعی",
    },
  ];

  // Filter articles based on active category and search query
  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      activeCategory === "همه" || article.category === activeCategory;
    const matchesSearch =
      article.title.includes(searchQuery) ||
      article.content.includes(searchQuery);
    return matchesCategory && (searchQuery === "" || matchesSearch);
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate search delay
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full bg-white py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex justify-center mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 relative">
            <span className="relative z-10">اخبار و مقالات</span>
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-100 via-blue-400 to-gray-100 transform -translate-y-2 -mb-4"></span>
          </h2>
        </div>

        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 justify-center rtl">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-blue-500 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <form onSubmit={handleSearch} className="relative w-full md:w-64 rtl">
            <input
              type="text"
              placeholder="جستجو در مقالات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              aria-label="جستجو"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-t-blue-500 border-r-blue-500 border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              ) : (
                <Search className="w-5 h-5" />
              )}
            </button>
          </form>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Featured article (larger) */}
          {filteredArticles.length > 0 && (
            <motion.div className="lg:col-span-1 rtl" variants={item}>
              <div className="h-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col p-6 h-full">
                  <div className="h-1/2 w-full">
                    <img
                      src={filteredArticles[0].image || "/placeholder.svg"}
                      alt={filteredArticles[0].title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full p-6 flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-3">
                        {filteredArticles[0].category}
                      </span>
                      <h3 className="text-xl font-bold mb-3">
                        {filteredArticles[0].title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {filteredArticles[0].content}
                      </p>
                    </div>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{filteredArticles[0].date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3.5 w-3.5" />
                        <span>{filteredArticles[0].views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Regular articles (smaller) */}
          <div className="lg:col-span-1">
            <motion.div className="space-y-6 rtl" variants={container}>
              {filteredArticles.slice(1, 4).map((article) => (
                <motion.div
                  key={article.id}
                  className="flex gap-4 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                  variants={item}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-1/3 overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-2/3 p-4 flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-2">
                        {article.category}
                      </span>
                      <h3 className="text-lg font-bold mb-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-xs line-clamp-2">
                        {article.content}
                      </p>
                    </div>
                    <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3.5 w-3.5" />
                        <span>{article.views}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <p className="text-gray-600">مقاله‌ای با این مشخصات یافت نشد.</p>
          </div>
        )}

        <div className="flex justify-center mt-10">
          <button className="btn btn-primary px-8 rounded-full group relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              مشاهده همه
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
