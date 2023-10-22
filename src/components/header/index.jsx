import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="flex items-center justify-center bg-white h-[70px] w-full shadow-header-shadow"
    >
      <img
        src={require("assets/img/logo.png")}
        alt="#128MilyarDolarNerede"
        className="w-[280px] hover:opacity-80 transition-all duration-150 cursor-pointer"
      />
    </motion.div>
  );
}
