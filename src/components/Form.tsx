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
    setFormData({ ...formData, [name as string]: value });
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
    let tempErrors: { [key: string]: boolean } = {};
    tempErrors.fullName = formData.fullName === "";
    tempErrors.cpf = formData.cpf === "";
    tempErrors.email = formData.email === "";
    tempErrors.address = formData.address === "";
    tempErrors.neighborhood = formData.neighborhood === "";
    tempErrors.city = formData.city === "";
    tempErrors.state = formData.state === "";
    tempErrors.zipCode = formData.zipCode === "";
    tempErrors.phone = formData.phone === "";
    tempErrors.birthDate = formData.birthDate === "";

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
    <Container maxWidth="md">
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Typography variant="h4" component="h1" gutterBottom>
          Formulário de Cadastro
        </Typography>
        <FormGroup>
          <fieldset>
            <legend>Dados Pessoais</legend>
            <FormControl margin="normal" error={errors.fullName} fullWidth>
              <TextField
                label="Nome Completo"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                fullWidth
              />
              {errors.fullName && (
                <FormHelperText>Campo obrigatório</FormHelperText>
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
              />
              {errors.cpf && <FormHelperText>Campo obrigatório</FormHelperText>}
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
              />
              {errors.birthDate && (
                <FormHelperText>Campo obrigatório</FormHelperText>
              )}
            </FormControl>
            <FormControl component="fieldset" margin="normal" fullWidth>
              <FormLabel component="legend">Sexo</FormLabel>
              <RadioGroup
                row
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <FormControlLabel value="M" control={<Radio />} label="M" />
                <FormControlLabel value="F" control={<Radio />} label="F" />
              </RadioGroup>
            </FormControl>
            <FormControl margin="normal" error={errors.maritalStatus} fullWidth>
              <InputLabel id="marital-status-label">Estado Civil</InputLabel>
              <Select
                labelId="marital-status-label"
                name="maritalStatus"
                required
                value={formData.maritalStatus}
                onChange={handleSelectChange}
                fullWidth
              >
                <MenuItem value="">
                  <em>Selecione</em>
                </MenuItem>
                <MenuItem value="Solteiro">Solteiro</MenuItem>
                <MenuItem value="Casado">Casado</MenuItem>
                <MenuItem value="Viúvo">Viúvo</MenuItem>
                <MenuItem value="Divorciado">Divorciado</MenuItem>
              </Select>
              {errors.maritalStatus && (
                <FormHelperText>Campo obrigatório</FormHelperText>
              )}
            </FormControl>
          </fieldset>
          <fieldset>
            <legend>Dados de Contato</legend>
            <FormControl margin="normal" error={errors.address} fullWidth>
              <TextField
                label="Endereço"
                name="address"
                required
                value={formData.address}
                onChange={handleInputChange}
                fullWidth
              />
              {errors.address && (
                <FormHelperText>Campo obrigatório</FormHelperText>
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
              />
              {errors.neighborhood && (
                <FormHelperText>Campo obrigatório</FormHelperText>
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
              />
              {errors.city && (
                <FormHelperText>Campo obrigatório</FormHelperText>
              )}
            </FormControl>
            <FormControl margin="normal" error={errors.state} fullWidth>
              <InputLabel id="state-label">UF</InputLabel>
              <Select
                labelId="state-label"
                name="state"
                required
                value={formData.state}
                onChange={handleSelectChange}
                fullWidth
              >
                <MenuItem value="">
                  <em>Selecione</em>
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
                <FormHelperText>Campo obrigatório</FormHelperText>
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
              />
              {errors.zipCode && (
                <FormHelperText>Campo obrigatório</FormHelperText>
              )}
            </FormControl>
            <FormControl margin="normal" error={errors.phone} fullWidth>
              <TextField
                label="Celular"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                fullWidth
              />
              {errors.phone && (
                <FormHelperText>Campo obrigatório</FormHelperText>
              )}
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <TextField
                label="Telefone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                fullWidth
              />
            </FormControl>
          </fieldset>
          <fieldset>
            <legend>Dados de Cadastro</legend>
            <FormControl margin="normal" error={errors.email} fullWidth>
              <TextField
                label="E-mail"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                fullWidth
              />
              {errors.email && (
                <FormHelperText>Campo obrigatório</FormHelperText>
              )}
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <TextField
                label="Website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                fullWidth
              />
            </FormControl>
            <FormControl component="fieldset" margin="normal" fullWidth>
              <FormLabel component="legend">
                Deseja receber informações sobre os seguintes assuntos:
              </FormLabel>
              <FormGroup row>
                {[
                  "Tecnologia",
                  "Esportes",
                  "Automóveis",
                  "Culinária",
                  "Política",
                  "Policial",
                  "Tempo",
                  "Cultura",
                  "Economia",
                  "Jogos",
                  "Educação",
                  "Viagem",
                  "Empregos",
                  "Moda e Estilo",
                ].map((interest) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.interests.includes(interest)}
                        onChange={handleCheckboxChange}
                        name="interests"
                        value={interest}
                      />
                    }
                    label={interest}
                    key={interest}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </fieldset>
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </FormGroup>
      </Box>
    </Container>
  );
};

export default Form;
