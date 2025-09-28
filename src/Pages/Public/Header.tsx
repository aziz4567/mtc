import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Zap } from 'lucide-react';
import MTCLogo from "../images/mtcLogo.png";

const Header = () => {
  return (
    <section id="home" className="pt-24 sm:pt-32 pb-16 sm:pb-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Microsoft
              </span>
              <br />
              <span className="text-white">Tech Club</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl"
            >
              Empowering the next generation of developers and innovators through cutting-edge technology and collaborative learning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Join Our Community
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

{/* Right Logo Section */}
  
   <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="flex-1 flex justify-center lg:justify-end overflow-visible"
>
  {/* Logo Image */}
  <motion.img
    src={MTCLogo  }
    alt="MTC Logo"
    animate={{ 
      scale: [1, 1.05, 1],
      rotate: [0, 5, -5, 0]
    }}
    transition={{ 
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="w-80 h-80 object-contain origin-center"
  />
</motion.div>


</div>

        {/* Stats Section*/} 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-black backdrop-blur-sm "
          >
            
            <div className="text-3xl font-bold text-white mb-2">120+</div>
            <div className="text-gray-400">Active Members</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-black backdrop-blur-sm "
          >
           
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400">Projects Completed</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-black backdrop-blur-sm "
          >
           
            <div className="text-3xl font-bold text-white mb-2">15+</div>
            <div className="text-gray-400">Events Hosted</div>
          </motion.div>
        </motion.div>
      </div>*/
    </section>
  );
};

export default Header;
