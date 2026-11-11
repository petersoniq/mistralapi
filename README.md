# Mistral Chat

A minimal web app that calls the [Mistral API](https://docs.mistral.ai/) with the official TypeScript SDK (`@mistralai/mistralai`). The API key stays on the server; the browser only talks to `/api/chat`.

## Setup

```bash
npm install
cp .env.example .env
```

Then edit `.env` and set `MISTRAL_API_KEY` to your key from [console.mistral.ai](https://console.mistral.ai/).

## Run

```bash
npm start
```

Open http://localhost:3000 and start chatting.

## How it works

- `server.mjs` — Express server that serves `public/` and exposes `POST /api/chat`, which forwards the conversation to Mistral using `mistral-small-latest` via `client.chat.complete()`.
- `public/index.html` — single-file chat UI (HTML/CSS/JS) that keeps the message history client-side.
