import { useMoney } from "store/market/hooks";
import { formatMoney } from "helpers/formats";
import TextTransition, { presets } from "react-text-transition";
import { motion } from "framer-motion";

export default function Header() {
  const money = useMoney();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="header"
    >
      <div className="header-info">
        {money > 0 ? (
          <>
            <span>Harcamak için</span>
            <TextTransition
              className="header-money"
              springConfig={presets.wobbly}
            >
              {formatMoney(money)}
            </TextTransition>
            <span>paranız var!</span>
          </>
        ) : (
          <>Hiç paran kalmadı, parasız adamı sadece anası sever!</>
        )}
      </div>
    </motion.div>
  );
}
