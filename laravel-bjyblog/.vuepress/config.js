module.exports = {
    base: '/docs/laravel-bjyblog/',
    title: 'laravel-bjyblog',
    description: '基于laravel开发的博客',
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }],
    ],
    dest: 'dist/laravel-bjyblog',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: '其他文档', link: 'https://baijunyao.com/docs' },
            { text: '白俊遥博客', link: 'https://baijunyao.com' },
        ],
        sidebar: [
            {
                title: '环境搭建',
                collapsable: false,
                children: [
                    ['Windows', 'Windows'],
                    ['Linux', 'Linux']
                ]
            },
            {
                title: '安装使用',
                collapsable: false,
                children: [
                    ['安装', '安装'],
                    ['部署到生产环境', '部署到生产环境'],
                    ['升级版本', '升级版本'],
                    ['从tp版迁移', '从tp版迁移'],
                ]
            },
            {
                title: '全文搜索',
                collapsable: false,
                children: [
                    ['SQL', 'SQL'],
                    ['TNTSearch', 'TNTSearch'],
                    ['Elasticsearch', 'Elasticsearch'],
                ]
            },
            {
                title: '分类菜单',
                collapsable: false,
                children: [
                    ['分类管理', '分类管理'],
                    ['菜单管理', '菜单管理'],
                ]
            },
            {
                title: '标签管理',
                collapsable: false,
                children: [
                    ['标签管理', '标签管理'],
                ]
            },
            {
                title: '文章管理',
                collapsable: false,
                children: [
                    ['文章管理', '文章管理'],
                ]
            },
            {
                title: '用户管理',
                collapsable: false,
                children: [
                    ['第三方用户', '第三方用户'],
                ]
            },
            {
                title: '后台配置',
                collapsable: false,
                children: [
                    ['后台登录', '后台登录'],
                    ['邮箱设置', '邮箱设置'],
                    ['第三方登录', '第三方登录'],
                    ['QQ群设置', 'QQ群设置'],
                    ['开源项目', '开源项目'],
                ]
            },
            {
                title: '其他',
                collapsable: false,
                children: [
                    ['分支说明', '分支说明'],
                    ['版本说明', '版本说明'],
                    ['更新记录', '更新记录'],
                    ['特别感谢', '特别感谢'],
                ]
            },
        ],
    },
}