import { motion } from "framer-motion";

interface IconButtonProps {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, title, onClick }) => {
  return (
    <>
      <motion.button
        className="p-2  "
        whileHover="hover"
        initial="rest"
        animate="rest"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.1 },
        }}
        onClick={onClick}
      >
        {icon}
      </motion.button>
      <motion.div
        className="absolute left-10 bg-white text-black rounded-md shadow-md p-2 whitespace-nowrap"
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.div>
    </>
  );
};

export default IconButton;
