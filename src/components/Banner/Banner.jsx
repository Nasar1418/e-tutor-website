import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";
SlideUp;
const Banner = ({ image, title, subtitle, link, tag, reverse }) => {
  return (
    <div className="bg-[#f9f9f9] dark:bg-transparent mb-14">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
          {/* banner Image Section */}
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className={`flex justify-start items-center  ${
              reverse && "md:order-last md:justify-end"
            }`}
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              src={image}
              className="rounded-lg"
              alt=""
            />
          </div>
          {/* Banner Content Section */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
              className="text-sm text-orange-600 font-semibold capitalize"
            >
              {tag}
            </motion.p>
            <motion.p
              variants={SlideUp(0.7)}
              initial="hidden"
              whileInView={"visible"}
              className="text-xl dark:text-textColor-dark  lg:text-2xl font-semibold capitalize"
            >
              {" "}
              {title}
            </motion.p>
            <motion.p
              variants={SlideUp(0.9)}
              initial="hidden"
              whileInView={"visible"}
              className="text-sm dark:text-slate-300 text-slate-500"
            >
              {subtitle}
            </motion.p>
            <motion.div
              variants={SlideUp(1.1)}
              initial="hidden"
              whileInView={"visible"}
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn !mt-5"> Get Started</button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
