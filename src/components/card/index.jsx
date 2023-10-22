import { useBasket } from "store/market/hooks";
import products from "assets/products.json";
import { formatMoney } from "helpers/formats";

export default function Card() {
  const basket = useBasket();

  const toplamFiyat = basket.reduce(
    (acc, curr) => acc + products[curr.id - 1].price * curr.count,
    0,
  );

  return (
    <div className="w-full bg-white py-5 px-10 mt-5 rounded-lg mb-10 flex items-center justify-center">
      <table className="border-separate border-spacing-0 table-fixed w-full text-[#212529]">
        <thead>
          <tr className="text-[19px] text-left font-semibold">
            <th className="py-3 border-b-[0.25px] border-[#212529]">Ürün</th>
            <th className="py-3 border-b-[0.25px] border-[#212529]">Adet</th>
            <th className="py-3 border-b-[0.25px] border-[#212529]">
              Birim Fiyat
            </th>
            <th className="py-3 border-b-[0.25px] border-[#212529]">
              Toplam Fiyat
            </th>
          </tr>
        </thead>
        <tbody>
          {basket.map((item) => (
            <tr className="text-left break-words" key={item.id}>
              <td className="py-3 border-b-[0.25px] border-[#212529]">
                {products[item.id - 1].name}
              </td>
              <td className="py-3 border-b-[0.25px] border-[#212529]">
                {item.count}
              </td>
              <td className="py-3 border-b-[0.25px] border-[#212529]">
                {formatMoney(products[item.id - 1].price)}
              </td>
              <td className="py-3 border-b-[0.25px] border-[#212529]">
                {formatMoney(products[item.id - 1].price * item.count)}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="text-[19px] font-semibold">
          <tr className="break-words">
            <td />
            <td />
            <td className="py-3">Toplam</td>
            <td className="py-3">{formatMoney(toplamFiyat)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
