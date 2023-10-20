import { useMoney } from "store/market/hooks";
import { formatMoney } from "helpers/formats";
import TextTransition, { presets } from "react-text-transition";

export default function Header() {
  const money = useMoney();

  return (
    <div className="header">
      <div className="header-info">
        {money > 0 ? (
          <>
            Harcamak için{" "}
            <TextTransition
              inline
              className="header-money"
              springConfig={presets.wobbly}
            >
              {formatMoney(money)}
            </TextTransition>{" "}
            paranız var!
          </>
        ) : (
          <>Hiç paran kalmadı, parasız adamı sadece anası sever!</>
        )}
      </div>
    </div>
  );
}
