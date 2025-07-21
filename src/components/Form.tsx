import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Button,
  FormGroup,
  FormLabel,
  RadioGroup,
  Radio,
  Container,
  Box,
  Typography,
  FormHelperText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SelectChangeEvent } from "@mui/material/Select";
import "./Form.css";

/**
 * Interface que representa os dados do formulário de cadastro.
 */
interface FormData {
  fullName: string;
  cpf: string;
  email: string;
  website: string;
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  birthDate: string;
  gender: string;
  maritalStatus: string;
  interests: string[];
}

/**
 * Componente de formulário de cadastro.
 *
 * Permite ao usuário preencher dados pessoais, de contato e preferências,
 * realizando validação dos campos obrigatórios e redirecionando para a página de relatório ao submeter.
 *
 * @component
 * @returns {JSX.Element} O formulário de cadastro.
 */
const Form: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    cpf: "",
    email: "",
    website: "",
    address: "",
    neighborhood: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    birthDate: "",
    gender: "",
    maritalStatus: "",
    interests: [],
  });

  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      const interests = checked
        ? [...prevState.interests, value]
        : prevState.interests.filter((interest) => interest !== value);
      return { ...prevState, interests };
    });
  };

  const validate = () => {
    const tempErrors: { [key: string]: boolean } = {
      fullName: formData.fullName === "",
      cpf: formData.cpf === "",
      email: formData.email === "",
      address: formData.address === "",
      neighborhood: formData.neighborhood === "",
      city: formData.city === "",
      state: formData.state === "",
      zipCode: formData.zipCode === "",
      phone: formData.phone === "",
      birthDate: formData.birthDate === "",
    };

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => !x);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      navigate("/report", { state: formData });
    }
  };

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
        component="form"
        onSubmit={handleSubmit}
        noValidate
        className="form-container"
        aria-labelledby="form-title"
      >
        <Typography
          variant="h4"
          component="h1"
          className="form-title"
          id="form-title"
          gutterBottom
        >
          📝 Formulário de Cadastro
        </Typography>
        <FormGroup>
          <fieldset>
            <legend>👤 Dados Pessoais</legend>
            <FormControl margin="normal" error={errors.fullName} fullWidth>
              <TextField
                label="Nome Completo"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                fullWidth
                aria-describedby={
                  errors.fullName ? "fullName-error" : undefined
                }
                slotProps={{
                  htmlInput: {
                    "aria-label": "Digite seu nome completo",
                  },
                }}
              />
              {errors.fullName && (
                <FormHelperText id="fullName-error" className="error-message">
                  ⚠️ Campo obrigatório
                </FormHelperText>
              )}
            </FormControl>
            <FormControl margin="normal" error={errors.cpf} fullWidth>
              <TextField
                label="CPF"
                name="cpf"
                required
                value={formData.cpf}
                onChange={handleInputChange}
                fullWidth
                aria-describedby={errors.cpf ? "cpf-error" : undefined}
                slotProps={{
                  htmlInput: {
                    "aria-label": "Digite seu CPF",
                    placeholder: "000.000.000-00",
                  },
                }}
              />
              {errors.cpf && (
                <FormHelperText id="cpf-error" className="error-message">
                  ⚠️ Campo obrigatório
                </FormHelperText>
              )}
            </FormControl>
            <FormControl margin="normal" error={errors.birthDate} fullWidth>
              <TextField
                label="Data de Nascimento"
                name="birthDate"
                required
                type="date"
                value={formData.birthDate}
                onChange={handleInputChange}
                InputLabelProps={{ shrink: true }}
                fullWidth
                aria-describedby={
                  errors.birthDate ? "birthDate-error" : undefined
                }
                slotProps={{
                  htmlInput: {
                    "aria-label": "Selecione sua data de nascimento",
                  },
                }}
              />
              {errors.birthDate && (
                <FormHelperText id="birthDate-error" className="error-message">
                  ⚠️ Campo obrigatório
                </FormHelperText>
              )}
            </FormControl>
            <FormControl component="fieldset" margin="normal" fullWidth>
              <FormLabel component="legend">👫 Sexo</FormLabel>
              <RadioGroup
                row
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                aria-label="Selecione seu sexo"
              >
                <FormControlLabel
                  value="M"
                  control={<Radio />}
                  label="Masculino"
                  aria-label="Masculino"
                />
                <FormControlLabel
                  value="F"
                  control={<Radio />}
                  label="Feminino"
                  aria-label="Feminino"
                />
              </RadioGroup>
            </FormControl>
            <FormControl margin="normal" error={errors.maritalStatus} fullWidth>
              <InputLabel id="marital-status-label">💍 Estado Civil</InputLabel>
              <Select
                labelId="marital-status-label"
                name="maritalStatus"
                required
                value={formData.maritalStatus}
                onChange={handleSelectChange}
                fullWidth
                aria-describedby={
                  errors.maritalStatus ? "maritalStatus-error" : undefined
                }
              >
                <MenuItem value="" disabled>
                  <em>Selecione seu estado civil</em>
                </MenuItem>
                <MenuItem value="Solteiro">Solteiro(a)</MenuItem>
                <MenuItem value="Casado">Casado(a)</MenuItem>
                <MenuItem value="Viúvo">Viúvo(a)</MenuItem>
                <MenuItem value="Divorciado">Divorciado(a)</MenuItem>
              </Select>
              {errors.maritalStatus && (
                <FormHelperText
                  id="maritalStatus-error"
                  className="error-message"
                >
                  ⚠️ Campo obrigatório
                </FormHelperText>
              )}
            </FormControl>
          </fieldset>
          <fieldset>
            <legend>📍 Dados de Contato</legend>
            <FormControl margin="normal" error={errors.address} fullWidth>
              <TextField
                label="Endereço Completo"
                name="address"
                required
                value={formData.address}
                onChange={handleInputChange}
                fullWidth
                aria-describedby={errors.address ? "address-error" : undefined}
                slotProps={{
                  htmlInput: {
                    "aria-label": "Digite seu endereço completo",
                  },
                }}
              />
              {errors.address && (
                <FormHelperText id="address-error" className="error-message">
                  ⚠️ Campo obrigatório
                </FormHelperText>
              )}
            </FormControl>
            <FormControl margin="normal" error={errors.neighborhood} fullWidth>
              <TextField
                label="Bairro"
                name="neighborhood"
                required
                value={formData.neighborhood}
                onChange={handleInputChange}
                fullWidth
                aria-describedby={
                  errors.neighborhood ? "neighborhood-error" : undefined
                }
                slotProps={{
                  htmlInput: {
                    "aria-label": "Digite seu bairro",
                  },
                }}
              />
              {errors.neighborhood && (
                <FormHelperText
                  id="neighborhood-error"
                  className="error-message"
                >
                  ⚠️ Campo obrigatório
                </FormHelperText>
              )}
            </FormControl>
            <FormControl margin="normal" error={errors.city} fullWidth>
              <TextField
                label="Cidade"
                name="city"
                required
                value={formData.city}
                onChange={handleInputChange}
                fullWidth
                aria-describedby={errors.city ? "city-error" : undefined}
                slotProps={{
                  htmlInput: {
                    "aria-label": "Digite sua cidade",
                  },
                }}
              />
              {errors.city && (
                <FormHelperText id="city-error" className="error-message">
                  ⚠️ Campo obrigatório
                </FormHelperText>
              )}
            </FormControl>
            <FormControl margin="normal" error={errors.state} fullWidth>
              <InputLabel id="state-label">🌎 UF (Estado)</InputLabel>
              <Select
                labelId="state-label"
                name="state"
                required
                value={formData.state}
                onChange={handleSelectChange}
                fullWidth
                aria-describedby={errors.state ? "state-error" : undefined}
              >
                <MenuItem value="" disabled>
                  <em>Selecione seu estado</em>
                </MenuItem>
                {[
                  "AC",
                  "AL",
                  "AP",
                  "AM",
                  "BA",
                  "CE",
                  "DF",
                  "ES",
                  "GO",
                  "MA",
                  "MT",
                  "MS",
                  "MG",
                  "PA",
                  "PB",
                  "PR",
                  "PE",
                  "PI",
                  "RJ",
                  "RN",
                  "RS",
                  "RO",
                  "RR",
                  "SC",
                  "SP",
                  "SE",
                  "TO",
                ].map((uf) => (
                  <MenuItem key={uf} value={uf}>
                    {uf}
                  </MenuItem>
                ))}
              </Select>
              {errors.state && (
                <FormHelperText id="state-error" className="error-message">
                  ⚠️ Campo obrigatório
                </FormHelperText>
              )}
            </FormControl>
            <FormControl margin="normal" error={errors.zipCode} fullWidth>
              <TextField
                label="CEP"
                name="zipCode"
                required
                value={formData.zipCode}
                onChange={handleInputChange}
                fullWidth
                aria-describedby={errors.zipCode ? "zipCode-error" : undefined}
                slotProps={{
                  htmlInput: {
                    "aria-label": "Digite seu CEP",
                    placeholder: "00000-000",
                  },
                }}
              />
              {errors.zipCode && (
                <FormHelperText id="zipCode-error" className="error-message">
                  ⚠️ Campo obrigatório
                </FormHelperText>
              )}
            </FormControl>
            <FormControl margin="normal" error={errors.phone} fullWidth>
              <TextField
                label="📱 Celular"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                fullWidth
                aria-describedby={errors.phone ? "phone-error" : undefined}
                slotProps={{
                  htmlInput: {
                    "aria-label": "Digite seu número de celular",
                    placeholder: "(00) 00000-0000",
                  },
                }}
              />
              {errors.phone && (
                <FormHelperText id="phone-error" className="error-message">
                  ⚠️ Campo obrigatório
                </FormHelperText>
              )}
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <TextField
                label="☎️ Telefone Fixo (Opcional)"
                name="landlinePhone"
                value=""
                onChange={handleInputChange}
                fullWidth
                slotProps={{
                  htmlInput: {
                    "aria-label": "Digite seu telefone fixo (opcional)",
                    placeholder: "(00) 0000-0000",
                  },
                }}
              />
            </FormControl>
          </fieldset>
          <fieldset>
            <legend>📧 Dados de Cadastro</legend>
            <FormControl margin="normal" error={errors.email} fullWidth>
              <TextField
                label="E-mail"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                fullWidth
                aria-describedby={errors.email ? "email-error" : undefined}
                slotProps={{
                  htmlInput: {
                    "aria-label": "Digite seu endereço de e-mail",
                    placeholder: "exemplo@email.com",
                  },
                }}
              />
              {errors.email && (
                <FormHelperText id="email-error" className="error-message">
                  ⚠️ Campo obrigatório
                </FormHelperText>
              )}
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <TextField
                label="🌐 Website (Opcional)"
                name="website"
                type="url"
                value={formData.website}
                onChange={handleInputChange}
                fullWidth
                slotProps={{
                  htmlInput: {
                    "aria-label": "Digite o endereço do seu website (opcional)",
                    placeholder: "https://seusite.com",
                  },
                }}
              />
            </FormControl>
            <FormControl component="fieldset" margin="normal" fullWidth>
              <FormLabel
                component="legend"
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#1976d2",
                  mb: 2,
                }}
              >
                🎯 Deseja receber informações sobre os seguintes assuntos:
              </FormLabel>
              <FormGroup row sx={{ gap: 1 }}>
                {[
                  "💻 Tecnologia",
                  "⚽ Esportes",
                  "🚗 Automóveis",
                  "🍳 Culinária",
                  "🏛️ Política",
                  "🚨 Policial",
                  "🌤️ Tempo",
                  "🎨 Cultura",
                  "💰 Economia",
                  "🎮 Jogos",
                  "📚 Educação",
                  "✈️ Viagem",
                  "💼 Empregos",
                  "👗 Moda e Estilo",
                ].map((interest) => {
                  const cleanInterest = interest.replace(/^[^\s]+ /, ""); // Remove emoji for value
                  return (
                    <FormControlLabel
                      key={cleanInterest}
                      control={
                        <Checkbox
                          checked={formData.interests.includes(cleanInterest)}
                          onChange={handleCheckboxChange}
                          name="interests"
                          value={cleanInterest}
                          aria-label={`Receber informações sobre ${cleanInterest}`}
                        />
                      }
                      label={interest}
                      sx={{
                        minWidth: { xs: "100%", sm: "45%", md: "30%" },
                        margin: 0.5,
                      }}
                    />
                  );
                })}
              </FormGroup>
            </FormControl>
          </fieldset>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              className="submit-button"
              aria-label="Enviar formulário de cadastro"
              startIcon={<span>✅</span>}
            >
              Enviar Cadastro
            </Button>
          </Box>
        </FormGroup>
      </Box>
    </Container>
  );
};

export default Form;
