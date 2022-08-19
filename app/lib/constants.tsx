export const attributes: Readonly<string[]> = [
  "ds",
  "algorithm",
  "language",
  "classe",
];

export const url = "https://github.com/fortierq/cpge-exos/raw/main/exos";

const i18n: Readonly<Record<string, string>> = {
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
  classe: "Classe",
};

export function translate(s) {
  if (["mp", "mp2i", "mpsi", "mpi", "bcpst1", "bcpst2"].includes(s)) {
    return s.toUpperCase();
  }
  return i18n[s] ?? s;
}
