import { atom } from "recoil";

export const darkModeAtom = atom({
  key: "dark-mode-atom",
  default:
    localStorage.getItem("vickygupta-portolio-dark-mode") === "true"
      ? true
      : false,
});
