import express from "express";
import cors from "cors";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import databaseConfig from "./database/databaseConfig.js";
import tarefaRoutes from "./routes/tarefaRoutes.js";
import swaggerui from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const app = express();
const port = 3001;

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API To Do List",
      version: "1.0.0",
      description: "Documentação da API To Do List",
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/usuarios", usuarioRoutes);
app.use("/tarefas", tarefaRoutes);
app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerDocs))

databaseConfig.startDatabase();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Validações
// Documentação
// Design System do Front [Composição dos componentes React]
