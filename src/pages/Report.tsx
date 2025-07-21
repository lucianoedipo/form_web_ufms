import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  Button,
  Box,
} from "@mui/material";
import "./Report.css";

/**
 * Mapeamento dos nomes dos campos do formulário para rótulos mais amigáveis e ilustrativos.
 * Utilizado para exibir os nomes dos campos no relatório de cadastro.
 */
const fieldLabels: Record<string, string> = {
  fullName: "👤 Nome Completo",
  cpf: "🆔 CPF",
  birthDate: "🎂 Data de Nascimento",
  gender: "👫 Sexo",
  maritalStatus: "💍 Estado Civil",
  address: "🏠 Endereço",
  neighborhood: "🏘️ Bairro",
  city: "🌆 Cidade",
  state: "🌎 UF",
  zipCode: "📮 CEP",
  phone: "📱 Celular",
  email: "📧 E-mail",
  website: "🌐 Website",
  interests: "🎯 Interesses",
};

/**
 * Componente de relatório que exibe os dados submetidos pelo formulário de cadastro.
 * Utiliza Material UI para renderizar uma tabela com os campos preenchidos.
 * Permite ao usuário retornar ao formulário para edição.
 *
 * @component
 * @returns {JSX.Element} O relatório de cadastro preenchido.
 */
const Report: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state as Record<string, string | string[]>;

  const handleBackToForm = () => {
    navigate("/");
  };

  if (!formData) {
    return (
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Box className="report-container">
          <Typography variant="h4" component="h1" className="report-title">
            ⚠️ Dados não encontrados
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center", mb: 3 }}>
            Não foi possível carregar os dados do formulário.
          </Typography>
          <Box className="button-container">
            <Button
              variant="contained"
              color="primary"
              onClick={handleBackToForm}
              className="back-button"
              startIcon={<span>⬅️</span>}
            >
              Voltar ao Formulário
            </Button>
          </Box>
        </Box>
      </Container>
    );
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        className="report-container"
        component="main"
        aria-labelledby="report-title"
      >
        <Typography
          variant="h4"
          component="h1"
          className="report-title"
          id="report-title"
        >
          📋 Relatório de Cadastro
        </Typography>

        <TableContainer
          component={Paper}
          className="report-table"
          aria-label="Dados do formulário de cadastro"
        >
          <Table>
            <TableHead className="report-table-head">
              <TableRow>
                <TableCell className="field-name">Campo</TableCell>
                <TableCell className="field-value">Valor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="report-table-body">
              {Object.entries(formData)
                .filter(([, value]) => value && value !== "")
                .map(([key, value]) => (
                  <TableRow
                    key={key}
                    tabIndex={0}
                    aria-label={`${fieldLabels[key] || key}: ${
                      Array.isArray(value) ? value.join(", ") : value
                    }`}
                  >
                    <TableCell
                      className="field-name"
                      component="th"
                      scope="row"
                    >
                      {fieldLabels[key] || key}
                    </TableCell>
                    <TableCell className="field-value">
                      {Array.isArray(value) ? (
                        <span
                          aria-label={`Interesses selecionados: ${value.join(
                            ", "
                          )}`}
                        >
                          {value.join(", ")}
                        </span>
                      ) : (
                        <span>{value}</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box className="button-container">
          <Button
            variant="contained"
            color="primary"
            onClick={handleBackToForm}
            className="back-button"
            startIcon={<span>⬅️</span>}
            aria-label="Voltar para o formulário de cadastro"
          >
            Voltar ao Formulário
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Report;
