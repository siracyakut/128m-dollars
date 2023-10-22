import { useMoney } from "store/market/hooks";
import { formatMoney } from "helpers/formats";
import { FiDollarSign } from "react-icons/fi";
import { motion } from "framer-motion";
import TextTransition, { presets } from "react-text-transition";

export default function Information() {
  const money = useMoney();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 1, translateY: 0 }}
        className="w-full flex flex-col gap-10 items-center justify-center my-10"
      >
        <img
          src={require("assets/img/banner.png")}
          alt="#128MilyarDolarNerede"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 1, translateY: 0 }}
        className="h-20 bg-white rounded-lg w-full flex items-center sticky top-0 z-10"
      >
        <div className="w-20 bg-green-bg h-full flex items-center justify-center flex-shrink-0 rounded-lg">
          <FiDollarSign size={30} color="white" />
        </div>
        <p className="flex-1 flex items-center justify-center text-2xl md:text-[35px] font-medium">
          <span className="cursor-pointer">
            <TextTransition inline preset={presets.wobbly}>
              {formatMoney(money)}
            </TextTransition>
          </span>
        </p>
      </motion.div>
    </>
  );
}
