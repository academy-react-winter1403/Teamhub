import { motion } from "framer-motion";
import { Mail, Code, Users } from "lucide-react";
import CustomNavbar from "../components/common/CustomNavbar";
import { AuthData } from "../core/constants/mock/AuthData";

import mohammadzamanImg from "../assets/images/mmdzmn.jpg";
import abolfazlImg from "../assets/images/abol.jpg";
import amirhosseinImg from "../assets/images/amir.jpg";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  hover: { scale: 1.05, boxShadow: "0 8px 16px rgba(0,0,0,0.2)" },
};

const About = () => {
  const teamMembers = [
    {
      name: "محمدزمان حسین‌پور",
      email: "mr.mzhp@gmail.com",
      avatar: mohammadzamanImg,
    },
    {
      name: "ابوالفضل یونس‌زاده",
      email: "abolfazl.yuni@gmail.com",
      avatar: abolfazlImg,
    },
    {
      name: "امیرحسین ملکی",
      email: "amiro.saravi1378@gmail.com",
      avatar: amirhosseinImg,
    },
  ];

  const packages = [
    { name: "@hookform/resolvers", version: "5.0.1" },
    { name: "@tailwindcss/vite", version: "4.0.14" },
    { name: "@tanstack/react-query", version: "5.72.2" },
    { name: "axios", version: "1.8.4" },
    { name: "cls", version: "2.1.1" },
    { name: "daisyui", version: "5.0.4" },
    { name: "formik", version: "2.4.6" },
    { name: "framer-motion", version: "12.7.3" },
    { name: "gsap", version: "3.12.7" },
    { name: "lucide-react", version: "0.488.0" },
    { name: "react", version: "19.0.0" },
    { name: "react-dom", version: "19.0.0" },
    { name: "react-router-dom", version: "7.3.0" },
    { name: "react-toastify", version: "11.0.5" },
    { name: "swiper", version: "11.2.6" },
    { name: "tailwindcss", version: "4.0.14" },
    { name: "yup", version: "1.6.1" },
  ];

  return (
    <div
      className="w-full min-h-screen bg-gray-100"
      style={{ direction: "rtl" }}
    >
      <div className="container mx-auto px-4 py-4">
        <CustomNavbar title={AuthData[0].title} />
        <div className="divider"></div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <motion.section
          id="about"
          //   className="py-12"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-3xl mb-6 flex items-center gap-2">
                <Code size={32} className="text-blue-500" />
                درباره پروژه TeamHub
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-justify">
                <div>
                  <p className="mb-4 text-lg">
                    <strong>TeamHub</strong> یک همکاری تیمی مبتنی بر React است
                    که برای مدیریت پروژه‌ها و بهبود هماهنگی بین اعضای تیم طراحی
                    شده است.
                  </p>
                  <p className="mb-4">
                    <strong>منتور:</strong> سجاد شجاعی
                  </p>
                  <p className="mb-4">
                    <strong>تعداد طراحی:</strong> 1
                  </p>
                  <p className="mb-4">
                    <strong>زبان برنامه‌نویسی:</strong> TypeScript
                  </p>
                  <div className="mb-4">
                    <strong>پکیج‌های استفاده‌شده:</strong>
                    <ul className="list-disc pr-6 mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                      {packages.map((pkg, index) => (
                        <li key={index} className="text-gray-600">
                          {pkg.name} (نسخه {pkg.version})
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-gray-600">
                    این پروژه با استفاده از ابزارهای مدرن توسعه وب و TypeScript
                    ساخته شده و توسط تیمی از توسعه‌دهندگان خلاق به انجام رسیده
                    است.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Users size={24} className="text-blue-500" />
                    اعضای تیم
                  </h3>
                  <div className="grid gap-4">
                    {teamMembers.map((member, index) => (
                      <motion.div
                        key={index}
                        className="card bg-white shadow-md p-4 rounded-lg"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                      >
                        <div className="flex items-center gap-4">
                          <div className="avatar">
                            <div className="w-12 h-12 rounded-full overflow-hidden">
                              <img
                                src={member.avatar}
                                alt={member.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div>
                            <p className="font-medium text-lg">{member.name}</p>
                            <p className="text-gray-600 flex items-center gap-2">
                              <Mail size={16} className="text-blue-500" />
                              <a
                                href={`mailto:${member.email}`}
                                className="text-blue-500 hover:underline"
                              >
                                {member.email}
                              </a>
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default About;
