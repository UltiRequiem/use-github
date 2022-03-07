export function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json());
}
