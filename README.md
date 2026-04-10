# GTech Soluções Ambientais - Plataforma Institucional

Este repositório contém o código-fonte da plataforma institucional B2B desenvolvida para a **GTech Soluções Ambientais**. O projeto foi construído focando em altíssima performance, SEO, e uma interface corporativa de vanguarda que transmita a segurança e os pilares de ESG, Compliance e certificações da marca (como a R2v3 e ISOs).

---

## 🛠 Pré-Requisitos do Ambiente

Para rodar, modificar ou realizar o "build" desta aplicação, certifique-se de que o ambiente (servidor ou máquina local) possua:
- **Node.js** (versão 18.17.0 ou superior recomendada)
- **NPM** ou **Yarn** (gerenciadores de pacotes)

## 🚀 Tecnologias Utilizadas

A base da aplicação utiliza o estado da arte do framework ecossistema React:
- **[Next.js (App Router)](https://nextjs.org/)** - Framework React (Server Side Rendering & escalabilidade).
- **[Tailwind CSS](https://tailwindcss.com/)** - Estilização responsiva e ágil.
- **[Framer Motion](https://www.framer.com/motion/)** - Motor avançado de micro-interações e animações declarativas.
- **[Lucide React](https://lucide.dev/)** - Biblioteca de Ícones otimizados.

---

## 💻 Como Rodar o Projeto Localmente

1. **Clone o repositório** ou faça o download dos arquivos:
   ```bash
   git clone https://github.com/bielcolares/site-gtech.git
   ```

2. **Acesse o diretório** do projeto:
   ```bash
   cd site-gtech
   ```

3. **Instale as dependências** do Node:
   ```bash
   npm install
   # ou caso use yarn
   yarn install
   ```

4. **Inicie o Servidor de Desenvolvimento**:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. O site estará rodando instantaneamente em `http://localhost:3000`.

---

## 🏗 Como Compilar (Build) para Produção

Se a sua intenção é levar este código para um servidor próprio (VPS, AWS EC2, DigitalOcean, etc), você precisa compilar o código em um formato otimizado:

1. **Gere a versão de produção**:
   ```bash
   npm run build
   ```

2. Após o término compilado pelo Next.js, **inicie a versão final**:
   ```bash
   npm start
   ```
*(O site passará a responder na porta 3000 do servidor, já otimizado e com tempos de carregamento extremante velozes).*

---

## 🌐 Instruções Simplificadas para Hospedagem Nuvem (Deploy)

A arquitetura do site foi projetada para interagir nativamente com serviços PaaS (Plataforma como Serviço). Se deseja publicá-lo de forma simplificada sem precisar configurar servidores manualmente:

### Recomendação principal: Vercel ou Netlify
1. Crie uma conta na [Vercel](https://vercel.com/) ou [Netlify](https://netlify.com/).
2. Vincule a sua conta do GitHub a plataforma.
3. Importe este repositório (`site-gtech`).
4. Ao clicar em **"Deploy"**, as configurações serão preenchidas automaticamente (Framework Preset: *Next.js*; Build Command: `npm run build`).
5. A plataforma gerará um link online em menos de 2 minutos. Basta apontar o DNS / Domínio Oficial (`www.gtech.com.br`) pelo painel.

---

## 📂 Estrutura Principal dos Arquivos 

Caso ocorra futuras manutenções na estrutura visual ou textual, guie-se por este mapeamento:
- `src/app/` → Ponto central das rotas (Páginas do site).
  - `page.js` → A página **Principal (Home)** B2B.
  - `sobre-nos/page.js` → Página dedicada à trajetória.
  - `servicos/page.js` → Catálogo de serviços.
  - `fale-conosco/page.js` → Central de Contato e Localização.
- `src/components/` → Todos os "blocos dinâmicos" do site estão aqui. 
  - (O *Header*, *Footer*, *Hero*, *Serviços Oficiais* entre outros pequenos pedaços customizáveis de fácil edição).
- `public/images/` → Todas as imagens estáticas utilizadas (Logo e Fotografia do Galpão).
- `tailwind.config.js` → Arquivo configurador do **Design System**. Toda a paleta de Cores base (os tons de Verde Oficial e Cinza) são controlados centralmente por este sistema.

---
**Documentação Estruturada por Engenharia de Software B2B projetada para alta disponibilidade e padronização ESG.**
