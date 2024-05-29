import axios from "axios";

export interface joinData {
  username: string;
  password: string;
  checkPassword: string;
  nickname: string;
}

const joinIn = async (userData: joinData) => {
  await axios
    .post("/api/members/join", userData)
    .then((res) => {
      if (res.status === 200) {
        alert("회원가입이 완료되었습니다:)");
      }
    })
    .catch((err) => {
      console.log(err);
      if (err.response.status === 500) {
        alert(err.response.data);
      }
    });
};

export default joinIn;
