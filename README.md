# Feliz Idade — Casa de Repouso

Site de apresentação da casa de repouso **Feliz Idade**, em Mendes/RJ: uma página única com os
serviços, fotos do dia a dia, depoimento e atalhos de contato (WhatsApp, telefone, Instagram e mapa).

## Como rodar localmente

Pré-requisitos: [Bun](https://bun.sh) (ou Node.js 20+ com npm).

```sh
bun install      # ou: npm install
bun run dev      # ou: npm run dev
```

Abra o endereço que aparecer no terminal (normalmente http://localhost:8080).

Outros comandos:

```sh
bun run build           # gerar a versão de produção
bun run test            # rodar os testes
bunx vitest run         # idem
```

## Onde ficam os dados de contato

Tudo que o cliente costuma pedir para trocar está no topo de `src/routes/index.tsx`:

```ts
const WHATSAPP = "https://wa.me/5524992867683?text=...";
const TEL = "tel:+552424655623";
const INSTAGRAM = "https://instagram.com/felizidade"; // @ ainda a confirmar
const MAPS = "https://www.google.com/maps/search/?api=1&query=...";
```

- WhatsApp: (24) 99286-7683
- Telefone: (24) 2465-5623
- Endereço: Rua Prefeito Berardineli, 194 — Independência, Mendes/RJ

Os textos das seções (serviços, destaques, depoimento) também estão nesse mesmo arquivo.

## Fotos

- As fotos do dia a dia são servidas por apontadores em `src/assets/*.asset.json`, que apontam para
  o CDN do projeto. Se você levar o site para outro servidor, troque esses apontadores por arquivos
  próprios (basta substituir o `import` e usar o caminho da sua imagem).
- A foto grande da abertura (`src/assets/hero.jpg`) ainda é uma imagem gerada e deve ser trocada por
  uma foto real em formato horizontal.

## Pendências

Veja a lista em `roadmap.md` — o que ainda falta confirmar com o cliente (Instagram, depoimento real,
foto de abertura, horário de visitas).

## Feito com

TanStack Start · TypeScript · React · Tailwind CSS v4
