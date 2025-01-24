"use client";

import { useState } from "react";
import * as React from "react";
import SendIcon from "@mui/icons-material/Send";
import { useRouter } from "next/navigation";
import {
  Button,
  TextField,
  Typography,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { registerUser } from "@/services/usuarioServices";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const router = useRouter();

  const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email);
  const arePasswordsValid = () => senha === passwordConfirmation;

  const handleRegister = async () => {
    if (!isEmailValid(email)) {
      setNotification({
        open: true,
        message: "Email inválido",
        severity: "error",
      });
      return;
    }

    if (!arePasswordsValid()) {
      setNotification({
        open: true,
        message: "Senhas não conferem",
        severity: "error",
      });
      return;
    }

    try {
      const response = await registerUser({ nome, email, senha });
      setNotification({
        open: true,
        message: response.message,
        severity: "success",
      });
      router.push("/");
    } catch (error) {
      setNotification({
        open: true,
        message: error.message,
        severity: "error",
      });
    }
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        height: "100vh",
        width: "100%",
      }}
    >
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

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: "7px",
          gap: "5px",
          boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.4)",
          width: "400px",
          height: "auto",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          variant="h1"
          sx={{
            padding: "0",
            marginBottom: "20px",
            fontWeight: 550,
            fontSize: "2.3em",
          }}
        >
          Cadastre-se
        </Typography>

        <label htmlFor="name">Nome</label>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu Nome"
        />

        <label htmlFor="email">Email</label>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
        />

        <label htmlFor="password">Senha</label>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
        />

        <label htmlFor="password">Confirme sua senha</label>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          placeholder="Digite sua senha novamente"
        />

        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleRegister}
          sx={{ marginTop: "20px" }}
        >
          Cadastrar
        </Button>
      </Box>
    </Box>
  );
}
