module.exports = {
    base: '/docs/thinkphp-bjyblog/',
    title: 'thinkphp-bjyblog',
    description: '基于thinkphp开发的的个人博客系统thinkphp-bjyblog',
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }],
    ],
    dest: 'dist/thinkphp-bjyblog',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: '白俊遥博客', link: 'https://baijunyao.com' },
        ],
    },
}