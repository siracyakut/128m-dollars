import { useUSD } from "store/market/hooks";
import products from "assets/products.json";
import { formatMoney } from "helpers/formats";

export default function CardItem({ item }) {
  const USD = useUSD();

  return (
    <div className="checkout-card-item">
      <span className="count">x{item.count}</span>
      <span className="name">{products[item.id - 1].name}</span>
      <span className="price">
        {formatMoney((products[item.id - 1].tl_price * item.count) / USD)}
      </span>
    </div>
  );
}
