"use strict";
exports.id = 102;
exports.ids = [102];
exports.modules = {

/***/ 102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: ./lib/utils.tsx
async function fetchJson(url, options) {
    const response = await fetch(url, options);
    return response.json();
}

;// CONCATENATED MODULE: ./components/button.tsx



/* harmony default export */ const components_button = (({ selectedOptions , setExos  })=>{
    async function search() {
        setExos(await fetchJson(`/api/search`, {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(selectedOptions)
        }));
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
        size: "large",
        variant: "contained",
        color: "success",
        onClick: search,
        children: "CHERCHER"
    });
});

// EXTERNAL MODULE: external "@mui/material/Chip"
var Chip_ = __webpack_require__(369);
var Chip_default = /*#__PURE__*/__webpack_require__.n(Chip_);
// EXTERNAL MODULE: external "@mui/material/Autocomplete"
var Autocomplete_ = __webpack_require__(311);
var Autocomplete_default = /*#__PURE__*/__webpack_require__.n(Autocomplete_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(42);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__(742);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);
// EXTERNAL MODULE: external "@mui/material/Checkbox"
var Checkbox_ = __webpack_require__(330);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);
// EXTERNAL MODULE: external "@mui/icons-material/CheckBoxOutlineBlank"
var CheckBoxOutlineBlank_ = __webpack_require__(779);
var CheckBoxOutlineBlank_default = /*#__PURE__*/__webpack_require__.n(CheckBoxOutlineBlank_);
// EXTERNAL MODULE: external "@mui/icons-material/CheckBox"
var CheckBox_ = __webpack_require__(783);
var CheckBox_default = /*#__PURE__*/__webpack_require__.n(CheckBox_);
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

;// CONCATENATED MODULE: ./components/selects.tsx











const icon = /*#__PURE__*/ jsx_runtime_.jsx((CheckBoxOutlineBlank_default()), {
    fontSize: "small"
});
const checkedIcon = /*#__PURE__*/ jsx_runtime_.jsx((CheckBox_default()), {
    fontSize: "small"
});
/* harmony default export */ const selects = (({ setSelectedOptions  })=>{
    const [options, setOptions] = external_react_.useState({});
    external_react_.useEffect(()=>{
        (async ()=>{
            const data = await fetchJson(`/api/attributes`);
            setOptions(data);
        })();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx((Stack_default()), {
        spacing: 1.5,
        children: attributes.map((attribute)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx((Autocomplete_default()), {
                multiple: true,
                autoHighlight: true,
                filterOptions: (0,Autocomplete_.createFilterOptions)({
                    matchFrom: "start",
                    stringify: translate
                }),
                options: options[attribute] ?? [],
                onChange: (_, selected)=>{
                    setSelectedOptions((options)=>{
                        options[attribute] = selected;
                        return options;
                    });
                },
                renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                        ...params,
                        label: translate(attribute)
                    }),
                renderTags: (value, getTagProps)=>value.map((option, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                            label: translate(option),
                            ...getTagProps({
                                index
                            })
                        })),
                renderOption: (props, option, { selected  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        ...props,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                icon: icon,
                                checkedIcon: checkedIcon,
                                style: {
                                    marginRight: 8
                                },
                                checked: selected
                            }),
                            translate(option)
                        ]
                    })
            }, attribute);
        })
    });
});

// EXTERNAL MODULE: external "@mui/material/Accordion"
var Accordion_ = __webpack_require__(409);
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_);
// EXTERNAL MODULE: external "@mui/material/AccordionSummary"
var AccordionSummary_ = __webpack_require__(604);
var AccordionSummary_default = /*#__PURE__*/__webpack_require__.n(AccordionSummary_);
// EXTERNAL MODULE: external "@mui/material/AccordionDetails"
var AccordionDetails_ = __webpack_require__(279);
var AccordionDetails_default = /*#__PURE__*/__webpack_require__.n(AccordionDetails_);
// EXTERNAL MODULE: external "@mui/icons-material/ExpandMore"
var ExpandMore_ = __webpack_require__(148);
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);
// EXTERNAL MODULE: external "@mui/material/Tabs"
var Tabs_ = __webpack_require__(544);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);
// EXTERNAL MODULE: external "@mui/material/Tab"
var Tab_ = __webpack_require__(307);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: ./components/exo.tsx







