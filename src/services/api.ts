import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.205:3000/",
});

export const getQuestions = async () => {
  const response = await api.get<Question[]>("/questions");
  return response.data;
};
