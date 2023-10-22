import Header from "components/header";
import Products from "components/product-list";
import Card from "components/card";
import Information from "components/information";
import Footer from "components/footer";
import { useBasket } from "store/market/hooks";

export default function Home() {
  const basket = useBasket();

  return (
    <>
      <Header />
      <div className="container mx-auto max-w-6xl">
        <Information />
        <Products />
        {basket.length > 0 && <Card />}
      </div>
      <Footer />
    </>
  );
}
