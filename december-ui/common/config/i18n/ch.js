// ch.js
export const locale = {
    placeholders: {
        otherPages: "此页面尚未开发完成...",
    },
    navbarItems: [
        // { alias: "guide", name: "指南" },
        { alias: "component", name: "组件" },
        { alias: "theme", name: "主题" },
        { alias: "playground", name: "在线IDE" },
    ],
    guideSections: [
        {
            sectionName: "开发指南",
            subTitle: "",
            sectionItems: [
                {
                    itemName: "安装",
                    itemPath: "/guide/installation",
                },
                {
                    itemName: "快速入门",
                    itemPath: "/guide/quickstart",
                },
                {
                    itemName: "多语言",
                    itemPath: "/guide/i18n",
                },
                {
                    itemName: "自定义主题",
                    itemPath: "/guide/customtheme",
                },
                {
                    itemName: "内置过渡动画",
                    itemPath: "/guide/builtintransition",
                },
            ],
        },
    ],
    componentSections: [
        {
            sectionName: "组件库",
            subTitle: "基本",
            sectionItems: [
                {
                    itemName: "Layout 布局",
                    itemPath: "/component/layout",
                },
                // {
                //     itemName: "Container 布局容器",
                //     itemPath: "/component/layoutcontainer",
                // },
                // {
                //     itemName: "Color 色彩",
                //     itemPath: "/component/color",
                // },
                // {
                //     itemName: "Typography 字体",
                //     itemPath: "/component/typography",
                // },
                // {
                //     itemName: "Border 边框",
                //     itemPath: "/component/border",
                // },
                // {
                //     itemName: "Icon 图标",
                //     itemPath: "/component/icon",
                // },
                {
                    itemName: "Button 按钮",
                    itemPath: "/component/button",
                },
                // {
                //     itemName: "Link 链接",
                //     itemPath: "/component/link",
                // },
            ],
        },
        {
            sectionName: "",
            subTitle: "表格",
            sectionItems: [
                {
                    itemName: "Radio 单选框",
                    itemPath: "/component/radio",
                },
                {
                    itemName: "Checkbox 多选框",
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
                    itemName: "Switch 开关",
                    itemPath: "/component/switch",
                },
                {
                    itemName: "Slider 滑块",
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
            subTitle: "其它",
            sectionItems: [
                {
                    itemName: "Backtop 返回顶部",
                    itemPath: "/component/backtop",
                },
            ],
        },
    ],
    layoutView: {
        title: "Layout 布局",
        intro: "通过基础的24分栏，轻松创建自定义布局",
        basic: {
            name: "基本布局",
            intro: "通过指定扩展列数，创建基础栅格布局",
        },
        column: {
            name: "分栏间隔",
            intro: "可指定分栏间隔",
        },
        hybrid: {
            name: "混合布局",
            intro: "通过扩展24分栏功能，组成复杂的混合布局",
        },
        offset: {
            name: "分栏偏移",
            intro: "可指定分栏的偏移量",
        },
        align: {
            name: "对齐",
            intro: "使用flex布局来自由对齐分栏",
        },
        tables: [
            {
                name: "行组件属性",
                heads: ["属性", "描述", "类型", "可传入的值", "默认值"],
                rows: {
                    row1: ["gutter", "栅格间隙", "number", "—", "0"],
                    row2: [
                        "type",
                        "设定布局模式，可使用flex, 在现代浏览器中可正常运行",
                        "string",
                        "—",
                        "—",
                    ],
                    row3: [
                        "justify",
                        "设定flex布局的水平对齐方式",
                        "string",
                        "start/end/center/space-around/space-between",
                        "start",
                    ],
                    row4: [
                        "align",
                        "设定flex布局的竖直对齐方式",
                        "string",
                        "top/middle/bottom",
                        "top",
                    ],
                    row5: ["tag", "自定义元素标签", "string", "*", "div"],
                },
            },
            {
                name: "列组件属性",
                heads: ["属性", "描述", "类型", "可传入的值", "默认值"],
                rows: {
                    row1: [
                        "span",
                        "当前元素在栅格中所占的列数",
                        "number",
                        "—",
                        "24",
                    ],
                    row2: [
                        "offset",
                        "当前元素在栅格中，左侧需空开的列数",
                        "number",
                        "—",
                        "0",
                    ],
                    row3: ["push", "栅格向右移动的列数", "number", "—", "0"],
                    row4: ["pull", "栅格向左移动的列数", "number", "—", "0"],
                },
            },
        ],
    }, // layoutView
    buttonView: {
        title: "Button 按钮",
        intro: "常用按钮组件",
        basic: {
            name: "基本用法",
        },
        disabled: {
            name: "禁用按钮",
            intro: "通过 'disabled' 属性指定是否禁用按钮",
        },
        text: {
            name: "文本按钮",
            intro: "不带边框与背景色的按钮",
        },
        icon: {
            name: "图标按钮",
            intro:
                "通过图标为按钮带来更丰富的语义，可以仅使用图标，也可结合文本使用",
        },
        group: {
            name: "按钮组",
            intro: "以一组按钮显示, 可用于为显示操作分组",
        },
        loading: {
            name: "加载中",
            intro: "点击按钮，改变 'loading' 属性可使其显示加载中状态",
        },
        size: {
            name: "尺寸",
            intro: "除了默认尺寸，按钮组件还提供了3种不同尺寸",
        },
        tables: [
            {
                name: "属性",
                heads: ["属性", "描述", "类型", "可传入的值", "默认值"],
                rows: {
                    row1: [
                        "size",
                        "按钮尺寸",
                        "string",
                        "medium / small / mini",
                        "—",
                    ],
                    row2: [
                        "type",
                        "按钮类型",
                        "string",
                        "primary / success / warning / danger / info / text",
                        "—",
                    ],
                    row3: [
                        "plain",
                        "规定按钮是否为朴素 (plain) 类型的按钮",
                        "boolean",
                        "—",
                        "false",
                    ],
                    row4: [
                        "round",
                        "规定按钮是否为圆角 (round) 类型的按钮",
                        "boolean",
                        "—",
                        "false",
                    ],
                    row5: [
                        "circle",
                        "规定按钮是否为圆形 (circle) 类型的按钮",
                        "boolean",
                        "—",
                        "false",
                    ],
                    row6: [
                        "loading",
                        "控制按钮是否处于'加载中'状态",
                        "boolean",
                        "—",
                        "false",
                    ],
                    row7: ["disabled", "禁用按钮", "boolean", "—", "false"],
                    row8: ["icon", "icon class name", "string", "—", "—"],
                    row9: [
                        "autofocus",
                        "与原生按钮的'autofocus'属性一致",
                        "boolean",
                        "—",
                        "false",
                    ],
                    row10: [
                        "native-type",
                        "与原生按钮的'type'属性一致",
                        "string",
                        "button / submit / reset",
                        "button",
                    ],
                },
            },
        ],
    }, // buttonView
    radioView: {
        title: "Radio 单选框",
        intro: "从多个选项中选择一项",
        basic: {
            name: "基本用法",
            intro: "Radio 单选框不应包含太多选项",
        },
        disabled: {
            name: "禁用单选框",
            intro: "使用 'disabled' 属性来禁用单选框",
        },
        group: {
            name: "Radio 单选框组",
            intro: "适用于从多个互斥的选项中选出一项的场景",
        },
        style: {
            name: "按钮形式",
            intro: "按钮形式的单选框",
        },
        border: {
            name: "带边框的单选框",
        },
        tables: [
            {
                name: "Radio (单选框)组件属性",
                heads: ["属性", "描述", "类型", "可传入的值", "默认值"],
                rows: {
                    row1: [
                        "value / v-model",
                        "组件绑定的数据",
                        "string / number / boolean",
                        "-",
                        "-",
                    ],
                    row2: [
                        "label",
                        "Radio (单选框)的标签",
                        "string / number / boolean",
                        "-",
                        "-",
                    ],
                    row3: [
                        "disabled",
                        "指定是否禁用Radio (单选框)",
                        "boolean",
                        "-",
                        "false",
                    ],
                    row4: [
                        "border",
                        "指定是否在Radio (单选框)周围显示边框",
                        "boolean",
                        "-",
                        "false",
                    ],
                    row5: [
                        "size",
                        "Radio (单选框)的尺寸, 仅在border被开启时有效",
                        "string",
                        "medium / small / mini",
                        "-",
                    ],
                    row6: ["name", "原生 'name' 属性", "string", "-", "-"],
                },
            },
            {
                name: "Radio (单选框)事件",
                heads: ["事件名称", "描述", "参数"],
                rows: {
                    row1: [
                        "change",
                        "当绑定Radio (单选框)的数据改变时触发",
                        "所选Radio (单选框)的标签",
                    ],
                },
            },
            {
                name: "Radio-group (单选框组)属性",
                heads: ["属性", "描述", "类型", "可传入的值", "默认值"],
                rows: {
                    row1: [
                        "value / v-model",
                        "组件绑定的数据",
                        "string / number / boolean",
                        "-",
                        "-",
                    ],
                    row2: [
                        "label",
                        "Radio (单选框)的标签",
                        "string / number / boolean",
                        "-",
                        "-",
                    ],
                    row3: [
                        "disabled",
                        "指定是否禁用Radio-group (单选框组)",
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
                name: "Radio-group (单选框组)事件",
                heads: ["事件名称", "描述", "参数"],
                rows: {
                    row1: [
                        "change",
                        "当绑定Radio-group (单选框组)的数据改变时触发",
                        "所选Radio (单选框)的标签",
                    ],
                },
            },
            {
                name: "Radio-button (单选框按钮)属性",
                heads: ["属性", "描述", "类型", "可传入的值", "默认值"],
                rows: {
                    row1: [
                        "label",
                        "Radio (单选框)的标签",
                        "string / number / boolean",
                        "-",
                        "-",
                    ],
                    row2: [
                        "disabled",
                        "指定是否禁用Radio (单选框)",
                        "boolean",
                        "-",
                        "false",
                    ],
                    row3: ["name", "原生 'name' 属性", "string", "-", "-"],
                },
            },
        ],
    }, // radioView
    checkboxView: {
        title: "Checkbox 多选框",
        intro: "用于从一组选项中选取多个选项",
        basic: {
            name: "Basic usage",
            intro: "多选框可用于在两种状态之间切换",
        },
        disabled: {
            name: "Disabled state",
            intro: "禁用多选框",
        },
        group: {
            name: "Checkbox 多选框组",
            intro: "适用于多个多选框隶属于同一组时的场景",
        },
        indeterminate: {
            name: "Indeterminate 半选中状态",
            intro:
                "'Indeterminate' 属性一般用于表示：全选框控制的所有选项，未全选时的状态",
        },
        minmax: {
            name: "指定最多和最少可选项数量",
            intro: "'min' 和 'max' 属性可以限制多选的选项数量",
        },
        tables: [
            {
                name: "Checkbox 多选框属性",
                heads: ["属性", "描述", "类型", "可传入的值", "默认值"],
                rows: {
                    row1: [
                        "value / v-model",
                        "Checkbox绑定的数据",
                        "string / number / boolean",
                        "-",
                        "-",
                    ],
                    row2: [
                        "label",
                        "当在Checkbox-group中使用时，Checkbox的值",
                        "string / number / boolean",
                        "-",
                        "-",
                    ],
                    row3: [
                        "true-label",
                        "Checkbox选中时的值",
                        "string / number",
                        "-",
                        "-",
                    ],
                    row4: [
                        "true-label",
                        "Checkbox未选中时的值",
                        "string / number",
                        "-",
                        "-",
                    ],
                    row5: [
                        "disabled",
                        "指定是否禁用Checkbox",
                        "boolean",
                        "-",
                        "false",
                    ],
                    row6: [
                        "border",
                        "指定是否在Checkbox周围显示边框",
                        "boolean",
                        "-",
                        "false",
                    ],
                    row7: [
                        "size",
                        "Checkbox的尺寸, 仅在border开启时可用",
                        "string",
                        "medium / small / mini",
                        "-",
                    ],
                    row8: ["name", "原生 'name' 属性", "string", "-", "-"],
                    row9: [
                        "checked",
                        "指定Checkbox是否被选中",
                        "boolean",
                        "-",
                        "false",
                    ],
                    row10: [
                        "indeterminate",
                        "与原生Checkbox的'indeterminate'属性一致",
                        "boolean",
                        "-",
                        "false",
                    ],
                },
            },
            {
                name: "Checkbox 事件",
                heads: ["事件名称", "描述", "参数"],
                rows: {
                    row1: [
                        "change",
                        "当绑定Checkbox的数据改变时触发",
                        "更新后的Checkbox数据",
                    ],
                },
            },
            {
                name: "Checkbox-group 属性",
                heads: ["属性", "描述", "类型", "可传入的值", "默认值"],
                rows: {
                    row1: [
                        "value / v-model",
                        "与Checkbox-group绑定的数据",
                        "string / number / boolean",
                        "-",
                        "-",
                    ],
                    row2: [
                        "size",
                        "按钮型Checkbox或带边框Checkbox的尺寸",
                        "string",
                        "medium / small / mini",
                        "-",
                    ],
                    row3: [
                        "disabled",
                        "指定是否禁用Checkbox-group",
                        "boolean",
                        "-",
                        "false",
                    ],
                    row4: [
                        "min",
                        "可被勾选的 checkbox 的最小数量",
                        "number",
                        "-",
                        "-",
                    ],
                    row5: [
                        "max",
                        "可被勾选的 checkbox 的最大数量",
                        "number",
                        "-",
                        "-",
                    ],
                    row6: [
                        "text-color",
                        "按钮形式的 Checkbox 激活时的文本颜色",
                        "string",
                        "-",
                        "#ffffff",
                    ],
                    row7: [
                        "fill",
                        "按钮形式的 Checkbox 激活时的填充色和边框色",
                        "string",
                        "-",
                        "#409eff",
                    ],
                },
            },
            {
                name: "Checkbox-group 事件",
                heads: ["事件名称", "描述", "参数"],
                rows: {
                    row1: [
                        "change",
                        "当绑定Checkbox-group的数据改变时触发",
                        "更新后的Checkbox-group数据",
                    ],
                },
            },
            {
                name: "Checkbox-button 属性",
                heads: ["属性", "描述", "类型", "可传入的值", "默认值"],
                rows: {
                    row1: [
                        "label",
                        "Checkbox-button的值",
                        "string / number / boolean",
                        "-",
                        "-",
                    ],
                    row2: [
                        "true-label",
                        "Checkbox选中时的值",
                        "string / number",
                        "-",
                        "-",
                    ],
                    row3: [
                        "false-label",
                        "Checkbox未选中时的值",
                        "string / number",
                        "-",
                        "-",
                    ],
                    row4: ["disabled", "是否禁用", "boolean", "-", "false"],
                    row5: ["name", "原生 'name' 属性", "string", "-", "-"],
                    row6: [
                        "checked",
                        "指定Checkbox是否选中",
                        "boolean",
                        "-",
                        "false",
                    ],
                },
            },
        ],
    }, // checkboxView
    switchView: {
        title: "Switch 开关",
        intro: "开关用于切换2种相反的状态",
        basic: {
            name: "基本用法",
        },
        text: {
            name: "文字描述",
        },
        extended: {
            name: "扩展的value类型",
        },
        disabled: {
            name: "禁用状态",
        },
        tables: [
            {
                name: "属性",
                heads: ["属性", "描述", "类型", "可传入的值", "默认值"],
                rows: {
                    row1: [
                        "value / v-model",
                        "与Switch绑定的数据",
                        "string / number / boolean",
                        "-",
                        "-",
                    ],
                    row2: ["disabled", "是否禁用", "boolean", "-", "false"],
                    row3: ["width", "Switch的宽度", "number", "-", "40"],
                    row4: [
                        "active-icon-class",
                        "开关开启时显示的图标的className, 会覆盖active-text的文本",
                        "string",
                        "-",
                        "-",
                    ],
                    row5: [
                        "inactive-icon-class",
                        "开关关闭时显示的图标的className, 会覆盖inactive-text的文本",
                        "string",
                        "-",
                        "-",
                    ],
                    row6: [
                        "active-text",
                        "开关开启时显示的文本",
                        "string",
                        "-",
                        "-",
                    ],
                    row7: [
                        "inactive-text",
                        "开关关闭时显示的文本",
                        "string",
                        "-",
                        "-",
                    ],
                    row8: [
                        "active-value",
                        "开关开启时绑定的值",
                        "boolean / string / number",
                        "-",
                        "-",
                    ],
                    row9: [
                        "inactive-value",
                        "开关关闭时绑定的值",
                        "boolean / string / number",
                        "-",
                        "-",
                    ],
                    row10: [
                        "active-color",
                        "开关开启时的背景颜色",
                        "string",
                        "-",
                        "#409eff",
                    ],
                    row11: [
                        "inactive-color",
                        "开关关闭时的背景颜色",
                        "string",
                        "-",
                        "#c0ccda",
                    ],
                    row12: ["name", "开关的元素名称", "string", "-", "-"],
                    row13: [
                        "validate-event",
                        "指定是否通过事件验证触发",
                        "boolean",
                        "-",
                        "true",
                    ],
                },
            },
            {
                name: "事件",
                heads: ["事件名称", "描述", "参数"],
                rows: {
                    row1: ["change", "当绑定的数据改变时触发", "更新后的值"],
                },
            },
            {
                name: "Methods",
                heads: ["方法", "描述", "参数"],
                rows: {
                    row1: ["focus", "使开关组件进入focus状态", "-"],
                },
            },
        ],
    }, // switchView
    sliderView: {
        title: "Slider 滑块",
        intro: "在固定范围内拖动滑块",
        basic: {
            name: "基本用法",
            intro: "拖动滑块时，滑块上方会显示当前所在的数值",
        },
        discrete: {
            name: "不连续滑块",
            intro: "滑块的数值可以是不连续的",
        },
        tables: [
            {
                name: "属性",
                heads: ["属性", "描述", "类型", "可传入的值", "默认值"],
                rows: {
                    row1: [
                        "value / v-model",
                        "与Slider绑定的数据",
                        "number",
                        "-",
                        "0",
                    ],
                    row2: ["min", "最小值", "number", "-", "0"],
                    row3: ["max", "最大值", "number", "-", "100"],
                    row4: ["disabled", "是否禁用", "boolean", "-", "false"],
                    row5: ["step", "step size", "number", "-", "1"],
                    row6: [
                        "show-stop",
                        "是否显示断点",
                        "boolean",
                        "-",
                        "false",
                    ],
                    row7: [
                        "show-tooltip",
                        "是否显示当前滑块数值",
                        "boolean",
                        "-",
                        "true",
                    ],
                    row8: [
                        "format-tooltip",
                        "格式化滑块数值",
                        "function(value)",
                        "-",
                        "-",
                    ],
                },
            },
        ],
    }, // sliderView
    backtopView: {
        title: "Backtop 返回顶部",
        intro: "返回顶部按钮",
        basic: {
            name: "基本用法",
            intro: "下滑页面时，原本隐藏的返回顶部按钮将会出现",
        },
        custom: {
            name: "自定义",
            intro: "可自定义按钮中显示的内容与样式",
        },
        tables: [
            {
                name: "属性",
                heads: ["属性", "描述", "类型", "可传入的值", "默认值"],
                rows: {
                    row1: ["target", "指定触发滚动的对象", "string", "—", "—"],
                    row2: [
                        "visibility-height",
                        "直到指定对象的滚动高度到达该值后，才会显示返回顶部按钮",
                        "number",
                        "—",
                        200,
                    ],
                    row3: ["right", "右边距", "number", "—", 40],
                    row4: ["bottom", "下边距", "number", "—", 40],
                },
            },
        ],
    }, // backtopView
};
