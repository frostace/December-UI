export const locale = {
    placeholders: {
        otherPages: "Cette page est en cours de d\u00e9veloppement ...",
    },
    navbarItems: [
        { alias: "component", name: "composant" },
        { alias: "theme", name: "th\u00e8me" },
        { alias: "playground", name: "terrain de jeux" },
    ],
    guideSections: [
        {
            sectionName: "D\u00e9veloppement",
            subTitle: "",
            sectionItems: [
                { itemName: "Installation", itemPath: "/guide/installation" },
                {
                    itemName: "D\u00e9marrage rapide",
                    itemPath: "/guide/quickstart",
                },
                { itemName: "Internationalisation", itemPath: "/guide/i18n" },
                {
                    itemName: "Th\u00e8me personnalis\u00e9",
                    itemPath: "/guide/customtheme",
                },
                {
                    itemName: "Transition int\u00e9gr\u00e9e",
                    itemPath: "/guide/builtintransition",
                },
            ],
        },
    ],
    componentSections: [
        {
            sectionName: "Composants",
            subTitle: "De base",
            sectionItems: [
                { itemName: "Disposition", itemPath: "/component/layout" },
                { itemName: "Bouton", itemPath: "/component/button" },
            ],
        },
        {
            sectionName: "",
            subTitle: "Forme",
            sectionItems: [
                { itemName: "Radio", itemPath: "/component/radio" },
                {
                    itemName: "Case \u00e0 cocher",
                    itemPath: "/component/checkbox",
                },
                { itemName: "Commutateur", itemPath: "/component/switch" },
                { itemName: "Glissi\u00e8re", itemPath: "/component/slider" },
            ],
        },
        {
            sectionName: "",
            subTitle: "Autres",
            sectionItems: [
                { itemName: "Backtop", itemPath: "/component/backtop" },
            ],
        },
    ],
    themeSection: {
        themeTitle: "Thème officiel",
        themeName: "December",
        themeType: "Thème par défaut",
        themeAuthor: "frostace",
    },
    layoutView: {
        title: "Disposition",
        intro:
            "Cr\u00e9ez rapidement et facilement des mises en page avec les 24 colonnes de base",
        basic: {
            name: "Disposition de base",
            intro:
                "Cr\u00e9er une disposition de grille de base \u00e0 l'aide de colonnes",
        },
        column: {
            name: "Espacement des colonnes",
            intro: "L'espacement des colonnes est pris en charge",
        },
        hybrid: {
            name: "Disposition hybride",
            intro:
                "Formez une disposition hybride plus complexe en combinant les colonnes de base 1/24",
        },
        offset: {
            name: "D\u00e9calage personnalis\u00e9",
            intro: "Vous pouvez sp\u00e9cifier des d\u00e9calages de colonne",
        },
        align: {
            name: "Alignement",
            intro:
                "Utilisez la disposition flexible pour effectuer un alignement flexible des colonnes",
        },
        tables: [
            {
                name: "Attribut de ligne",
                heads: [
                    "Attribut",
                    "La description",
                    "Type",
                    "Valeurs accept\u00e9es",
                    "D\u00e9faut",
                ],
                rows: {
                    row1: [
                        "goutti\u00e8re",
                        "espacement de la grille",
                        "nombre",
                        "-",
                        "0",
                    ],
                    row2: [
                        "type",
                        "mode de mise en page, vous pouvez utiliser flex, fonctionne dans les navigateurs modernes",
                        "cha\u00eene",
                        "-",
                        "-",
                    ],
                    row3: [
                        "justifier",
                        "alignement horizontal de la disposition flexible",
                        "cha\u00eene",
                        "d\u00e9but / fin / centre / espace autour / espace entre",
                        "d\u00e9but",
                    ],
                    row4: [
                        "aligner",
                        "alignement vertical de la disposition flexible",
                        "cha\u00eene",
                        "haut / milieu / bas",
                        "Haut",
                    ],
                    row5: [
                        "\u00e9tiquette",
                        "balise d'\u00e9l\u00e9ment personnalis\u00e9",
                        "cha\u00eene",
                        "*",
                        "div",
                    ],
                },
            },
            {
                name: "Attribut Col",
                heads: [
                    "Attribut",
                    "La description",
                    "Type",
                    "Valeurs accept\u00e9es",
                    "D\u00e9faut",
                ],
                rows: {
                    row1: [
                        "envergure",
                        "nombre de colonnes que la grille couvre",
                        "nombre",
                        "-",
                        "24",
                    ],
                    row2: [
                        "d\u00e9calage",
                        "nombre d'espacement sur le c\u00f4t\u00e9 gauche de la grille",
                        "nombre",
                        "-",
                        "0",
                    ],
                    row3: [
                        "pousser",
                        "nombre de colonnes que la grille se d\u00e9place vers la droite",
                        "nombre",
                        "-",
                        "0",
                    ],
                    row4: [
                        "tirer",
                        "nombre de colonnes que la grille d\u00e9place vers la gauche",
                        "nombre",
                        "-",
                        "0",
                    ],
                    row5: ["...", "...", "...", "...", "..."],
                },
            },
        ],
    },
    buttonView: {
        title: "Bouton",
        intro: "Bouton couramment utilis\u00e9",
        basic: { name: "Utilisation basique" },
        disabled: {
            name: "Bouton d\u00e9sactiv\u00e9",
            intro:
                "L'attribut \u00abd\u00e9sactiv\u00e9\u00bb d\u00e9termine si le bouton est d\u00e9sactiv\u00e9.",
        },
        text: {
            name: "Bouton Texte",
            intro: "Boutons sans bordure ni arri\u00e8re-plan",
        },
        icon: {
            name: "Bouton d'ic\u00f4ne",
            intro:
                "Utilisez des ic\u00f4nes pour ajouter plus de sens au bouton. Vous pouvez utiliser une ic\u00f4ne seule pour \u00e9conomiser de l'espace ou l'utiliser avec du texte",
        },
        group: {
            name: "Groupe de boutons",
            intro:
                "Affich\u00e9 sous forme de groupe de boutons, peut \u00eatre utilis\u00e9 pour regrouper une s\u00e9rie d'op\u00e9rations similaires",
        },
        loading: {
            name: "Bouton de chargement",
            intro:
                "Cliquez sur le bouton pour charger les donn\u00e9es, puis le bouton affiche un \u00e9tat de chargement",
        },
        size: {
            name: "Tailles",
            intro:
                "Outre la taille par d\u00e9faut, le composant Button fournit trois tailles suppl\u00e9mentaires pour que vous puissiez choisir parmi diff\u00e9rents sc\u00e9narios",
        },
        tables: [
            {
                name: "Les attributs",
                heads: [
                    "Attribut",
                    "La description",
                    "Type",
                    "Valeurs accept\u00e9es",
                    "D\u00e9faut",
                ],
                rows: {
                    row1: [
                        "Taille",
                        "taille du bouton",
                        "cha\u00eene",
                        "moyen / petit / mini",
                        "-",
                    ],
                    row2: [
                        "type",
                        "type de bouton",
                        "cha\u00eene",
                        "primaire / succ\u00e8s / avertissement / danger / info / texte",
                        "-",
                    ],
                    row3: [
                        "plaine",
                        "d\u00e9terminer s'il s'agit d'un simple bouton",
                        "bool\u00e9en",
                        "-",
                        "faux",
                    ],
                    row4: [
                        "rond",
                        "d\u00e9terminer s'il s'agit d'un bouton rond",
                        "bool\u00e9en",
                        "-",
                        "faux",
                    ],
                    row5: [
                        "cercle",
                        "d\u00e9terminer s'il s'agit d'un bouton circulaire",
                        "bool\u00e9en",
                        "-",
                        "faux",
                    ],
                    row6: [
                        "chargement",
                        "d\u00e9terminer s'il se charge",
                        "bool\u00e9en",
                        "-",
                        "faux",
                    ],
                    row7: [
                        "d\u00e9sactiv\u00e9e",
                        "d\u00e9sactiver le bouton",
                        "bool\u00e9en",
                        "-",
                        "faux",
                    ],
                    row8: [
                        "ic\u00f4ne",
                        "nom de classe d'ic\u00f4ne",
                        "cha\u00eene",
                        "-",
                        "-",
                    ],
                    row9: [
                        "mise au point automatique",
                        "comme l'autofocus du bouton natif",
                        "bool\u00e9en",
                        "-",
                        "faux",
                    ],
                    row10: [
                        "type natif",
                        "Identique au type de bouton natif",
                        "cha\u00eene",
                        "bouton / soumettre / r\u00e9initialiser",
                        "bouton",
                    ],
                },
            },
        ],
    },
    radioView: {
        title: "Radio",
        intro: "S\u00e9lection unique parmi plusieurs options",
        basic: {
            name: "Utilisation basique",
            intro:
                "La radio ne devrait pas avoir trop d'options. Sinon, utilisez plut\u00f4t le composant Select",
        },
        disabled: {
            name: "d\u00e9sactiv\u00e9",
            intro:
                "L'attribut \u00abd\u00e9sactiv\u00e9\u00bb d\u00e9termine si le bouton est d\u00e9sactiv\u00e9.",
        },
        group: {
            name: "Groupe de boutons radio",
            intro:
                "Convient pour choisir parmi certaines options mutuellement exclusives",
        },
        style: {
            name: "Style de bouton",
            intro: "Radio avec styles de boutons",
        },
        border: { name: "Avec des bordures" },
        tables: [
            {
                name: "Attributs radio",
                heads: [
                    "Attribut",
                    "La description",
                    "Type",
                    "Valeurs accept\u00e9es",
                    "D\u00e9faut",
                ],
                rows: {
                    row1: [
                        "valeur / mod\u00e8le v",
                        "valeur contraignante",
                        "cha\u00eene / nombre / bool\u00e9en",
                        "-",
                        "-",
                    ],
                    row2: [
                        "\u00e9tiquette",
                        "la valeur de la radio",
                        "cha\u00eene / nombre / bool\u00e9en",
                        "-",
                        "-",
                    ],
                    row3: [
                        "d\u00e9sactiv\u00e9e",
                        "si la radio est d\u00e9sactiv\u00e9e",
                        "bool\u00e9en",
                        "-",
                        "faux",
                    ],
                    row4: [
                        "fronti\u00e8re",
                        "s'il faut ajouter une bordure autour de la radio",
                        "bool\u00e9en",
                        "-",
                        "faux",
                    ],
                    row5: [
                        "Taille",
                        "taille de la radio, ne fonctionne que lorsque la bordure est vraie",
                        "cha\u00eene",
                        "moyen / petit / mini",
                        "-",
                    ],
                    row6: [
                        "Nom",
                        "attribut \u00abnom\u00bb natif",
                        "cha\u00eene",
                        "-",
                        "-",
                    ],
                },
            },
            {
                name: "\u00c9v\u00e9nement radio",
                heads: [
                    "Nom de l'\u00e9v\u00e9nement",
                    "La description",
                    "Param\u00e8tres",
                ],
                rows: {
                    row1: [
                        "changement",
                        "se d\u00e9clenche lorsque la valeur li\u00e9e change",
                        "la valeur de l'\u00e9tiquette de la radio choisie",
                    ],
                },
            },
            {
                name: "Attributs de groupe radio",
                heads: [
                    "Attribut",
                    "La description",
                    "Type",
                    "Valeurs accept\u00e9es",
                    "D\u00e9faut",
                ],
                rows: {
                    row1: [
                        "valeur / mod\u00e8le v",
                        "valeur contraignante",
                        "cha\u00eene / nombre / bool\u00e9en",
                        "-",
                        "-",
                    ],
                    row2: [
                        "\u00e9tiquette",
                        "la valeur de la radio",
                        "cha\u00eene / nombre / bool\u00e9en",
                        "-",
                        "-",
                    ],
                    row3: [
                        "d\u00e9sactiv\u00e9e",
                        "si la radio est d\u00e9sactiv\u00e9e",
                        "bool\u00e9en",
                        "-",
                        "faux",
                    ],
                },
            },
            {
                name: "\u00c9v\u00e9nement de groupe radio",
                heads: [
                    "Nom de l'\u00e9v\u00e9nement",
                    "La description",
                    "Param\u00e8tres",
                ],
                rows: {
                    row1: [
                        "changement",
                        "se d\u00e9clenche lorsque la valeur li\u00e9e change",
                        "la valeur de l'\u00e9tiquette de la radio choisie",
                    ],
                },
            },
            {
                name: "Attributs des boutons radio",
                heads: [
                    "Attribut",
                    "La description",
                    "Type",
                    "Valeurs accept\u00e9es",
                    "D\u00e9faut",
                ],
                rows: {
                    row1: [
                        "\u00e9tiquette",
                        "la valeur de la radio",
                        "cha\u00eene / nombre / bool\u00e9en",
                        "-",
                        "-",
                    ],
                    row2: [
                        "d\u00e9sactiv\u00e9e",
                        "si la radio est d\u00e9sactiv\u00e9e",
                        "bool\u00e9en",
                        "-",
                        "faux",
                    ],
                    row3: [
                        "Nom",
                        "attribut \u00abnom\u00bb natif",
                        "cha\u00eene",
                        "-",
                        "-",
                    ],
                },
            },
        ],
    },
    checkboxView: {
        title: "Case \u00e0 cocher",
        intro: "Un groupe d'options \u00e0 choix multiples",
        basic: {
            name: "Utilisation basique",
            intro:
                "La case \u00e0 cocher peut \u00eatre utilis\u00e9e pour basculer entre deux \u00e9tats",
        },
        disabled: {
            name: "\u00c9tat d\u00e9sactiv\u00e9",
            intro: "\u00c9tat d\u00e9sactiv\u00e9 pour la case \u00e0 cocher",
        },
        group: {
            name: "Groupe de cases \u00e0 cocher",
            intro:
                "Il est utilis\u00e9 pour plusieurs cases \u00e0 cocher qui sont li\u00e9es dans un groupe, et indique si une option est s\u00e9lectionn\u00e9e en v\u00e9rifiant si elle est coch\u00e9e",
        },
        indeterminate: {
            name: "Ind\u00e9termin\u00e9",
            intro:
                "La propri\u00e9t\u00e9 ind\u00e9termin\u00e9e peut vous aider \u00e0 obtenir un effet \u00abtout cocher\u00bb",
        },
        minmax: {
            name: "\u00c9l\u00e9ments minimum / maximum v\u00e9rifi\u00e9s",
            intro:
                "Les propri\u00e9t\u00e9s min et max peuvent vous aider \u00e0 limiter le nombre d'\u00e9l\u00e9ments coch\u00e9s",
        },
        tables: [
            {
                name: "Attributs de case \u00e0 cocher",
                heads: [
                    "Attribut",
                    "La description",
                    "Type",
                    "Valeurs accept\u00e9es",
                    "D\u00e9faut",
                ],
                rows: {
                    row1: [
                        "valeur / mod\u00e8le v",
                        "valeur contraignante",
                        "cha\u00eene / nombre / bool\u00e9en",
                        "-",
                        "-",
                    ],
                    row2: [
                        "\u00e9tiquette",
                        "valeur d'une case \u00e0 cocher lorsqu'elle est utilis\u00e9e dans un groupe de cases \u00e0 cocher",
                        "cha\u00eene / nombre / bool\u00e9en",
                        "-",
                        "-",
                    ],
                    row3: [
                        "true-label",
                        "valeur de la case \u00e0 cocher si elle est coch\u00e9e",
                        "cha\u00eene / nombre",
                        "-",
                        "-",
                    ],
                    row4: [
                        "true-label",
                        "valeur de la case \u00e0 cocher si elle n'est pas coch\u00e9e",
                        "cha\u00eene / nombre",
                        "-",
                        "-",
                    ],
                    row5: [
                        "d\u00e9sactiv\u00e9e",
                        "si la case \u00e0 cocher est d\u00e9sactiv\u00e9e",
                        "bool\u00e9en",
                        "-",
                        "faux",
                    ],
                    row6: [
                        "fronti\u00e8re",
                        "s'il faut ajouter une bordure autour de la case \u00e0 cocher",
                        "bool\u00e9en",
                        "-",
                        "faux",
                    ],
                    row7: [
                        "Taille",
                        "taille de la case \u00e0 cocher, ne fonctionne que lorsque la bordure est vraie",
                        "cha\u00eene",
                        "moyen / petit / mini",
                        "-",
                    ],
                    row8: [
                        "Nom",
                        "attribut \u00abnom\u00bb natif",
                        "cha\u00eene",
                        "-",
                        "-",
                    ],
                    row9: [
                        "v\u00e9rifi\u00e9",
                        "si une case \u00e0 cocher est coch\u00e9e",
                        "bool\u00e9en",
                        "-",
                        "faux",
                    ],
                    row10: [
                        "ind\u00e9termin\u00e9",
                        "identique \u00e0 ind\u00e9termin\u00e9 dans la case native",
                        "bool\u00e9en",
                        "-",
                        "faux",
                    ],
                },
            },
            {
                name: "Case \u00e0 cocher \u00c9v\u00e9nement",
                heads: [
                    "Nom de l'\u00e9v\u00e9nement",
                    "La description",
                    "Param\u00e8tres",
                ],
                rows: {
                    row1: [
                        "changement",
                        "se d\u00e9clenche lorsque la valeur li\u00e9e change",
                        "la valeur mise \u00e0 jour",
                    ],
                },
            },
            {
                name: "Attributs de groupe de cases \u00e0 cocher",
                heads: [
                    "Attribut",
                    "La description",
                    "Type",
                    "Valeurs accept\u00e9es",
                    "D\u00e9faut",
                ],
                rows: {
                    row1: [
                        "valeur / mod\u00e8le v",
                        "valeur contraignante",
                        "cha\u00eene / nombre / bool\u00e9en",
                        "-",
                        "-",
                    ],
                    row2: [
                        "Taille",
                        "taille des boutons des cases \u00e0 cocher ou des cases \u00e0 cocher bord\u00e9es",
                        "cha\u00eene",
                        "moyen / petit / mini",
                        "-",
                    ],
                    row3: [
                        "d\u00e9sactiv\u00e9e",
                        "si les cases \u00e0 cocher d'imbrication sont d\u00e9sactiv\u00e9es",
                        "bool\u00e9en",
                        "-",
                        "faux",
                    ],
                    row4: [
                        "min",
                        "nombre minimum de cases coch\u00e9es",
                        "nombre",
                        "-",
                        "-",
                    ],
                    row5: [
                        "max",
                        "nombre maximum de cases coch\u00e9es",
                        "nombre",
                        "-",
                        "-",
                    ],
                    row6: [
                        "couleur du texte",
                        "couleur de police lorsque le bouton est actif",
                        "cha\u00eene",
                        "-",
                        "#ffffff",
                    ],
                    row7: [
                        "remplir",
                        "couleur de la bordure et de l'arri\u00e8re-plan lorsque le bouton est actif",
                        "cha\u00eene",
                        "-",
                        "# 409eff",
                    ],
                },
            },
            {
                name: "\u00c9v\u00e9nement de groupe de cases \u00e0 cocher",
                heads: [
                    "Nom de l'\u00e9v\u00e9nement",
                    "La description",
                    "Param\u00e8tres",
                ],
                rows: {
                    row1: [
                        "changement",
                        "se d\u00e9clenche lorsque la valeur li\u00e9e change",
                        "la valeur mise \u00e0 jour",
                    ],
                },
            },
            {
                name: "Attributs de groupe de cases \u00e0 cocher",
                heads: [
                    "Attribut",
                    "La description",
                    "Type",
                    "Valeurs accept\u00e9es",
                    "D\u00e9faut",
                ],
                rows: {
                    row1: [
                        "\u00e9tiquette",
                        "la valeur de la case \u00e0 cocher",
                        "cha\u00eene / nombre / bool\u00e9en",
                        "-",
                        "-",
                    ],
                    row2: [
                        "true-label",
                        "valeur de la case \u00e0 cocher si elle est coch\u00e9e",
                        "cha\u00eene / nombre",
                        "-",
                        "-",
                    ],
                    row3: [
                        "fausse \u00e9tiquette",
                        "valeur de la case \u00e0 cocher si elle est coch\u00e9e",
                        "cha\u00eene / nombre",
                        "-",
                        "-",
                    ],
                    row4: [
                        "d\u00e9sactiv\u00e9e",
                        "si la case \u00e0 cocher est d\u00e9sactiv\u00e9e",
                        "bool\u00e9en",
                        "-",
                        "faux",
                    ],
                    row5: [
                        "Nom",
                        "attribut \u00abnom\u00bb natif",
                        "cha\u00eene",
                        "-",
                        "-",
                    ],
                    row6: [
                        "v\u00e9rifi\u00e9",
                        "si la case est coch\u00e9e",
                        "bool\u00e9en",
                        "-",
                        "faux",
                    ],
                },
            },
        ],
    },
    switchView: {
        title: "Commutateur",
        intro:
            "Switch est utilis\u00e9 pour basculer entre deux \u00e9tats oppos\u00e9s",
        basic: { name: "Utilisation basique" },
        text: { name: "Description textuelle" },
        extended: { name: "Types de valeurs \u00e9tendues" },
        disabled: { name: "d\u00e9sactiv\u00e9" },
        tables: [
            {
                name: "Les attributs",
                heads: [
                    "Attribut",
                    "La description",
                    "Type",
                    "Valeurs accept\u00e9es",
                    "D\u00e9faut",
                ],
                rows: {
                    row1: [
                        "valeur / mod\u00e8le v",
                        "valeur contraignante",
                        "cha\u00eene / nombre / bool\u00e9en",
                        "-",
                        "-",
                    ],
                    row2: [
                        "d\u00e9sactiv\u00e9e",
                        "si le commutateur est d\u00e9sactiv\u00e9",
                        "bool\u00e9en",
                        "-",
                        "faux",
                    ],
                    row3: [
                        "largeur",
                        "largeur d'un interrupteur",
                        "nombre",
                        "-",
                        "40",
                    ],
                    row4: [
                        "active-icon-class",
                        "nom de classe de l'ic\u00f4ne affich\u00e9e en \u00e9tat 'on', remplace le texte actif",
                        "cha\u00eene",
                        "-",
                        "-",
                    ],
                    row5: [
                        "inactive-icon-class",
                        "nom de classe de l'ic\u00f4ne affich\u00e9e en \u00e9tat 'off', remplace le texte inactif",
                        "cha\u00eene",
                        "-",
                        "-",
                    ],
                    row6: [
                        "texte actif",
                        "texte affich\u00e9 en \u00e9tat \u00abon\u00bb",
                        "cha\u00eene",
                        "-",
                        "-",
                    ],
                    row7: [
                        "texte inactif",
                        "texte affich\u00e9 en \u00e9tat \u00aboff\u00bb",
                        "cha\u00eene",
                        "-",
                        "-",
                    ],
                    row8: [
                        "valeur active",
                        "changer la valeur en \u00e9tat \u00abon\u00bb",
                        "bool\u00e9en / cha\u00eene / nombre",
                        "-",
                        "-",
                    ],
                    row9: [
                        "valeur inactive",
                        "changer la valeur en \u00e9tat \u00aboff\u00bb",
                        "bool\u00e9en / cha\u00eene / nombre",
                        "-",
                        "-",
                    ],
                    row10: [
                        "couleur active",
                        "couleur d'arri\u00e8re-plan lorsque l'\u00e9tat est activ\u00e9",
                        "cha\u00eene",
                        "-",
                        "# 409eff",
                    ],
                    row11: [
                        "couleur inactive",
                        "couleur d'arri\u00e8re-plan lorsque l'\u00e9tat est d\u00e9sactiv\u00e9",
                        "cha\u00eene",
                        "-",
                        "# c0ccda",
                    ],
                    row12: [
                        "Nom",
                        "nom d'entr\u00e9e du commutateur",
                        "cha\u00eene",
                        "-",
                        "-",
                    ],
                    row13: [
                        "validate-event",
                        "d\u00e9clencher \u00e0 partir de la validation",
                        "bool\u00e9en",
                        "-",
                        "vrai",
                    ],
                },
            },
            {
                name: "\u00c9v\u00e9nements",
                heads: [
                    "Nom de l'\u00e9v\u00e9nement",
                    "La description",
                    "Param\u00e8tres",
                ],
                rows: {
                    row1: [
                        "changement",
                        "se d\u00e9clenche lorsque la valeur li\u00e9e change",
                        "valeur apr\u00e8s modification",
                    ],
                },
            },
            {
                name: "Les m\u00e9thodes",
                heads: ["M\u00e9thode", "La description", "Param\u00e8tres"],
                rows: {
                    row1: ["concentrer", "concentrer le composant Switch", "-"],
                },
            },
        ],
    },
    sliderView: {
        title: "Glissi\u00e8re",
        intro: "Faites glisser le curseur dans une plage fixe",
        basic: {
            name: "Utilisation basique",
            intro:
                "La valeur actuelle est affich\u00e9e lorsque le curseur est d\u00e9plac\u00e9",
        },
        discrete: {
            name: "Valeurs discr\u00e8tes",
            intro: "Les options peuvent \u00eatre discr\u00e8tes",
        },
        tables: [
            {
                name: "Les attributs",
                heads: [
                    "Attribut",
                    "La description",
                    "Type",
                    "Valeurs accept\u00e9es",
                    "D\u00e9faut",
                ],
                rows: {
                    row1: [
                        "valeur / mod\u00e8le v",
                        "valeur contraignante",
                        "nombre",
                        "-",
                        "0",
                    ],
                    row2: ["min", "valeur minimum", "nombre", "-", "0"],
                    row3: ["max", "valeur maximum", "nombre", "-", "100"],
                    row4: [
                        "d\u00e9sactiv\u00e9e",
                        "si le curseur est d\u00e9sactiv\u00e9",
                        "bool\u00e9en",
                        "-",
                        "faux",
                    ],
                    row5: ["\u00e9tape", "taille de pas", "nombre", "-", "1"],
                    row6: [
                        "show-stop",
                        "afficher ou non les points d'arr\u00eat",
                        "bool\u00e9en",
                        "-",
                        "faux",
                    ],
                    row7: [
                        "show-tooltip",
                        "afficher ou non la valeur de l'info-bulle",
                        "bool\u00e9en",
                        "-",
                        "vrai",
                    ],
                    row8: [
                        "format-tooltip",
                        "format pour afficher la valeur de l'info-bulle",
                        "fonction (valeur)",
                        "-",
                        "-",
                    ],
                },
            },
        ],
    },
    backtopView: {
        title: "Backtop",
        intro: "Un bouton pour revenir en haut",
        basic: {
            name: "Utilisation basique",
            intro:
                "Faites d\u00e9filer vers le bas pour voir le bouton en bas \u00e0 droite.",
        },
        custom: {
            name: "Personnalisations",
            intro: "La zone d'affichage est de 40 pixels x 40 pixels.",
        },
        tables: [
            {
                name: "Les attributs",
                heads: [
                    "Attribut",
                    "La description",
                    "Type",
                    "Valeurs accept\u00e9es",
                    "D\u00e9faut",
                ],
                rows: {
                    row1: [
                        "cible",
                        "la cible pour d\u00e9clencher le d\u00e9filement",
                        "cha\u00eene",
                        "-",
                        "-",
                    ],
                    row2: [
                        "visibilit\u00e9-hauteur",
                        "le bouton ne s'affichera pas tant que la hauteur de d\u00e9filement n'aura pas atteint cette valeur",
                        "nombre",
                        "-",
                        200,
                    ],
                    row3: ["droite", "bonne distance", "nombre", "-", 40],
                    row4: [
                        "bas",
                        "distance inf\u00e9rieure",
                        "nombre",
                        "-",
                        40,
                    ],
                },
            },
        ],
    },
};
