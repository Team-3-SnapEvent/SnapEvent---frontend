const APIURI = "https://snapevent.site/api/members/login";

export interface logInData {
  username: string;
  userPassword: string;
}

type fetch = (userData: logInData) => void;

const logIn: fetch = async (userData: logInData) => {
  try {
    const response = await fetch(APIURI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
    } else {
      console.error("api 연결 실패.. :", response.status);
      throw new Error("API 호출 실패");
    }
  } catch (error) {
    console.error("api 호출 중 에러 생김:", error);
    throw error;
  }
};
export default logIn;
