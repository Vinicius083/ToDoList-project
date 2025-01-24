import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light", // Define o modo claro como padrão
    primary: {
      main: "rgb(74, 40, 244)", // Cor primária azul
    },
    secondary: {
      main: "rgb(19, 10, 63)", // Cor secundária rosa
    },
    background: {
      default: "rgb(165, 149, 245)", // Cor de fundo padrão (cinza claro)
      paper: "rgb(239, 239, 239)", // Fundo de elementos como cartões
    },
    text: {
      primary: "#000000", // Texto preto
      secondary: "#555555", // Texto secundário
    },
  },
});

export default theme;