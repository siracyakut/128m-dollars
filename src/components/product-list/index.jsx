import { motion } from "framer-motion";
import products from "assets/products.json";
import SingleProduct from "components/single-product";

const container = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ProductList() {
  return (
    <div className="container">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="products"
      >
        <div className="intro">
          <div className="intro-text">
            <div className="intro-heading">
              <h2>#128MilyarDolarNerede</h2>
            </div>
            <div className="intro-description">
              128 milyar dolar aniden ortadan kayboluyorsa ya çok başarılı bir
              sihirbazın gösterisindesiniz ya da Türkiye'de yaşıyorsunuz.
            </div>
          </div>
          <img alt="" src={require("assets/dollar.png")} />
        </div>
        {products.map((product, idx) => (
          <SingleProduct key={idx} product={product} />
        ))}
      </motion.div>
    </div>
  );
}
