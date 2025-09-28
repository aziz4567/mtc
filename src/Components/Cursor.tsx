// src/components/CustomCursor.tsx - Based on GitHub repo
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./cursor.css";

interface CustomCursorProps {
  // No props needed for this implementation
}

const CustomCursor: React.FC<CustomCursorProps> = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#000", // Changed from yellow to black
      mixBlendMode: "difference" as const
    }
  };

  // Functions to handle cursor variant changes
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  // Add event listeners to text elements in the document
  useEffect(() => {
    // Use event delegation for better performance
    const handleMouseOver = (e: Event) => {
      try {
        const target = e.target as HTMLElement;
        if (target && target.matches && target.matches('h1, h2, h3, h4, h5, h6, p, span, .hover-target, button, a')) {
          textEnter();
        }
      } catch (error) {
        console.warn('Cursor mouseover error:', error);
      }
    };

    const handleMouseOut = (e: Event) => {
      try {
        const target = e.target as HTMLElement;
        if (target && target.matches && target.matches('h1, h2, h3, h4, h5, h6, p, span, .hover-target, button, a')) {
          textLeave();
        }
      } catch (error) {
        console.warn('Cursor mouseout error:', error);
      }
    };

    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <motion.div
      className='cursor'
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};

export default CustomCursor;
