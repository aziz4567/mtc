// src/components/CustomCursor.tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CustomCursorProps {
  hoverClass?: string; // class name for hoverable elements, default: "hover-target"
}

const CustomCursor: React.FC<CustomCursorProps> = ({ hoverClass = "hover-target" }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains(hoverClass)) {
        setCursorVariant("text");
        setHoverText(target.innerText || "");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains(hoverClass)) {
        setCursorVariant("default");
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [hoverClass]);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "#000",
      mixBlendMode: "normal",
      borderRadius: "50%",
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      height: 150,
      width: 150,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
      borderRadius: "50%",
    },
  };

  return (
    <motion.div
      className="fixed pointer-events-none z-50 flex items-center justify-center font-bold text-black text-sm"
      variants={variants}
      animate={cursorVariant}
    >
      {hoverText}
    </motion.div>
  );
};

export default CustomCursor;
