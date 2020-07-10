# Vue

## Vue.js 中 this.\$nextTick()的使用

this.\$nextTick()将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。

假设我们更改了某个 dom 元素内部的文本，而这时候我们想直接打印出这个被改变后的文本是需要 dom 更新之后才会实现的，也就好比我们将打印输出的代码放在 setTimeout(fn, 0)中；

```bash

<template>

<section> 
<div ref="hello"> 
<h1>Hello World ~</h1> 
</div> 
<el-button type="danger" @click="get">点击</el-button> 
</section> 
</template> 
<script>
export default {
  mounted() {
    console.log(333);
    console.log(this.$refs["hello"]);
    his.$nextTick(() => {
      console.log(444);
      console.log(this.$refs["hello"]);
    });
  },
  created() {
    console.log(111);
    console.log(this.$refs["hello"]);
    this.$nextTick(() => {
      console.log(222);
      console.log(this.$refs["hello"]);
    });
  }
};

</script>
<template>

```
![](https://user-images.githubusercontent.com/5097752/39126631-798faf4a-4735-11e8-993d-6f314d4f2b55.png)

### Prepararation

- You should have [Node.js](https://nodejs.org)**>=8.0.0** installed at first.
- [Yarn](https://yarnpkg.com) is also needed for package management.

You can check by running commands: `node --version`, `npm --version` and `yarn --version`

## Configure and run

```bash
# Get into the directory
$ cd vuepress-homepage

# Install dependencies
$ yarn # or npm install

# Run under developing
$ yarn run dev # or npm run dev
```

Now open your favorite browser and go to `127.0.0.1:8080`, the demo is all set :sunglasses:

![](https://user-images.githubusercontent.com/5097752/39126631-798faf4a-4735-11e8-993d-6f314d4f2b55.png)

## Deploy

To generate your homepage as a static site, run:

```bash
$ yarn run build
```

This will build your site under the `dist` directory. Now you can deploy the files under `dist` directory to any web hosts provider or your own server. If you got stuck, feel free to open an issue or search it on google.

There are several available free online hosts for you:

- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)

For more available instructions, have a look at the [Deploying](https://vuepress.vuejs.org/guide/deploy.html#deploying) section.

### GitHub Pages

Create a repository, clone it to your local machine. And copy files in `dist` to your local repository folder.

Push it to GitHub with [GitHub Desktop](https://pages.github.com/) or command line and done.

### Netlify

Simply rename and drag and drop your `dist` directory to Netlify, follow the instruction and your site will all set up. Check the guide [here](https://vuepress.vuejs.org/guide/deploy.html#netlify).

Also, you can create your own repository and copy all the files except `.git` there. Therefore, your build command would be `yarn build` and your public directory be `dist`. Fast and easy.
