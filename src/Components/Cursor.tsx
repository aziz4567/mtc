// src/components/AdaptiveCursor.tsx - Adaptive color cursor
import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { getElementBackgroundColor, getOptimalCursorColors, debounce } from '../Utils/colorUtils';
import "./cursor.css";

interface AdaptiveCursorProps {
  // No props needed for this implementation
}

interface CursorColors {
  cursorBg: string;
  cursorText: string;
  isLight: boolean;
}

const AdaptiveCursor: React.FC<AdaptiveCursorProps> = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [hoverText, setHoverText] = useState("");
  const [cursorColors, setCursorColors] = useState<CursorColors>({
    cursorBg: '#000000',
    cursorText: '#ffffff',
    isLight: false
  });

  // Extract and format text content from element
  const extractElementText = useCallback((element: HTMLElement): string => {
    try {
      // Get text content with proper handling for different elements
      let text = '';
      
      if (element.hasAttribute('data-cursor-text')) {
        text = element.getAttribute('data-cursor-text') || '';
      } else if (element.tagName === 'BUTTON') {
        text = element.textContent?.trim() || 'Click';
      } else if (element.tagName === 'A') {
        text = element.textContent?.trim() || element.getAttribute('href') || 'Link';
      } else if (element.tagName.startsWith('H')) {
        text = element.textContent?.trim() || 'Heading';
      } else {
        text = element.textContent?.trim() || '';
      }
      
      // Truncate long text
      if (text.length > 30) {
        text = text.substring(0, 27) + '...';
      }
      
      return text || 'Text';
    } catch (error) {
      console.warn('Text extraction error:', error);
      return 'Text';
    }
  }, []);

  // Debounced color detection for performance
  const debouncedColorDetection = useCallback(
    debounce((element: HTMLElement) => {
      try {
        const backgroundColor = getElementBackgroundColor(element);
        const optimalColors = getOptimalCursorColors(backgroundColor);
        setCursorColors(optimalColors);
      } catch (error) {
        console.warn('Color detection error:', error);
      }
    }, 50),
    []
  );

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
      backgroundColor: cursorColors.cursorBg,
      color: cursorColors.cursorText,
    }
  };

  // Functions to handle cursor variant changes
  const textEnter = (element: HTMLElement) => {
    setCursorVariant("text");
    const text = extractElementText(element);
    setHoverText(text);
    debouncedColorDetection(element);
  };
  const textLeave = () => {
    setCursorVariant("default");
    setHoverText("");
  };

  // Add event listeners to text elements in the document
  useEffect(() => {
    // Use event delegation for better performance
    const handleMouseOver = (e: Event) => {
      try {
        const target = e.target as HTMLElement;
        if (target && target.matches && target.matches('h1, h2, h3, h4, h5, h6, p, span, .hover-target, button, a')) {
          textEnter(target);
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
  }, [debouncedColorDetection, extractElementText]);

  return (
    <motion.div
      className={`adaptive-cursor ${cursorColors.isLight ? 'light' : 'dark'} ${cursorVariant}`}
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
      style={{
        '--cursor-bg': cursorColors.cursorBg,
        '--cursor-text': cursorColors.cursorText,
      } as React.CSSProperties}
    >
      {cursorVariant === 'text' && hoverText && (
        <span className="cursor-text-content">{hoverText}</span>
      )}
    </motion.div>
  );
};

export default AdaptiveCursor;
