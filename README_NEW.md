# 🎓 Formulário de Cadastro com React - Template Educacional

> **Um projeto template completo para estudantes que estão aprendendo os fundamentos de desenvolvimento web moderno**

Este projeto é um exemplo prático e educativo de um formulário de cadastro desenvolvido com **React 19**, **TypeScript** e **Material-UI v7**. Foi especialmente criado para fornecer uma base sólida de aprendizado para estudantes da disciplina de **Fundamentos de Desenvolvimento Web**.

![React](https://img.shields.io/badge/React-19.1.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?logo=typescript)
![Material-UI](https://img.shields.io/badge/Material--UI-7.2.0-blue?logo=mui)
![Vite](https://img.shields.io/badge/Vite-7.0.5-green?logo=vite)
![License](https://img.shields.io/badge/License-CC0%201.0-brightgreen)

## 🎯 Objetivos de Aprendizado

Este projeto foi desenvolvido para ensinar os seguintes conceitos fundamentais:

### 📚 **Conceitos de React**

- ⚛️ **Componentes Funcionais** - Como criar e estruturar componentes
- 🎣 **Hooks** - `useState`, `useNavigate` para gerenciamento de estado
- 🔄 **Manipulação de Eventos** - `onChange`, `onSubmit`
- 🔀 **Renderização Condicional** - Exibição de erros e validações

### 🎨 **Interface de Usuário (UI/UX)**

- 🧩 **Material-UI** - Biblioteca de componentes profissionais
- 📱 **Design Responsivo** - Layout adaptável para diferentes telas
- ♿ **Acessibilidade** - Práticas inclusivas de desenvolvimento
- 🎪 **Formulários Complexos** - Diferentes tipos de campos e validações

### 🔧 **Ferramentas de Desenvolvimento**

- ⚡ **Vite** - Build tool moderno e rápido
- 📝 **TypeScript** - Tipagem estática para JavaScript
- 🔍 **ESLint** - Análise de código e boas práticas
- 🚀 **Hot Reload** - Desenvolvimento com atualizações instantâneas

### 🔍 **Conceitos Avançados**

- 🛣️ **React Router** - Navegação entre páginas (SPA)
- ✅ **Validação de Formulários** - Verificação de campos obrigatórios
- 📊 **Gerenciamento de Estado** - Como dados fluem na aplicação
- 🏗️ **Arquitetura de Componentes** - Separação de responsabilidades

## 🗂️ Estrutura do Projeto

```
form_web_ufms/
├── 📁 src/
│   ├── 📁 components/          # Componentes reutilizáveis
│   │   ├── Form.tsx           # 📝 Componente principal do formulário
│   │   └── Form.css           # 🎨 Estilos específicos do formulário
│   ├── 📁 pages/              # Páginas da aplicação
│   │   └── Report.tsx         # 📊 Página de exibição dos dados
│   ├── App.tsx                # 🚀 Componente raiz com rotas
│   ├── App.css                # 🎨 Estilos globais da aplicação
│   ├── main.tsx               # ⚡ Ponto de entrada da aplicação
│   └── index.css              # 🎨 Estilos base
├── 📄 package.json            # 📦 Configuração de dependências
├── 📄 tsconfig.json           # ⚙️ Configuração do TypeScript
├── 📄 vite.config.ts          # ⚡ Configuração do Vite
├── 📄 eslint.config.js        # 🔍 Configuração do linter
└── 📖 README.md              # 📚 Documentação (este arquivo)
```

## 🚀 Como Começar

### 📋 **Pré-requisitos**

Antes de começar, você precisa ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior) - [Download aqui](https://nodejs.org/)
- **npm** (já vem com o Node.js) ou **yarn** - [Download Yarn](https://yarnpkg.com/)
- **Git** - [Download aqui](https://git-scm.com/)
- **VS Code** (recomendado) - [Download aqui](https://code.visualstudio.com/)

### 📥 **Instalação**

1. **Clone este repositório:**

   ```bash
   git clone https://github.com/lucianoedipo/form_web_ufms.git
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   cd form_web_ufms
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   # ou se preferir usar yarn:
   yarn install
   ```

### 🏃‍♂️ **Executando o Projeto**

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

🌐 **Acesse:** [http://localhost:5173](http://localhost:5173)

### 🔨 **Outros Comandos Úteis**

```bash
# 🏗️ Gerar build de produção
npm run build

# 🔍 Verificar código (linting)
npm run lint

# 👀 Visualizar build de produção
npm run preview
```

## 📋 Funcionalidades Implementadas

### 📝 **Formulário de Cadastro Completo**

- ✅ **Validação em tempo real** - Feedback imediato para o usuário
- ✅ **Campos obrigatórios** - Verificação antes do envio
- ✅ **Diferentes tipos de input** - Text, date, select, radio, checkbox
- ✅ **Mensagens de erro** - Orientação clara para correções

### 🗃️ **Seções do Formulário**

#### 1. 👤 **Dados Pessoais**

- Nome Completo _(obrigatório)_
- CPF _(obrigatório)_
- Data de Nascimento _(obrigatório)_
- Sexo _(seleção via radio buttons)_
- Estado Civil _(dropdown com opções)_

#### 2. 📍 **Dados de Contato**

- Endereço Completo _(obrigatório)_
- Bairro _(obrigatório)_
- Cidade _(obrigatório)_
- UF - Unidade Federativa _(dropdown com todos os estados)_
- CEP _(obrigatório)_
- Celular _(obrigatório)_
- Telefone _(opcional)_

#### 3. 📧 **Dados de Cadastro**

- E-mail _(obrigatório)_
- Website _(opcional)_
- Interesses _(checkboxes múltiplas com 14 opções)_

### 📊 **Página de Relatório**

- 📋 **Exibição organizada** dos dados submetidos
- 🎨 **Tabela responsiva** com Material-UI
- 🔄 **Navegação de volta** para o formulário

## 🛠️ Tecnologias Utilizadas

| Tecnologia       | Versão | Descrição                             |
| ---------------- | ------ | ------------------------------------- |
| **React**        | 19.1.0 | Biblioteca JavaScript para interfaces |
| **TypeScript**   | 5.8.3  | Superset do JavaScript com tipagem    |
| **Material-UI**  | 7.2.0  | Biblioteca de componentes React       |
| **React Router** | 7.7.0  | Roteamento para aplicações React      |
| **Vite**         | 7.0.5  | Build tool extremamente rápido        |
| **ESLint**       | 9.31.0 | Ferramenta de análise de código       |

## 📚 Recursos de Aprendizado

### 🔗 **Links Úteis para Estudantes**

- 📖 [Documentação Oficial do React](https://react.dev/)
- 📖 [Guia do TypeScript](https://www.typescriptlang.org/docs/)
- 📖 [Material-UI Components](https://mui.com/material-ui/getting-started/)
- 📖 [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial)
- 📖 [Vite Guide](https://vitejs.dev/guide/)

### 💡 **Conceitos Importantes para Estudar**

1. **JSX** - Como escrever HTML dentro do JavaScript
2. **Props** - Como passar dados entre componentes
3. **State** - Como gerenciar dados que mudam
4. **Events** - Como reagir a ações do usuário
5. **Conditional Rendering** - Como mostrar/ocultar elementos
6. **Lists and Keys** - Como renderizar listas de dados
7. **Forms** - Como capturar e validar dados do usuário
8. **Routing** - Como navegar entre diferentes páginas

## 🎯 Exercícios Sugeridos para Estudantes

### 🥉 **Nível Iniciante**

1. **Personalização Visual** - Altere cores e estilos do formulário
2. **Novos Campos** - Adicione um campo "Profissão" nos dados pessoais
3. **Validação Simples** - Implemente validação de e-mail
4. **Mensagens** - Customize as mensagens de erro

### 🥈 **Nível Intermediário**

1. **Máscara de CPF** - Implemente formatação automática do CPF
2. **Busca CEP** - Integre com API para buscar endereço pelo CEP
3. **Validações Avançadas** - Valide CPF, e-mail e telefone
4. **LocalStorage** - Salve dados no navegador

### 🥇 **Nível Avançado**

1. **Banco de Dados** - Conecte com uma API real
2. **Autenticação** - Adicione login e logout
3. **Temas** - Implemente modo claro/escuro
4. **Testes** - Escreva testes unitários para os componentes

## ♿ Acessibilidade

Este projeto segue as melhores práticas de acessibilidade:

- 🔤 **Labels apropriados** para todos os campos
- ⌨️ **Navegação via teclado** funcional
- 🎯 **Indicadores de foco** visíveis
- 📢 **Mensagens de erro** anunciadas por leitores de tela
- 🌈 **Contraste adequado** de cores
- 📝 **Estrutura semântica** do HTML

## 🤝 Como Contribuir

Este é um projeto educacional! Contribuições são sempre bem-vindas:

1. 🍴 Faça um Fork do projeto
2. 🌿 Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. 💾 Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. 📤 Push para a branch (`git push origin feature/nova-funcionalidade`)
5. 🔄 Abra um Pull Request

## 📜 Licença

Este projeto está sob a licença **CC0 1.0 Universal** - veja o arquivo [LICENSE.txt](LICENSE.txt) para mais detalhes.

**Isso significa que você pode:**

- ✅ Usar comercialmente
- ✅ Modificar livremente
- ✅ Distribuir
- ✅ Usar para fins privados
- ✅ Não precisa dar créditos (mas seria legal! 😊)

## 👨‍🏫 Professor

**Luciano Édipo**  
📧 **E-mail:** luciano.silva@ufms.br  
🏛️ **Instituição:** Universidade Federal de Mato Grosso do Sul (UFMS)  
📚 **Disciplina:** Fundamentos de Desenvolvimento Web

## 🙋‍♂️ Dúvidas Frequentes

<details>
<summary><strong>❓ Como faço para adicionar um novo campo no formulário?</strong></summary>

1. Adicione o campo no interface `FormData` em `Form.tsx`
2. Adicione o valor inicial no `useState`
3. Crie o componente do campo no JSX
4. Adicione validação se necessário

</details>

<details>
<summary><strong>❓ O que fazer se der erro ao instalar as dependências?</strong></summary>

1. Verifique se o Node.js está atualizado
2. Limpe o cache: `npm cache clean --force`
3. Delete `node_modules` e `package-lock.json`
4. Execute `npm install` novamente

</details>

<details>
<summary><strong>❓ Como personalizar as cores do Material-UI?</strong></summary>

Você pode criar um tema customizado no arquivo `main.tsx` usando `createTheme` do Material-UI.

</details>

---

## 🌟 **Dica Final**

> _"A melhor maneira de aprender programação é praticando! Use este projeto como base e experimente criar suas próprias funcionalidades. Não tenha medo de quebrar o código - é assim que se aprende!"_

**Bons estudos! 🚀📚**
