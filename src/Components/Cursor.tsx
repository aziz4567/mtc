// src/components/MirrorCursor.tsx - Simple mirror cursor with word animation
import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
// Import only needed utility
// Note: debounce is kept for potential performance optimizations
import "./cursor.css";

interface MirrorCursorProps {
  // No props needed for this implementation
}

const MirrorCursor: React.FC<MirrorCursorProps> = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [fullText, setFullText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  // Mirror cursor doesn't need complex color detection

  // Word cycling effect
  useEffect(() => {
    if (cursorVariant === 'text' && fullText) {
      const words = fullText.split(' ').filter(word => word.length > 0);
      if (words.length === 0) return;

      const interval = setInterval(() => {
        setCurrentWordIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % words.length;
          setDisplayedWord(words[newIndex]);
          return newIndex;
        });
      }, 800); // Change word every 800ms

      // Set initial word
      setDisplayedWord(words[0]);
      setCurrentWordIndex(0);

      return () => clearInterval(interval);
    } else {
      setDisplayedWord('');
      setCurrentWordIndex(0);
    }
  }, [cursorVariant, fullText]);

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
      
      return text || 'Text';
    } catch (error) {
      console.warn('Text extraction error:', error);
      return 'Text';
    }
  }, []);

  // No color detection needed for mirror cursor

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
      height: 120,
      width: 120,
      x: mousePosition.x - 60,
      y: mousePosition.y - 60,
      backgroundColor: "#ffffff",
    }
  };

  // Functions to handle cursor variant changes
  const textEnter = (element: HTMLElement) => {
    setCursorVariant("text");
    const text = extractElementText(element);
    setFullText(text);
  };
  const textLeave = () => {
    setCursorVariant("default");
    setFullText("");
    setDisplayedWord("");
    setCurrentWordIndex(0);
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
  }, [extractElementText]);

  return (
    <motion.div
      className={`adaptive-cursor ${cursorVariant}`}
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      {cursorVariant === 'text' && displayedWord && (
        <span className="cursor-text-content">{displayedWord}</span>
      )}
    </motion.div>
  );
};

export default MirrorCursor;
