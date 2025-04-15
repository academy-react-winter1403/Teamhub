"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Instructor {
  id: number;
  name: string;
  title: string;
  image: string;
  courses: number;
}

export default function InstructorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const instructors: Instructor[] = [
    {
      id: 1,
      name: "دکتر بحرالعلوم",
      title: "برنامه نویسی تحت فرانت‌اند و بک‌اند",
      image: "/placeholder.svg?height=300&width=300",
      courses: 20,
    },
    {
      id: 2,
      name: "مسعود هشمتی",
      title: "ریکت و انگولار",
      image: "/placeholder.svg?height=300&width=300",
      courses: 20,
    },
    {
      id: 3,
      name: "بهاره یزدانی",
      title: "طراحی محصول و رابط کاربری",
      image: "/placeholder.svg?height=300&width=300",
      courses: 20,
    },
    {
      id: 4,
      name: "سالار حیدری",
      title: "node.js, netcore, database, بک‌اند",
      image: "/placeholder.svg?height=300&width=300",
      courses: 20,
    },
    {
      id: 5,
      name: "محمد احمدی",
      title: "هوش مصنوعی و یادگیری ماشین",
      image: "/placeholder.svg?height=300&width=300",
      courses: 25,
    },
  ];

  const totalSlides = instructors.length;
  const visibleSlides =
    window?.innerWidth >= 1024 ? 3 : window?.innerWidth >= 768 ? 2 : 1;
  const maxIndex = Math.max(0, totalSlides - visibleSlides);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto slide functionality
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isHovering]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement === carouselRef.current) {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          nextSlide();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          prevSlide();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Calculate visible slides based on screen size
  useEffect(() => {
    const handleResize = () => {
      const newVisibleSlides =
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
      if (currentIndex > totalSlides - newVisibleSlides) {
        setCurrentIndex(Math.max(0, totalSlides - newVisibleSlides));
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex, totalSlides]);

  return (
    <div className="w-full bg-gradient-to-b from-sky-50 to-white py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex justify-center mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 relative">
            <span className="relative z-10">اساتید برتر</span>
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 transform -translate-y-2"></span>
          </h2>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          ref={carouselRef}
          tabIndex={0}
          aria-label="گالری اساتید"
          role="region"
        >
          <div className="overflow-hidden px-2">
            <motion.div
              className="flex"
              initial={false}
              animate={{
                x: `calc(-${currentIndex * (100 / visibleSlides)}%)`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {instructors.map((instructor) => (
                <motion.div
                  key={instructor.id}
                  className={`w-full px-3 ${
                    visibleSlides === 3
                      ? "md:w-1/3"
                      : visibleSlides === 2
                      ? "md:w-1/2"
                      : "md:w-full"
                  } flex-shrink-0 rtl`}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
                    <div className="relative">
                      <img
                        src={instructor.image || "/placeholder.svg"}
                        alt={instructor.name}
                        className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 text-xs font-medium text-blue-600 rtl shadow-sm">
                        {`دوره ${instructor.courses}+`}
                      </div>
                    </div>
                    <div className="p-5 text-center">
                      <h3 className="text-xl font-bold mb-2">
                        {instructor.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {instructor.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <AnimatePresence>
            {(currentIndex > 0 || isHovering) && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={prevSlide}
                className="btn btn-circle absolute top-1/2 right-2 -translate-y-1/2 bg-white shadow-md hover:bg-blue-50 z-10"
                aria-label="مشاهده اساتید قبلی"
              >
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {(currentIndex < maxIndex || isHovering) && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={nextSlide}
                className="btn btn-circle absolute top-1/2 left-2 -translate-y-1/2 bg-white shadow-md hover:bg-blue-50 z-10"
                aria-label="مشاهده اساتید بعدی"
              >
                <ChevronLeft className="h-5 w-5" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: Math.min(totalSlides, maxIndex + 1) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-blue-500 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`رفتن به اسلاید ${index + 1}`}
                aria-current={currentIndex === index ? "true" : "false"}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
