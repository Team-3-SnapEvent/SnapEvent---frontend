import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { oliveYoung, interPark, ssf, ediya } from "../recoil/atoms";
import { Product, InterPark } from "../stories/ItemList/ItemList";
import axios from "axios";

const useFetchData = () => {
  const setOliveYoungItem = useSetRecoilState<Product[]>(oliveYoung);
  const setInterParkItem = useSetRecoilState<InterPark[]>(interPark);
  const setSSFItem = useSetRecoilState<Product[]>(ssf);
  const setEdiyaItem = useSetRecoilState<Product[]>(ediya);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("/api/crawl/olive-young")
        .then((res) => setOliveYoungItem(res.data))
        .catch((err) => console.log(err));

      // await axios.get('/api/crawl/interpark')
      // .then((res)=>setInterParkItem(res.data))
      // .catch(err=>console.log(err))

      await axios
        .get("/api/crawl/ssf-shop")
        .then((res) => setSSFItem(res.data))
        .catch((err) => console.log(err));

      await axios
        .get("/api/crawl/ediya-coffee")
        .then((res) => setEdiyaItem(res.data))
        .catch((err) => console.log(err));
    };

    fetchData();
  }, [setOliveYoungItem, setInterParkItem, setSSFItem, setEdiyaItem]);
};

export default useFetchData;
