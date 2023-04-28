import { defineStore } from "pinia";
import { Session } from "@supabase/gotrue-js/src/lib/types";

export const useSessionStore = defineStore("session", {
  state: () => ({ session: null as Session | null }),
  actions: {
    setSession(session: Session | null) {
      this.session = session;
    },
    getSession() {
      return this.session;
    },
  },
});
