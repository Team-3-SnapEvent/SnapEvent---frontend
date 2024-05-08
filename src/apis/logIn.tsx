const APIURI = "http://3.37.195.24/members/login";

interface LogInData {
  username: string;
  userPassword: string;
}

const logIn = async (userdata: LogInData): Promise<any> => {
  try {
    const response = await fetch(APIURI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log("성공");
      console.log(responseData);
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
export default logIn;
