import axios from "axios";

const API_URL = "http://localhost:3001";

export const createTarefa = async (tarefa) => {
    try {
        const response = await axios.post(`${API_URL}/tarefas`, tarefa);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Erro ao criar tarefa");
    }
};

export const fetchTarefas = async (usuario_id) => {
    try {
        const response = await axios.get(`${API_URL}/tarefas?usuario_id=${usuario_id}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Erro ao buscar tarefas");
    }
};

export const deleteTarefa = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/tarefas/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Erro ao deletar tarefa");
    }
};

export const updateTarefa = async (tarefa_id, tarefa) => {
    try {
        console.log(tarefa_id, tarefa);
        const response = await axios.put(`${API_URL}/tarefas/${tarefa_id}`, tarefa);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Erro ao atualizar tarefa");
    }
};