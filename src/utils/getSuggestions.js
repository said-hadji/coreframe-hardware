import { data } from "../data/data";

export function getSuggestions(count = 4) {
  const filtered = data.products.filter((p) => p.featured && p.rating >= 4);

  for (let i = filtered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
  }

  return filtered.slice(0, count);
}
