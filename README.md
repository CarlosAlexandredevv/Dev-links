# 🔗 Dev-links

Um projeto de página de links pessoal (linktree) desenvolvido com Next.js, TypeScript e integração com Prismic CMS. Permite criar uma página personalizada com avatar, lista de links e redes sociais, com suporte a alternância entre temas claro e escuro.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte de um desafio que visa criar uma aplicação moderna e responsiva para exibição de links pessoais. A aplicação permite gerenciar todo o conteúdo através de um CMS (Prismic), facilitando a atualização de informações sem necessidade de alterar código.

## ✨ Funcionalidades

### Funcionalidades Obrigatórias

- ✅ **Exibição de Avatar**: Avatar personalizado com suporte a diferentes imagens para tema claro e escuro
- ✅ **Lista de Links**: Exibição de links personalizados em formato de botões
- ✅ **Redes Sociais**: Ícones de redes sociais clicáveis
- ✅ **Integração com CMS**: Integração completa com Prismic para gerenciamento de conteúdo
  - Gerenciamento de avatar
  - Gerenciamento de lista de links
  - Gerenciamento de redes sociais

### Funcionalidades Opcionais

- ✅ **Theme Switcher**: Alternância entre temas claro e escuro usando `next-themes` e componentes customizados
- ✅ **Design Responsivo**: Layout adaptável para dispositivos móveis e desktop
- ✅ **Background Dinâmico**: Imagens de fundo diferentes para cada tema e tamanho de tela

## 🛠️ Tecnologias Utilizadas

- **[Next.js 16](https://nextjs.org/)** - Framework React com App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Prismic CMS](https://prismic.io/)** - Headless CMS para gerenciamento de conteúdo
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Gerenciamento de temas
- **[Lucide React](https://lucide.dev/)** - Ícones
- **[Ionicons](https://ionic.io/ionicons)** - Ícones de redes sociais
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis

## 📦 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Conta no [Prismic](https://prismic.io/) (para gerenciamento de conteúdo)

## 🚀 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/CarlosAlexandredevv/Dev-links.git.git
cd dev-links
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
PRISMIC_TOKEN=seu_token_do_prismic
```

> **Nota**: Você pode obter o token de acesso no Prismic em Settings > API & Security > Generate an access token

4. Configure o Prismic:
   - Crie um novo repositório no Prismic
   - Importe o custom type `devlinks` que está na pasta `customtypes/devlinks/`
   - Configure os campos conforme necessário:
     - Avatar (Image)
     - Avatar Light (Image)
     - Links (Group com Label e URL)
     - Social (Group com Label e URL)

## 🎯 Como Executar

### Modo de Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### Modo de Produção

```bash
npm run build
npm start
# ou
yarn build
yarn start
```

### Slice Machine (Prismic)

Para abrir o Slice Machine e gerenciar os tipos de conteúdo:

```bash
npm run slicemachine
# ou
yarn slicemachine
```

## 📁 Estrutura do Projeto

```
dev-links/
├── public/                 # Arquivos estáticos (imagens, etc)
├── src/
│   ├── app/               # Páginas e rotas (App Router)
│   │   ├── api/           # API routes (preview, revalidate)
│   │   ├── layout.tsx     # Layout principal
│   │   └── page.tsx       # Página inicial
│   ├── components/        # Componentes React
│   │   ├── avatar/        # Componente de avatar
│   │   ├── button-link/   # Componente de link/botão
│   │   ├── social-link/   # Componente de rede social
│   │   ├── theme-provider/# Provider de temas
│   │   ├── toggle-theme/  # Botão de alternância de tema
│   │   └── templates/     # Templates de página
│   ├── lib/               # Utilitários e configurações
│   │   ├── prismic.io.ts  # Cliente do Prismic
│   │   └── utils.ts       # Funções utilitárias
│   ├── model/             # Modelos de dados
│   ├── services/          # Serviços (API, CMS)
│   │   └── prismic/       # Serviços do Prismic
│   └── types/             # Definições de tipos TypeScript
├── customtypes/           # Custom types do Prismic
└── package.json
```

## 🎨 Personalização

### Cores e Temas

As cores e estilos podem ser personalizados através do arquivo `src/app/globals.css` e das classes do Tailwind CSS.

### Conteúdo

Todo o conteúdo (avatar, links e redes sociais) é gerenciado através do Prismic CMS. Acesse o painel do Prismic para editar:

1. **Avatar**: Adicione imagens para tema claro e escuro
2. **Links**: Adicione, edite ou remova links
3. **Redes Sociais**: Configure suas redes sociais

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter
- `npm run slicemachine` - Abre o Slice Machine do Prismic
