import { motion } from "framer-motion";
import products from "assets/products.json";
import SingleProduct from "components/single-product";

const container = {
  visible: {
    opacity: 1,
    y: -20,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      delay: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    x: 1,
    transition: {
      when: "afterChildren",
    },
  },
};

export default function ProductList() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="mt-14 w-full flex flex-wrap gap-14 items-center justify-center"
    >
      {products.map((product, idx) => (
        <SingleProduct key={idx} product={product} />
      ))}
    </motion.div>
  );
}
