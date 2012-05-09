## Install MongoDB on Debian or Ubuntu Linux

### Synopsis

This tutorial outlines the basic installation process for installing [MongoDB](http://docs.mongodb.org/master/reference/glossary/#term-mongodb) on Ubuntu and Debian Linux systems. This tutorial uses `.deb` packages as the basis of the installation. 10gen publishes packages of the MongoDB releases as `.deb` packages for easy installation and management for users of Debian systems. While some of these distributions include their own MongoDB packages, the 10gen packages are generally more up to date.

This tutorial includes: an overview of the available packages, instructions for configuring the package manager, the process install packages from the 10gen repository, and preliminary MongoDB configuration and operation.

<pre>
**See**: also The documentation of following related processes and concepts.
Other installation tutorials:

* [Install MongoDB on RedHat Enterprise, CentOS, or Fedora Linux](http://docs.mongodb.org/master/tutorial/install-mongodb-on-redhat-centos-or-fedora-linux/)
* [Install MongoDB on Linux](http://docs.mongodb.org/master/tutorial/install-mongodb-on-linux/)
* [Install MongoDB on OS X](http://docs.mongodb.org/master/tutorial/install-mongodb-on-os-x/)
</pre>

### Package Options

The 10gen repository contains two packages:

* `mongodb-10gen`
  This package contains the latest stable release. Use this for production deployments.

* `mongodb18-10gen`
  This package contains the previous stable release.

**You cannot install these packages concurrently 同时 with each other or with the `mongodb` package that your release of Debian or Ubuntu may include.**

### Installing MongoDB

#### Configure Package Management System (APT)

The Debian/Ubuntu package management tool (i.e. `dpkg` and `apt`) ensure package consistency and authenticity by requring that distributors sign packages with GPG keys. Issue the following command to import the [10gen public GPG Key](http://docs.mongodb.org/_static/10gen-gpg-key.asc) as the root user (or with `sudo`:)

  ```shell
  apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10
  ```

Alternatively, you may use sudo to get root privileges:

  ```shell
  apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10
  ```

Edit the `/etc/apt/sources.list` file to include the 10gen repository.

If you use an Ubuntu version with “Upstart” (i.e. any since version 9.10 “Karmic,”) or are running with Upstart on Debian, use the following line:

  ```shell
  deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen
  ```

If you are using Debian or Ubuntu that uses SysV style init process, use the following line:

  ```shell
  deb http://downloads-distro.mongodb.org/repo/debian-sysvinit dist 10gen
  ```

Now issue the following command (as root or with `sudo`) to reload your repository:

  ```shell
  apt-get update
  ```

#### Install Packages

Issue the following command (as root or with sudo) to install the latest stable version of MongoDB:

  ```shell
  apt-get install mongodb-10gen
  # or on ubuntu 12.04 youcan
  sudo apt-cache show mongodb
  sudo apt-get install mongodb
  ```
When this command completes, you have successfully installed MongoDB! Continue for configuration and start-up suggestions.

### Configure MongoDB

These packages configure MongoDB using the `/etc/mongodb.conf` file in conjunction 结合 with the [control script](http://docs.mongodb.org/master/reference/glossary/#term-100). For Upstart-based systems, find the control script is at `/etc/init/mongodb.conf`. For all other systems you can find the control script at `/etc/init.d/mongodb`.

This MongoDB instance will store its data files in the `/var/lib/mongodb` and its log files in `/var/log/mongodb`, and run using the `mongodb` user account.

NOTICE:  If you change the user that runs the MongoDB process, you will need to modify the access control rights to the `/var/lib/mongodb` and `/var/log/mongodb` directories.

### Controlling MongoDB

#### Starting MongoDB

Upstart users can start the mongod process by issuing the following command:

  ```shell
  sudo service mongodb start
  #Usage: service < option > | --status-all | [ service_name [ command | --full-restart ] ]
  ```

All other users can issue the following command to start mongod:

  ```shell
  sudo /etc/init.d/mongodb start
  ```

You can verify that **mongod** has started successfully by checking the contents of the log file at `/var/log/mongodb/mongodb.log`.

### Stopping MongoDB

Upstart users can stop the **mongod** process by issuing the following command:

  ```shell
  sudo service mongodb stop
  ```

All other users can issue the following command to stop **mongod**:

  ```shell
  sudo /etc/init.d/mongodb stop
  ```

### Restarting MongoDB

Upstart users can restart the **mongod** process by issuing the following command:

  ```shell
  sudo service mongodb restart
  ```

All other users can issue the following command to restart mongod:

  ```shell
  sudo /etc/init.d/mongodb restart
  ```

### Controlling mongos

As of the current release, there are [no control](http://docs.mongodb.org/master/reference/glossary/#term-100) scripts for **mongos**. **mongos** is only used in sharding deployments and typically do not run on the same systems where mongod runs. You can use the `mongodb` script referenced above to derive 派生 your own **mongos** control script.

### Using MongoDB

Among 其中 the tools included with the MongoDB package, is the **mongo** shell. You can connect to your MongoDB instance by issuing the following command at the system prompt:

  ```shell
  mongo
  ```

This will connect to the database running on the localhost interface by default. At the **mongo** prompt, issue the following two commands to insert a record in the “test” [collection](http://docs.mongodb.org/master/reference/glossary/#term-collection) of the (default) “test” database.

  ```shell
  > db.test.save( { a: 1 } )
  > db.test.find()
  ```

<pre>
See also “**mongo**” and “[JavaScript Interface](http://docs.mongodb.org/master/reference/javascript/)“
</pre>
