import { useEffect, useState } from "react";
import { useSpring } from "framer-motion";

interface CounterProps {
  value: number;
}

const Counter: React.FC<CounterProps> = ({ value }) => {
  const [displayNumber, setDisplayNumber] = useState(0);

  const springCount = useSpring(0, {
    bounce: 0,
    duration: 4000, // 1s animation
  });

  useEffect(() => {
    const unsubscribe = springCount.on("change", (val) => {
      setDisplayNumber(Math.round(val));
    });

    springCount.set(value); // animate towards prop value

    return () => unsubscribe();
  }, [springCount, value]);

  return <span>{displayNumber}</span>;
};

export default Counter;
