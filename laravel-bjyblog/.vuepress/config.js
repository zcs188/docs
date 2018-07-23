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
                title: '安装使用',
                collapsable: false,
                children: [
                    ['环境搭建', '环境搭建'],
                    ['安装', '安装'],
                ]
            },
            {
                title: '全文搜索',
                collapsable: false,
                children: [
                    ['MySQL', 'MySQL'],
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
        ],
    },
}