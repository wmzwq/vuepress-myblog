---
pageClass: about-page
description: 'The biography and information about me.'
avatar: /profile.jpg
head: 'McGee'
info: 'Work at South Tech'
email: 1966640056@qq.com
爱好: '喜欢看历史书，喜欢游泳，爱好旅游和摄影'
socials:
- title: github
  link: https://github.com/mtobeiyf
- title: linkedin
  link: https://www.linkedin.com
- title: instagram
  link: https://www.instagram.com
- title: email
  link: 'mailto:harry[at]gmail.com'
actions:
- text: Projects
  link: /projects/
- text: Blog
  link: /guide/
- text: CV
  link: /article/
footer: Made with ♥ by Fing. Powered by VuePress
---

<AboutCard :frontmatter="$page.frontmatter" >

我叫汪名州，坐标浙江。 我是计算机专业出身,对前端很感兴趣，所以从大学开始自学前端，今后的职业规划是朝着全栈工程师前进。 初来乍到，可以负责整个页面的前端 开发，配合后台人员实现产品前端界面效果与功能。写过响应式页面，pc 端页面。

不浮躁，喜欢前端，执行力，学习能力都很好，特别喜欢专研各种‘疑难杂症’！喜欢尝试不同的新框架与类库.

生活是一种绵延不绝的渴望,渴望不断上升,变得更伟大而高贵.

</AboutCard>

<style lang="stylus">

.theme-container.about-page .page
  background-color #e6ecf0
  min-height calc(100vh)
  
  .last-updated
    display none

</style>