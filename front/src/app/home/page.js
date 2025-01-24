"use client";
import { useEffect, useState } from "react";
import {
  Button,
  Typography,
  Box,
  Container,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  createTarefa,
  fetchTarefas,
  deleteTarefa,
  updateTarefa,
} from "@/services/tarefaServices.js";
import TabelaDeTarefas from "@/components/tabelaDeTarefas";
import TarefaModal from "@/components/tarefaModal";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Playwrite+IN:wght@100..400&display=swap');
</style>;

export default function Home() {
  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState({ texto: "" });
  const [openTarefaModal, setOpenTarefaModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [usuario, setUsuario] = useState(null);
  const [usuario_id, setUsuario_id] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUsuario = JSON.parse(localStorage.getItem("user"));
      setUsuario(storedUsuario);
      setUsuario_id(storedUsuario?.id);
    }
  }, []);

  useEffect(() => {
    if (usuario_id) {
      fetchTarefas(usuario_id)
        .then((data) => {
          console.log("Dados recebidos:", data);
          setTarefas(data);
        })
        .catch(() => {
          setNotification({
            open: true,
            message: "Erro ao carregar tarefas.",
            severity: "error",
          });
        });
    }
  }, [usuario_id]);

  const handleCreateTask = async () => {
    if (!tarefa.texto.trim()) {
      setNotification({
        open: true,
        message: "Por favor, insira uma tarefa.",
        severity: "error",
      });
      return;
    }

    try {
      await createTarefa({
        tarefa: tarefa.texto,
        usuario_id: usuario_id,
      });
      setNotification({
        open: true,
        message: "Tarefa criada com sucesso.",
        severity: "success",
      });

      setTarefa({ texto: "" });
      setOpenTarefaModal(false);
      fetchTarefas(usuario_id).then((data) => setTarefas(data)); // Recarrega a lista de tarefas
    } catch (error) {
      setNotification({
        open: true,
        message: error.message,
        severity: "error",
      });
    }
  };

  const handleDeleteTask = async (tarefa_id) => {
    try {
      await deleteTarefa(tarefa_id);
      setNotification({
        open: true,
        message: "Tarefa deletada com sucesso.",
        severity: "success",
      });
      fetchTarefas(usuario_id).then((data) => setTarefas(data)); // Recarrega a lista de tarefas
    } catch (error) {
      setNotification({
        open: true,
        message: error.message,
        severity: "error",
      });
    }
  };

  const handleEditTask = (tarefa) => {
    setTarefa(tarefa);
    setIsEditMode(true);
    setOpenTarefaModal(true);
  };

  const handleUpdateTask = async () => {
    if (!tarefa.texto.trim()) {
      setNotification({
        open: true,
        message: "Por favor, insira uma tarefa.",
        severity: "error",
      });
      return;
    }

    try {
      await updateTarefa(tarefa.id, {
        tarefa: tarefa.texto,
      });
      setNotification({
        open: true,
        message: "Tarefa atualizada com sucesso.",
        severity: "success",
      });

      setTarefa({ texto: "" });
      setIsEditMode(false);
      setOpenTarefaModal(false);
      fetchTarefas(usuario_id).then((data) => setTarefas(data)); // Recarrega a lista de tarefas
    } catch (error) {
      setNotification({
        open: true,
        message: error.message,
        severity: "error",
      });
    }
  };

  const handleCloseNotification = () => {
    setNotification((prev) => ({ ...prev, open: false }));
  };

  return (
    <Container maxWidth="sm">
      <Snackbar
        open={notification.open}
        autoHideDuration={3000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseNotification}
          severity={notification.severity}
          variant="filled"
        >
          {notification.message}
        </Alert>
      </Snackbar>
      <Box textAlign="center" mt={8}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Playwrite IN, sans-serif",
            fontOpticalSizing: "auto",
            fontWeight: 200,
            fontStyle: "normal",
          }}
        >
          Bem-vindo, {usuario?.nome}
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            setIsEditMode(false);
            setOpenTarefaModal(true);
          }}
          style={{ marginTop: "20px" }}
        >
          Adicionar Nova Tarefa
        </Button>

        <TabelaDeTarefas
          tarefas={tarefas}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
        />

        <TarefaModal
          open={openTarefaModal}
          onClose={() => setOpenTarefaModal(false)}
          tarefa={tarefa}
          setTarefa={setTarefa}
          handleSubmit={isEditMode ? handleUpdateTask : handleCreateTask}
          isEditMode={isEditMode}
        />
      </Box>
    </Container>
  );
}
