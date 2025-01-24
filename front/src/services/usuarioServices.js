import axios from "axios";

const API_URL = "http://localhost:3001";

export const loginUser = async (email, senha) => {
  try {
    const response = await axios.get(`${API_URL}/usuarios/login`, {
      params: { email, senha },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Erro ao realizar login");
  }
};

export const registerUser = async (nome, email, senha) => {
  try {
    console.log("Tentando logar com:", nome, email, senha);
    const response = await axios.post(
      `${API_URL}/usuarios`,
      nome,
      email,
      senha
    );
    console.log("Resposta da API:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Erro ao realizar login:",
      error.response?.data?.message || error.message
    );
    throw new Error(error.response?.data?.message || "Erro ao criar conta");
  }
};
