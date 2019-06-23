<h1 align="center">Merger Documentation</h1>

## Install Using Git

If you haven't got [Git](https://git-scm.com) installed, please refer to [this page](install-git.md).

### Using git clone
```bash
cd /path/to/your/folder
git clone https://github.com/hifocus/merger.git

# optional
mv merger.html index.html
```

## Download Directly
### Using browser
- Download the whole code repository from [https://github.com/hifocus/merger/archive/master.zip](https://github.com/hifocus/merger/archive/master.zip)
- Download `merger.html` only: [https://github.com/hifocus/merger/raw/master/merger.html](https://github.com/hifocus/merger/raw/master/merger.html)

### Using GitHub Desktop
1. Download and install GitHub Desktop: [https://get.js.org/githubdesktop](https://get.js.org/githubdesktop)
2. - [Open the whole code repository from here](x-github-client://openRepo/https://github.com/hifocus/merger)
   - [Open merger.html only](x-github-client://openRepo/https://github.com/hifocus/merger?branch=master&filepath=merger.html)

### Using command line
```bash
cd /path/to/your/folder

# Download the whole master branch
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
Now, [merger](https://github.com/hifocus/merger) had been successfully installed (downloaded).