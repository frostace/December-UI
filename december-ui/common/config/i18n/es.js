// es.js
export const locale = {
    placeholders: { otherPages: "Esta p\u00e1gina est\u00e1 en desarrollo..." },
    navbarItems: [
        { alias: "component", name: "componente" },
        { alias: "theme", name: "tema" },
        { alias: "playground", name: "patio de recreo" },
    ],
    guideSections: [
        {
            sectionName: "Desarrollo",
            subTitle: "",
            sectionItems: [
                {
                    itemName: "Instalaci\u00f3n",
                    itemPath: "/guide/installation",
                },
                {
                    itemName: "Inicio r\u00e1pido",
                    itemPath: "/guide/quickstart",
                },
                { itemName: "Internacionalizacion", itemPath: "/guide/i18n" },
                {
                    itemName: "Tema personalizado",
                    itemPath: "/guide/customtheme",
                },
                {
                    itemName: "Transici\u00f3n incorporada",
                    itemPath: "/guide/builtintransition",
                },
            ],
        },
    ],
    componentSections: [
        {
            sectionName: "Componentes",
            subTitle: "B\u00e1sico",
            sectionItems: [
                { itemName: "Dise\u00f1o", itemPath: "/component/layout" },
                { itemName: "Bot\u00f3n", itemPath: "/component/button" },
            ],
        },
        {
            sectionName: "",
            subTitle: "Formar",
            sectionItems: [
                { itemName: "Radio", itemPath: "/component/radio" },
                { itemName: "Caja", itemPath: "/component/checkbox" },
                { itemName: "Cambiar", itemPath: "/component/switch" },
                {
                    itemName: "Control deslizante",
                    itemPath: "/component/slider",
                },
            ],
        },
        {
            sectionName: "",
            subTitle: "Otros",
            sectionItems: [
                { itemName: "Respaldo", itemPath: "/component/backtop" },
            ],
        },
    ],
    themeSection: {
        themeTitle: "Tema oficial",
        themeName: "December",
        themeType: "Tema predeterminado",
        themeAuthor: "frostace",
    },
    layoutView: {
        title: "Dise\u00f1o",
        intro:
            "Cree dise\u00f1os de forma r\u00e1pida y sencilla con las 24 columnas b\u00e1sicas",
        basic: {
            name: "Dise\u00f1o b\u00e1sico",
            intro:
                "Crear un dise\u00f1o de cuadr\u00edcula b\u00e1sico usando columnas",
        },
        column: {
            name: "Espaciado de columna",
            intro: "Espaciado de columna es compatible",
        },
        hybrid: {
            name: "Dise\u00f1o h\u00edbrido",
            intro:
                "Forme un dise\u00f1o h\u00edbrido m\u00e1s complejo combinando las columnas b\u00e1sicas de 1/24",
        },
        offset: {
            name: "Desplazamiento personalizado",
            intro: "Puede especificar compensaciones de columna",
        },
        align: {
            name: "Alineaci\u00f3n",
            intro:
                "Use el dise\u00f1o flexible para hacer una alineaci\u00f3n flexible de columnas",
        },
        tables: [
            {
                name: "Atributo de fila",
                heads: [
                    "Atributo",
                    "Descripci\u00f3n",
                    "Tipo",
                    "Valores aceptados",
                    "Defecto",
                ],
                rows: {
                    row1: [
                        "canal",
                        "espaciado de la cuadr\u00edcula",
                        "n\u00famero",
                        "-",
                        "0 0",
                    ],
                    row2: [
                        "tipo",
                        "modo de dise\u00f1o, puede usar flex, funciona en navegadores modernos",
                        "cuerda",
                        "-",
                        "-",
                    ],
                    row3: [
                        "justificar",
                        "alineaci\u00f3n horizontal del dise\u00f1o flexible",
                        "cuerda",
                        "inicio / final / centro / espacio alrededor / espacio entre",
                        "comienzo",
                    ],
                    row4: [
                        "alinear",
                        "alineaci\u00f3n vertical del dise\u00f1o flexible",
                        "cuerda",
                        "superior / medio / inferior",
                        "parte superior",
                    ],
                    row5: [
                        "etiqueta",
                        "etiqueta de elemento personalizado",
                        "cuerda",
                        "* *",
                        "div",
                    ],
                },
            },
            {
                name: "Atributo Col",
                heads: [
                    "Atributo",
                    "Descripci\u00f3n",
                    "Tipo",
                    "Valores aceptados",
                    "Defecto",
                ],
                rows: {
                    row1: [
                        "lapso",
                        "n\u00famero de columna que abarca la cuadr\u00edcula",
                        "n\u00famero",
                        "-",
                        "24",
                    ],
                    row2: [
                        "compensar",
                        "N\u00famero de espacios en el lado izquierdo de la cuadr\u00edcula",
                        "n\u00famero",
                        "-",
                        "0 0",
                    ],
                    row3: [
                        "empujar",
                        "cantidad de columnas que la cuadr\u00edcula se mueve hacia la derecha",
                        "n\u00famero",
                        "-",
                        "0 0",
                    ],
                    row4: [
                        "Halar",
                        "cantidad de columnas que la cuadr\u00edcula se mueve hacia la izquierda",
                        "n\u00famero",
                        "-",
                        "0 0",
                    ],
                    row5: ["...", "...", "...", "...", "..."],
                },
            },
        ],
    },
    buttonView: {
        title: "Bot\u00f3n",
        intro: "Bot\u00f3n de uso com\u00fan",
        basic: { name: "Uso b\u00e1sico" },
        disabled: {
            name: "Bot\u00f3n deshabilitado",
            intro:
                "El atributo 'desactivado' determina si el bot\u00f3n est\u00e1 desactivado.",
        },
        text: {
            name: "Bot\u00f3n de texto",
            intro: "Botones sin borde y fondo",
        },
        icon: {
            name: "Bot\u00f3n de icono",
            intro:
                "Use los iconos para agregar m\u00e1s significado al bot\u00f3n. Puede usar el \u00edcono solo para ahorrar espacio o usarlo con texto",
        },
        group: {
            name: "Grupo de botones",
            intro:
                "Mostrado como un grupo de botones, puede usarse para agrupar una serie de operaciones similares",
        },
        loading: {
            name: "Bot\u00f3n de carga",
            intro:
                "Haga clic en el bot\u00f3n para cargar datos, luego el bot\u00f3n muestra un estado de carga",
        },
        size: {
            name: "Tama\u00f1os",
            intro:
                "Adem\u00e1s del tama\u00f1o predeterminado, el componente Bot\u00f3n proporciona tres tama\u00f1os adicionales para que pueda elegir entre diferentes escenarios",
        },
        tables: [
            {
                name: "Atributos",
                heads: [
                    "Atributo",
                    "Descripci\u00f3n",
                    "Tipo",
                    "Valores aceptados",
                    "Defecto",
                ],
                rows: {
                    row1: [
                        "Talla",
                        "tama\u00f1o del bot\u00f3n",
                        "cuerda",
                        "mediano / peque\u00f1o / mini",
                        "-",
                    ],
                    row2: [
                        "tipo",
                        "tipo de bot\u00f3n",
                        "cuerda",
                        "primario / \u00e9xito / advertencia / peligro / informaci\u00f3n / texto",
                        "-",
                    ],
                    row3: [
                        "llanura",
                        "determinar si es un bot\u00f3n simple",
                        "booleano",
                        "-",
                        "falso",
                    ],
                    row4: [
                        "redondo",
                        "determinar si es un bot\u00f3n redondo",
                        "booleano",
                        "-",
                        "falso",
                    ],
                    row5: [
                        "circulo",
                        "determinar si es un bot\u00f3n circular",
                        "booleano",
                        "-",
                        "falso",
                    ],
                    row6: [
                        "cargando",
                        "determinar si se est\u00e1 cargando",
                        "booleano",
                        "-",
                        "falso",
                    ],
                    row7: [
                        "discapacitado",
                        "deshabilitar el bot\u00f3n",
                        "booleano",
                        "-",
                        "falso",
                    ],
                    row8: [
                        "icono",
                        "nombre de clase de icono",
                        "cuerda",
                        "-",
                        "-",
                    ],
                    row9: [
                        "enfoque autom\u00e1tico",
                        "igual que el enfoque autom\u00e1tico del bot\u00f3n nativo",
                        "booleano",
                        "-",
                        "falso",
                    ],
                    row10: [
                        "tipo nativo",
                        "igual que el tipo de bot\u00f3n nativo",
                        "cuerda",
                        "bot\u00f3n / enviar / restablecer",
                        "bot\u00f3n",
                    ],
                },
            },
        ],
    },
    radioView: {
        title: "Radio",
        intro: "Selecci\u00f3n \u00fanica entre m\u00faltiples opciones",
        basic: {
            name: "Uso b\u00e1sico",
            intro:
                "La radio no deber\u00eda tener demasiadas opciones. De lo contrario, use el componente Seleccionar en su lugar",
        },
        disabled: {
            name: "Discapacitado",
            intro:
                "El atributo 'desactivado' determina si el bot\u00f3n est\u00e1 desactivado.",
        },
        group: {
            name: "Grupo de botones de radio",
            intro:
                "Adecuado para elegir entre algunas opciones mutuamente excluyentes",
        },
        style: {
            name: "Estilo de bot\u00f3n",
            intro: "Radio con estilos de botones",
        },
        border: { name: "Con bordes" },
        tables: [
            {
                name: "Atributos de radio",
                heads: [
                    "Atributo",
                    "Descripci\u00f3n",
                    "Tipo",
                    "Valores aceptados",
                    "Defecto",
                ],
                rows: {
                    row1: [
                        "valor / modelo v",
                        "valor vinculante",
                        "cadena / n\u00famero / booleano",
                        "-",
                        "-",
                    ],
                    row2: [
                        "etiqueta",
                        "el valor de la radio",
                        "cadena / n\u00famero / booleano",
                        "-",
                        "-",
                    ],
                    row3: [
                        "discapacitado",
                        "si la radio est\u00e1 desactivada",
                        "booleano",
                        "-",
                        "falso",
                    ],
                    row4: [
                        "frontera",
                        "si agregar un borde alrededor de Radio",
                        "booleano",
                        "-",
                        "falso",
                    ],
                    row5: [
                        "Talla",
                        "tama\u00f1o de la radio, solo funciona cuando el borde es verdadero",
                        "cuerda",
                        "mediano / peque\u00f1o / mini",
                        "-",
                    ],
                    row6: [
                        "nombre",
                        "atributo nativo 'nombre'",
                        "cuerda",
                        "-",
                        "-",
                    ],
                },
            },
            {
                name: "Evento de radio",
                heads: [
                    "Nombre del evento",
                    "Descripci\u00f3n",
                    "Par\u00e1metros",
                ],
                rows: {
                    row1: [
                        "cambio",
                        "se dispara cuando cambia el valor enlazado",
                        "el valor de la etiqueta de la radio elegida",
                    ],
                },
            },
            {
                name: "Atributos del grupo de radio",
                heads: [
                    "Atributo",
                    "Descripci\u00f3n",
                    "Tipo",
                    "Valores aceptados",
                    "Defecto",
                ],
                rows: {
                    row1: [
                        "valor / modelo v",
                        "valor vinculante",
                        "cadena / n\u00famero / booleano",
                        "-",
                        "-",
                    ],
                    row2: [
                        "etiqueta",
                        "el valor de la radio",
                        "cadena / n\u00famero / booleano",
                        "-",
                        "-",
                    ],
                    row3: [
                        "discapacitado",
                        "si la radio est\u00e1 desactivada",
                        "booleano",
                        "-",
                        "falso",
                    ],
                },
            },
            {
                name: "Evento de grupo de radio",
                heads: [
                    "Nombre del evento",
                    "Descripci\u00f3n",
                    "Par\u00e1metros",
                ],
                rows: {
                    row1: [
                        "cambio",
                        "se dispara cuando cambia el valor enlazado",
                        "el valor de la etiqueta de la radio elegida",
                    ],
                },
            },
            {
                name: "Atributos del bot\u00f3n de radio",
                heads: [
                    "Atributo",
                    "Descripci\u00f3n",
                    "Tipo",
                    "Valores aceptados",
                    "Defecto",
                ],
                rows: {
                    row1: [
                        "etiqueta",
                        "el valor de la radio",
                        "cadena / n\u00famero / booleano",
                        "-",
                        "-",
                    ],
                    row2: [
                        "discapacitado",
                        "si la radio est\u00e1 desactivada",
                        "booleano",
                        "-",
                        "falso",
                    ],
                    row3: [
                        "nombre",
                        "atributo nativo 'nombre'",
                        "cuerda",
                        "-",
                        "-",
                    ],
                },
            },
        ],
    },
    checkboxView: {
        title: "Caja",
        intro: "Un grupo de opciones para m\u00faltiples opciones.",
        basic: {
            name: "Uso b\u00e1sico",
            intro:
                "La casilla de verificaci\u00f3n se puede usar para cambiar entre dos estados",
        },
        disabled: {
            name: "Estado desactivado",
            intro: "Estado deshabilitado para casilla de verificaci\u00f3n",
        },
        group: {
            name: "Grupo de casillas de verificaci\u00f3n",
            intro:
                "Se utiliza para m\u00faltiples casillas de verificaci\u00f3n que est\u00e1n vinculadas en un grupo e indica si una opci\u00f3n est\u00e1 seleccionada marcando si est\u00e1 marcada",
        },
        indeterminate: {
            name: "Indeterminado",
            intro:
                "La propiedad indeterminada puede ayudarlo a lograr un efecto 'verificar todo'",
        },
        minmax: {
            name: "Art\u00edculos m\u00ednimos / m\u00e1ximos marcados",
            intro:
                "Las propiedades m\u00edn. Y m\u00e1x. Pueden ayudarlo a limitar la cantidad de elementos marcados",
        },
        tables: [
            {
                name: "Atributos de casilla de verificaci\u00f3n",
                heads: [
                    "Atributo",
                    "Descripci\u00f3n",
                    "Tipo",
                    "Valores aceptados",
                    "Defecto",
                ],
                rows: {
                    row1: [
                        "valor / modelo v",
                        "valor vinculante",
                        "cadena / n\u00famero / booleano",
                        "-",
                        "-",
                    ],
                    row2: [
                        "etiqueta",
                        "valor de una casilla de verificaci\u00f3n cuando se usa dentro de un grupo de casilla de verificaci\u00f3n",
                        "cadena / n\u00famero / booleano",
                        "-",
                        "-",
                    ],
                    row3: [
                        "etiqueta verdadera",
                        "valor de la casilla de verificaci\u00f3n si est\u00e1 marcada",
                        "cadena / n\u00famero",
                        "-",
                        "-",
                    ],
                    row4: [
                        "etiqueta verdadera",
                        "valor de la casilla de verificaci\u00f3n si no est\u00e1 marcada",
                        "cadena / n\u00famero",
                        "-",
                        "-",
                    ],
                    row5: [
                        "discapacitado",
                        "si la casilla de verificaci\u00f3n est\u00e1 desactivada",
                        "booleano",
                        "-",
                        "falso",
                    ],
                    row6: [
                        "frontera",
                        "si agregar un borde alrededor de la casilla de verificaci\u00f3n",
                        "booleano",
                        "-",
                        "falso",
                    ],
                    row7: [
                        "Talla",
                        "tama\u00f1o de la casilla de verificaci\u00f3n, solo funciona cuando el borde es verdadero",
                        "cuerda",
                        "mediano / peque\u00f1o / mini",
                        "-",
                    ],
                    row8: [
                        "nombre",
                        "atributo nativo 'nombre'",
                        "cuerda",
                        "-",
                        "-",
                    ],
                    row9: [
                        "comprobado",
                        "si una casilla de verificaci\u00f3n est\u00e1 marcada",
                        "booleano",
                        "-",
                        "falso",
                    ],
                    row10: [
                        "indeterminado",
                        "igual que indeterminado en la casilla de verificaci\u00f3n nativa",
                        "booleano",
                        "-",
                        "falso",
                    ],
                },
            },
            {
                name: "Evento de casilla de verificaci\u00f3n",
                heads: [
                    "Nombre del evento",
                    "Descripci\u00f3n",
                    "Par\u00e1metros",
                ],
                rows: {
                    row1: [
                        "cambio",
                        "se dispara cuando cambia el valor enlazado",
                        "el valor actualizado",
                    ],
                },
            },
            {
                name: "Atributos del grupo de casillas de verificaci\u00f3n",
                heads: [
                    "Atributo",
                    "Descripci\u00f3n",
                    "Tipo",
                    "Valores aceptados",
                    "Defecto",
                ],
                rows: {
                    row1: [
                        "valor / modelo v",
                        "valor vinculante",
                        "cadena / n\u00famero / booleano",
                        "-",
                        "-",
                    ],
                    row2: [
                        "Talla",
                        "tama\u00f1o de los botones de casilla de verificaci\u00f3n o casillas de verificaci\u00f3n con borde",
                        "cuerda",
                        "mediano / peque\u00f1o / mini",
                        "-",
                    ],
                    row3: [
                        "discapacitado",
                        "si las casillas de anidaci\u00f3n est\u00e1n deshabilitadas",
                        "booleano",
                        "-",
                        "falso",
                    ],
                    row4: [
                        "min",
                        "N\u00famero m\u00ednimo de casillas marcadas",
                        "n\u00famero",
                        "-",
                        "-",
                    ],
                    row5: [
                        "max",
                        "N\u00famero m\u00e1ximo de casillas marcadas",
                        "n\u00famero",
                        "-",
                        "-",
                    ],
                    row6: [
                        "color de texto",
                        "color de fuente cuando el bot\u00f3n est\u00e1 activo",
                        "cuerda",
                        "-",
                        "#ffffff",
                    ],
                    row7: [
                        "llenar",
                        "color de borde y fondo cuando el bot\u00f3n est\u00e1 activo",
                        "cuerda",
                        "-",
                        "# 409eff",
                    ],
                },
            },
            {
                name: "Evento de grupo de casillas de verificaci\u00f3n",
                heads: [
                    "Nombre del evento",
                    "Descripci\u00f3n",
                    "Par\u00e1metros",
                ],
                rows: {
                    row1: [
                        "cambio",
                        "se dispara cuando cambia el valor enlazado",
                        "el valor actualizado",
                    ],
                },
            },
            {
                name: "Atributos del grupo de casillas de verificaci\u00f3n",
                heads: [
                    "Atributo",
                    "Descripci\u00f3n",
                    "Tipo",
                    "Valores aceptados",
                    "Defecto",
                ],
                rows: {
                    row1: [
                        "etiqueta",
                        "el valor de Checkbox",
                        "cadena / n\u00famero / booleano",
                        "-",
                        "-",
                    ],
                    row2: [
                        "etiqueta verdadera",
                        "valor de la casilla de verificaci\u00f3n si est\u00e1 marcada",
                        "cadena / n\u00famero",
                        "-",
                        "-",
                    ],
                    row3: [
                        "etiqueta falsa",
                        "valor de la casilla de verificaci\u00f3n si est\u00e1 marcada",
                        "cadena / n\u00famero",
                        "-",
                        "-",
                    ],
                    row4: [
                        "discapacitado",
                        "si la casilla de verificaci\u00f3n est\u00e1 desactivada",
                        "booleano",
                        "-",
                        "falso",
                    ],
                    row5: [
                        "nombre",
                        "atributo nativo 'nombre'",
                        "cuerda",
                        "-",
                        "-",
                    ],
                    row6: [
                        "comprobado",
                        "si la casilla est\u00e1 marcada",
                        "booleano",
                        "-",
                        "falso",
                    ],
                },
            },
        ],
    },
    switchView: {
        title: "Cambiar",
        intro: "El interruptor se usa para cambiar entre dos estados opuestos",
        basic: { name: "Uso b\u00e1sico" },
        text: { name: "Descripci\u00f3n del texto" },
        extended: { name: "Tipos de valor extendido" },
        disabled: { name: "Discapacitado" },
        tables: [
            {
                name: "Atributos",
                heads: [
                    "Atributo",
                    "Descripci\u00f3n",
                    "Tipo",
                    "Valores aceptados",
                    "Defecto",
                ],
                rows: {
                    row1: [
                        "valor / modelo v",
                        "valor vinculante",
                        "cadena / n\u00famero / booleano",
                        "-",
                        "-",
                    ],
                    row2: [
                        "discapacitado",
                        "si el interruptor est\u00e1 deshabilitado",
                        "booleano",
                        "-",
                        "falso",
                    ],
                    row3: [
                        "anchura",
                        "ancho de un interruptor",
                        "n\u00famero",
                        "-",
                        "40",
                    ],
                    row4: [
                        "clase-icono-activa",
                        "El nombre de clase del icono que se muestra cuando est\u00e1 en estado 'on', anula el texto activo",
                        "cuerda",
                        "-",
                        "-",
                    ],
                    row5: [
                        "inactive-icon-class",
                        "nombre de la clase del icono que se muestra cuando est\u00e1 en estado 'apagado', anula el texto inactivo",
                        "cuerda",
                        "-",
                        "-",
                    ],
                    row6: [
                        "texto activo",
                        "texto mostrado cuando est\u00e1 en estado 'on'",
                        "cuerda",
                        "-",
                        "-",
                    ],
                    row7: [
                        "texto inactivo",
                        "texto que se muestra cuando est\u00e1 en estado 'apagado'",
                        "cuerda",
                        "-",
                        "-",
                    ],
                    row8: [
                        "valor activo",
                        "cambiar valor cuando est\u00e1 en estado 'on'",
                        "boolean / string / number",
                        "-",
                        "-",
                    ],
                    row9: [
                        "valor inactivo",
                        "cambiar el valor cuando est\u00e1 en estado 'apagado'",
                        "boolean / string / number",
                        "-",
                        "-",
                    ],
                    row10: [
                        "color activo",
                        "color de fondo cuando est\u00e1 en estado 'on'",
                        "cuerda",
                        "-",
                        "# 409eff",
                    ],
                    row11: [
                        "color inactivo",
                        "color de fondo cuando est\u00e1 en estado 'apagado'",
                        "cuerda",
                        "-",
                        "# c0ccda",
                    ],
                    row12: [
                        "nombre",
                        "nombre de entrada del interruptor",
                        "cuerda",
                        "-",
                        "-",
                    ],
                    row13: [
                        "validar-evento",
                        "si disparar desde la validaci\u00f3n",
                        "booleano",
                        "-",
                        "cierto",
                    ],
                },
            },
            {
                name: "Eventos",
                heads: [
                    "Nombre del evento",
                    "Descripci\u00f3n",
                    "Par\u00e1metros",
                ],
                rows: {
                    row1: [
                        "cambio",
                        "se dispara cuando cambia el valor enlazado",
                        "valor despu\u00e9s de cambiar",
                    ],
                },
            },
            {
                name: "M\u00e9todos",
                heads: ["M\u00e9todo", "Descripci\u00f3n", "Par\u00e1metros"],
                rows: {
                    row1: [
                        "atenci\u00f3n",
                        "enfocar el componente Switch",
                        "-",
                    ],
                },
            },
        ],
    },
    sliderView: {
        title: "Control deslizante",
        intro: "Arrastre el control deslizante dentro de un rango fijo",
        basic: {
            name: "Uso b\u00e1sico",
            intro:
                "El valor actual se muestra cuando se arrastra el control deslizante",
        },
        discrete: {
            name: "Valores discretos",
            intro: "Las opciones pueden ser discretas.",
        },
        tables: [
            {
                name: "Atributos",
                heads: [
                    "Atributo",
                    "Descripci\u00f3n",
                    "Tipo",
                    "Valores aceptados",
                    "Defecto",
                ],
                rows: {
                    row1: [
                        "valor / modelo v",
                        "valor vinculante",
                        "n\u00famero",
                        "-",
                        "0 0",
                    ],
                    row2: [
                        "min",
                        "valor m\u00ednimo",
                        "n\u00famero",
                        "-",
                        "0 0",
                    ],
                    row3: [
                        "max",
                        "valor m\u00e1ximo",
                        "n\u00famero",
                        "-",
                        "100",
                    ],
                    row4: [
                        "discapacitado",
                        "si el control deslizante est\u00e1 desactivado",
                        "booleano",
                        "-",
                        "falso",
                    ],
                    row5: ["paso", "Numero de pie", "n\u00famero", "-", "1"],
                    row6: [
                        "show-stop",
                        "si mostrar puntos de interrupci\u00f3n",
                        "booleano",
                        "-",
                        "falso",
                    ],
                    row7: [
                        "show-tooltip",
                        "si se muestra el valor de informaci\u00f3n sobre herramientas",
                        "booleano",
                        "-",
                        "cierto",
                    ],
                    row8: [
                        "informaci\u00f3n sobre herramientas de formato",
                        "formato para mostrar el valor de informaci\u00f3n sobre herramientas",
                        "funci\u00f3n (valor)",
                        "-",
                        "-",
                    ],
                },
            },
        ],
    },
    backtopView: {
        title: "Respaldo",
        intro: "Un bot\u00f3n para volver al principio",
        basic: {
            name: "Uso b\u00e1sico",
            intro:
                "Despl\u00e1cese hacia abajo para ver el bot\u00f3n inferior derecho.",
        },
        custom: {
            name: "Personalizaciones",
            intro: "El \u00e1rea de visualizaci\u00f3n es 40px * 40px.",
        },
        tables: [
            {
                name: "Atributos",
                heads: [
                    "Atributo",
                    "Descripci\u00f3n",
                    "Tipo",
                    "Valores aceptados",
                    "Defecto",
                ],
                rows: {
                    row1: [
                        "objetivo",
                        "el objetivo para activar el desplazamiento",
                        "cuerda",
                        "-",
                        "-",
                    ],
                    row2: [
                        "altura de visibilidad",
                        "el bot\u00f3n no se mostrar\u00e1 hasta que la altura de desplazamiento alcance este valor",
                        "n\u00famero",
                        "-",
                        200,
                    ],
                    row3: [
                        "Correcto",
                        "distancia correcta",
                        "n\u00famero",
                        "-",
                        40,
                    ],
                    row4: [
                        "fondo",
                        "distancia inferior",
                        "n\u00famero",
                        "-",
                        40,
                    ],
                },
            },
        ],
    },
};
