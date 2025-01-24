import React, { useState } from "react";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Typography, TextField, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TabelaDeTarefas = ({ tarefas, onEdit, onDelete }) => {
  const [filter, setFilter] = useState("");

  const filteredTarefas = tarefas.filter((tarefa) =>
    tarefa.tarefa?.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
      <TextField
        label="Filtrar Tarefas"
        variant="outlined"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        sx={{ marginBottom: 2, marginTop: 2, width: "70%" }}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="body1" fontWeight="bold">
                Tarefa
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="body1" fontWeight="bold">
                Ações
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredTarefas.map((tarefa) => (
            <TableRow key={tarefa.id}>
              <TableCell>{tarefa.tarefa}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => onEdit(tarefa)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onDelete(tarefa.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TabelaDeTarefas;