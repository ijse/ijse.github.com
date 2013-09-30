---
category: article
layout: post
published: true
title: 给Raspberry Pi添加RTC模块
---

Raspberry Pi 默认是没有RTC的，系统设置的时间在断电后便会丢失，再次开机时又会回到1970年。通常让RPI保存时间的办法有两个：

- 网络时间同步，用NTP
- 添加RTC硬件模块

RTC模块跟PC主板上的一样，我们可以把它插到Raspberry Pi的GPIO接口上，然后需要进行一番配置；

### 第一步，添加初始化rtc模块调用
修改`/etc/init.d/hwclock.sh`头文件，添加如下Shell代码：

    init_rtc_device() {
      [ -e /dev/rtc0 ] && return 0;
      #load i2c and RTC kernel modules
      modprobe i2c-dev
      modprobe rtc-ds1307
    
      #iterate over every i2c bus as we're supporting Raspberry Pi rev. 1 and 2
      #(different I2C busses on GPIO header!)
      for bus in $(ls -d /sys/bus/i2c/devices/i2c-*);
      do
         echo ds1307 0x68 >> $bus/new_device;
         if [ -e /dev/rtc0 ]; then
           log_action_msg "RTC found on bus `cat $bus/name`";
           break; # RTC found, bail out of the loop
         else
           echo 0x68 >> $bus/delete_device
         fi
       done
    }
    init_rtc_device
    
### 第二步，开启

修改`/etc/modprobe.d/raspi-blacklist.conf`配置文件，把第二行注释掉：

    #blacklist i2c-bcm2708
    
### 第三步，更新启动配置

	sudo update-rc.d hwclock.sh enable
    
然后重启下： 

	sudo reboot
    
### 第四步，设置本地时区

可以进入`sudo raspi-config`工具，也可以直接使用命令：

	sudo dpkg-reconfigure tzdata
    
### 第五步，关掉一些默认配置
  
    sudo update-rc.d fake-hwclock disable
    sudo update-rc.d ntp disable
    
然后再重启下：

    sudo reboot
    
 ### 第六步，配置正确时间，并写入到rtc模块中
 
 可以用命令：`sudo date -s "2013-09-30 10:10:10"`来设置本地系统时间，然后需要再用命令：
 
 	sudo hwclock -w

将系统时间写入到RTC模块。另外，下面还有几个命令：

* 改RTC模块的时间

    sudo hwclock --set  --date 05:05:05
    sudo hwclock --set  --date 2013-09-30

* 把rtc模块的时间更新到系统时间

	sudo hwclock –s


最后，可以验证下，关机，重插电源 ，然后开机试试看。





