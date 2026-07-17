# Contexto do Projeto: GTech Soluções Ambientais

Este documento serve como um mapa mental (Knowledge Item) do estado atual do projeto institucional da GTech, registrando a arquitetura, as decisões de design e as últimas implementações para facilitar o contexto em conversas futuras.

## 🖥️ Stack Tecnológico
*   **Framework:** Next.js 14 (App Router)
*   **Linguagem:** JavaScript / React 18
*   **Estilização:** Tailwind CSS (com classes utilitárias avançadas)
*   **Animações:** Framer Motion (para transições suaves, fade-ups e efeitos de viewport)
*   **Ícones:** Lucide React
*   **Ferramentas:** ESLint, Prettier, Husky (Lint-staged) para padronização de código.
*   **Hospedagem:** Vercel (CI/CD via GitHub `main`)

## 🗂️ Arquitetura do Projeto
O projeto segue uma arquitetura modular baseada em componentes.

**Rotas Principais (`src/app/`):**
*   `/` (Home): Foco B2B com Hero dinâmico, Radar de Reciclagem (dados dinâmicos auditados), Vídeo Institucional, Diferenciais e Parceiros.
*   `/sobre-nos`: Foco em governança, sustentabilidade corporativa, métricas de ESG (Science Based Targets) e galeria da operação. Termina com os 4 selos de certificação (ISO 9001/14001/45001 + R2v3) e um CTA para `/compliance`.
*   `/servicos`: Grade detalhada de todas as frentes de mineração urbana e economia circular. Selos clicáveis que abrem popup (modal) com detalhes de cada certificação. Ao final da página, seção CTA direcionando para `/compliance`.
*   `/compliance`: Página dedicada a Compliance & Certificações. Contém hero institucional, cards das 3 ISOs com botões de download de PDF, card destaque do R2v3 (com botão para baixar o certificado), 2 cards de documentos institucionais (Código de Ética e Política Integrada com download), e seção Canal de Comunicação com fundo verde escuro (`#015637`).
*   `/fale-conosco`: Formulário de contato B2B integrado diretamente com o e-mail comercial (`mailto:`) e mapa da matriz.

**Componentes Principais (`src/components/`):**
A UI é construída através de mais de 15 componentes isolados, permitindo alta reutilização: `Header`, `Footer`, `Hero`, `AboutContent`, `ServicosContent`, `ComplianceContent`, `ContactForm`, `Features`, `Partners`, botões flutuantes e modais do WhatsApp, etc.

## 🎨 Design System e Padrões Visuais
*   **Paleta de Cores (vars em `globals.css`):**
    *   `--primary`: `#3fab36` — Verde dominante da marca
    *   `--primary-dark`: `#1c6032` — Verde escuro secundário
    *   `--primary-deep`: `#015637` — Verde profundo (fundos de seções escuras, ex: Canal de Comunicação e Radar de Reciclagem)
*   **Apresentação:** Utilização de Glassmorphism (fundos translúcidos), cantos arredondados (`rounded-2xl`, `rounded-3xl`), sombras suaves (`shadow-lg`), e fundos com texturas / gradientes circulares.
*   **Grids Modernos:** Layouts assimétricos, Bento Grids (mosaicos) para galerias de imagens, evitando "seções arrastadas" e mantendo o design limpo e compacto.
*   **Animações:** Sempre via `framer-motion` com `whileInView`, `viewport={{ once: true }}`, usando `containerVariants` (stagger) + `itemVariants` (fade+slide).
*   **Botões de ação:** Padrão `rounded-full` ou `rounded-xl`, `bg-primary`, com hover `-translate-y-0.5` e `shadow-primary/20`. Ícones da lucide-react sempre inline.

## 🧭 Navegação
**Header (`Header.jsx`):** Fixo no topo. Menu desktop e mobile.
Ordem dos itens: **Início | Sobre Nós | Serviços | Compliance | Contato | [Botão] Falar com Especialista**

**Footer (`Footer.jsx`):** Bloco "Empresa" com links:
- Sobre Nós
- Serviços
- Compliance
- Contato

## 📦 Arquivos Públicos (`public/`)
*   `/images/` — Todos os ativos visuais (selos, fotos, design patterns)
*   `/Arquivos/` — PDFs para download na página de Compliance:
    *   `iso-9001.pdf`, `iso-14001.pdf`, `iso-45001.pdf`, `r2v3-certificado.pdf`
    *   `codigo-de-etica.pdf`
    *   `politica-integrada.pdf`

## 🔗 CTAs para Compliance
Três pontos no site direcionam o usuário para `/compliance`:
1.  **Home (`Features.jsx`):** Botão sutil com borda verde abaixo do grid de diferenciais — "Ver certificações e documentos completos →"
2.  **Sobre Nós (`AboutContent.jsx`):** Botão abaixo dos 4 selos ISO/R2v3 — "Ver certificados e documentos institucionais →"
3.  **Serviços (`ServicosContent.jsx`):** Seção própria (`bg-slate-50`) após "Nossas Certificações" — botão verde sólido "Acessar Compliance →"

## 📋 Canal de Comunicação
*   **E-mail:** `rh@gtechsolucoes.com.br`
*   **Onde aparece:** Seção exclusiva na página `/compliance` (fundo `#015637`).
*   **Padrão visual:** Fundo verde escuro, borda esquerda verde, palavras-chave destacadas em `text-primary` (comportamento ético, conduta, integridade, assédio).

## 📊 Rastreamento e Analytics
*   **GA4:** `G-HBFW0D3QJW` — NÃO REMOVER
*   **GTM:** `GTM-T7HQQSL9` — NÃO REMOVER
*   **Meta Pixel:** `317156430061443` — Funciona de forma independente, NÃO instalar via GTM
*   **WhatsApp:** `11 99380-8385` — Redirecionamento direto `wa.me` (sem modal)

## ✅ Status
Tudo codado, formatado pelo Prettier (via Husky pre-commit), commitado e hospedado no repositório `https://github.com/bielcolares/site-gtech.git` com deploy automático pela Vercel.

---
*Nota para a IA:* Em conversas futuras, ao ler este arquivo, lembre-se do padrão visual premium focado em B2B estabelecido até aqui. Evite criar designs simplistas ou alterar o esquema de cores primário sem autorização. Mantenha os grids responsivos e utilize a biblioteca Framer Motion existente para novas animações. A página `/compliance` é a central de governança do site — toda referência a certificados, documentos e canal ético deve apontar para ela.
