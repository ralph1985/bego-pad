import express from "express";
import cors from "cors";
import { initializeApp, cert, getApps } from "firebase-admin/app";

const app = express();
app.use(cors());
app.use(express.json());

// Inicialización opcional de Firebase Admin si hay credenciales:
const b64 = process.env.FIREBASE_SERVICE_ACCOUNT_JSON_BASE64 || "";
if (b64 && !getApps().length) {
  const json = JSON.parse(Buffer.from(b64, "base64").toString("utf8"));
  initializeApp({ credential: cert(json) });
}

app.get("/health", (_req, res) => res.json({ ok: true }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API listening on :${port}`));
