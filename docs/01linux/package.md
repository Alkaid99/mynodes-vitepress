# 软件包管理

软件包管理是一种在系统上安装、维护软件的方法。目前，很多人通过安装Linux经销商发布的软件包来满足他们所有的软件需求。这与早期的Linux形成了鲜明的对比。

因为在Linux早期，想要安装软件必须先下载源代码，然后对其进行编译。这并不是说编译源代码不好，源代码公开恰是Linux吸引人的一大亮点。编译源代码赋予用户自主检查、提升系统的能力，只是使用预先编译的软件包会更快、更容易些。

不同的Linux发行版用的是不同的软件包系统，并且原则上，适用于一种发行版的软件包与其他版本是不兼容的。

多数Linux发行版采用的不外乎两种软件包技术阵营，即Debian的`.deb`技术和Red Hat的`.rpm`技术。当然也有一些特例，比如Gentoo、Slackware和Foresight等，但多数版本采取这两个基本软件包系统。

## rpm软件包

扩展名为`.rpm`，适用于Redhat系列，rpm命令用于管理套件。

### RPM的含义

由红帽公司提出，Radhat、SUSE等系列采用。建立集中数据库，记录软件包安装/卸载等变化信息，分析软件包依赖关系。

RPM原本是RedHat Linux发行版专门用来管理Linux各项套件的程序，由于它遵循GPL规则且功能强大方便，因而广受欢迎。逐渐受到其他发行版的采用。RPM套件管理方式的出现，让Linux易于安装，升级，间接提升了Linux的适用度。

### RPM包文件名特征

常见的RPM包格式：

- `firefox-52.7.0-1.el7.CentOS.x86_64.rpm`

|字段|描述|
|-|-|
|`firefox`|表示软件包名|
|`52.7.0`|表示软件版本|
|`-1`|二进制包发布的次数，表示此RPM包是第几次编程生成的|
|`el7`|软件发行商，el7表示表示此包是由RedHat公司发布，适合在RHEL 7.x和CentOS 7.x上使用|
|`CentOS`|表示此包适用于CentOS系统|
|`x86_64`|表示此包使用的硬件平台，目前的RPM包支持的平台如下表格|
|`rpm`|RPM包的扩展名，表明这是编译好的二进制包，可以使用rpm命令直接安装。

*此外，还有以`src.rpm`作为扩展名的RPM包，这表明是源代码包，需要安装生成源码，然后对其编译并生成rpm格式的包，最后才能使用rpm命令进行安装*

|平台名称|适用平台信息|
|-|-|
|i386|386以上的计算机都可以安装|
|i586|686以上的计算机都可以安装|
|i686|奔腾II以上的计算机都可以安装，目前所有的CPU是奔腾II以上的，所以这个软件版本居多|
|x86_64|64位CPU可以安装|
|noarch|没有硬件限制|

### RPM包安装

```bash
[root@localhost ~]# rpm -ivh [软件名]
```

**常用参数：**

|参数|描述|
|:-:|-|
|`-i`|安装|
|`-v`|显示更详细的信息|
|`-h`|显示安装进度|

*直到出现两个100%才是真正的安装成功，第一个100%仅表示完成了安装准备工作*

### RPM包常见安装位置

|文件类别|默认安装位置|
|-|-|
|普通执行程序|`/usr/bin`、`/bin`|
|服务器程序、管理工具|`/usr/sbin`、`/sbin`|
|配置文件|`/etc`、`/etc/软件名`|
|日志文件|`/var/log`、`/var/log/软件名`|
|程序文档、man帮助手册页|`/usr/share/doc`、`/usr/share/man`|

### RPM包查询软件包

```bash
[root@localhost ~]# rpm [参数] [软件包]
```

**常用参数：**

|参数|描述|
|:-:|-|
|`-a`|查询所有套件|
|`-i`|显示套件的相关信息|
|`-l`|显示套件的文件列表|
|`-q`|使用询问模式，当遇到任何问题时，rpm指令会先询问用户|
|`-p`|查询指定的RPM套件档（软件包）|

