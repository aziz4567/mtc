import React from 'react';
import { heroData } from '../../../Data/mockData';
import { easeInOut, easeOut, motion } from "framer-motion";
import Button from './Button.tsx';
import Counter from './counter.tsx';
import { Spotlight } from './Spotlight.tsx';
import logo from "./logo_1.png";
import { FlipWords } from './FlipWords.tsx';

const Section1: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 lg:px-16">
      {/* Background Image with Overlay */}
      <Spotlight />
      <div className="absolute inset-0 z-0 flex flex-col">
        <img
          src={heroData.backgroundImage}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full items-center justify-between gap-y-12">
        {/* Left Section (Text) */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center">
          {/* Optional background mask (you can disable this if not needed) */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

          <div className="space-y-6 m-auto relative z-20 text-center lg:text-left px-4">
            {/* Heading */}
            <motion.h1
              initial={{ y: 60, scale: 0.4, opacity: 0.1 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.2, ease: easeOut }}
              className="text-5xl md:text-6xl lg:text-7xl text-white leading-tight font-secondaryFont"
            >
              {heroData.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ y: 60, scale: 0.4, opacity: 0.1 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: easeOut, delay: 0.23 }}
              className="text-2xl md:text-3xl lg:text-4xl text-blue-100 font-mainfont"
            >
              Build something <FlipWords words={["Amazing", "Beautiful"]} />
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ y: 60, scale: 0.4, opacity: 0.1 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: easeOut, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto lg:mx-0 leading-relaxed font-mainfont"
            >
              Create <FlipWords words={["Beautiful", "Amazing", "Legendary"]} /> UI / UX Experience with{" "}
              <FlipWords words={["React", "TailwindCSS", "Framer-Motion"]} />
            </motion.p>

            {/* CTA Button */}
            <div className="flex flex-row gap-4 justify-center lg:justify-start items-center">
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ x: 20, opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="relative inline-block"
              >
                <Button name={"Learn More"} />

                {/* Border Animation */}
                <motion.div className="absolute bottom-0 left-0 h-[2px] bg-brand-blue2" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1 }} />
                <motion.div className="absolute bottom-0 right-0 w-[2px] bg-brand-blue2" initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 1, delay: 1 }} />
                <motion.div className="absolute top-0 right-0 h-[2px] bg-brand-blue2" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, delay: 2 }} />
                <motion.div className="absolute top-0 left-0 w-[2px] bg-brand-blue2" initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 1, delay: 3 }} />
              </motion.div>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 justify-center lg:justify-start">
              <motion.div
                initial={{ x: -100, scale: 0.4, opacity: 0 }}
                animate={{ x: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, ease: easeInOut, delay: 1 }}
                className="text-center font-mainfont"
              >
                <div className="text-3xl md:text-4xl font-bold text-white">
                  +<Counter value={100} />
                </div>
                <div className="text-gray-300 text-sm md:text-base">Club members</div>
              </motion.div>

              <motion.div
                initial={{ x: -300, scale: 0.4, opacity: 0 }}
                animate={{ x: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: easeOut, delay: 1.5 }}
                className="text-center font-mainfont"
              >
                <div className="text-3xl md:text-4xl font-bold text-white">
                  <Counter value={90} />%
                </div>
                <div className="text-gray-300 text-sm md:text-base">Satisf</div>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ x: -500, scale: 0.4, opacity: 0 }}
                animate={{ x: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: easeOut, delay: 2 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white">
                  <Counter value={24} />/<Counter value={7} />
                </div>
                <div className="text-gray-300 text-sm md:text-base">Support</div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0">
          <motion.img
            src={logo}
            alt="Logo"
            className="w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] hover:transition-all transition-all"
            initial={{ y: -500, scale: 0.4, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 bg-opacity-20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500 bg-opacity-20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-pink-500 bg-opacity-20 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  );
};

export default Section1;
