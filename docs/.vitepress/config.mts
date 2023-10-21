import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "📗 知识仓库",
  description: "个人知识仓库管理",
  lang: 'zh-CH',
  head: [['link', { rel: 'icon', href: '/icon.jpg' }]],
  // markdown配置
  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //中文化
    outlineTitle: '本页目录',
    darkModeSwitchLabel: '切换主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    outline: [2, 4],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    // 本地搜索
    search: {
      provider: 'local'
    },
    // 导航栏
    nav: [
      { text: '💕首页', link: '/' },
      { text: '💕Linux', link: '/01linux/' },
      { text: '💕Server', link: '/02server/' },
      { text: '💕Shell', link: '/02server/' },
      { text: '💕Network', link: '/02server/' },
    ],

    // 侧边栏
    sidebar: {

      // linux 侧边栏
      '/01linux/': [
        {
          collapsed: false, // 折叠侧边栏
          text: '介绍',
          items: [
            { text: 'Linux 简介', link: '/01linux/seaci.md' },
            { text: '开源软件', link: '/01linux/open.md' },
            { text: '环境搭建', link: '/01linux/open.md' },
          ],
        },
        {
          collapsed: true, // 折叠侧边栏
          text: '基础',
          items: [
            { text: '基础命令', link: '/01linux/environment.md' },
            { text: '用户管理', link: '/01linux/package.md' },
            { text: '用户权限', link: '/01linux/package.md' },
            { text: '进程管理', link: '/01linux/package.md' },
            { text: '磁盘管理', link: '/01linux/package.md' },
            { text: '包管理', link: '/01linux/package.md' },
            { text: '网络管理', link: '/01linux/package.md' },
            { text: '日志管理', link: '/01linux/package.md' },
            { text: '防火墙与SELinux', link: '/01linux/package.md' },
            { text: 'System服务管理', link: '/01linux/package.md' },

          ],
        },
        {
          collapsed: true, // 折叠侧边栏
          text: '进阶',
          items: [
            { text: '同步管理', link: '/01linux/package.md' },
            { text: '源码编译安装', link: '/01linux/seaci.md' },
            { text: '引导与启动过程', link: '/01linux/environment.md' },
            { text: '故障与修复', link: '/01linux/package.md' },
            { text: '系统安全', link: '/01linux/package.md' },
            { text: 'Arch Linux', link: '/01linux/package.md' },
          ],
        },
      ],
      // server 侧边栏
      '/server/': [
        {
          collapsed: false,
          text: '基础服务',
          items: [
            { text: 'NFS 网络文件系统', link: '/01linux/package.md' },
            { text: 'NTP 时间同步', link: '/01linux/seaci.md' },
            { text: 'DNS 域名系统', link: '/01linux/environment.md' },
          ],
        },
        {
          collapsed: true,
          text: 'Web 服务',
          items: [
            { text: 'Apache Httpd', link: '/01linux/package.md' },
            { text: 'Nginx', link: '/01linux/seaci.md' },
            { text: 'Tomcat', link: '/01linux/environment.md' },
          ],
        },
        {
          collapsed: true,
          text: '其他服务',
          items: [
            { text: 'Docker', link: '/01linux/package.md' },
            { text: 'sql', link: '/01linux/seaci.md' },
          ],
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
