import { create } from "zustand";

interface UserInfo {
  id: string;
  password: string;
  name: string;
  setId: (id: string) => void;
  setPassword: (password: string) => void;
  setName: (name: string) => void;
}

export const useUserInfoStore = create<UserInfo>((set) => ({
  id: "",
  password: "",
  name: "",
  setId: (id) => set(() => ({ id })),
  setPassword: (password) => set(() => ({ password })),
  setName: (name) => set(() => ({ name })),
}));
