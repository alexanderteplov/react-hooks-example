export function getRandomEl<Item>(array: readonly Item[]): Item {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
