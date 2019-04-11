<h1 align="center">Merger Documents</h1>

## Install Using Git

### Install Git
> If you have got Git installed, please ignore this step.

#### Centos
```bash
sudo yum install git
```

#### Ubuntu / Debian
```bash
sudo apt install git 
```

#### macOS
##### Use Git for Mac Installer 
- Download the latest version of Git for Mac:[https://sourceforge.net/projects/git-osx-installer/files/latest/download](https://sourceforge.net/projects/git-osx-installer/files/latest/download)。

- Follow the installation guide.

##### Install Using Homebrew
- You may also use [Homebrew](https://brew.sh) to install.
- Do the following processes in Terminal:
  ```bash
  # Install Homebrew
  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

  # Install Git
  brew install git
  ```
#### Windows
##### Install Using Chocolatey
- Recommend using [Chocolatey](https://chocolatey.org) to install Git.
- Installation requires:
  - Windows 7+ / Windows Server 2003+
  - PowerShell v2+
  - .NET Framework 4+ (the installation will attempt to install .NET 4.0 if you do not have it installed)

- Run `cmd.exe` as Administrator, and run the following processes:

  ```bash
  # Install Chocolatey
  # Installation speed varies depending on the Internet environment
  @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

  # Install Git
  choco install git
  ```

- If you met any problems during the installation process, please refer to the following pages:
  - [https://chocolatey.org/install](https://chocolatey.org/install)
  - [https://chocolatey.org/faq](https://chocolatey.org/faq)
  - [https://chocolatey.org/docs](https://chocolatey.org/docs)

##### Using Git for Windows Installer
- Download the latest version of Git for Windows installer from: [https://git-scm.com/download/win](https://git-scm.com/download/win).
- Follow the installation guide.

### Verify the Installation of Git

```bash
git --version
```

If git returns outputs normally, such as `git version 2.17.1`, the installation of Git had been successful. If failed, please check if the steps above were completed.

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
   - [Open only merger.html](x-github-client://openRepo/https://github.com/hifocus/merger?branch=master&filepath=merger.html)

### Using command line
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
Now, [merger](https://github.com/hifocus/merger) had been successfully installed (downloaded).