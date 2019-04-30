module.exports = {
    locales: {
        '/': {
          lang: '简体中文',
          selectText: '选择语言',
          title: 'laravel-bjyblog',
          description: '基于 Laravel 开发的博客'
        },
        '/en/': {
          lang: 'English',
          title: 'laravel-bjyblog',
          description: 'Laravel Blog'
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
            '/': {
                selectText: '选择语言',
                nav: [
                    { text: 'Home', link: '/' },
                    { text: '其他文档', link: 'https://baijunyao.com/docs' },
                    { text: '博客', link: 'https://baijunyao.com' },
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
                            ['清空测试数据', '清空测试数据'],
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
                            ['文章内容替换', '文章内容替换'],
                        ]
                    },
                    {
                        title: '友情链接',
                        collapsable: false,
                        children: [
                            ['友情链接', '友情链接'],
                            ['推荐博客', '推荐博客'],
                        ]
                    },
                    {
                        title: '用户管理',
                        collapsable: false,
                        children: [
                            ['管理员列表', '管理员列表'],
                            ['第三方用户', '第三方用户'],
                        ]
                    },
                    {
                        title: '评论管理',
                        collapsable: false,
                        children: [
                            ['评论管理', '评论管理'],
                            ['评论内容替换', '评论内容替换'],
                        ]
                    },
                    {
                        title: '随言碎语',
                        collapsable: false,
                        children: [
                            ['随言碎语列表', '随言碎语列表'],
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
                            ['备份', '备份'],
                            ['其他配置', '其他配置'],
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
            '/en/': {
                selectText: 'Language',
                nav: [
                    { text: 'Home', link: '/en' },
                    { text: 'Other Docs', link: 'https://baijunyao.com/docs' },
                    { text: 'Blog', link: 'https://baijunyao.com' },
                ],
                sidebar: [
                    {
                        title: 'Installation',
                        collapsable: false,
                        children: [
                            ['/en/Installation', 'Installation'],
                            ['/en/ClearTestData', 'Clear Test Data'],
                            ['/en/DeployToProduction', 'Deploy to Production'],
                            ['/en/Upgrade', 'Upgrade'],
                        ]
                    },
                    {
                        title: 'Category & Nav',
                        collapsable: false,
                        children: [
                            ['/en/Category', 'Category'],
                            ['/en/Nav', 'Nav'],
                        ]
                    },
                    {
                        title: 'Tag',
                        collapsable: false,
                        children: [
                            ['/en/Tag', 'Tag'],
                        ]
                    },
                    {
                        title: 'Article',
                        collapsable: false,
                        children: [
                            ['/en/Article', 'Article'],
                            ['/en/BatchReplaceArticleWord', 'Replace Article Word'],
                        ]
                    },
                    {
                        title: 'Friendship Link',
                        collapsable: false,
                        children: [
                            ['/en/FriendshipLink', 'Friendship Link'],
                            ['/en/RecommendBlog', 'Recommend Blog'],
                        ]
                    },
                    {
                        title: 'User',
                        collapsable: false,
                        children: [
                            ['/en/Manager', 'Manager'],
                            ['/en/ThirdPartyUser', 'Third Party User'],
                        ]
                    },
                    {
                        title: 'Comment',
                        collapsable: false,
                        children: [
                            ['/en/Comment', 'Comment'],
                            ['/en/BatchReplaceCommentWord', 'Replace Comment Word'],
                        ]
                    },
                    {
                        title: 'Chat',
                        collapsable: false,
                        children: [
                            ['/en/Chat', 'Chat'],
                        ]
                    },
                    {
                        title: 'Setting',
                        collapsable: false,
                        children: [
                            ['/en/AdminLogin', 'Admin Login'],
                            ['/en/Mail', 'Mail'],
                            ['/en/OAuth', 'OAuth'],
                            ['/en/OpenSource', 'Open Source'],
                            ['/en/Backup', 'Backup'],
                            // ['其他配置', '其他配置'],
                        ]
                    },
                    // {
                    //     title: '其他',
                    //     collapsable: false,
                    //     children: [
                    //         ['分支说明', '分支说明'],
                    //         ['版本说明', '版本说明'],
                    //         ['更新记录', '更新记录'],
                    //         ['特别感谢', '特别感谢'],
                    //     ]
                    // },
                ],
            }
        }

    },
}