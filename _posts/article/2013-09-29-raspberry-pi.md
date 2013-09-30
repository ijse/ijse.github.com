---
category: article
layout: post
published: true
title: Raspberry Pi 手记
tags: 
  - RPI
---

Raspberry Pi 手记

平时上网经常遇到它，然后终于忍不住也买了一个玩。板子本身不贵，但还要再另加上一些必要的配件（电源、SD卡、散热片、RTC模块、外壳等等）。

# 下载刻录系统

到http://www.raspberrypi.org/downloads 下载了Raspbian 系统，下载下来解压ZIP后是一个img文件，需要烧录到SD卡上，在WIN下可以用UltraISO, 但是在MAC下需要：

- 首先找出SD卡的分区，运行`df -h`命令，可以通过卷标找到SD卡所在分区，如/dev/disk2s1，   
- 然后卸载SD卡分区，用命令：`sudo diskutil umount /dev/disk2s1`  
- 然后，使用SD卡的原始设备名称：/dev/rdisk2，通过`dd`命令来拷贝img文件至SD卡，完成烧录：
`sudo dd bs=1m if=~/Downloads/2013-09-10-wheezy-raspbian.img of=/dev/rdisk2`  
- 推出SD卡，现在可以用它来启动RaspberryPI了  

# 第一次启动，raspi-config设置

首先要运行一下Expand Filesystem选项，这样便可以使用整个SD卡的存储空间了。

然后可以修改下密码，设置下屏幕什么的，还可以超个频。

我使用的是Rapoo的无线键鼠，默认情况下，系统所使用的键盘布局是UK，与我们平常所使用的键盘而已有些不太一样，通常我们用的都是美国键盘，所以需要做些设置，在raspi-config工具中，选择`Internationalisation Options`， 在这里改下本地语言，默认的是`en_US.UTF8`, 可以修改成zh_CN.UTF8. 然后改下Timezone为UTF+8， 第三个选项是Change Keyboard Layout, 打开这个选项会稍微耗点时间。

打开后，第一屏是选择Keyboard model, 默认Generic 105-key即可，然后第二屏中，选择other - 然后English (US) 国际键盘，即含有international AltGr dead keys一项，剩下几屏都用默认即可。

都设置好之后，选Finish，便进入了终端了，使用默认用户名和密码 pi/raspberry 登陆，然后可以用命令`startx`进入图形界面。

以后也可以随时打开raspi-config工具，使用命令`sudo raspi-config`即可。

# 网络设置

raspbian其实是基于Debian系统的修改版本，网络配置什么的跟Linux都差不多。  

可以使用ifconfig命令，但这通常只是用作临时，重启后就失效了。另外还可以修改文件`/etc/network/interface`

由于我是在宾馆搞的，又忘了拿无线网卡，所以只能插网线了，下面是配的是静态网络：


	auto lo
	iface lo inet loopback
	auto eth0
	iface eth0 inet static
		address 192.168.20.87
		network 192.168.20.0
		netmask 255.255.255.0
		broadcast 192.168.20.255
		gateway 192.168.20.1
	…


其它内容默认即可，文件保存后，可以使用命令`sudo service networking restart` 重启网络服务，这时候就应该可以联上网了。
