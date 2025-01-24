"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SendIcon from "@mui/icons-material/Send";
import {
  Button,
  TextField,
  Typography,
  Box,
  Alert,
  Snackbar,
  Link,
} from "@mui/material"; 
import { loginUser } from "@/services/usuarioServices";


export default function Loguin() {
  const [sucessLogin, setSucessLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nomeUser, setNomeUser] = useState("");
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const router = useRouter();


  const handleLoguin = async () => {
    try{
      const response = await loginUser(email, senha);
      localStorage.setItem("user", JSON.stringify(response));
      setSucessLogin(true);
      setNomeUser(response.nome);
      setNotification({
        open: true,
        message: "Login realizado com sucesso",
        severity: "success",
      });
      router.push("/home");
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

      <Snackbar
        open={sucessLogin}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseNotification}
          severity={"success"}
          variant="filled"
        >
          {" "}
          Bem-vindo, {nomeUser}!
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
          Login
        </Typography>

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

        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleLoguin}
          sx={{ marginTop: "20px" }}
        >
          Entrar
        </Button>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >

          <Link href="./register" underline="always" sx={{ fontSize: "13px", marginTop: "20px" }}>
            Não tem uma conta? cadastre-se
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
