import { useEffect, useState } from "react";
import fetchStoreInfo from "../../api/fetchStoreInfo";

function useStoreInfo() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("storedata");
    if (savedData) {
      setError(null);
      setLoading(false);
      return JSON.parse(savedData);
    } else {
      return [];
    }
  });

  useEffect(() => {
    async function fetchData() {
      if (!loading) return;
      try {
        const products = await fetchStoreInfo();
        setData(products);
        localStorage.setItem("storedata", JSON.stringify(products));
      } catch (error) {
        console.error("Error fetching:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [data, loading]);
  return { data, loading, error };
}

export default useStoreInfo;
