const Arrow = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};
const arrowsKeyCodes = Object.values(Arrow);

const instructions = [
  "Двойной клик - Oткрыть папку",
  "→ - Перейти в папку",
  "← - Выйти из папки",
  "↕ - Навигация по папке",
];

export { Arrow, arrowsKeyCodes, instructions };
