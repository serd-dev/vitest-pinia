import { defineStore } from "pinia";
import axios from "axios";
import { BASE_URL } from "../api/memberAPI";
export const usememberStore = defineStore("member", {
  state: () => ({
    member: [],
  }),
  actions: {
    async loadMember() {
      const responese = await axios.get(`${BASE_URL}/Member`);
      this.member = responese.data;
    },
  },
});