### RPM包卸载

```bash
[root@localhost ~]# rpm -e [软件包]
```

### 参考示例

1. 查看软件包是否安装

    查询`wget`软件包是否安装，查询为空表示没有安装，如果没有可以使用`yum`或`dnf`命令进行安装

    ```bash
    [root@hostlocal ~]# rpm -qa wget
    [root@hostlocal ~]#
    [root@hostlocal ~]# dnf -y install wget
    [root@hostlocal ~]# rpm -qa wget
    wget-1.19.5-10.el8.x86_64
    ```

2. 查看软件包的信息

    ```bash
    [root@hostlocal ~]# rpm -qi wget
    Name        : wget
    Version     : 1.19.5
    Release     : 10.el8
    Architecture: x86_64
    Install Date: Sat 16 Jul 2022 07:37:07 AM EDT
    Group       : Applications/Internet
    Size        : 2895472
    License     : GPLv3+
    Signature   : RSA/SHA256, Sun 11 Apr 2021 06:18:43 PM EDT, Key ID 15af5dac6d745a60
    Source RPM  : wget-1.19.5-10.el8.src.rpm
    Build Date  : Tue 06 Apr 2021 11:50:53 PM EDT
    Build Host  : ord1-prod-x86build003.svc.aws.rockylinux.org
    Relocations : (not relocatable)
    Packager    : infrastructure@rockylinux.org
    Vendor      : Rocky
    URL         : http://www.gnu.org/software/wget/
    Summary     : A utility for retrieving files using the HTTP or FTP protocols
    Description :
    GNU Wget is a file retrieval utility which can use either the HTTP or
    FTP protocols. Wget features include the ability to work in the
    background while you are logged out, recursive retrieval of
    directories, file name wildcard matching, remote file timestamp
    storage and comparison, use of Rest with FTP servers and Range with
    HTTP servers to retrieve files over slow or unstable connections,
    support for Proxy servers, and configurability.
    ```

3. 查看软件包的安装清单（装了哪些内容）

    ```bash
    [root@hostlocal ~]# rpm -ql wget
    /etc/wgetrc
    /usr/bin/wget
    /usr/lib/.build-id
    /usr/lib/.build-id/69
    /usr/lib/.build-id/69/6a762c9d8cd9dcbedf7c55de847ac7c20f0ae8
    /usr/share/doc/wget
    ………………忽略部分输出信息………………
    ```

4. 查看目录或文件是哪个rpm包带来的

    ```bash
    [root@hostlocal ~]# rpm -qf /etc/passwd
    setup-2.12.2-6.el8.noarch
    ```

5. 查询软件包的安装信息

    需要先下载一个rpm包，然后进行查看，使用`wget`下载nginx

    ```bash
    [root@hostlocal ~]# wget http://nginx.org/packages/CentOS/8/x86_64/RPMS/nginx-1.22.0-1.el8.ngx.x86_64.rpm
    [root@hostlocal ~]# rpm -qi nginx-1.22.0-1.el8.ngx.x86_64.rpm
    warning: nginx-1.22.0-1.el8.ngx.x86_64.rpm: Header V4 RSA/SHA256 Signature, key ID 7bd9bf62: NOKEY
    Name        : nginx
    Epoch       : 1
    Version     : 1.22.0
    Release     : 1.el8.ngx
    Architecture: x86_64
    Install Date: (not installed)
    Group       : System Environment/Daemons
    Size        : 2949123
    License     : 2-clause BSD-like license
    Signature   : RSA/SHA256, Tue 24 May 2022 11:52:25 AM EDT, Key ID abf5bd827bd9bf62
    Source RPM  : nginx-1.22.0-1.el8.ngx.src.rpm
    Build Date  : Tue 24 May 2022 11:35:49 AM EDT
    Build Host  : ip-10-1-17-199.eu-central-1.compute.internal
    Relocations : (not relocatable)
    Vendor      : NGINX Packaging <nginx-packaging@f5.com>
    URL         : https://nginx.org/
    Summary     : High performance web server
    Description :
    nginx [engine x] is an HTTP and reverse proxy server, as well as
    a mail proxy server.
    ```

    `warning: nginx-1.22.0-1.el8.ngx.x86_64.rpm: Header V4 RSA/SHA256 Signature, key ID 7bd9bf62: NOKEY`，告警是因为没有发现该rpm包的红帽签名，不影响安装使用

6. 查询软件包的安装清单

    ```bash
    [root@hostlocal ~]# rpm -ql nginx-1.22.0-1.el8.ngx.x86_64.rpm
    warning: nginx-1.22.0-1.el8.ngx.x86_64.rpm: Header V4 RSA/SHA256 Signature, key ID 7bd9bf62: NOKEY
    /etc/logrotate.d/nginx
    /etc/nginx
    /etc/nginx/conf.d
    /etc/nginx/conf.d/default.conf
    /etc/nginx/fastcgi_params
    /etc/nginx/mime.types
    /etc/nginx/modules
    /etc/nginx/nginx.conf
    /etc/nginx/scgi_params
    /etc/nginx/uwsgi_params
    ………………忽略部分输出信息………………
    ```

## YUM和DNF

### YUM

YUM命令来自于英文词组**YellowdogUpdater,Modified**的缩写，其功能是用于在Linux系统中基于RPM技术进行软件包的管理工作。YUM技术通用于RHEL、CentOS、Fedora、OpenSUSE等主流系统，可以让系统管理人员交互式的自动化更新和管理软件包，实现从指定服务器自动下载、更新、删除软件包的工作。

YUM软件仓库及命令能够自动处理软件依赖关系，一次性安装所需全部软件，无需繁琐的操作。

YUM配置文件默认国外，可以将其修改成国内的YUM源，加快下载访问速度。

