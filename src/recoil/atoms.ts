import { atom } from "recoil";

const isLoggedIn = atom<boolean>({
  key: "isLoggedIn",
  default: false,
});

export default isLoggedIn;
