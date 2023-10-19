import { useBasket, useUSD } from "store/market/hooks";
import products from "assets/products.json";
import CardItem from "components/card-item";
import { formatMoney } from "helpers/formats";

export default function Card() {
  const basket = useBasket();
  const USD = useUSD();

  const toplam = basket.reduce((acc, curr) => acc + curr.count, 0);
  const toplamFiyat = basket.reduce(
    (acc, curr) => acc + (products[curr.id - 1].tl_price / USD) * curr.count,
    0,
  );

  return (
    <div className="container">
      {basket.length > 0 && (
        <div className="checkout-card">
          {basket.map((item, idx) => (
            <CardItem key={idx} item={item} />
          ))}
          <div
            style={{ fontWeight: "bold", color: "green" }}
            className="checkout-card-item"
          >
            <span className="count">x{toplam}</span>
            <span className="name">TOPLAM</span>
            <span className="price">{formatMoney(toplamFiyat)}</span>
          </div>
        </div>
      )}
    </div>
  );
}
