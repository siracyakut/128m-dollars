import { useBasket, useMoney, useUSD } from "store/market/hooks";
import { motion } from "framer-motion";
import { formatMoney } from "helpers/formats";
import { addBasket, removeBasket } from "store/market/actions";
import TextTransition, { presets } from "react-text-transition";

const itemMotion = {
  hidden: {
    opacity: 0,
    translateY: 20,
  },
  visible: {
    opacity: 1,
    translateY: 0,
  },
};

export default function SingleProduct({ product }) {
  const money = useMoney();
  const basket = useBasket();
  const USD = useUSD();

  const thisItem = basket.find((p) => p.id === product.id);

  return (
    <motion.div variants={itemMotion} className="product-card">
      <div
        className="card-img"
        style={{ backgroundImage: `url('${product.image}')` }}
      />
      <h4>{product.name}</h4>
      <h4>{formatMoney(product.tl_price / USD)}</h4>
      <div className="product-buttons">
        <button
          disabled={thisItem ? thisItem.count <= 0 : true}
          type="button"
          onClick={() => removeBasket(product)}
        >
          -
        </button>
        <TextTransition className="product-count" springConfig={presets.stiff}>
          {thisItem ? thisItem.count : 0}
        </TextTransition>
        <button
          type="button"
          onClick={() => addBasket(product)}
          disabled={money < product.tl_price / USD}
        >
          +
        </button>
      </div>
    </motion.div>
  );
}
