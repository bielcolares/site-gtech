# Contexto do Projeto: GTech Soluções Ambientais

Este documento serve como um mapa mental (Knowledge Item) do estado atual do projeto institucional da GTech, registrando a arquitetura, as decisões de design e as últimas implementações para facilitar o contexto em conversas futuras.

## 🛠️ Stack Tecnológico
*   **Framework:** Next.js 14 (App Router)
*   **Linguagem:** JavaScript / React 18
*   **Estilização:** Tailwind CSS (com classes utilitárias avançadas)
*   **Animações:** Framer Motion (para transições suaves, fade-ups e efeitos de viewport)
*   **Ícones:** Lucide React
*   **Ferramentas:** ESLint, Prettier, Husky (Lint-staged) para padronização de código.
*   **Hospedagem:** Vercel (CI/CD via GitHub `main`)

## 🏗️ Arquitetura do Projeto
O projeto segue uma arquitetura modular baseada em componentes.

**Rotas Principais (`src/app/`):**
*   `/` (Home): Foco B2B com Hero dinâmico, Radar de Reciclagem (dados dinâmicos auditados), Vídeo Institucional, Diferenciais e Parceiros.
*   `/sobre-nos`: Foco em governança, sustentabilidade corporativa, métricas de ESG (Science Based Targets) e galeria da operação.
*   `/servicos`: Grade detalhada de todas as frentes de mineração urbana e economia circular.
*   `/fale-conosco`: Formulário de contato B2B integrado diretamente com o e-mail comercial (`mailto:`) e mapa da matriz.

**Componentes Principais (`src/components/`):**
A UI é construída através de mais de 15 componentes isolados, permitindo alta reutilização: `Header`, `Footer`, `Hero`, `AboutContent`, `ServicosContent`, `ContactForm`, `Features`, `Partners`, botões flutuantes e modais do WhatsApp, etc.

## 🎨 Design System e Padrões Visuais
*   **Paleta de Cores:** Foco em tons de verde (`primary` e `primary-dark`) transmitindo sustentabilidade e tecnologia, combinados com a sobriedade do `slate` (cinza-azulado) para textos e fundos B2B.
*   **Apresentação:** Utilização de *Glassmorphism* (fundos translúcidos), cantos arredondados (`rounded-2xl`, `rounded-3xl`), sombras suaves (`shadow-lg`), e fundos com texturas / gradientes circulares (`bg-primary/5 blur-3xl`).
*   **Grids Modernos:** Layouts assimétricos, *Bento Grids* (mosaicos) para galerias de imagens, evitando "seções arrastadas" e mantendo o design limpo e compacto.

## 🚀 Últimas Implementações e Refinamentos (Deploy Mais Recente)

1.  **Página de Serviços (`ServicosContent.jsx`):**
    *   Correções de sintaxe em strings multilinha e vírgulas de objetos do array.
    *   Ajuste do grid para `lg:grid-cols-3` mantendo os cards legíveis.
    *   Centralização dinâmica do último serviço ("Data Wipe") na grade usando a classe `lg:col-start-2`.

2.  **Página Sobre Nós (`AboutContent.jsx`):**
    *   **Bento Grid de Imagens:** Criação de uma galeria moderna (mosaico) com 6 imagens recém-adicionadas (`fundo-gtech` até `6`). A primeira imagem ocupa destaque máximo (`sm:col-span-2 sm:row-span-2`), enquanto as outras orbitam ao redor em tamanhos quadrados precisos.
    *   **Destaque Logística Reversa:** Substituição de cards genéricos (95% e Total Rastreabilidade) por um painel *Premium* (com tag "Serviço em Destaque" e bolinha pulsante) focado na infraestrutura de Logística Reversa, atendendo ao pedido de fortalecimento visual do serviço.
    *   **Certificações (Alicerces):** O card do selo `R2v3` foi movido para junto das certificações ISO, adaptando a grade para 4 colunas em telas grandes, criando uma "estante" de padrão ouro global.

3.  **Página Fale Conosco (`ContactForm.jsx`):**
    *   Integração do iframe interativo do **Google Maps** logo abaixo dos cards de contato, perfeitamente inserido no design (bordas arredondadas e sombras da mesma família da página), mostrando a localização da Matriz Operacional em Jundiaí.

## 📌 Status
Tudo perfeitamente codado, "lintado" pelo Prettier e hospedado no repositório `https://github.com/bielcolares/site-gtech.git` com deploy automático pela Vercel. 

---
*Nota para a IA:* Em conversas futuras, ao ler este arquivo, lembre-se do padrão visual premium focado em B2B estabelecido até aqui. Evite criar designs simplistas ou alterar o esquema de cores primário sem autorização. Mantenha os grids responsivos e utilize a biblioteca Framer Motion existente para novas animações.
