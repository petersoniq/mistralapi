# Mistral Chat

Minimálna chatovacia webová aplikácia (model `mistral-small-latest`). Čisto statická, automaticky nasadzovaná na **GitHub Pages** cez GitHub Actions. Vďaka nastaviteľnému pripojeniu funguje s Mistral API aj s bezplatnými alternatívami (OpenRouter, NVIDIA NIM, lokálna Ollama).

## Používanie

1. Otvor stránku (URL nájdeš v *Settings → Pages* repozitára).
2. Klikni na **Nastavenia** a vyber poskytovateľa.
3. Vlož kľúč (ak ho poskytovateľ vyžaduje) a chatuj. Všetky nastavenia sa ukladajú len do tvojho prehliadača (localStorage) — nikdy do repozitára.

## Poskytovatelia

| Poskytovateľ | Cena | Kľúč | Poznámka |
|---|---|---|---|
| **Mistral API** | platený plán (Pro / pay-as-you-go) | [console.mistral.ai](https://console.mistral.ai/) | Od októbra 2026 Mistral **neaktivuje API kľúče na Free pláne** — na priame API je potrebný platený plán |
| **OpenRouter** | zdarma (`:free` modely) | [openrouter.ai](https://openrouter.ai/settings/keys) | Limit 20 req/min a 50 req/deň; model `openrouter/free` automaticky vyberá bezplatný model, zoznam :free modelov na [openrouter.ai/models](https://openrouter.ai/models) |
| **NVIDIA NIM** | zdarma | [build.nvidia.com](https://build.nvidia.com/) | Kľúč `nvapi-…` po registrácii do NVIDIA Developer Program (~40 req/min); ID modelu skopíruj zo stránky modelu |
| **Ollama** | zdarma (lokálne) | nepotrebný | Spusti [Ollama](https://ollama.com/download), `ollama pull mistral`, nastavenia nechaj na predvolených (`http://localhost:11434/v1`) |

Všetky podporované endpointy sú OpenAI-kompatibilné (`POST {base}/chat/completions`), takže v poli „API URL“ a „Model“ funguje aj ľubovoľný vlastný server.

## Nasadenie (automatické)

Workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) deployuje obsah priečinka `public/` na GitHub Pages po každom pushi do `main` (aj ručne cez *Run workflow*).

Jednorazovo povoľ v repozitári: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Lokálny vývoj

Aplikácia nemá žiadne závislosti — stačí otvoriť `public/index.html` v prehliadači, alebo spustiť:

```bash
npx serve public
```
