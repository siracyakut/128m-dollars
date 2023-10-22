import { useBasket, useMoney } from "store/market/hooks";
import { motion } from "framer-motion";
import { formatMoney } from "helpers/formats";
import { addBasket, removeBasket } from "store/market/actions";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";
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

  const thisItem = basket.find((p) => p.id === product.id);

  return (
    <motion.div
      variants={itemMotion}
      className="flex flex-col items-center justify-center w-[300px] h-[360px] bg-white rounded-md border border-[#f3f3f3] cursor-pointer transition-all duration-300 hover:shadow-hover-shadow hover:!-translate-y-1.5"
    >
      <img
        src={require(`assets/products/${product.image}`)}
        alt={product.name}
        className="w-full h-[250px] object-cover rounded-t-md mb-2.5"
      />
      <div className="flex-1 w-full h-full px-5 pb-5">
        <h4 className="text-[#0d1136] text-[18px] font-semibold leading-4 mb-2.5">
          {product.name}
        </h4>
        <h4 className="text-[14px] text-[#999999] mb-2.5">
          {formatMoney(product.price)}
        </h4>
        {!thisItem ? (
          <button
            onClick={() => addBasket(product)}
            disabled={money < product.price}
            className="disabled:transition-all select-none group flex items-center w-full h-[36px] rounded-lg bg-[#f3f3f3] enabled:hover:bg-green-hover hover:text-white cursor-pointer disabled:bg-red-500 disabled:text-white disabled:cursor-not-allowed disabled:hover:bg-red-400"
          >
            <div className="flex-1 rounded-lg text-center">Satın Al</div>
            <div className="group-disabled:transition-all flex items-center justify-center h-full w-[42px] bg-[#e6e6e6] rounded-r-lg group-enabled:group-hover:bg-green-hover group-disabled:bg-red-500 group-disabled:group-hover:bg-red-400">
              <RiAddFill size={20} />
            </div>
          </button>
        ) : (
          <div className="disabled:transition-all select-none flex items-center w-full h-[36px] text-white rounded-lg bg-green-bg cursor-pointer">
            <button
              disabled={thisItem ? thisItem.count <= 0 : true}
              onClick={() => removeBasket(product)}
              className="flex items-center justify-center h-full w-[42px] rounded-l-lg 0"
            >
              <RiSubtractFill size={20} />
            </button>
            <div className="flex-1 rounded-lg text-center font-bold text-white">
              <TextTransition inline preset={presets.wobbly}>
                {thisItem.count}
              </TextTransition>
            </div>
            <button
              disabled={money < product.price}
              onClick={() => addBasket(product)}
              className="transition-all flex items-center justify-center h-full w-[42px] rounded-r-lg disabled:bg-red-500 disabled:hover:bg-red-400 disabled:cursor-not-allowed"
            >
              <RiAddFill size={20} />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
