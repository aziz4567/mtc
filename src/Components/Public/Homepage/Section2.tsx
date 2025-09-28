import React from 'react';
import { featuresData } from '../../../Data/mockData';
import { Palette, Code, Zap, Shield, CheckCircle, ArrowRight } from 'lucide-react';

import VideoSwiper from './VideoSlider';

import { motion } from 'motion/react';
const Section2: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Highlights
          </h2>
          
        </div></div>
       <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:4,delay:1}}>
        <VideoSwiper></VideoSwiper>

       </motion.div>
       

         
    </section>
  );
};

export default Section2;