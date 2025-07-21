import React from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const Report: React.FC = () => {
  const location = useLocation();
  const formData = location.state as Record<string, string | string[]>;

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Relatório de Cadastro
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Campo</TableCell>
              <TableCell>Valor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(formData).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell>{key}</TableCell>
                <TableCell>
                  {Array.isArray(value) ? value.join(", ") : value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Report;
