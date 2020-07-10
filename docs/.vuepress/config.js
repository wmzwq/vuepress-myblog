module.exports = {
  title: "McGee",
  description: "一个web前端工程师的个人网站",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    search: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Projects", link: "/projects/" },
      { text: "Blog", link: "/guide/" },
      { text: "GitHub", link: "https://github.com/wmzwq/vuepress-myblog" }
    ],
    sidebar: {
      '/guide/': genSidebarConfig('Blog'),
    },
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'Vue',
        'React',
        'Css',
        'Git',
      ]
    }
  ]
}

