# WebMais - Apresentação de Automação de Testes

Uma apresentação executiva interativa sobre a importância da automação de testes para indústrias e distribuidoras.

## 🚀 Como Rodar Localmente

### Pré-requisitos
- Node.js 20+ instalado
- npm ou pnpm

### Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:3001`

### Build para Produção

```bash
# Build padrão (para root path "/")
npm run build

# Build para GitHub Pages (com base path "/webmais-presentation/")
npm run build:github
```

## 📦 Publicar no GitHub Pages

### Opção 1: Usando GitHub Actions (Recomendado)

1. Crie um repositório no GitHub
2. Faça push do código para o repositório
3. O workflow `.github/workflows/deploy.yml` irá buildar e publicar automaticamente a cada push na branch `main`

**Importante:** Antes de push, atualize o campo `homepage` no `package.json`:

```json
"homepage": "https://SEU_USUARIO.github.io/webmais-presentation"
```

### Opção 2: Usando gh-pages

```bash
# Instale o gh-pages globalmente (opcional)
npm install -g gh-pages

# Build e deploy
npm run deploy
```

## ⚙️ Configuração para GitHub Pages

### 1. Atualizar o nome do repositório

Se seu repositório tiver um nome diferente de `webmais-presentation`, atualize:

**vite.config.ts:**
```typescript
const basePath = process.env.BASE_PATH || "/webmais-presentation/";
```

**package.json:**
```json
"homepage": "https://SEU_USUARIO.github.io/SEU_REPOSITORIO"
```

**App.tsx:**
O wouter já está configurado para usar `import.meta.env.BASE_URL`, então funcionará automaticamente.

### 2. Habilitar GitHub Pages

1. Vá em **Settings** > **Pages**
2. Em **Build and deployment**, selecione **GitHub Actions**
3. O workflow será executado automaticamente

## 📁 Estrutura do Projeto

```
webmais-presentation/
├── .github/
│   └── workflows/
│       └── deploy.yml      # Workflow para GitHub Pages
├── .gitignore              # Arquivos ignorados pelo git
├── index.html              # HTML principal
├── package.json            # Dependências e scripts
├── tsconfig.json           # Configuração TypeScript
├── vite.config.ts          # Configuração Vite
├── public/                 # Arquivos estáticos
│   ├── favicon.svg
│   └── robots.txt
└── src/
    ├── App.tsx             # Componente principal
    ├── main.tsx            # Entry point
    ├── index.css           # Estilos globais
    ├── components/         # Componentes UI
    ├── pages/              # Páginas da aplicação
    ├── hooks/              # Hooks personalizados
    └── lib/                # Utilitários
```

## 🛠️ Tecnologias Utilizadas

- **React 19** - UI library
- **Vite 6** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Estilização
- **Framer Motion** - Animações
- **Recharts** - Gráficos
- **Wouter** - Router leve
- **Radix UI** - Componentes acessíveis

## 📝 Notas Importantes

1. **Arquivos do Replit**: O diretório `.replit-artifact/` contém configurações específicas do Replit e está no `.gitignore`.

2. **Base Path**: Para GitHub Pages, o `basePath` deve ser definido como `/nome-do-repositorio/`.

3. **SPA Routing**: O projeto é uma Single Page Application (SPA), então o GitHub Pages precisa redirecionar todas as rotas para `index.html`. O workflow já cuida disso.

## 🔧 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Build para produção (root path) |
| `npm run build:github` | Build para GitHub Pages |
| `npm run preview` | Preview do build de produção |
| `npm run typecheck` | Verifica tipos TypeScript |
| `npm run deploy` | Build e deploy com gh-pages |

## 📄 Licença

Este projeto é de propriedade da WebMais Sistemas.