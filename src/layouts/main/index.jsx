import Loading from "components/loading";
import { Outlet } from "react-router-dom";
import { useLoading } from "store/market/hooks";
import { useEffect } from "react";
import { setLoading } from "store/market/actions";

export default function MainLayout() {
  const loading = useLoading();

  useEffect(() => {
    const interval = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>{loading ? <Loading /> : <Outlet />}</>;
}
