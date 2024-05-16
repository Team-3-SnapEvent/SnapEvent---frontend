const APIURL = "https://snapevent.site/api/members/join";

export interface joinData {
  username: string;
  password: string;
  checkPassword: string;
  nickname: string;
}

type join = (userData: joinData) => void;

const joinIn: join = async (userData: joinData) => {
  const joinResponse = await fetch(APIURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!joinResponse.ok) {
    throw new Error("API 통신 오류" + joinResponse.statusText);
  }
  const jsonJoinResponse = joinResponse.json();
  console.log(jsonJoinResponse);
  return;
};

export default joinIn;
