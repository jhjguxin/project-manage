# Installing GitLabHQ on Ubuntu Server 11.10 #

> more doc refer to [gitlabhq_wiki_pages](https://github.com/jhjguxin/gitlabhq/wiki/_pages)

## Install Ubuntu Server ##
Install the Ubuntu Server software onto your physical system, or into a virtual system.
During installation it will prompt you to create an initial user account, make this your own personal account.  We'll setup dedicated accounts for running GitLabHQ in the steps that follow.
安装 `Ubuntu Server software` 到你的物理机，或者到一个虚拟系统。在安装过程中他将会提示你创建一个初始化用户帐号，使之成为属于你的个人帐号。我们设置专有的帐号来运行 `GitLabHQ` 在后续步骤中。

### Download the latest server updates ###
<pre>
sudo apt-get update
sudo apt-get dist-upgrade -y
sudo apt-get install dkms build-essential gcc linux-headers-$(uname -r) -y
</pre>

### Install VMware Tools ###
**If you're running Ubuntu in a virtual systems under VMware**, you'll want to install the VMware Tools for the best performance.  **If you're not running this system under VMware, skip this section and move onto the next.**
**如果你正运行 Ubuntu 在 VMware 的一个虚拟的系统中**，你将会希望安装 `VMware Tools` 来发出最好的性能。**如果你不是在 VMware 下运行这个系统，忽略这节移动到接下来的部分。**
Initiate the VMware Tools installation within your VMware Tools, then in the virtual system do the following:
<pre>
sudo mkdir -p /media/cdrom
sudo mount /dev/cdrom /media/cdrom
cp /media/cdrom/VM* /tmp
sudo umount /media/cdrom
cd /tmp
tar -xzvf VMware*.gz
cd vmware-tools-distrib/
sudo ./vmware-install.pl -d
sudo apt-get autoremove -y
sudo shutdown -r now
</pre>

Now log back into the system with your personal user account.
现在通过你的个人用户帐号返回到系统。

## Setup dedicated account 设置专有帐号##

### Create Dedicated `gitlabhq` User Account 创建专有的 `gitlabhq` 用户帐号###
Next we need to create a dedicated gitlabhq user account to run the application, set a password for this account and add it to the admin group so it can perform root actions.
接着我们需要创建一个专有的 `gitlabhq` 用户帐号来运行这个应用程序，为这个帐号设置一个密码并且添加它到管理员用户组使得它可以执行 `root` 动作。
<pre>
sudo useradd -s /bin/bash -m -G admin gitlabhq
sudo passwd gitlabhq
</pre>

Now login as the gitlabhq user we just created.  When prompted to accept the authenticity of the RSA key fingerprint type "yes"
现在登录为我们刚刚创建的 `gitlabhq` 用户。当提示同意 RSA key fingerprint 授权的时候输入 "yes"
<pre>
ssh gitlabhq@localhost
</pre>

### Install Supporting Packages 安装支撑的包###
Now we'll install the git version control system so we can clone repositories and setup the system.  We'll also install the postfix SMTP system so GitLabHQ can send emails to users.
现在我们会安装 `git` 版本控制系统使得我们可以克隆仓库并且设定相关系统设置。我们也会安装 `postfix` SMTP 系统使得 `GitLabHQ` 可以给用户发送邮件。
<pre>
sudo aptitude install git-core postfix -y
</pre>

Now configure Git with some global variables that will be used when gitlabhq performs a `git push` operation.  You can change the name and email address below if you wish:
现在给 Git 配置一些在执行 `git push` 操作会用到的全局变量。你可以更改 name 和 email 地址如果你喜欢：
<pre>
git config --global user.email "admin@local.host"
git config --global user.name "GitLabHQ Admin User"
</pre>

### Generate SSH Keys ###
The GitLabHQ user will use **SSH keys** for login and authentication with the git user we'll create later.  So let's generate our keys.  **Make sure to do the following**:
When prompted for the file in which to save the file, press Enter
When prompted for a passphrase, press Enter
When prompted to confirm the passphrase again, press Enter
<pre>
ssh-keygen -t rsa
</pre>

## Install GitLabHQ Pre-requisites ##
First let's clone the GitLabHQ installer scripts to help automate the installation
<pre>
cd ~
git clone https://github.com/gitlabhq/gitlabhq_install.git
</pre>

Now we'll run the scripts to install any additional packages.
**Run the command below and select "Y" to confirm you want to install the packages**.
<pre>
cd ~ 
gitlabhq_install/ubuntu_packages.sh
</pre>

Now we'll run the script to install the ruby language.
<pre>
cd ~ 
gitlabhq_install/ubuntu_ruby.sh
</pre>

Now we'll run the script to install the `gitolite` program.
**This creates a new user "git" on the system, and will store our repositories under this accounts home directory.**
这里创建一个新用户 “git” 在系统上，并且保存我们的仓库在这个帐号的 home 目录。
<pre>
cd ~ 
gitlabhq_install/ubuntu_gitolite.sh
</pre>
When you run this script it will stop at some point with a warning about the path, **just press the "Enter" key to continue.**
On the next screen is the gitolite configuration screen.  **Here we need to make one change that's very important.**
Find the line that reads:
<pre>
REPO_UMASK = 0077;
</pre>
If the install opened VIM, move over the first "7" character, press the "i" key on your keyboard to go into INSERT mode.  **Type a "0", then remove the "7" so it now reads:**
<pre>
REPO_UMASK = 0007;
</pre>
Press the Escape key once, then type the ":" to enter COMMAND mode.  Now type "wq" which will Write the changes to the file and Quit.

You now need to change the directory privileges on the /repositories directory so GitLabHQ can use them:
你需要更改在 `/repositories` 目录的目录权限使得 `GitLabHQ` 可以使用他们：
<pre>
It seems that this step is now taken care of in the <code>ubuntu_gitolite.sh</code> script.
</pre>
<pre>
sudo chmod -R g+rwX ~git/repositories/
sudo chown -R git:git ~git/repositories/
</pre>

**Next we need to logout of the system to allow environment settings to be set upon the next time we login.**
<pre>
logout
</pre>

## Install GitLabHQ ##
Log back into the system so the environment settings take place
<pre>
ssh gitlabhq@localhost
</pre>

Now we'll install GitLabHQ, again using one of the install scripts.  When prompted about installing additional packages, type "Y"
<pre>
cd ~ 
gitlabhq_install/ubuntu_gitlab.sh
</pre>

### Configure GitLabHQ ###
You can configure GitLabHQ by editing the `gitlab.yml` file.  One of the changes you'll want to make is to set your computer name that GitLabHQ is running on, if not localhost, so the instructions to users for connecting to repositories is correct.
<pre>
nano ~gitlabhq/gitlabhq/config/gitlab.yml
</pre>

**Change the host value to whatever your servers fully qualified domain name (FQDN) is.  So for example if I'm running GitLabHQ on a server named "gitlabhq.corp.com" I'd change the value:**
<pre>
git_host:
  system: gitolite
  admin_uri: git@localhost:gitolite-admin
  base_path: /home/git/repositories/
  host: gitlab
  git_user: git
  # port: 22
</pre>
to
<pre>
git_host:
  system: gitolite
  admin_uri: git@localhost:gitolite-admin
  base_path: /home/git/repositories/
  host: gitlabhq.corp.com
  git_user: git
  # port: 22
</pre>



### Running GitLabHQ ###
Now that we have GitLabHQ installed, let's start the application using WEBrick (even if you'll use something else later) so we can login and accept an RSA key, then confirm it works.
<pre>
cd ~gitlabhq/gitlabhq
bundle exec rails s -e production
</pre>

Now you can login to your server by pointing your web browser to http://<server_name>:3000/ and login using the default credentials

* Login Email:    admin@local.host
* Login Password: 5iveL!fe

#### Important! ####
You should now create a new **PROJECT**.  **It's important to note that when you add this project the *FIRST TIME* you need to type "yes" on the console where you started the application running.**
  
  
## Installing nginx ##
Login as the gitlabhq user and then execute the following commands:
<pre>
sudo aptitude install libpcre3-dev
sudo gem install passenger
sudo passenger-install-nginx-module
</pre>

You'll now be prompted with the "Welcome to the Phusion Passenger Nginx module installer" screen.
Press the "Enter" key to continue
Select option "1" and press the "Enter" key to continue
Accept the default installation directory by pressing the "Enter" key to continue


### Configure nginx ###
We need to edit the nginx configuration file so it points to the GitLabHQ public folder to run the application.  Open the configuration file in the editor:
<pre>
sudo nano /opt/nginx/conf/nginx.conf
</pre>

Now locate the section for the server configuration and make the following changes:

* Change the `server_name` key to your server's fully qualified domain name (FQDN), so in this example the server is gitlabhq.corp.com
* Change the `root` key to the location of the GitLabHQ __public__ folder, this is important!
* Add the key/value `passenger_enabled on;`

