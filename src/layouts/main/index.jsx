import Loading from "components/loading";
import { useUSD } from "store/market/hooks";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { getUSD } from "store/market/actions";

export default function MainLayout() {
  const USD = useUSD();

  useEffect(() => {
    getUSD();
  }, []);

  return <>{USD !== -1 ? <Outlet /> : <Loading />}</>;
}
