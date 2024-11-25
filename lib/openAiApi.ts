import { load } from "dotenv";
const env = await load();
const apiKey: string = env.OPENAI_API_KEY;

export async function apiRequest(url: string, body: any) {
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`,
  };

  if (body.n !== undefined) {
    body.n = 1;
  }

  if (body.max_tokens !== undefined) {
    body.n = 300;
  }

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers,
  });

  const json = await response.json();

  return json;
}


export async function createImageUrl(prompt: string) {
  const request = {
    model: "dall-e-3",
    prompt,
    n: 1, 
    size: "1024x1024",
  };
  const response = await apiRequest(
    "https://api.openai.com/v1/images/generations",
    request,
  );

  console.log(response);

  const imageUrl = response.data[0].url;

  return imageUrl;
}