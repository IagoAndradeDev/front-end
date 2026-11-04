# Frontend Template JS + React + Tailwind CSS

Template reutilizável para criação de aplicações frontend com **React, JavaScript, Vite e Tailwind CSS**.

A proposta é fornecer uma estrutura inicial pronta para novos projetos, evitando repetir as configurações de ambiente, dependências e estilização.

## 🚀 Tecnologias

- **React** — biblioteca para construção de interfaces.
- **JavaScript** — linguagem de programação utilizada no projeto.
- **Vite** — ferramenta de desenvolvimento e build.
- **Tailwind CSS** — framework CSS para estilização de interfaces.
- **ES Modules** — sistema de módulos com `import` e `export`.

## 📁 Estrutura do projeto

```lua
frontend-template-js-react/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## 📥 Utilizando o template

Para utilizar o template em um novo projeto, clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta clonada:

```bash
cd frontend-template-js-react
```

Instale as dependências:

```bash
npm install
```

## ⚙️ Pré-requisitos

- Node.js (versão compatível com o projeto).
- npm.

## 🖥️ Executando a aplicação

### Desenvolvimento

```bash
npm run dev
```

Inicia o servidor de desenvolvimento do Vite, permitindo visualizar as alterações em tempo real.

### Build de produção

```bash
npm run build
```

Gera os arquivos otimizados da aplicação na pasta `dist/`.

### Visualização da build

```bash
npm run preview
```

Inicia um servidor local para visualizar a versão de produção gerada pelo Vite.

## 🧩 Componentes

O projeto utiliza uma estrutura baseada em componentes React, permitindo reutilizar elementos da interface em diferentes partes da aplicação.

Exemplo de componente:

```jsx
function Button({ children, ...props }) {
  return (
    <button {...props}>
      {children}
    </button>
  );
}

export default Button;
```

Os componentes reutilizáveis devem ser organizados dentro da pasta `src/components/`.

## 🎨 Estilização

O projeto utiliza Tailwind CSS para estilização.

As configurações iniciais de CSS estão centralizadas no arquivo `src/index.css`.

Para aplicar estilos, utilize as classes utilitárias do Tailwind diretamente nos componentes.

Exemplo:

```jsx
function App() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-2xl font-bold">
        Projeto iniciado!
      </h1>
    </main>
  );
}

export default App;
```

## 📦 Dependências

Para consultar as versões das dependências instaladas:

```bash
npm list --depth=0
```

## 🎯 Objetivo

Este template foi desenvolvido para servir como ponto de partida para novas aplicações frontend.

A ideia é manter uma estrutura simples, organizada e reutilizável, permitindo adicionar novos componentes, páginas, funcionalidades e integrações conforme a necessidade de cada projeto.

---

**Frontend Template JS + React + Tailwind CSS**

*Uma base para desenvolver novas interfaces sem precisar começar toda a configuração do zero.*