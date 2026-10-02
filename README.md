# Atacado Prime

E-commerce B2B mobile-first do **Atacado Prime Ceasa**, distribuidora de insumos para sorveteria, confeitaria, embalagens e food service em Pernambuco.

Esta entrega implementa a primeira versão da página inicial e estabelece a arquitetura visual e técnica para a evolução do catálogo, autenticação, checkout e painel administrativo.

> A empresa é real. Produtos, marcas, preços e condições comerciais exibidos nesta versão são dados demonstrativos e não representam o catálogo oficial.

## Funcionalidades disponíveis

- Home responsiva com hero, categorias, ofertas, segmentos e marcas
- Header desktop e mobile com busca e sugestões
- Mega menu de departamentos
- Cards de produto com formatos de venda por unidade ou caixa
- Carrinho lateral funcional com alteração de quantidade e remoção
- Navegação inferior para dispositivos móveis
- Estados de loading, carrinho vazio e página 404
- Metadata, canonical e dados estruturados iniciais
- Navegação por teclado, foco visível e suporte a redução de movimento

As rotas de categoria, busca, produto, conta e checkout ainda são destinos preparados para as próximas etapas do projeto.

## Tecnologias

- Next.js 16 com App Router
- React 19 e TypeScript em modo estrito
- Tailwind CSS 4 e CSS customizado para o design system
- Zustand para o estado do carrinho
- Lucide React para ícones
- Manrope Variable para tipografia

## Pré-requisitos

- Node.js 22 ou superior
- npm 10 ou superior

## Desenvolvimento local

```bash
npm install
cp .env.example .env.local
npm run dev
```

No Windows PowerShell, copie o arquivo de ambiente com:

```powershell
Copy-Item .env.example .env.local
```

A aplicação ficará disponível em `http://localhost:3000`.

## Variáveis de ambiente

Para a home atual, somente `NEXT_PUBLIC_SITE_URL` afeta diretamente a aplicação. As demais variáveis documentam as integrações planejadas e podem permanecer vazias durante a visualização do protótipo.

| Variável | Finalidade |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública usada em metadata e canonical |
| `DATABASE_URL` | Conexão futura com PostgreSQL |
| `AUTH_SECRET` e `AUTH_URL` | Configuração futura do Auth.js |
| `CLOUDINARY_*` | Armazenamento futuro de imagens |
| `WHATSAPP_NUMBER` | Número comercial configurável |
| `PAYMENT_PROVIDER` e `PAYMENT_API_KEY` | Gateway futuro de pagamentos |

Nunca envie `.env.local` ou credenciais para o repositório.

## Scripts

```bash
npm run dev        # servidor de desenvolvimento
npm run lint       # análise estática
npm run typecheck  # verificação do TypeScript
npm run build      # build de produção
npm run start      # executa o build localmente
```

## Deploy na Vercel

1. Importe este repositório na Vercel.
2. Mantenha o preset **Next.js** e os comandos detectados automaticamente.
3. Cadastre `NEXT_PUBLIC_SITE_URL` com a URL final do projeto.
4. Faça o primeiro deploy.
5. Após conhecer a URL definitiva, atualize a mesma variável e execute um novo deploy para corrigir canonical e metadata social.

Não é necessário cadastrar banco, autenticação ou gateway para visualizar a home atual.

## Estrutura

```text
src/
  app/          rotas, layout, metadata e estados globais
  components/   componentes de layout, home, produto e carrinho
  data/         catálogo demonstrativo substituível
  lib/          utilitários compartilhados
  stores/       estado de interface com Zustand
  types/        contratos do domínio
public/images/  imagens provisórias sem marcas comerciais
```

## Assets e substituição do catálogo

As imagens atuais foram produzidas especificamente para o protótipo, sem logotipos ou rótulos comerciais. Antes da publicação definitiva, devem ser substituídas por fotografias oficiais otimizadas em AVIF ou WebP e com autorização de uso.

O catálogo demonstrativo está centralizado em `src/data/catalog.ts`, facilitando a futura migração para PostgreSQL e Prisma.

## Qualidade

Antes de cada publicação, execute:

```bash
npm run lint
npm run typecheck
npm run build
```

Também é recomendado validar manualmente navegação por teclado, zoom, contraste e as larguras de 320 px a 1920 px.

## Próximas integrações

- PostgreSQL e Prisma
- Auth.js e área do cliente
- Catálogo, busca e filtros conectados ao banco
- Checkout e abstração de gateway de pagamento
- Cloudinary ou armazenamento compatível com S3
- Painel administrativo e testes E2E com Playwright

## Licença

Código e assets reservados ao projeto Atacado Prime. Nenhuma licença open source foi concedida para o conteúdo visual ou identidade comercial.
