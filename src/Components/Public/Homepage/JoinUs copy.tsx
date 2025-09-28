import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const JoinUs = () => {
  return (
    <section id="joinus" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="mb-8 flex justify-center"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Sparkles className="text-white" size={32} />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8"
        >
          Join Microsoft Tech Club
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-cyan-300"
          >
            {' '}Today!
          </motion.span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xl sm:text-2xl text-white/90 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Ready to dive into the world of technology? Join our community of passionate learners and innovators.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 bg-white text-gray-800 font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-2xl shadow-2xl hover:shadow-white/20 transition-all duration-300"
          >
            {/* Button Background Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            
            <span className="relative z-10">Join Now</span>
            <ArrowRight 
              className="relative z-10 group-hover:translate-x-1 transition-transform duration-200" 
              size={24} 
            />
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-white/80"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold">120+</div>
            <div className="text-sm sm:text-base">Active Members</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/30" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold">15+</div>
            <div className="text-sm sm:text-base">Events Hosted</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/30" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold">50+</div>
            <div className="text-sm sm:text-base">Projects Completed</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUs;