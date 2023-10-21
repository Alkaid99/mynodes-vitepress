# 环境搭建

## Linux 使用

### 所需材料

#### 虚拟机软件

初学者大部分都用的 windows 系统，所以选择用虚拟机来安装 Linux 系统，可以使用 VMware Workstation 或者 VirtualBox 等虚拟机软件。

|虚拟机软件|简介|下载地址|
|-|-|-|
|VMware Workstation|功能强大的桌面虚拟计算机软件，提供用户可在单一的桌面上同时运行不同的操作系统，和进行开发、测试、部署新的应用程序的最佳解决方案。VMware Workstation 可在一部实体机器上模拟完整的网络环境，以及可便于携带的虚拟机器，其更好的灵活性与先进的技术胜过了市面上其他的虚拟计算机软件|<https://www.vmware.com/cn/products/workstation-pro/workstation-pro-evaluation.html>|
|VirtualBox|号称是最强的免费虚拟机软件，它不仅具有丰富的特色，而且性能也很优异。它简单易用。与同性质的 VMware 及 Virtual PC 比较下，VirtualBox 独到之处包括远端桌面协定（RDP）、iSCSI 及 USB 的支持，VirtualBox 在客户端操作系统上已可以支持 USB3.0 的硬件装置，不过要安装`VirtualBox Extension Pack`|<https://www.virtualbox.org/wiki/Downloads>|

其中 VMware Workstation 有两个版本：

- Player，免费，但不支持快照、克隆、NAT 等功能
- Pro，不免费，但功能齐全，推荐使用，可以搜索破解版，或者使用密钥`ZF3R0-FHED2-M80TY-8QYGC-NPKYF`（Pro 16）激活

#### 光盘映像文件

推荐使用 CentOS 系统或 Ubuntu，也是企业中选择最多的发行版。

可以在开源软件镜像站下载各种 Linux 发行版。例如：
|开源镜像站|地址|
|-|-|
|清华|<http://mirrors.tuna.tsinghua.edu.cn/>|
|网易|<http://mirrors.163.com/>|
|阿里|<http://mirrors.aliyun.com/>|
|中科大|<https://mirrors.ustc.edu.cn/>|

*开源镜像中只有在维护版本，其余停止维护的版本需要前往官网下载。*

#### 常见系统下载地址

|系统|下载地址（阿里镜像）|
|-|-|
|CentOS8.5|<https://mirrors.aliyun.com/centos/8.5.2111/isos/x86_64/CentOS-8.5.2111-x86_64-dvd1.iso?spm=a2c6h.25603864.0.0.605c53ba5QKDwq>|
|CentOS7.9|[https://mirrors.tuna.tsinghua.edu.cn/centos/7.9.2009/isos/x86_64/centos-7-x86_64-DVD-2009.iso](https://mirrors.aliyun.com/centos/7.9.2009/isos/x86_64/CentOS-7-x86_64-Minimal-2009.iso?spm=a2c6h.25603864.0.0.76f66aealHckzv)|
|CentOS Stream 9|<https://mirrors.aliyun.com/centos-stream/9-stream/BaseOS/x86_64/iso/CentOS-Stream-9-latest-x86_64-dvd1.iso?spm=a2c6h.25603864.0.0.fc91408cT3nb8c>|
|Rocky9.0|<https://mirrors.aliyun.com/rockylinux/9.0/isos/x86_64/Rocky-9.0-x86_64-dvd.iso?spm=a2c6h.25603864.0.0.6ee65db7poLYx2>|
|Ubuntu18.04|<https://mirrors.aliyun.com/oldubuntu-releases/releases/18.04/ubuntu-18.04-desktop-amd64.iso?spm=a2c6h.25603864.0.0.2c881990hs4SEc>|
|Ubuntu20.04|<https://mirrors.aliyun.com/oldubuntu-releases/releases/20.04/ubuntu-20.04-beta-desktop-amd64.iso?spm=a2c6h.25603864.0.0.12164986aC3mnM>|

#### CentOS 系统中各个版本说明

以 Centos 7 为例：

|版本|描述|
|-|-|
|CentOS-7.0-1406-x86_64-**DVD**.iso|标准安装版，一般下载这个就可以了|
|CentOS-7.0-1406-x86_64-**Minin**.iso|最小化版，没有图形化界面，只有命令行，一般用于服务器安装|
|CentOS-7.0-1406-x86_64-**NetInstall**.iso|网络安装镜像|
|CentOS-7.0-1406-x86_64-**Everything**.iso|对完整版安装盘的软件进行补充，集成所有软件|
|CentOS-7.0-1406-x86_64-**GnomeLive**.iso|GNOME 桌面版|
|CentOS-7.0-1406-x86_64-**KdeLive**.iso|KDE 桌面版|
|CentOS-7.0-1406-x86_64-**livecd**.iso|光盘上运行的系统，类似于 winpe|

`CentOS-xxxx-LiveCD.ios`和`CentOS-xxxx-bin-DVD.iso`有什么区别？

前者只有 70M，后者有 3.8G。其差别不仅仅在大小上，其更本质的差别是：

- CentOS-x-xx-LiveCD.ios 只能加载到内存里运行，不能安装
- CentOS-xxx-bin-DVD1.iso 才可以安装到硬盘上

`CentOS-xxx-bin-DVD1.iso`和`CentOS-xxx-bin-DVD2.iso`分别是干什么的？

前者是 3.8G，后者是 500M。其差别不仅仅在大小上，其更本质的差别是：

- DVD1 是 CentOS 的安装文件
- DVD2 是 CentOS 的一些软件，就简单实用 CentOS 来说是不需要的

#### 终端连接工具

|终端连接工具|简介|下载地址|
|-|-|-|
|Xshell|XShell 是最知名终端模拟软件，是国内比较流行的 SSH 管理软件，和其他的 SSH 客户端相比，Xshell 更加注重用户体验的一些东西，比如其现代化的界面，多种语言包括简体中文支持，代码高亮等，对于新手非常友好。对于个人是免费的，但如果需要上传下载需要再安装 Xftp|<https://www.xshell.com/zh/free-for-home-school/>|
|Mobaxterm|是一个非常强大的终端增强工具，除了支持基本的 SSH 终端管理外，还有非常多的增强和扩展功能。有绿色版本软件，使用方便；支持 RDP 远程连接 Windows；图形化 SFTP 管理，可上传下载文件；分为免费版和收费版，免费版功能足够使用，但是不支持中文|<https://mobaxterm.mobatek.net/download.html>|
|tabby|原名 Terminus，是一个高度可配置的终端模拟器、SSH 和串行客户端，适用于 Windows、macOS 和 Linux。自带 SFTP 功能，能够与 Linux 系统传输文件；炫酷的终端页面，简单易用，以及各种插件支持等|<https://github.com/Eugeny/tabby>|
|WindTerm|是一款开源免费、跨平台 SSH/Sftp/Shell/Telnet/Serial 客户端，完全免费（部分开源），支持文件管理器、会话管理器、资源管理器、大纲视图等多种功能的窗格，支持 scp、sftp 等|<https://github.com/kingToolbox/WindTerm>|

### 安装步骤

具体安装步骤网上非常多教程，这里不再赘述。

> <https://www.linuxprobe.com/basic-learning-01.html>
>
> <https://blog.csdn.net/LiCJ1113538586/article/details/124578639>


## Linux 目录结构

Linux 的文件系统是采用级层式的树状目录结构，在此结构中的最上层是根目录`/`，然后在此目录下在创建其他目录。**在 Linux 世界中，一切皆是文件**。

![linux 目录结构](images/01/linux02.jpg)

### 系统启动必须

- `/boot`：存放的启动 Linux 时使用的内核文件，包括连接文件以及镜像文件
- `/etc`：存放所有的系统需要的**配置文件**和**子目录列表**，更改目录下的文件可能会导致系统不能启动
- `/lib`：存放基本代码库（比如 c++库），其作用类似于 Windows 里的 DLL 文件。几乎所有的应用程序都需要用到这些共享库
- `/sys`：这是 linux2.6 内核的一个很大的变化。该目录下安装了 2.6 内核中新出现的一个文件系统 sysfs。sysfs 文件系统集成了下面 3 种文件系统的信息：针对进程信息的 proc 文件系统、针对设备的 devfs 文件系统以及针对伪终端的 devpts 文件系统。该文件系统是内核设备树的一个直观反映。当一个内核对象被创建的时候，对应的文件和目录也在内核对象子系统中

### 指令集合

- `/bin`：存放着最常用的程序和指令
- `/sbin`：只有系统管理员能使用的程序和指令

### 外部文件管理

- `/dev`：Device（设备）的缩写，存放的是 Linux 的外部设备。**注意**：在 Linux 中访问设备和访问文件的方式是相同的
- `/media`：类 windows 的**其他设备**，例如 U 盘、光驱等等，识别后 linux 会把设备放到这个目录下
- `/mnt`：临时挂载别的文件系统的，我们可以将光驱挂载在/mnt/上，然后进入该目录就可以查看光驱里的内容了

### 临时文件

- `/run`：是一个临时文件系统，存储系统启动以来的信息。当系统重启时，这个目录下的文件应该被删掉或清除。如果你的系统上有`/var/run`目录，应该让它指向`/run`
- `/lost+found`：一般情况下为空的，系统非法关机后，这里就存放一些文件
- `/tmp`：这个目录是用来存放一些**临时文件**的

### 账户

- `/root`：系统管理员的用户主目录
- `/home`：用户的主目录，以用户的账号命名的
- `/usr`：用户的很多应用程序和文件都放在这个目录下，类似于 windows 下的 program files 目录
- `/usr/bin`：系统用户使用的应用程序与指令
- `/usr/sbin`：超级用户使用的比较高级的管理程序和系统守护程序
- `/usr/src`：内核源代码默认的放置目录

### 运行过程中要用

- `/var`：存放经常修改的数据，比如程序运行的日志文件在`/var/log`目录下
- `/proc`：管理**内存空间！**虚拟的目录，是系统内存的映射，我们可以直接访问这个目录来，获取系统信息。这个目录的内容不在硬盘上而是在内存里，我们也可以直接修改里面的某些文件来做修改

### 扩展用的

- `/opt`：默认是空的，我们安装额外软件可以放在这个里面。比如你安装一个 ORACLE 数据库则就可以放到这个目录下。默认是空的
- `/srv`：存放服务启动后需要提取的数据，不用服务为空

在 Linux 系统中，有几个目录是比较重要的，平时需要注意不要误删除或者随意更改内部文件：

- `/etc`：上边也提到了，这个是系统中的配置文件，如果你更改了该目录下的某个文件可能会导致系统不能启动
- `/bin`，`/sbin`，`/usr/bin`，`/usr/sbin`：这是系统预设的执行文件的放置目录，比如 ls 就是在`/bin/ls`目录下的。值得提出的是，`/bin`，`/usr/bin`是给系统用户使用的指令（除 root 外的通用户），而`/sbin`，`/usr/sbin`则是给 root 使用的指令
- `/var`：这是一个非常重要的目录，系统上跑了很多程序，那么每个程序都会有相应的日志产生，而这些日志就被记录到这个目录下，具体在`/var/log`目录下，另外`mail`的预设放置也是在这里
