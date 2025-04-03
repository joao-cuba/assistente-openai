export default async function handler(req, res) {
  const webhook = process.env.MAKE_WEBHOOK;
  if (!webhook) return res.status(500).json({ error: "Missing Make webhook" });

  const resposta = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body)
  });

  const texto = await resposta.text();
  res.status(200).send(texto);
}
