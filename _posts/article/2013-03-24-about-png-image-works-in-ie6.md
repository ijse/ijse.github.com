---
layout: post
title: "IE6 下PNG图片不能半透明BUG"
description: ""
category:  article
tags: [css, png, bug]
---

{% include JB/setup %}


IE 7 以下的浏览器是不支持PNG图片半透明的的，详细说是不支持图片的alpha通道， 小图片存储为8位的可以用，但是32位的无法支持。 

## png图片的透明。
 
这种图片是以img的形式插入到网页中的。要解决这类图片的透明问题，只需要给这个图片一个class=“png”类，具体应用如下：
html代码：  

```html
	<img src="" class="png" />
```

css代码如下：

```css
	img.png {
		background-image: expression(
			this.runtimeStyle.backgroundImage = "none",
			this.runtimeStyle.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + this.src + "', sizingMethod='image')",
			this.src = "images/1.gif"
		)
	}
```

注意这里的1.gif图片是一个新的引入的图片。放入到相应的文件夹里即可。文章的下面的压缩包就是1.gif的图片。
 
## png背景图片的透明

要给.content这个div一个透明png的背景：

html代码：

	<div class="content"></div>

css样式如下：

	background:url(images/touming.png);
	_background-image:url(fixpng.png);
	background: none transparent scroll repeat 0% 0%; 
	FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='images/touming.png',sizingMethod='scale');
	 
## 封装好的一些JS插件

这些插件用起来还是蛮方便的，好多都是国外的，在国外IE6用户很少了，我们目前所遇到的这个问题是人家早在好几年前就解决了并且目前不存在的。

* 使用behavior 

在页面网页文件中</head>的前面加入：

	<!--[if IE 6]>
		<link href="xxx.com/ie6.css" rel="stylesheet" type="text/css" />
	<![endif]-->

建立一个IE6.CSS文件放到对应的位置，IE6.CSS文件内容为：

	img, div, td {behavior: url('/iepngfix.htc')}

修改iepngfix.htc文件中blank.gif（大小为一个像素的透明图片）的URL并上传到对应位置，如果找不到这个blank.gif文件会在PNG图片上面多出一个叉叉 

iepngfix.htc文件下载：

* [Unit Png Fix 插件](http://labs.unitinteractive.com/unitpngfix.php)

这个还蛮不错的，主要有以下特点：

	1. 非常小的javascript文件:1kb!
	2. 解决因为IE的滤镜属性所带来的影响.
	3. 无论是img元素或background-image属性,都能有效果.
	4. 在加载页面之前就能自动运行.或者就一丁点的元素.
	5. 允许自动高宽.
	6. 使用起来超级简单.

1).下载zip 然后,添加下面的代码到你页面的头部.(一定要确保路径的正确)

	<!--[if lt IE 7]>
	        <script type="text/javascript" src="unitpngfix.js"></script>
	<![endif]--> 

2).添加`clear.gif`到你的images 文件夹中.在js文件中,修改`var clear="images/clear.gif`路径,为你存放clear.gif的文件路径.

3). 你的整个项目的png图片都实现了透明效果.的确非常简单吧?就2个步骤,就实现了整个站点所有png的透明效果.

一些注意事项:

Unit PNG Fix能够让 background-repeat在ie6下工作,不过这种工作方式不是像正常的repeat图片重复的效果,而是采用了拉伸的效果.但是,仍然是效果 的,所以这也是非常不错的.因为没有任何一个解决方案能够实现ie6下透明滤镜重复图片这个功能.

* [SuperSleight 插件](http://24ways.org/2007/supersleight-transparent-png-in-ie6)


这个也不错，特点如下：

	1. 支持`inline`元素和`background-image`
	2. 如果链接或表单元素没有设置`position`属性，那么会自动为其添加`position:relative;`
	3. 可以针对整页操作，也可以只针对特定的区域，这有助于提升性能
	4. 如果发现背景图设为了`no-repeat`, 会自动把`scaleMode`设为`crop`代替`scale`
	5. 可以被JS调用重新，这样可以支持用AJAX载入的HTML

用法也是一样，很简单：

```html
	<!--[if lte IE 6]>
	<script type="text/javascript" src="supersleight-min.js"></script>
	<![endif]-->
```

在你的JS里面可以这样调用：

	supersleight.init()

也可以为其指定应用范围：

	supersleight.limitTo()

下载地址：http://24ways.org/code/supersleight-transparent-png-in-ie6/supersleight.zip

* [IE PNG Fix 2.0 Alpha 4](http://www.twinhelix.com/css/iepngfix/)

这一个也是用了CSS behaviors,并且只支持IE5.5和IE6。 用法跟之前介绍的差不多，都是条件注释引入，然后添加个CSS样式名称。。 

DEMO演示地址： http://www.twinhelix.com/css/iepngfix/demo/  
下载地址：http://www.twinhelix.com/css/iepngfix/iepngfix.zip  

* [DD_belatedPNG](http://www.dillerdesign.com/experiment/DD_belatedPNG/)

这个几乎是最好的，功能最多，最完善的，当然，也是体积最大的（12K，压缩后7K)，比较适于页面中图片比较多的情况。

这个与以上所介绍的方式所用的技术不一样，它是用了Microsoft的VML技术，而不是AlphaImageLoader filter. 作者发现PNG图片可以在VML元素中正确显示，因此就使用了这样一种方式来实现PNG格式的图片透明。之前bird项目的页面就是用的这个东西，页面中如果需要处理的PNG图片太多，会严重影响性能。

用法也是差不多：

	1. 下载引入DD_belatedPNG
	2. 使用JS调用：`DD_belatedPNG.fix()`， 这个方法里需要一个CSS选择器名称参数，在最新版本中，也可以同时定义多个CSS选择器，只要用逗号隔开即可~~
	3. 它还提供另一个方法`DD_belatedPNG.fixPng( yourElement )`, 其中传入的参数是DOM对象。

注意：
	1. 你不能对body元素进行操作，因为使用VML技术的原因，VML是使用兄弟DOM结点进行定位的。解决方法是为body再包一层标签，然后针对那个标签进行fix().
	2. 对TR、TD标签支持的不太好。
	3. 对background-position: fixed会有冲突
	4. 如果所需要PNG透明的元素是可点击的，那可能会有问题
	5. 对于PNG格式图片的识别是使用图片资源的后缀名称

下载地址： http://www.dillerdesign.com/experiment/DD_belatedPNG/#download