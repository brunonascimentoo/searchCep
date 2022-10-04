import RequestException from "./exceptions/request-exception.js";


export async function getJson(url) {

  try {
    const res = await fetch(url);
    const jsonBody = await res.json();
    return jsonBody;
  } catch (e) {
    throw new RequestException('Erro ao realizar requisição');
  }
}