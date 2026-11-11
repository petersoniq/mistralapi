import "dotenv/config";
import express from "express";
import { Mistral } from "@mistralai/mistralai";

const MODEL = "mistral-small-latest";
const PORT = process.env.PORT || 3000;

if (!process.env.MISTRAL_API_KEY) {
  console.error("MISTRAL_API_KEY is not set. Copy .env.example to .env and add your key.");
  process.exit(1);
}

const client = new Mistral({ apiKey: process.env.MISTRAL_API_KEY });
const app = express();

app.use(express.json({ limit: "1mb" }));
app.use(express.static("public"));

app.post("/api/chat", async (req, res) => {
  const incoming = Array.isArray(req.body?.messages) ? req.body.messages : [];
  const messages = incoming
    .filter((m) => m && typeof m.content === "string" && ["system", "user", "assistant"].includes(m.role))
    .map((m) => ({ role: m.role, content: m.content }));

  if (messages.length === 0) {
    return res.status(400).json({ error: "Send a non-empty messages array." });
  }

  try {
    const response = await client.chat.complete({ model: MODEL, messages });
    const raw = response.choices?.[0]?.message?.content ?? "";
    const reply = typeof raw === "string" ? raw : raw.map((chunk) => chunk?.text ?? "").join("");
    res.json({ reply });
  } catch (err) {
    console.error("Mistral API error:", err.message);
    res.status(502).json({ error: "Failed to get a response from the Mistral API." });
  }
});

app.listen(PORT, () => {
  console.log(`Chat app running at http://localhost:${PORT}`);
});
