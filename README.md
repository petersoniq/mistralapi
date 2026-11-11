# Mistral Chat

Minimálna chatovacia webová aplikácia poháňaná [Mistral API](https://docs.mistral.ai/) (model `mistral-small-latest`). Aplikácia je čisto statická a automaticky sa nasadzuje na **GitHub Pages** cez GitHub Actions.

## Používanie

1. Otvor stránku (URL nájdeš v *Settings → Pages* repozitára).
2. Klikni na **API kľúč** a vlož kľúč z [console.mistral.ai](https://console.mistral.ai/).
3. Kľúč sa uloží len v tvojom prehliadači (localStorage) a požiadavky idú priamo na `api.mistral.ai` — nikdy sa neukladá do repozitára ani na žiadny server.

> Poznámka: kľúč v prehliadači je viditeľný jeho majiteľovi. Toto riešenie je určené na osobné použitie (BYOK). Ak potrebuješ kľúč držať na serveri, nasad aplikáciu s backendom (napr. serverless funkcia) namiesto statického hostingu.

## Nasadenie (automatické)

Workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) deployuje obsah priečinka `public/` na GitHub Pages po každom pushi do `main` (aj ručne cez *Run workflow*).

Jednorazovo povoľ v repozitári: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Lokálny vývoj

Aplikácia nemá žiadne závislosti — stačí otvoriť `public/index.html` v prehliadači, alebo spustiť:

```bash
npx serve public
```