<pre>
    server {
        listen       80;
        server_name  gitlabhq.corp.com;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   /home/gitlabhq/gitlabhq/public;
            index  index.html index.htm;
            passenger_enabled on;
        }
</pre>

Also on the very top of the file, add the first line that specifies we'll run the server as the gitlabhq user account:
**同时在文件的顶层，添加第一行指定为我们服务器将会运行的 gitlabhq 用户帐号：**
<pre>
user gitlabhq staff;
</pre>

Now we want to add a system user named `nginx` to run the server:
<pre>
sudo adduser --system --no-create-home --disabled-login --disabled-password --group nginx
</pre>

Next we want to setup the server to auto-start when the system starts.  To do this we'll:

* Use an existing script to start nginx
* Move the script to the system start directory
* Set the correct permissions
* Start the server.

<pre>
sudo wget -O init-deb.sh http://library.linode.com/assets/660-init-deb.sh
sudo mv init-deb.sh /etc/init.d/nginx
sudo chmod +x /etc/init.d/nginx
sudo /usr/sbin/update-rc.d -f nginx defaults
sudo /etc/init.d/nginx start
</pre>


## nginx over SSL ##
So you want to run nginx over SSL huh?  Good choice!

### SSL Certificate ###
First you'll need an SSL certificate 凭证, either self-signed or from a certificate authority like Verisign.  You can find directions on using certificates [here](https://help.ubuntu.com/10.04/serverguide/C/certificates-and-security.html)

However, **to keep it simple and helpful we'll use a self-signed certificate for our server gitlabhq.corp.com**

Let's create a 2048-bit certificate.  When prompted for the passphrase, enter something at **least four characters** in length.
<pre>
cd ~
mkdir ssl
cd ssl
openssl genrsa -des3 -out server.key 2048
</pre>

Now let's get that passphrase out of the key file just to keep it secret.  **You'll be prompted for the passphrase you entered when creating the certificate.**
<pre>
openssl rsa -in server.key -out server.key.insecure
mv server.key server.key.secure
mv server.key.insecure server.key
openssl req -new -key server.key -out server.csr
</pre>
 
**Now let's sign that shiny new certificate for 5 years**
<pre>
openssl x509 -req -days 1825 -in server.csr -signkey server.key -out server.crt
</pre>
 
Finally we need to move the files to the correct locations on our Ubuntu server
<pre>
sudo cp server.crt /etc/ssl/certs
sudo cp server.key /etc/ssl/private
</pre>

### Configure nginx ###
Open the nginx configuration file, scroll to the bottom and locate the commented out section for the HTTPS.   You can uncomment this section and specify your certificate location and server name as well as the location.

<pre>
    # HTTPS server
    #
    user gitlabhq staff;
    server {
        listen       443;
        server_name  gitlabhq.corp.com;

        ssl                  on;
        ssl_certificate      /etc/ssl/certs/server.crt;
        ssl_certificate_key  /etc/ssl/private/server.key;

        ssl_session_timeout  5m;

        ssl_protocols  SSLv2 SSLv3 TLSv1;
        ssl_ciphers  HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers   on;

        location / {
            root   /home/gitlabhq/gitlabhq/public;
            index  index.html index.htm;
            passenger_enabled on;
        }
    }

}
</pre>

Now we need to restart nginx for the configuration changes to take place
<pre>
sudo /etc/init.d/nginx stop
sudo /etc/init.d/nginx start
</pre>

Enjoy!
