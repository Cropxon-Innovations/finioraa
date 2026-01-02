import { motion } from "framer-motion";

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg";
}

const AnimatedLogo = ({ size = "md" }: AnimatedLogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl",
  };

  return (
    <motion.div
      className={`relative ${sizeClasses[size]}`}
      whileHover={{ scale: 1.05 }}
    >
      {/* Glow effect layers */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-secondary blur-md"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/50 to-secondary/50 blur-lg"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1.1, 1.2, 1.1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      
      {/* Main logo container */}
      <motion.div
        className="relative w-full h-full rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden"
        animate={{
          boxShadow: [
            "0 0 20px rgba(59, 130, 246, 0.5)",
            "0 0 40px rgba(16, 185, 129, 0.6)",
            "0 0 20px rgba(59, 130, 246, 0.5)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 2,
          }}
        />
        
        {/* F letter with pulse */}
        <motion.span
          className={`text-primary-foreground font-bold ${textSizes[size]} relative z-10`}
          animate={{
            textShadow: [
              "0 0 10px rgba(255, 255, 255, 0.5)",
              "0 0 20px rgba(255, 255, 255, 0.8)",
              "0 0 10px rgba(255, 255, 255, 0.5)",
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          F
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedLogo;
