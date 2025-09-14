# Bego-Pad 📝
Aplicación web de notas inspirada en ColorNote, con mejoras (etiquetas, calendario, export).
- Frontend: Astro (raíz)
- API: Node + Express (carpeta /api)
- Datos: Firebase (Firestore, Auth, Storage)
- Hosting: Vercel (dos proyectos)

## Scripts
- Web: `pnpm dev`, `pnpm build`, `pnpm preview`
- API: `pnpm dev:api`, `pnpm build:api`, `pnpm start:api`

## Entornos
1) Duplica `.env.example` como `.env.local` en la raíz y rellena Firebase.
2) En Vercel:
   - Proyecto web (root): añade las 7 variables de Firebase.
   - Proyecto api (/api): añade `FIREBASE_SERVICE_ACCOUNT_JSON_BASE64` (JSON de service account en base64) y `PORT=3000`.

## Local
- `pnpm i`
- `pnpm dev` (web en 4321)
- `pnpm dev:api` (API en 3000)

## Healthcheck
- `GET /health` en la API debe responder `{ ok: true }`.

## Notas
- PWA y funcionalidades avanzadas se añadirán en siguientes iteraciones.
