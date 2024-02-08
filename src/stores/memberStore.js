import { defineStore } from "pinia";
import axios from "axios";
import { BASE_URL } from "../api/memberAPI";
export const usememberStore = defineStore("member", {
  state: () => ({
    member: [],
    selectmember:{},
  }),
  actions: {
    async loadMembers() {
      try {
        const responese = await axios.get(`${BASE_URL}/Member`);
        this.member = responese.data;
      } catch (error) {
        console.log('error',error);
      }
    },

    async loadMember(id) {
      try {
        const responese = await axios.get(`${BASE_URL}/Member/${id}`);
        this.selectmember = responese.data;
      } catch (error) {
        console.log("error", error);
      }
    },  


    async addMember(dataMember) {
      try {
        const responese = await axios.post(`${BASE_URL}/Member`, dataMember);
        console.log("add Member complete");
        this.member = responese.data;
      } catch (error) {
        console.log("error", error);
      }
    },

    async removeMember(id){
      try {
        const responese = await axios.delete(`${BASE_URL}/Member/${id}`)
        console.log("delete member complete");
      } catch (error) {
        console.log('error',error);
      }
    },
    async editmember(editmemberData,id){
      try {
        const responese = await axios.put(`${BASE_URL}/Member/${id}`,editmemberData)
        console.log('edit Member complete');
      } catch (error) {
        console.log("error",error);
      }
    }
  },
});
