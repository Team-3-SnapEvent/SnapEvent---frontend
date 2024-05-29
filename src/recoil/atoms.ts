import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { InterPark, Product } from "../stories/ItemList/ItemList";

const { persistAtom } = recoilPersist({
  key: "persistAtom",
  storage: sessionStorage,
});

const isLoggedIn = atom<boolean>({
  key: "isLoggedIn",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const accessToken = atom<string>({
  key: "accessToken",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const oliveYoung = atom<Product[]>({
  key: "oliveYoung",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const ediya = atom<Product[]>({
  key: "ediya",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const interPark = atom<InterPark[]>({
  key: "interPark",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const ssf = atom<Product[]>({
  key: "ssf",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export default isLoggedIn;
