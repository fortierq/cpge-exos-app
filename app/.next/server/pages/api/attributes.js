"use strict";
(() => {
var exports = {};
exports.id = 215;
exports.ids = [215];
exports.modules = {

/***/ 989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ lib_prisma)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./lib/prisma.tsx

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices
let prisma;
if (true) {
    prisma = new client_namespaceObject.PrismaClient();
} else {}
/* harmony default export */ const lib_prisma = (prisma);


/***/ }),

/***/ 496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ api_attributes)
});

// EXTERNAL MODULE: ./lib/prisma.tsx + 1 modules
var prisma = __webpack_require__(989);
;// CONCATENATED MODULE: ./lib/constants.tsx
const attributes = [
    "subject",
    "ds",
    "algorithm",
    "language", 
];
const url = "https://github.com/fortierq/cpge-exos/raw/main/exos";
const i18n = {
    subject: "Th\xe8me",
    ds: "Structure de donn\xe9es",
    algorithm: "Algorithme",
    language: "Langage",
    graph: "graphe",
    tree: "arbre",
    linkedlist: "liste cha\xeen\xe9e",
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
    deque: "file \xe0 2 bouts",
    priority_queue: "file de priorit\xe9"
};
function translate(s) {
    return i18n[s] ?? s;
}

;// CONCATENATED MODULE: ./pages/api/attributes.js


/* harmony default export */ const api_attributes = (async (_, res)=>{
    const d = {};
    await Promise.all(attributes.map(async (a)=>d[a] = (await prisma/* default */.Z[a].findMany()).map((e)=>e.name)));
    res.json(d);
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(496));
module.exports = __webpack_exports__;

})();