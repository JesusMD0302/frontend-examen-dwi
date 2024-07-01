import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

export const getQuestions = async () => {
  const response = await api.get<Question[]>("/questions");
  return response.data;
};
