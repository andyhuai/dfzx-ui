module.exports = {
  base: '/dfzx-ui/',
  title: 'DFZX UI',
  description: 'Inspiration from DFZX',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/andyhuai/dfzx-ui' },
    ],
    sidebar: [
      {
        title: '开发指南',
        collapsable: true,
        children: ['views/guide/install.md', 'views/guide/get-started.md'],
      },
      {
        title: '组件',
        collapsable: true,
        children: ['views/components/basic/button.md','views/components/modal/modal.md', ],
      },
    ],
  },
};
