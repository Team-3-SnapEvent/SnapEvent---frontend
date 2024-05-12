import { Product, InterPark } from "../stories/ItemList/ItemList";
import { useState, useEffect } from "react";

type fetchData = (api: string) => { isLoading: boolean; item: Product[] };
type fetchInterPark = (api: string) => { isLoading: boolean; item: InterPark[] };

const fetchCrawledData: fetchData = (api: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState<Product[]>([]);
  useEffect(() => {
    console.log("시작");
    (async () => {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error("API 호출 실패" + response.statusText);
      }
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setItem(jsonResponse);
      setIsLoading(false);
    })();
  }, []);
  return { isLoading, item };
};

export const fetchCrawledDataInterPark: fetchInterPark = (api: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState<InterPark[]>([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error("API 호출 실패" + response.statusText);
      }
      const jsonResponse = await response.json();
      setItem(jsonResponse);
      setIsLoading(false);
      return { isLoading, item };
    })();
  }, []);
  return { isLoading, item };
};

export default fetchCrawledData;
