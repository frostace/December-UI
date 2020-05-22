// ch.js
export const locale = {
    navbarItems: [
        { alias: "guide", name: "指南" },
        { alias: "component", name: "组件" },
        { alias: "theme", name: "主题" },
        { alias: "resource", name: "资源" },
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
                {
                    itemName: "Container 布局容器",
                    itemPath: "/component/layoutcontainer",
                },
                {
                    itemName: "Color 色彩",
                    itemPath: "/component/color",
                },
                {
                    itemName: "Typography 字体",
                    itemPath: "/component/typography",
                },
                {
                    itemName: "Border 边框",
                    itemPath: "/component/border",
                },
                {
                    itemName: "Icon 图标",
                    itemPath: "/component/icon",
                },
                {
                    itemName: "Button 按钮",
                    itemPath: "/component/button",
                },
                {
                    itemName: "Link 链接",
                    itemPath: "/component/link",
                },
            ],
        },
    ],
};
