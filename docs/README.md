---
pageClass: home-page
# some data for the components

name: McGee
profile: /profile.jpg

socials:
  - title: github
    icon: '/icons/github.svg'
    link: https://github.com/wmzwq/vuepress-myblog
  - title: linkedin
    icon: '/icons/linkedin-mono.svg'
    link: https://www.linkedin.com
  - title: instagram
    icon: '/icons/instagram-mono.svg'
    link: /article/

cv: https://en.wikipedia.org/wiki/Harry_Potter
bio: Work at South Tech
email: 1966640056@qq.com
---

<ProfileSection :frontmatter="$page.frontmatter" />

## 关于我

我叫汪名州，坐标浙江。 我是计算机专业出身,对前端很感兴趣，所以从大学开始自学前端，今后的职业规划是朝着全栈工程师前进。 初来乍到，可以负责整个页面的前端 开发，配合后台人员实现产品前端界面效果与功能。写过响应式页面，pc 端页面。

不浮躁，喜欢前端，执行力，学习能力都很好，特别喜欢专研各种‘疑难杂症’！喜欢尝试不同的新框架与类库.

生活是一种绵延不绝的渴望,渴望不断上升,变得更伟大而高贵.

## 技能

- 熟练 Vue ，react 框架,并能够实现页面的搭建

- 熟悉 Node.js 开发，能够使用 nodejs 和 express 实现服务器端功能，访问数据库

- 熟悉 HTML，CSS，JavaScript 并能熟练编写 html、CSS、JavaScript 代码，了解相关技术的最新标准，熟悉 W3C 标准和语义化标签，能够解决浏览器兼容性问题

- 熟悉 JS，DOM，BOM 等原生 js 代码，能够使用原生代码开发页面功能

- 熟练掌握 HTML5 各种新特性, 能够实现基本绘图，地理定位

- 了解前端自动化构建工具 webpack , 熟练使用 git

- 熟练掌握各种 js 函数库和框架: 包括 jQuery, Ajax, boot,能够使用 jQuery 简化 DOM 操作,能够使用 Ajax 执行异步服务器请求,能够使用 boot 实现响应式布局,能够使用 less,scss 等动态 css 语言

## 经历

- **浙江索思科技有限公司** <br/>
  2020.06 - 至今

- **温州墨熵微电子有限公司** <br/>
  2018.08 - 2020.06

- **温州科技职业学院** <br/>
  2016.06 - 2019.06

## 项目

[→ Full list](/projects/)

<ProjectCard hideBorder=true>

**龙湾OA协同办公系统**

项目架构：

1、使用 vue 框架。

2、项目采用 vuex 处理各组件间的通讯，axios 处理请求，使用 elemnet-ui 组件库中部分功能进行快速开发，通过 vue-cli 快速搭建开发环境。


主要职责：

1、负责页面的布局和数据渲染，完成与后端的接口对接，配合后端的对接联调

2、通过使用前端知识将 UI 设计的效果图实现页面开发和优化，完成页面交互功能

3、使用element-ui进行OA的组件开发

4、项目的打包优化

[[Link](https://www.google.com)]

</ProjectCard>

<ProjectCard  hideBorder=true>

**电力 APP 重构**

项目架构：

1、使用 vue 框架，以及 vue-router 构建单页面应用。

2、项目采用 vuex 处理各组件间的通讯，axios 处理请求，使用 vant-ui 组件库中部分功能进行快速开发，通过 vue-cli 快速搭建开发环境。

3、采用手机淘宝适配方案。

4、使用阿里矢量图标库

主要职责：

1、合理使用钩子函数，实现数据的监听、渲染页面、页面节点的实例化功能

2、通过使用前端知识将 UI 设计的效果图实现页面开发和优化，完成页面交互功能。

3、负责页面的布局和数据渲染，完成与后端的接口对接，配合后端的对接联调。

4、项目的打包优化、上线

[[Link](https://www.google.com)]

</ProjectCard>

## 奖励和荣誉

### Contests

- **计算机二级**

<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
