module.exports = {
    locales: {
        // '/en/': {
        //   lang: 'English',
        //   title: 'laravel-bjyblog',
        //   description: 'Laravel Blog'
        // },
        '/zh/': {
          lang: '简体中文',
          selectText: '选择语言',
          title: 'laravel-bjyblog',
          description: '基于 Laravel 开发的博客'
        }
    },
    base: '/docs/laravel-bjyblog/',
    title: 'laravel-bjyblog',
    description: '基于 Laravel 开发的博客',
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }],
    ],
    dest: 'dist/laravel-bjyblog',
    themeConfig: {
        locales: {
            '/zh/': {
                selectText: '选择语言',
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
                            ['/zh/Windows', 'Windows'],
                            ['/zh/Linux', 'Linux']
                        ]
                    },
                    {
                        title: '安装使用',
                        collapsable: false,
                        children: [
                            ['/zh/安装', '安装'],
                            ['/zh/清空测试数据', '清空测试数据'],
                            ['/zh/部署到生产环境', '部署到生产环境'],
                            ['/zh/升级版本', '升级版本'],
                            ['/zh/从tp版迁移', '从tp版迁移'],
                        ]
                    },
                    {
                        title: '全文搜索',
                        collapsable: false,
                        children: [
                            ['/zh/SQL', 'SQL'],
                            ['/zh/TNTSearch', 'TNTSearch'],
                            ['/zh/Elasticsearch', 'Elasticsearch'],
                        ]
                    },
                    {
                        title: '分类菜单',
                        collapsable: false,
                        children: [
                            ['/zh/分类管理', '分类管理'],
                            ['/zh/菜单管理', '菜单管理'],
                        ]
                    },
                    {
                        title: '标签管理',
                        collapsable: false,
                        children: [
                            ['/zh/标签管理', '标签管理'],
                        ]
                    },
                    {
                        title: '文章管理',
                        collapsable: false,
                        children: [
                            ['/zh/文章管理', '文章管理'],
                            ['/zh/文章内容替换', '文章内容替换'],
                        ]
                    },
                    {
                        title: '友情链接',
                        collapsable: false,
                        children: [
                            ['/zh/友情链接', '友情链接'],
                            ['/zh/推荐博客', '推荐博客'],
                        ]
                    },
                    {
                        title: '用户管理',
                        collapsable: false,
                        children: [
                            ['/zh/管理员列表', '管理员列表'],
                            ['/zh/第三方用户', '第三方用户'],
                        ]
                    },
                    {
                        title: '评论管理',
                        collapsable: false,
                        children: [
                            ['/zh/评论管理', '评论管理'],
                            ['/zh/评论内容替换', '评论内容替换'],
                        ]
                    },
                    {
                        title: '随言碎语',
                        collapsable: false,
                        children: [
                            ['/zh/随言碎语列表', '随言碎语列表'],
                        ]
                    },
                    {
                        title: '后台配置',
                        collapsable: false,
                        children: [
                            ['/zh/后台登录', '后台登录'],
                            ['/zh/邮箱设置', '邮箱设置'],
                            ['/zh/第三方登录', '第三方登录'],
                            ['/zh/QQ群设置', 'QQ群设置'],
                            ['/zh/开源项目', '开源项目'],
                            ['/zh/备份', '备份'],
                            ['/zh/其他配置', '其他配置'],
                        ]
                    },
                    {
                        title: '其他',
                        collapsable: false,
                        children: [
                            ['/zh/分支说明', '分支说明'],
                            ['/zh/版本说明', '版本说明'],
                            ['/zh/更新记录', '更新记录'],
                            ['/zh/特别感谢', '特别感谢'],
                        ]
                    },
                ],
            }
        }

    },
}