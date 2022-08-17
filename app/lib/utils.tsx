export async function fetchJson(
  url: string,
  options?: RequestInit
): Promise<any> {
  const response = await fetch(url, options);
  return response.json();
}
