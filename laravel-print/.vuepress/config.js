module.exports = {
    base: '/docs/laravel-print/',
    title: 'laravel-print',
    description: '以简洁的方式打印数据',
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }],
    ],
    dest: 'dist/laravel-print',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: '其他文档', link: 'https://baijunyao.com/docs' },
            { text: '白俊遥博客', link: 'https://baijunyao.com' },
        ],
        sidebar: [
            {
                title: '安装使用',
                collapsable: false,
                children: [
                    ['安装', '安装']
                ]
            },
        ],
    },
}