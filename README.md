# Formulário de Cadastro com React e Material-UI

Este projeto é um exemplo de formulário de cadastro criado com React e Material-UI. O objetivo deste projeto é fornecer uma base para estudantes que estão aprendendo os fundamentos de desenvolvimento web.

## Estrutura do Projeto

- `src/components/Form.tsx`: Componente do formulário de cadastro.
- `src/pages/Report.tsx`: Componente que exibe os dados do formulário submetido.
- `src/App.tsx`: Configuração das rotas do aplicativo.

## Funcionalidades

- **Formulário de Cadastro**: Inclui campos para dados pessoais, dados de contato e dados de cadastro.
- **Validação de Campos**: Campos obrigatórios são validados antes do envio do formulário.
- **Exibição de Relatório**: Após o envio do formulário, os dados são exibidos em um relatório simples.

## Pré-requisitos

- Node.js
- npm (ou yarn)

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/lucianoedipo/form_web_ufms.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd form_web_ufms
   ```
3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

## Executando o Projeto

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
# ou
yarn dev
```

O projeto estará disponível em `http://localhost:5173`.

## Estrutura do Formulário

O formulário é dividido em três seções principais:

1. **Dados Pessoais**

   - Nome Completo
   - CPF
   - Data de Nascimento
   - Sexo
   - Estado Civil

2. **Dados de Contato**

   - Endereço
   - Bairro
   - Cidade
   - UF
   - CEP
   - Celular
   - Telefone

3. **Dados de Cadastro**
   - E-mail
   - Website
   - Interesses (checkboxes)

## Acessibilidade

Todos os elementos do formulário são configurados para serem acessíveis conforme as melhores práticas. Para mais informações, consulte a [documentação de acessibilidade do MDN](https://developer.mozilla.org/pt-BR/docs/Learn/Accessibility/HTML).

## Licença

Este projeto está licenciado sob a licença CC0 1.0 Universal. Consulte o arquivo `LICENSE.txt` para obter mais informações.

---

**Autor**: Luciano Édipo

**Contato**: luciano.silva@ufms.br
