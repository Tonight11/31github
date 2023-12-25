import { useMotion } from "@vueuse/motion";

export function useAnimationTitle(title) {
  useMotion(title, {
    initial: {
      scale: 0,
      opacity: 0,
    },
    visibleOnce: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 10,
        mass: 1,
      },
    },
  });
}
