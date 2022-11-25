import { defineStore } from 'pinia'
import {getFullInfo} from "@/Services/KpService";

export const useKpStore = defineStore('kp', {
  state: () => ({
    filmsInfo: []
  }),
  actions: {
    async getInfoByKpIds(ids: number[]) {
      for (const id of ids) {
        const response = await getFullInfo(id);
        if (response.data) this.filmsInfo.push(response.data);
      }
    }
  }
});
