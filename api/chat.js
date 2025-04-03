export default async function handler(req, res) {
  const { messages } = req.body;
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) return res.status(500).json({ error: "Missing API Key" });

  const resposta = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4",
      temperature: 0.4,
      messages
    })
  });

  const data = await resposta.json();
  res.status(200).json(data);
}
