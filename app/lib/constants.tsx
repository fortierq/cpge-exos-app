export const attributes = ["subject", "ds", "algorithm", "language"];

export const url = "https://github.com/fortierq/exos/raw/main/exos";

const i18n = {
  subject: "Thème",
  ds: "Structure de données",
  algorithm: "Algorithme",
  language: "Langage",
  graph: "graphe",
  tree: "arbre",
  linkedlist: "liste chaînée",
  list: "liste",
  array: "tableau",
  stack: "pile",
  queue: "file",
  set: "ensemble",
  map: "table de hachage",
  dictionary: "dictionnaire",
  heap: "tas",
  sort: "tri",
  search: "recherche",
  dichotomy: "dichotomie",
  deque: "file à 2 bouts",
  priority_queue: "file de priorité",
};

export function translate(s: string) {
  return i18n[s] ?? s;
}
