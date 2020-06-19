// en.js
export const locale = {
    placeholders: {
        otherPages: "This page is under development...",
    },
    navbarItems: [
        // { alias: "guide", name: "guide" },
        { alias: "component", name: "component" },
        { alias: "theme", name: "theme" },
        { alias: "playground", name: "playground" },
    ],
    guideSections: [
        {
            sectionName: "Development",
            subTitle: "",
            sectionItems: [
                {
                    itemName: "Installation",
                    itemPath: "/guide/installation",
                },
                {
                    itemName: "Quick Start",
                    itemPath: "/guide/quickstart",
                },
                {
                    itemName: "Internationalization",
                    itemPath: "/guide/i18n",
                },
                {
                    itemName: "Custom Theme",
                    itemPath: "/guide/customtheme",
                },
                {
                    itemName: "Built-in transition",
                    itemPath: "/guide/builtintransition",
                },
            ],
        },
    ],
    componentSections: [
        {
            sectionName: "Components",
            subTitle: "Basic",
            sectionItems: [
                {
                    itemName: "Layout",
                    itemPath: "/component/layout",
                },
                // {
                //     itemName: "Layout Container",
                //     itemPath: "/component/layoutcontainer",
                // },
                // {
                //     itemName: "Color",
                //     itemPath: "/component/color",
                // },
                // {
                //     itemName: "Typography",
                //     itemPath: "/component/typography",
                // },
                // {
                //     itemName: "Border",
                //     itemPath: "/component/border",
                // },
                // {
                //     itemName: "Icon",
                //     itemPath: "/component/icon",
                // },
                {
                    itemName: "Button",
                    itemPath: "/component/button",
                },
                // {
                //     itemName: "Link",
                //     itemPath: "/component/link",
                // },
            ],
        },
        {
            sectionName: "",
            subTitle: "Form",
            sectionItems: [
                {
                    itemName: "Radio",
                    itemPath: "/component/radio",
                },
                {
                    itemName: "Checkbox",
                    itemPath: "/component/checkbox",
                },
                // {
                //     itemName: "Input",
                //     itemPath: "/component/input",
                // },
                // {
                //     itemName: "InputNumber",
                //     itemPath: "/component/inputnumber",
                // },
                // {
                //     itemName: "Select",
                //     itemPath: "/component/select",
                // },
                // {
                //     itemName: "Cascader",
                //     itemPath: "/component/cascader",
                // },
                {
                    itemName: "Switch",
                    itemPath: "/component/switch",
                },
                {
                    itemName: "Slider",
                    itemPath: "/component/slider",
                },
                // {
                //     itemName: "TimePicker",
                //     itemPath: "/component/timepicker",
                // },
                // {
                //     itemName: "DatePicker",
                //     itemPath: "/component/datepicker",
                // },
                // {
                //     itemName: "DateTimePicker",
                //     itemPath: "/component/datetimepicker",
                // },
                // {
                //     itemName: "Upload",
                //     itemPath: "/component/upload",
                // },
                // {
                //     itemName: "Rate",
                //     itemPath: "/component/rate",
                // },
                // {
                //     itemName: "ColorPicker",
                //     itemPath: "/component/colorpicker",
                // },
                // {
                //     itemName: "Transfer",
                //     itemPath: "/component/transfer",
                // },
                // {
                //     itemName: "Form",
                //     itemPath: "/component/form",
                // },
            ],
        },
        {
            sectionName: "",
            subTitle: "Others",
            sectionItems: [
                {
                    itemName: "Backtop",
                    itemPath: "/component/backtop",
                },
            ],
        },
    ],
    layoutView: {
        title: "Layout",
        intro: "Quickly and easily create layouts with the basic 24-column",
        basic: {
            name: "Basic Layout",
            intro: "Create basic grid layout using columns",
        },
        column: {
            name: "Column Spacing",
            intro: "Column spacing is supported",
        },
        hybrid: {
            name: "Hybrid layout",
            intro:
                "Form a more complex hybrid layout by combining the basic 1/24 columns",
        },
        offset: {
            name: "Custom offset",
            intro: "You can specify column offsets",
        },
        align: {
            name: "Alignment",
            intro: "Use the flex layout to make flexible alignment of columns",
        },
        tables: [
            {
                name: "Row Attribute",
                heads: [
                    "Attribute",
                    "Description",
                    "Type",
                    "Accepted Values",
                    "Default",
                ],
                rows: {
                    row1: ["gutter", "grid spacing", "number", "—", "0"],
                    row2: [
                        "type",
                        "layout mode, you can use flex, works in modern browsers",
                        "string",
                        "—",
                        "—",
                    ],
                    row3: [
                        "justify",
                        "horizontal alignment of flex layout",
                        "string",
                        "start/end/center/space-around/space-between",
                        "start",
                    ],
                    row4: [
                        "align",
                        "vertical alignment of flex layout",
                        "string",
                        "top/middle/bottom",
                        "top",
                    ],
                    row5: ["tag", "custom element tag", "string", "*", "div"],
                },
            },
            {
                name: "Col Attribute",
                heads: [
                    "Attribute",
                    "Description",
                    "Type",
                    "Accepted Values",
                    "Default",
                ],
                rows: {
                    row1: [
                        "span",
                        "number of column the grid spans",
                        "number",
                        "—",
                        "24",
                    ],
                    row2: [
                        "offset",
                        "number of spacing on the left side of the grid	",
                        "number",
                        "—",
                        "0",
                    ],
                    row3: [
                        "push",
                        "number of columns that grid moves to the right	",
                        "number",
                        "—",
                        "0",
                    ],
                    row4: [
                        "pull",
                        "number of columns that grid moves to the left",
                        "number",
                        "—",
                        "0",
                    ],
                    row5: ["...", "...", "...", "...", "..."],
                },
            },
        ],
    }, // layoutView
    buttonView: {
        title: "Button",
        intro: "Commonly used button",
        basic: {
            name: "Basic usage",
        },
        disabled: {
            name: "Disabled Button",
            intro:
                "The 'disabled' attribute determines if the button is disabled.",
        },
        text: {
            name: "Text Button",
            intro: "Buttons without border and background",
        },
        icon: {
            name: "Icon Button",
            intro:
                "Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text",
        },
        group: {
            name: "Button Group",
            intro:
                "Displayed as a button group, can be used to group a series of similar operations",
        },
        loading: {
            name: "Loading Button",
            intro:
                "Click the button to load data, then the button displays a loading state",
        },
        size: {
            name: "Sizes",
            intro:
                "Besides default size, Button component provides three additional sizes for you to choose among different scenarios",
        },
        tables: [
            {
                name: "Attributes",
                heads: [
                    "Attribute",
                    "Description",
                    "Type",
                    "Accepted Values",
                    "Default",
                ],
                rows: {
                    row1: [
                        "size",
                        "button size",
                        "string",
                        "medium / small / mini",
                        "—",
                    ],
                    row2: [
                        "type",
                        "button type",
                        "string",
                        "primary / success / warning / danger / info / text",
                        "—",
                    ],
                    row3: [
                        "plain",
                        "determine whether it's a plain button",
                        "boolean",
                        "—",
                        "false",
                    ],
                    row4: [
                        "round",
                        "determine whether it's a round button",
                        "boolean",
                        "—",
                        "false",
                    ],
                    row5: [
                        "circle",
                        "determine whether it's a circle button",
                        "boolean",
                        "—",
                        "false",
                    ],
                    row6: [
                        "loading",
                        "determine whether it's loading",
                        "boolean",
                        "—",
                        "false",
                    ],
                    row7: [
                        "disabled",
                        "disable the button",
                        "boolean",
                        "—",
                        "false",
                    ],
                    row8: ["icon", "icon class name", "string", "—", "—"],
                    row9: [
                        "autofocus",
                        "same as native button's autofocus",
                        "boolean",
                        "—",
                        "false",
                    ],
                    row10: [
                        "native-type",
                        "same as native button's type",
                        "string",
                        "button / submit / reset",
                        "button",
                    ],
                },
            },
        ],
    }, // buttonView
    radioView: {
        title: "Radio",
        intro: "Single selection among multiple options",
        basic: {
            name: "Basic usage",
            intro:
                "Radio should not have too many options. Otherwise, use the Select component instead",
        },
        disabled: {
            name: "Disabled",
            intro:
                "The 'disabled' attribute determines if the button is disabled.",
        },
        group: {
            name: "Radio button group",
            intro: "Suitable for choosing from some mutually exclusive options",
        },
        style: {
            name: "Button style",
            intro: "Radio with button styles",
        },
        border: {
            name: "With borders",
        },
        tables: [
            {
                name: "Radio Attributes",
                heads: [
                    "Attribute",
                    "Description",
                    "Type",
                    "Accepted Values",
                    "Default",
                ],
                rows: {
                    row1: [
                        "value / v-model",
                        "binding value",
                        "string / number / boolean",
                        "-",
                        "-",
                    ],
                    row2: [
                        "label",
                        "the value of Radio",
                        "string / number / boolean",
                        "-",
                        "-",
                    ],
                    row3: [
                        "disabled",
                        "whether Radio is disabled",
                        "boolean",
                        "-",
                        "false",
                    ],
                    row4: [
                        "border",
                        "whether to add a border around Radio",
                        "boolean",
                        "-",
                        "false",
                    ],
                    row5: [
                        "size",
                        "size of the Radio, only works when border is true",
                        "string",
                        "medium / small / mini",
                        "-",
                    ],
                    row6: [
                        "name",
                        "native 'name' attribute",
                        "string",
                        "-",
                        "-",
                    ],
                },
            },
            {
                name: "Radio Event",
                heads: ["Event Name", "Description", "Parameters"],
                rows: {
                    row1: [
                        "change",
                        "triggers when the bound value changes",
                        "the label value of the chosen radio",
                    ],
                },
            },
            {
                name: "Radio-group Attributes",
                heads: [
                    "Attribute",
                    "Description",
                    "Type",
                    "Accepted Values",
                    "Default",
                ],
                rows: {
                    row1: [
                        "value / v-model",
                        "binding value",
                        "string / number / boolean",
                        "-",
                        "-",
                    ],
                    row2: [
                        "label",
                        "the value of Radio",
                        "string / number / boolean",
                        "-",
                        "-",
                    ],
                    row3: [
                        "disabled",
                        "whether Radio is disabled",
                        "boolean",
                        "-",
                        "false",
                    ],
                    // row4: [
                    //     "text-color",
                    //     "font-color when botton is active",
                    //     "string",
                    //     "-",
                    //     "#ffffff"
                    // ],
                    // row5: [
                    //     "fill",
                    //     "border and background color when button is active",
                    //     "string",
                    //     "-",
                    //     "#409EFF"
                    // ]
                },
            },
            {
                name: "Radio-group Event",
                heads: ["Event Name", "Description", "Parameters"],
                rows: {
                    row1: [
                        "change",
                        "triggers when the bound value changes",
                        "the label value of the chosen radio",
                    ],
                },
            },
            {
                name: "Radio-button Attributes",
                heads: [
                    "Attribute",
                    "Description",
                    "Type",
                    "Accepted Values",
                    "Default",
                ],
                rows: {
                    row1: [
                        "label",
                        "the value of Radio",
                        "string / number / boolean",
                        "-",
                        "-",
                    ],
                    row2: [
                        "disabled",
                        "whether Radio is disabled",
                        "boolean",
                        "-",
                        "false",
                    ],
                    row3: [
                        "name",
                        "native 'name' attribute",
                        "string",
                        "-",
                        "-",
                    ],
                },
            },
        ],
    }, // radioView
    checkboxView: {
        title: "Checkbox",
        intro: "A group of options for multiple choices",
        basic: {
            name: "Basic usage",
            intro: "Checkbox can be used to switch between two states",
        },
        disabled: {
            name: "Disabled state",
            intro: "Disabled state for checkbox",
        },
        group: {
            name: "Checkbox group",
            intro:
                "It is used for multiple checkboxes which are bound in one group, and indicates whether one option is selected by checking if it is checked",
        },
        indeterminate: {
            name: "Indeterminate",
            intro:
                "The indeterminate property can help you to achieve a 'check all' effect",
        },
        minmax: {
            name: "Minimum / Maximum items checked",
            intro:
                "The min and max properties can help you to limit the number of checked items",
        },
        tables: [
            {
                name: "Checkbox Attributes",
                heads: [
                    "Attribute",
                    "Description",
                    "Type",
                    "Accepted Values",
                    "Default",
                ],
                rows: {
                    row1: [
                        "value / v-model",
                        "binding value",
                        "string / number / boolean",
                        "-",
                        "-",
                    ],
                    row2: [
                        "label",
                        "value of a Checkbox when it's used inside a checkbox-group",
                        "string / number / boolean",
                        "-",
                        "-",
                    ],
                    row3: [
                        "true-label",
                        "value of the Checkbox if it's checked",
                        "string / number",
                        "-",
                        "-",
                    ],
                    row4: [
                        "true-label",
                        "value of the Checkbox if it's not checked",
                        "string / number",
                        "-",
                        "-",
                    ],
                    row5: [
                        "disabled",
                        "whether Checkbox is disabled",
                        "boolean",
                        "-",
                        "false",
                    ],
                    row6: [
                        "border",
                        "whether to add a border around Checkbox",
                        "boolean",
                        "-",
                        "false",
                    ],
                    row7: [
                        "size",
                        "size of the Checkbox, only works when border is true",
                        "string",
                        "medium / small / mini",
                        "-",
                    ],
                    row8: [
                        "name",
                        "native 'name' attribute",
                        "string",
                        "-",
                        "-",
                    ],
                    row9: [
                        "checked",
                        "if a Checkbox is checked",
                        "boolean",
                        "-",
                        "false",
                    ],
                    row10: [
                        "indeterminate",
                        "same as indeterminate in native checkbox",
                        "boolean",
                        "-",
                        "false",
                    ],
                },
            },
            {
                name: "Checkbox Event",
                heads: ["Event Name", "Description", "Parameters"],
                rows: {
                    row1: [
                        "change",
                        "triggers when the bound value changes",
                        "the updated value",
                    ],
                },
            },
            {
                name: "Checkbox-group Attributes",
                heads: [
                    "Attribute",
                    "Description",
                    "Type",
                    "Accepted Values",
                    "Default",
                ],
                rows: {
                    row1: [
                        "value / v-model",
                        "binding value",
                        "string / number / boolean",
                        "-",
                        "-",
                    ],
                    row2: [
                        "size",
                        "size of checkbox buttons or bordered checkboxes",
                        "string",
                        "medium / small / mini",
                        "-",
                    ],
                    row3: [
                        "disabled",
                        "whether the nesting checkboxes are disabled",
                        "boolean",
                        "-",
                        "false",
                    ],
                    row4: [
                        "min",
                        "minimum number of checkbox checked",
                        "number",
                        "-",
                        "-",
                    ],
                    row5: [
                        "max",
                        "maximum number of checkbox checked",
                        "number",
                        "-",
                        "-",
                    ],
                    row6: [
                        "text-color",
                        "font color when button is active",
                        "string",
                        "-",
                        "#ffffff",
                    ],
                    row7: [
                        "fill",
                        "border and background color when button is active",
                        "string",
                        "-",
                        "#409eff",
                    ],
                },
            },
            {
                name: "Checkbox-group Event",
                heads: ["Event Name", "Description", "Parameters"],
                rows: {
                    row1: [
                        "change",
                        "triggers when the bound value changes",
                        "the updated value",
                    ],
                },
            },
            {
                name: "Checkbox-group Attributes",
                heads: [
                    "Attribute",
                    "Description",
                    "Type",
                    "Accepted Values",
                    "Default",
                ],
                rows: {
                    row1: [
                        "label",
                        "the value of Checkbox",
                        "string / number / boolean",
                        "-",
                        "-",
                    ],
                    row2: [
                        "true-label",
                        "value of the checkbox if it's checked",
                        "string / number",
                        "-",
                        "-",
                    ],
                    row3: [
                        "false-label",
                        "value of the checkbox if it's checked",
                        "string / number",
                        "-",
                        "-",
                    ],
                    row4: [
                        "disabled",
                        "whether the Checkbox is disabled",
                        "boolean",
                        "-",
                        "false",
                    ],
                    row5: [
                        "name",
                        "native 'name' attribute",
                        "string",
                        "-",
                        "-",
                    ],
                    row6: [
                        "checked",
                        "if the checkbox is checked",
                        "boolean",
                        "-",
                        "false",
                    ],
                },
            },
        ],
    }, // checkboxView
    switchView: {
        title: "Switch",
        intro: "Switch is used for switching between two opposing states",
        basic: {
            name: "Basic usage",
        },
        text: {
            name: "Text description",
        },
        extended: {
            name: "Extended value types",
        },
        disabled: {
            name: "Disabled",
        },
        tables: [
            {
                name: "Attributes",
                heads: [
                    "Attribute",
                    "Description",
                    "Type",
                    "Accepted Values",
                    "Default",
                ],
                rows: {
                    row1: [
                        "value / v-model",
                        "binding value",
                        "string / number / boolean",
                        "-",
                        "-",
                    ],
                    row2: [
                        "disabled",
                        "whether Switch is disabled",
                        "boolean",
                        "-",
                        "false",
                    ],
                    row3: ["width", "width of a Switch", "number", "-", "40"],
                    row4: [
                        "active-icon-class",
                        "class name of the icon displayed when in 'on' state, overrides active-text",
                        "string",
                        "-",
                        "-",
                    ],
                    row5: [
                        "inactive-icon-class",
                        "class name of the icon displayed when in 'off' state, overrides inactive-text",
                        "string",
                        "-",
                        "-",
                    ],
                    row6: [
                        "active-text",
                        "text displayed when in 'on' state",
                        "string",
                        "-",
                        "-",
                    ],
                    row7: [
                        "inactive-text",
                        "text displayed when in 'off' state",
                        "string",
                        "-",
                        "-",
                    ],
                    row8: [
                        "active-value",
                        "switch value when in 'on' state",
                        "boolean / string / number",
                        "-",
                        "-",
                    ],
                    row9: [
                        "inactive-value",
                        "switch value when in 'off' state",
                        "boolean / string / number",
                        "-",
                        "-",
                    ],
                    row10: [
                        "active-color",
                        "background color when in 'on' state",
                        "string",
                        "-",
                        "#409eff",
                    ],
                    row11: [
                        "inactive-color",
                        "background color when in 'off' state",
                        "string",
                        "-",
                        "#c0ccda",
                    ],
                    row12: ["name", "input name of Switch", "string", "-", "-"],
                    row13: [
                        "validate-event",
                        "whether to trigger from validation",
                        "boolean",
                        "-",
                        "true",
                    ],
                },
            },
            {
                name: "Events",
                heads: ["Event Name", "Description", "Parameters"],
                rows: {
                    row1: [
                        "change",
                        "triggers when the bound value changes",
                        "value after changing",
                    ],
                },
            },
            {
                name: "Methods",
                heads: ["Method", "Description", "Parameters"],
                rows: {
                    row1: ["focus", "focus the Switch component", "-"],
                },
            },
        ],
    }, // switchView
    sliderView: {
        title: "Slider",
        intro: "Drag the slider within a fixed range",
        basic: {
            name: "Basic usage",
            intro:
                "The current value is displayed when the slider is being dragged",
        },
        discrete: {
            name: "Discrete values",
            intro: "The options can be discrete",
        },
        tables: [
            {
                name: "Attributes",
                heads: [
                    "Attribute",
                    "Description",
                    "Type",
                    "Accepted Values",
                    "Default",
                ],
                rows: {
                    row1: [
                        "value / v-model",
                        "binding value",
                        "number",
                        "-",
                        "0",
                    ],
                    row2: ["min", "minimum value", "number", "-", "0"],
                    row3: ["max", "maximum value", "number", "-", "100"],
                    row4: [
                        "disabled",
                        "whether Slider is disabled",
                        "boolean",
                        "-",
                        "false",
                    ],
                    row5: ["step", "step size", "number", "-", "1"],
                    row6: [
                        "show-stop",
                        "whether to display breakpoints",
                        "boolean",
                        "-",
                        "false",
                    ],
                    row7: [
                        "show-tooltip",
                        "whether to display tooltip value",
                        "boolean",
                        "-",
                        "true",
                    ],
                    row8: [
                        "format-tooltip",
                        "format to display tooltip value",
                        "function(value)",
                        "-",
                        "-",
                    ],
                },
            },
        ],
    }, // sliderView
    backtopView: {
        title: "Backtop",
        intro: "A button to back to top",
        basic: {
            name: "Basic usage",
            intro: "Scroll down to see the bottom-right button.",
        },
        custom: {
            name: "Customizations",
            intro: "Display area is 40px * 40px.",
        },
        tables: [
            {
                name: "Attributes",
                heads: [
                    "Attribute",
                    "Description",
                    "Type",
                    "Accepted Values",
                    "Default",
                ],
                rows: {
                    row1: [
                        "target",
                        "the target to trigger scroll",
                        "string",
                        "—",
                        "—",
                    ],
                    row2: [
                        "visibility-height",
                        "the button will not show until the scroll height reaches this value",
                        "number",
                        "—",
                        200,
                    ],
                    row3: ["right", "right distance", "number", "—", 40],
                    row4: ["bottom", "bottom distance", "number", "—", 40],
                },
            },
        ],
    }, // backtopView
};