/* harmony default export */ const components_exo = (({ exo  })=>{
    const [value, setValue] = external_react_.useState(0);
    const url_exo = (path_relative, cor)=>{
        const filename = path_relative.substring(path_relative.lastIndexOf("/") + 1);
        let path = `${url}/${path_relative}/${filename}`;
        if (cor) {
            path += "_cor";
        }
        return `${path}.png`;
    };
    const changeTabs = (_, newValue)=>{
        if (newValue === 2) {
            window.open(`${url}/${exo.path}`, "_blank", "noopener,noreferrer");
        } else {
            setValue(newValue);
        }
    };
    function TabPanel(props) {
        const { children , value , index , ...other } = props;
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            role: "tabpanel",
            hidden: value !== index,
            ...other,
            children: value === index && /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    p: 3
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    children: children
                })
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            width: "100%"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    borderBottom: 1,
                    borderColor: "divider"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Tabs_default()), {
                    value: value,
                    onChange: changeTabs,
                    sx: {
                        bgcolor: "rgba(0, 0, 0, .02)"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            label: "\xc9nonc\xe9",
                            disableRipple: true
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            label: "Corrig\xe9",
                            disableRipple: true
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            label: "GitHub",
                            disableRipple: true
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TabPanel, {
                value: value,
                index: 0,
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: url_exo(exo.path, false),
                    alt: `Erreur : url invalide. Merci de soumettre une issue sur GitHub avec le nom de l'exercice.`
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TabPanel, {
                value: value,
                index: 1,
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    alt: "Pas de corrig\xe9",
                    src: url_exo(exo.path, true)
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TabPanel, {
                value: value,
                index: 2
            })
        ]
    });
});

;// CONCATENATED MODULE: ./components/exos.tsx










/* harmony default export */ const components_exos = (({ exos  })=>{
    const [expanded, setExpanded] = external_react_.useState(false);
    const handleChange = (panel)=>(_, isExpanded)=>setExpanded(isExpanded ? panel : false);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: exos.map((exo)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()), {
                sx: {
                    border: 1,
                    borderColor: "grey.500"
                },
                disableGutters: true,
                expanded: expanded === exo.path,
                onChange: handleChange(exo.path),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((AccordionSummary_default()), {
                        expandIcon: /*#__PURE__*/ jsx_runtime_.jsx((ExpandMore_default()), {}),
                        sx: {
                            bgcolor: "rgba(0, 0, 0, .02)"
                        },
                        children: [
                            exo.name,
                            /*#__PURE__*/ jsx_runtime_.jsx((Stack_default()), {
                                direction: "row",
                                spacing: 1,
                                sx: {
                                    ml: 2
                                },
                                children: exo.exercise_subject.map(({ subject_name  })=>/*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                                        label: translate(subject_name),
                                        variant: "outlined",
                                        size: "small",
                                        sx: {
                                            color: "text.secondary"
                                        }
                                    }, `${exo.path}_${subject_name}`))
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((AccordionDetails_default()), {
                        sx: {
                            p: 0
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_exo, {
                            exo: exo
                        })
                    })
                ]
            }, exo.path);
        })
    });
});

// EXTERNAL MODULE: external "@mui/material/Unstable_Grid2"
var Unstable_Grid2_ = __webpack_require__(904);
var Unstable_Grid2_default = /*#__PURE__*/__webpack_require__.n(Unstable_Grid2_);
// EXTERNAL MODULE: external "react-github-fork-ribbon"
var external_react_github_fork_ribbon_ = __webpack_require__(360);
var external_react_github_fork_ribbon_default = /*#__PURE__*/__webpack_require__.n(external_react_github_fork_ribbon_);
;// CONCATENATED MODULE: ./pages/_app.tsx














/* harmony default export */ const _app = (()=>{
    const [selectedOptions, setSelectedOptions] = external_react_.useState({});
    const [exos, setExos] = external_react_.useState([]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_github_fork_ribbon_default()), {
                href: "https://github.com/fortierq/cpge-exos-app",
                color: "green",
                position: "right",
                children: "Fork me on GitHub"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "h4",
                align: "center",
                mt: 3,
                children: "Exercices d'informatique en CPGE"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "subtitle1",
                align: "center",
                children: "MP2I/MPI, MPSI/MP option info et informatique commune"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
                container: true,
                mt: 5,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                        md: 0.33,
                        xs: 0
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                        md: 3,
                        xs: 12,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Stack_default()), {
                            spacing: 2,
                            mb: 3,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(selects, {
                                    setSelectedOptions: setSelectedOptions
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    style: {
                                        textAlign: "center"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_button, {
                                        selectedOptions: selectedOptions,
                                        setExos: setExos
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                        md: 0.33,
                        xs: 0
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                        md: 8,
                        xs: 12,
                        justifyContent: "center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_exos, {
                            exos: exos
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                        md: 0.33,
                        xs: 0
                    })
                ]
            })
        ]
    });
});


/***/ })

};
;