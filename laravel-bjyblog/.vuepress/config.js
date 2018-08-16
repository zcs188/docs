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
                title: '后台配置',
                collapsable: false,
                children: [
                    ['第三方登录', '第三方登录']
                ]
            },
            {
                title: '其他',
                collapsable: false,
                children: [
                    ['分支说明', '分支说明'],
                    ['更新记录', '更新记录'],
                ]
            },
        ],
    },
}