---
title: NPM管理two package.json项目的version同步更新
date: 2017-03-27 14:49:16
---
最近在重构一个Electron项目，使用了 [two package.json structure](https://github.com/electron-userland/electron-builder/wiki/Two-package.json-Structure)，但怎样方便地同步更新两个<code>version</code>

<!--more-->

项目结构类似如下：
```
- project/
  - app/
    - package.json
  - package.json
```
打包时使用的是<code>project/app/package.json</code>中的<code>version</code>，但习惯上一般是在<code>project/</code>目录下执行<code>npm version</code>。

默认执行<code>npm version</code>更新版本号时，只会自动更新当前目录下<code>package.json</code>中的<code>version</code>字段，<code>project/app/</code>下的只能手动更新。

最终的解决方式如下：
```
// project/package.json
"scripts": {
    "version": "pushd app; npm version $npm_package_version; git add -A; popd"
}
```
参考文档：[https://docs.npmjs.com/cli/version](https://docs.npmjs.com/cli/version)
