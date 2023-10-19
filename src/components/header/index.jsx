import { useMoney } from "store/market/hooks";
import { motion } from "framer-motion";
import { formatMoney } from "helpers/formats";

export default function Header() {
  const money = useMoney();

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="header"
    >
      <div className="header-info">
        {money > 0 ? (
          <>
            Harcamak için{" "}
            <span className="header-money">{formatMoney(money)}</span> paranız
            var!
          </>
        ) : (
          <>Hiç paran kalmadı, parasız adamı sadece anası sever!</>
        )}
      </div>
    </motion.div>
  );
}
