import express from "express";
import usuarioController from "../controllers/usuarioController.js";

const router = express.Router();

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Usuários]
 *     requestBody: 
 *       required: true
 *       content:
 *         application/json:
 *           schema: 
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string 
 *               senha:
 *                 type: string
 *     responses: 
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Erro ao criar usuário
 */
router.post("/", usuarioController.criarUsuario); // "/usuarios"

/**
 * @swagger
 * /usuarios/login:
 *   get:
 *     summary: Loga um usuário
 *     tags: [Usuários]
 *     requestBody: 
 *       required: true
 *       content:
 *         application/json:
 *           schema: 
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses: 
 *       200:
 *         description: Usuário logado com sucesso
 *       400:
 *         description: Erro ao logar usuário
 */
router.get("/login", usuarioController.logarUsuario); // "/usuarios/login"

export default router;
