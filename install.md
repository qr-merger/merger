<h1 align="center">merger 使用文档</h1>

## 使用 Git 安装

### 安装 Git
> 如果已经安装 Git，请跳过此步骤。

#### Centos
```bash
sudo yum install git
```

#### Ubuntu / Debian
```bash
sudo apt install git 
```

#### macOS
##### 使用 Git for Mac 安装程序
- 下载 Git for Mac 安装程序的最新版本：[https://sourceforge.net/projects/git-osx-installer/files/latest/download](https://sourceforge.net/projects/git-osx-installer/files/latest/download)。

- 跟随安装指引。

##### 使用 Homebrew 安装
- 你也可以使用 [Homebrew](https://brew.sh) 安装。
- 在终端（Terminal）内进行以下操作：
  ```bash
  # Install Homebrew
  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

  # Install Git
  brew install git
  ```
#### Windows
##### 使用 Chocolatey 安装
- 推荐使用 [Chocolatey](https://chocolatey.org) 安装。
- 安装环境要求：
  - Windows 7+ / Windows Server 2003+
  - PowerShell v2+
  - .NET Framework 4+（如果你没有安装 .NET 4.0，安装程序会尝试安装它）

- 以管理员权限运行 `cmd.exe`，然后进行以下操作：

  ```bash
  # Install Chocolatey
  # Installation speed varies depending on the Internet environment
  @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

  # Install Git
  choco install git
  ```

- 在安装过程中如果你遇到了任何问题，请参阅以下页面：
  - [https://chocolatey.org/install](https://chocolatey.org/install)
  - [https://chocolatey.org/faq](https://chocolatey.org/faq)
  - [https://chocolatey.org/docs](https://chocolatey.org/docs)

##### 使用 Git for Windows 安装程序
- 从 [https://git-scm.com/download/win](https://git-scm.com/download/win) 下载 Git for Windows 安装程序的最新版本。
- 跟随安装指引。

### 验证 Git 的安装

```bash
git --version
```

如果能正常返回结果，如 `git version 2.17.1`，则说明 Git 已经安装成功。如果失败，请检查以上步骤是否完成。

### 使用 git clone
```bash
cd /path/to/your/folder
git clone https://github.com/hifocus/merger.git

# optional
mv merger.html index.html
```

## 直接下载
### 使用浏览器
- 从此处下载完整代码仓库：[https://github.com/hifocus/merger/archive/master.zip](https://github.com/hifocus/merger/archive/master.zip)
- 仅下载 `merger.html`：[https://github.com/hifocus/merger/raw/master/merger.html](https://github.com/hifocus/merger/raw/master/merger.html)

### 使用 GitHub Desktop
1. 下载并安装 GitHub Desktop：[https://get.js.org/githubdesktop](https://get.js.org/githubdesktop)
2. - [从此处打开完整代码仓库](x-github-client://openRepo/https://github.com/hifocus/merger)
   - [仅打开 merger.html](x-github-client://openRepo/https://github.com/hifocus/merger?branch=master&filepath=merger.html)

### 使用命令行
```bash
cd /path/to/your/folder

# Download the whole repo
wget https://github.com/hifocus/merger/archive/master.zip
mv master.zip merger.zip && unzip merger.zip && cd merger-master && mv * ../ && cd ../ && rm -rf merger-master

# Download 'merger.html' only
# Use wget
wget https://raw.githubusercontent.com/hifocus/merger/master/merger.html

# alternative method
curl https://raw.githubusercontent.com/hifocus/merger/master/merger.html --output merger.html

# optional
mv merger.html index.html
```
-----------------------
此时，[merger](https://github.com/hifocus/merger) 已经被成功安装（下载）。