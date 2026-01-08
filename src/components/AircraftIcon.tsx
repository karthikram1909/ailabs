import { motion } from "framer-motion";

interface AircraftIconProps {
  className?: string;
  size?: number;
}

const AircraftIcon = ({ className = "", size = 80 }: AircraftIconProps) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Aircraft body - intentional break represents the implementation gap */}
      <path
        d="M50 15 L50 35"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* The break - implementation gap */}
      <path
        d="M50 40 L50 70"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Wings */}
      <path
        d="M25 50 L75 50"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Tail wings */}
      <path
        d="M35 70 L65 70"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Nose tip */}
      <path
        d="M47 12 L50 8 L53 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Tail fin */}
      <path
        d="M50 70 L50 85"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

export default AircraftIcon;
