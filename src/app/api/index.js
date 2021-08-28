import axios from "axios";
import { API_URL } from "@env";

const apiInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const api = {
  search: {
    shows: async (query) => {
      return await apiInstance.get(`search/shows?q=${query}`);
    },
    getShowDetail: async (id) => {
      return await apiInstance.get(`shows/${id}`);
    },
    getShowEpisodes: async (id) => {
      return await apiInstance.get(`shows/${id}/episodes`);
    },
  },
};
