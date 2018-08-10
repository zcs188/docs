module.exports = {
    base: '/docs/laravel-scout-elasticsearch/',
    title: 'laravel-scout-elasticsearch',
    description: '为 Laravel Scout 开发的 Elasticsearch 驱动；支持中文分词；支持多张表；',
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }],
    ],
    dest: 'dist/laravel-scout-elasticsearch',
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
                    ['安装', '安装'],
                    ['使用', '使用'],
                    ['配置', '配置']
                ]
            },
        ],
    },
}