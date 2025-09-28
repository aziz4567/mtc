import { useEffect, useState, useRef } from "react";
import { useSpring } from "framer-motion";

interface CounterProps {
  value: number;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ value, duration = 2000 }) => {
  const [displayNumber, setDisplayNumber] = useState(0);
  const unsubscribeRef = useRef<(() => void) | null>(null);
  const mountedRef = useRef(true);

  const springCount = useSpring(0, {
    bounce: 0,
    duration,
  });

  useEffect(() => {
    mountedRef.current = true;
    
    // Clean up previous subscription
    if (unsubscribeRef.current) {
      unsubscribeRef.current();
    }

    const unsubscribe = springCount.on("change", (val) => {
      if (mountedRef.current) {
        setDisplayNumber(Math.round(val));
      }
    });

    unsubscribeRef.current = unsubscribe;
    springCount.set(value);

    return () => {
      mountedRef.current = false;
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
        unsubscribeRef.current = null;
      }
    };
  }, [springCount, value]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      mountedRef.current = false;
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
      }
    };
  }, []);

  return <span>{displayNumber}</span>;
};

export default Counter;
