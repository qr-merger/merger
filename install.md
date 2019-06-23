<h1 align="center">merger 使用文档</h1>

## 使用 Git 安装

如果你还没有安装 [Git](https://git-scm.com)，请参考[这个页面](install-git.md)。

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