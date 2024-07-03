import { useEffect, useState } from "react";
import fetchStoreInfo from "../../api/fetchStoreInfo";

function useStoreInfo() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await fetchStoreInfo();
        setData(products);
      } catch (error) {
        console.log("Error fetching:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return { data, loading, error };
}

export default useStoreInfo;
