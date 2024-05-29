import axios from "axios";
import { useState } from "react";

export type checkDuplication = (userNickname: string) => void;

const useCheckDuplication = (): [boolean | null, checkDuplication] => {
  const [isDuplicate, setIsDuplicate] = useState<boolean | null>(null);

  const checkDuplication: checkDuplication = async (userNickname: string) => {
    const nickname = { nickname: `${userNickname}` };
    try {
      const response = await axios.post("/api/members/checkname", nickname);
      console.log(response.data);
      setIsDuplicate(response.data);
    } catch (error) {
      console.error("Error checking duplication:", error);
      setIsDuplicate(null);
    }
    return;
  };

  return [isDuplicate, checkDuplication];
};

export default useCheckDuplication;
