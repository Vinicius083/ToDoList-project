# ToDoList Project

## Descrição

Este é um projeto de lista de tarefas (ToDo List) desenvolvido utilizando tecnologias modernas de frontend e backend. O objetivo do projeto é permitir que os usuários criem, editem e excluam tarefas, além de realizar login e registro de usuários.

## Tecnologias Utilizadas

### Frontend

- **Framework:** Next.js
- **Linguagem:** JavaScript
- **Bibliotecas:**
  - React
  - Material-UI (MUI) para componentes de interface de usuário
  - Axios para requisições HTTP

### Backend

- **Framework:** Express.js
- **Linguagem:** JavaScript
- **Banco de Dados:** SQLite
- **Bibliotecas:**
  - Validator para validação de dados
  - Swagger para documentação da API
  - Cors para habilitar CORS
  - Nodemon para reinicialização automática durante o desenvolvimento

## Estrutura do Projeto

### Frontend

- `src/app`: Contém as páginas e componentes do Next.js
- `src/components`: Contém componentes reutilizáveis como `TabelaDeTarefas` e `TarefaModal`
- `src/services`: Contém serviços para interagir com a API, como `usuarioServices.js` e `tarefaServices.js`

### Backend

- `api/controllers`: Contém os controladores para gerenciar as requisições, como `usuarioController.js` e `tarefaController.js`
- `api/models`: Contém os modelos para interagir com o banco de dados, como `Usuario.js` e `Tarefa.js`
- `api/routes`: Contém as rotas da API, como `usuarioRoutes.js` e `tarefaRoutes.js`
- `api/services`: Contém a lógica de negócios, como `usuarioService.js` e `tarefaService.js`
- `api/database`: Contém a configuração do banco de dados, como `databaseConfig.js`

## Configuração do Banco de Dados

O banco de dados utilizado é o SQLite. A configuração e inicialização do banco de dados são feitas no arquivo `databaseConfig.js`. As tabelas `usuarios` e `tarefas` são criadas se não existirem.

## Instalação e Execução

### Pré-requisitos

- Node.js instalado
- npm ou yarn instalado

### Passos para Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Instale as dependências do frontend:
    ```sh
    cd seu-repositorio
    ```

3. Navegue até o diretório do projeto:
    ```sh
    cd front
    npm install
    ```

4. Instale as dependências do backend:
    ```sh
    cd ../back
    npm install
    ```

### Executando o projeto

1. Inicie o Backend:
    ```sh
    cd back
    npm start
    ```

2. Inicie o Frontend:
    ```sh
    cd ../front
    npm run dev 
    ```

3. Abra o navegador e acesse: 
    ```sh
    http://localhost:3000
    ```

## Endpoints da API

### Usuários

- `POST /usuarios`: Cria um novo usuário
- `GET /usuarios/login`: Realiza login do usuário

### Tarefas

- `GET /tarefas`: Obtém todas as tarefas de um usuário
- `POST /tarefas`: Cria uma nova tarefa
- `PUT /tarefas/:id`: Atualiza uma tarefa existente
- `DELETE /tarefas/:id`: Deleta uma tarefa

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.
