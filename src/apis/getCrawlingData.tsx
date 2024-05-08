import { Product } from "../stories/ItemList/ItemList";
const APIURL = "http://3.37.195.24/api/crawl/olive-young";

const getCrawlingData = async (): Promise<any> => {
  try {
    const response: any = await fetch(APIURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const responseData = response.json();
      console.log(responseData)
      return responseData;
    } else {
      console.error("api 연결 실패.. :", response.status);
      throw new Error("API 호출 실패");
    }
  } catch (error) {
    console.error("api 호출 중 에러 생김:", error);
    throw error;
  }
};

export default getCrawlingData;