> YUM更换国内源：[https://developer.aliyun.com/mirror/CentOS?spm=a2c6h.13651102.0.0.f78f1b11gUb6Eo](https://developer.aliyun.com/mirror/CentOS?spm=a2c6h.13651102.0.0.f78f1b11gUb6Eo)

### DNF

DNF是YUM的下一代包管理软件，改进YUM包管理工具的一些问题，提升了用户体验，内存占用，依赖分析，运行速度等多方面的内容。

DNF包管理器克服了YUM包管理器的一些瓶颈，提升了包括用户体验，内存占用，依赖分析，运行速度等多方面的内容。DNF使用RPM，libsolv和hawkey库进行包管理操作。尽管它没有预装在CentOS和RHEL7中，但你可以在使用YUM的同时使用DNF。

当然DNF也不是完美的，例如：在DNF中没有`–skip-broken`命令，并且没有替代命令供选择。没有判断哪个包提供了指定依赖的`resolvedep`命令，没有用来列出某个软件依赖包的`deplist`命令等等。

*CentOS7或以下版本如果想使用dnf，则需要额外安装DNF；CentOS8上已默认安装了DNF，而且同时兼容yum*

### 语法

```bash
[root@localhost ~]# yum/dnf [参数] [软件名]
```

**常用参数：**

|常用参数|描述|
|:-:|-|
|`-y`|对所有的提问都回答yes|
|`-c`|指定配置文件|
|`-q`|安静模式|
|`install`|安装rpm软件包|
|`update`|更新rpm软件包|
|`check-update`|检查是否有可用的更新rpm软件包|
|`remove`|删除指定的rpm软件包|
|`list`|显示软件包的信息|
|`search`|检查软件包的信息|
|`clean`|删除缓存的无用软件包|

### 配置本地yum源

1. 将原先的yum文件进行备份，以便可以恢复

    ```bash
    [root@hostlocal ~]# mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.Backup
    ```

2. 挂载系统光盘

    在虚拟机上添加系统光盘，然后进行挂载

    ```bash
    [root@hostlocal ~]# mount /dev/cdrom /mnt
    [root@hostlocal ~]# mount
    …………忽略部分输出信息…………
    /dev/srO on /mnt type iso9660 (ro)
    ```

3. 新建yum文件

    ```bash
    vim /etc/yum.repos.d/CentOS-Base.repo
    [mydvd_repo] # 仓库名
    name=Rocky8_dvd_repo # 仓库描述信息
    baseurl=file:///mnt # 设置yum的服务端，这里使用本地/mnt目录下作为服务端
    enabled=1 # 1为启用该服务端，0表示不起用服务端
    gpgcheck=0 # 0表示不检测红帽签名，1表示检查红帽签名
    #gpgkey=url # 检查红帽签名的话需要加上url，这里不写，注释
    ```

### 参考示例

1. 卸载软件包

    ```bash
    [root@hostlocal ~]# dnf remove wget
    Dependencies resolved.
    ==========================================================================================================================================================
     Package                              Architecture                    Version                                   Repository                           Size
    ==========================================================================================================================================================
    Removing:
     wget                                 x86_64                          1.19.5-10.el8                             @appstream                          2.8 M
    Removing unused dependencies:
     libmetalink                          x86_64                          0.1.3-7.el8                               @baseos                              70 k

    Transaction Summary
    ==========================================================================================================================================================
    Remove  2 Packages

    Freed space: 2.8 M
    Is this ok [y/N]: 
    ```

    使用yum卸载时，会连依赖一起卸载，不建议加上参数 `-y`

2. 查询仓库中是否有软件包

    ```bash
    [root@hostlocal ~]# dnf list nginx
    Last metadata expiration check: 1:11:53 ago on Fri 22 Jul 2022 07:30:57 AM EDT.
    Available Packages
    nginx.x86_64  
    ```

    ```bash
    [root@hostlocal ~]# dnf search  nginx
    Last metadata expiration check: 1:12:37 ago on Fri 22 Jul 2022 07:30:57 AM EDT.
    ============================================================== Name Exactly Matched: nginx ===============================================================
    nginx.x86_64 : A high performance web server and reverse proxy server
    ============================================================= Name & Summary Matched: nginx ==============================================================
    nginx-all-modules.noarch : A meta package that installs all available Nginx modules
    nginx-filesystem.noarch : The basic directory layout for the Nginx server
    nginx-mod-http-image-filter.x86_64 : Nginx HTTP image filter module
    nginx-mod-http-perl.x86_64 : Nginx HTTP perl module
    nginx-mod-http-xslt-filter.x86_64 : Nginx XSLT module
    nginx-mod-mail.x86_64 : Nginx mail modules
    nginx-mod-stream.x86_64 : Nginx stream modules
    pcp-pmda-nginx.x86_64 : Performance Co-Pilot (PCP) metrics for the Nginx Webserver
    ```

    `search`表示只要包含软件名就匹配

    ```bash
    [root@hostlocal ~]# dnf -y provides nginx
    Last metadata expiration check: 1:13:45 ago on Fri 22 Jul 2022 07:30:57 AM EDT.
    nginx-1:1.14.1-9.module+el8.4.0+542+81547229.x86_64 : A high performance web server and reverse proxy server
    Repo        : appstream
    Matched from:
    Provide    : nginx = 1:1.14.1-9.module+el8.4.0+542+81547229
    ```

    `rovides`表示仓库在是哪个软件包产生该文件

    ```bash
    [root@hostlocal ~]# dnf provides /etc/passwd
    Last metadata expiration check: 1:18:55 ago on Fri 22 Jul 2022 07:30:57 AM EDT.
    setup-2.12.2-6.el8.noarch : A set of system configuration and setup files
    Repo        : @System
    Matched from:
    Filename    : /etc/passwd

    setup-2.12.2-6.el8.noarch : A set of system configuration and setup files
    Repo        : baseos
    Matched from:
    Filename    : /etc/passwd
    ```

3. 重新安装软件包

    ```bash
    [root@hostlocal ~]# dnf -y reinstall wget
    ```

4. 清空缓存

    ```bash
    [root@hostlocal ~]# dnf clean all
    yum repolist
    ```

### dnf模块

从RHEL8/CentOS8开始，dnf取代yum作为rpm包管理工具。与之而来的还有模块`moduler`。该功能主要用于切换不同版本的软件，其主要用于快速替换升级当前使用软件版本，让在同一个OS上安装不同版本的软件或者开发语言的工作比之前容易多了。

平时使用的时候其实就已经使用了`moduler`功能了，只是有的时候会被忽略而已

```bash
[root@hostlocal ~]# dnf install php
Rocky Linux 8 - AppStream                                                                                                 2.0 MB/s | 8.8 MB     00:04  
Rocky Linux 8 - BaseOS                                                       
………………忽略部分输出信息………………
Enabling module streams:
 httpd                                                        2.4                                                                                  
 php                                                          7.2 
```

`Enabling module streams`启动模块流

1. 查询有哪些模块流

    ```bash
    [root@hostlocal ~]# dnf module list php
    Last metadata expiration check: 0:02:45 ago on Fri 22 Jul 2022 09:04:54 AM EDT.
    Rocky Linux 8 - AppStream
    Name                        Stream                         Profiles                                          Summary                                  
    php                         7.2 [d]                        common [d], devel, minimal                        PHP scripting language                   
    php                         7.3                            common [d], devel, minimal                        PHP scripting language                   
    php                         7.4                            common [d], devel, minimal                        PHP scripting language                   
    php                         8.0                            common [d], devel, minimal                        PHP scripting language                   

    Hint: [d]efault, [e]nabled, [x]disabled, [i]nstalled
    ```

    `Rocky Linux 8 - AppStream`表示一个软件库`repo`中包含的模块流，每一行代表一个模块流

    一个四行，分别是`Name`（名称），`Stream`（模块流），`Profiles`（配置），`Summary`（简介）

    其中`Profiles`列中的`[d]`标志着，在未指定配置时，将默认将使用此配置

    而`Stream`列中`[d]`标志着，在未指定模块流时，将默认使用该软件流

2. 安装指定模块流

    ```bash
    [root@hostlocal ~]# dnf module install -y php:7.4
    ```

    ```bash
    [root@hostlocal ~]# dnf module list php
    Last metadata expiration check: 0:13:18 ago on Fri 22 Jul 2022 09:04:54 AM EDT.
    Rocky Linux 8 - AppStream
    Name                       Stream                        Profiles                                             Summary                                 
    php                        7.2 [d]                       common [d], devel, minimal                           PHP scripting language                  
    php                        7.3                           common [d], devel, minimal                           PHP scripting language                  
    php                        7.4 [e]                       common [d] [i], devel, minimal                       PHP scripting language                  
    php                        8.0                           common [d], devel, minimal                           PHP scripting language                  

    Hint: [d]efault, [e]nabled, [x]disabled, [i]nstalled
    ```

    ```bash
    [root@hostlocal ~]# php -v
    PHP 7.4.19 (cli) (built: May  4 2021 11:06:37) ( NTS )
    Copyright (c) The PHP Group
    Zend Engine v3.4.0, Copyright (c) Zend Technologies
    ```

    如果只是想要启用指定模块流而暂时不想要安装软件

    ```bash
    [root@hostlocal ~]# dnf module enable php:7.4/common
    [root@hostlocal ~]# dnf install -y php
    ```

    后续可以直接进行安装不需要指定版本，因为默认指定了`7.4`版本

dnf同时支持升级和降级两种更换模块流的方法：

1. 升级模块流

    首先需要重置模块流，注意不用卸载先前安装的软件

    ```bash
    [root@hostlocal ~]# dnf module reset -y php
    ```

    直接安装更高版本的PHP即可，如果有冲突，那么dnf会自动将其升级未对应版本的模块流

    ```bash
    [root@hostlocal ~]# dnf module install -y php:8.0/common
    ```

    ```bash
    [root@hostlocal ~]# php -v
    PHP 8.0.13 (cli) (built: Nov 16 2021 18:07:21) ( NTS gcc x86_64 )
    Copyright (c) The PHP Group
    Zend Engine v4.0.13, Copyright (c) Zend Technologies
    ```

2. 降级模块

    与升级相同，先完成模块流的重置操作

    ```bash
    [root@hostlocal ~]# dnf module reset -y php
    ```

    ```bash
    [root@hostlocal ~]# dnf module install -y php:7.4/common
    ```

    ```bash
    [root@hostlocal ~]# php -v
    PHP 7.4.19 (cli) (built: May  4 2021 11:06:37) ( NTS )
    Copyright (c) The PHP Group // [!code hl]
    Zend Engine v3.4.0, Copyright (c) Zend Technologies // [!code hl]
    ```

## ded软件包

deb包是Debian，Ubuntu等Linux发行版的软件安装包，扩展名为.deb，是类似于rpm的软件包。

扩展名为`.deb`，适用于Debian系列。

### apt-get

apt-get命令来自于英文词组**Advanced Package Tool get**的缩写，其功能是用于管理服务软件。

apt-get命令主要应用于Debian、ubuntu等系统，能够像yum/dnf软件仓库一样自动下载、配置、安装、卸载服务软件，用户只要准确提出需求就好。

```bash
apt-get install [软件包]  # 安装一个新软件包
apt-get remove [软件包] # 卸载一个已安装的软件包（保留配置文档）
apt-get remove --purge [软件包] # 卸载一个已安装的软件包（删除配置文档）
apt-get autoremove p[软件包] # 删除包及其依赖的软件包
apt-get autoremove --purge [软件包] # 删除包及其依赖的软件包+配置文件，比上面的要删除的彻底一点
```

无论用户使用哪些手段配置APT软件源，只是修改了配置文件`/etc/apt/sources.list`，目的只是告知软件源镜像站点的地址。但那些所指向的镜像站点所具有的软件资源并不清楚，需要将这些资源列个清单，以便本地主机知晓可以申请哪些资源；

```bash
apt-get update
apt-get upgrade
```

### dpkg

dpkg命令来自于英文词组**Debian package**的缩写，其功能是用于管理软件安装包，在Debian系统中最常用的软件安装、管理、卸载的实用工具。

```bash
dpkg -i [软件包] # 安装软件包 // [!code --]
dpkg -r [软件包] # 删除软件包 // [!code ++]
dpkg -l [软件包] # 显示已安装软件包列表  // [!code error]
dpkg -L [软件包] # 显示于软件包关联的文件 // [!code warning]
dpkg -c [软件包] # 显示软件包内文件列表
```

### 两种区别

dpkg绕过apt-get包管理数据库直接对软件包进行操作

所以用dpkg安装过的软件包可以用apt-get可以再安装一遍，系统不知道之前已经安装过了，将会覆盖之前dpkg的安装。

- dpkg：用来安装.deb文件时，不会解决模块的依赖关系，且不会关心ubuntu的软件仓库内的软件，**可以用于安装本地的deb文件**。
- apt-get：会解决和安装模块的依赖问题，并会咨询软件仓库，但不会安装本地的deb文件，apt-get是建立在dpkg之上的软件管理工具。

## 源代码软件包

**通常以**`.tar.gz`，`.tar.bz2`格式的压缩包提供包含程序的原始代码文件。

## 其他

提供`install.sh`、`setup`、`*bin`、`*.pl`等安装文件。

绿色免安装版、提供已编译好的程序以及相关文件。
