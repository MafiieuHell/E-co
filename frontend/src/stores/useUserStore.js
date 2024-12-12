import { create } from "zustand";
import axios from "../lib/axios";
import { toast } from "react-hot-toast";
import { a } from "framer-motion/client";

export const useUserStore = create((set, get) => ({
  user: null,
  loading: false,
  checkingAuth: true,

  signup: async ({ name, email, password, confirmPassword }) => {
    set({ loading: true });

    if (password !== confirmPassword) {
      set({ loading: false });
      return toast.error("Les mot de passe ne correspondent pas");
    }

    try {
      const res = await axios.post("/auth/signup", {
        name,
        email,
        password,
      });
      set({ user: res.data.user, loading: false });
    } catch (error) {
      set({ loading: false });
      return toast.error(
        error.response.data.message || "Une erreur est survenue"
      );
    }
  },
}));
