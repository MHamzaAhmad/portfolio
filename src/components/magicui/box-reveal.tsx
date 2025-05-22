"use client";

import { memo, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface BoxRevealProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  boxColor?: string;
  duration?: number;
}

// Optimize with memo to prevent unnecessary re-renders
const BoxReveal = memo(
  ({
    children,
    width = "fit-content",
    boxColor,
    duration = 0.5,
  }: BoxRevealProps) => {
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    const ref = useRef(null);
    const isInView = useInView(ref, {
      once: true,
      margin: "0px 0px -100px 0px", // Start animation sooner
    });

    useEffect(() => {
      if (isInView) {
        // Start animations immediately without delay
        slideControls.start("visible");
        mainControls.start("visible");
      }
    }, [isInView, mainControls, slideControls]);

    return (
      <div
        ref={ref}
        style={{
          position: "relative",
          width,
          overflow: "hidden",
          willChange: "transform", // Hint to browser to optimize for animation
          contain: "layout paint style", // Improve performance by isolating this component
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 }, // Reduced motion distance
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: duration * 0.8, // Slightly faster animation
            ease: "easeOut",
          }}
        >
          {children}
        </motion.div>

        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{
            duration,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            zIndex: 20,
            background: boxColor ? boxColor : "#5046e6",
            willChange: "transform, left",
          }}
        />
      </div>
    );
  }
);

BoxReveal.displayName = "BoxReveal";

export default BoxReveal;
