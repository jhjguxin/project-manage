## Getting Started

* [introduction](#introduction)
* [System requirements](#system-requirements)
* [Download the Go tools](#download-the-go-tools)
* [install the Go tools](#install-the-go-tools)
  * FresBSD,Linux, and Mac OS X tarballs
  * Mac OS X package installer
  * windows
* [Test your installation](#test-your-installation)
* [What's next](#what's-next)
* [Community resources](#community-resources)

_________________________________________________

### Introduction

[Go](http://golang.org) is an open source project with a [BSD-style](http://en.wikipedia.org/wiki/BSD_licenses) license. There are two official Go compiler [toolchains](http://en.wikipedia.org/wiki/Toolchain): the `gc` Go compiler and the `gccgo` compiler that is part of the GNU C Compiler (GCC). 

 The `gc` compiler is the more mature and well-tested of the two. This page is about installing a binary distribution of the gc compiler. 

 For information about installing the gc compiler from source, see [Installing Go from source](http://golang.org/doc/install/source). For information about installing gccgo, see [Setting up and using gccgo](http://golang.org/doc/install/gccgo).

### System requirements

The `gc` compiler supports the following operating systems and architectures. Please ensure your system meets these requirements before proceeding. If your OS or architecture is not on the list, it's possible that gccgo might support your setup; see [Setting up and using gccgo](http://golang.org/doc/install/gccgo) for details.

<table>
  <thead>
    <tr>
      <th>Operating system</th>
      <th>Architectures</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>FreeBSD 7 or later</td>
      <td>amd64, 386</td>
      <td>Debian GNU/kFreeBSD not supported</td>
    </tr>
    <tr>
      <td>Linux 2.6.23 or later with glibc</td>
      <td>amd64, 386, arm</td>
      <td>CentOS/RHEL 5.x not supported; no binary distribution for ARM yet</td>
    </tr>
    <tr>
      <td>Mac OS X 10.6/10.7</td>
      <td>amd64, 386</td>
      <td>use the gcc† that comes with Xcode‡</td>
    </tr>
    <tr>
      <td>Windows 2000 or later</td>
      <td>amd64, 386</td>
      <td>use mingw gcc†; cygwin or msys is not needed</td>
    </tr>
  </tbody>
</table>

  †gcc is required only if you plan to use [cgo](http://golang.org/cmd/cgo).
  ‡You only need to install the command line tools for [Xcode](http://developer.apple.com/Xcode/). If you have already installed Xcode 4.3+, you can install it from the Components tab of the Downloads preferences panel.
  
### Download the Go tools

Visit the [Go project's downloads page](http://code.google.com/p/go/downloads) and select the binary distribution that matches your operating system and processor architecture.

Official binary distributions are available for the FreeBSD, Linux, Mac OS X (Snow Leopard/Lion), and Windows operating systems and the 32-bit (386) and 64-bit (amd64) x86 processor architectures.

If a binary distribution is not available for your OS/arch combination you may want to try [installing from source](http://golang.org/doc/install/source) or [installing gccgo instead of gc](http://golang.org/doc/install/gccgo).

### Install the Go tools

The Go binary distributions assume they will be installed in `/usr/local/go` (or `c:\Go under Windows`), but it is possible to install them in a different location. If you do this, you will need to set the GOROOT environment variable to that directory when using the Go tools. 

For example, if you installed Go to your home directory you should add the following commands to `$HOME/.profile`:

```shell
export GOROOT=$HOME/go
export PATH=$PATH:$GOROOT/bin
```

Windows users should read the section about [setting environment variables under Windows](http://golang.org/doc/install#windows_env).

### FreeBSD, Linux, and Mac OS X tarballs

If you are upgrading from an older version of Go you must first remove the existing version from `/usr/local/go`:

```shell
rm -r /usr/local/go
```

Extract [the archive](http://code.google.com/p/go/downloads/list?q=OpSys-FreeBSD+OR+OpSys-Linux+OR+OpSys-OSX+AND+Type-Archive) into `/usr/local`, creating a Go tree in `/usr/local/go`:

```shell
tar -C /usr/local -xzf go1.0.2.linux-amd64.tar.gz
```

(Typically these commands must be run as root or through `sudo`.) 

Add `/usr/local/go/bin` to the `PATH` environment variable. You can do this by adding this line to your `/etc/profile` (for a system-wide installation) or `$HOME/.profile`:

```shell
export PATH=$PATH:/usr/local/go/bin
```

### Ubuntu(add by francis)

type bellow command:

```shell
~$ sudo apt-cache search golang
golang - Go programming language compiler - metapackage
golang-dbg - Go programming language compiler - debug files
golang-doc - Go programming language compiler - documentation
golang-go - Go programming language compiler
golang-mode - Go programming language - mode for GNU Emacs
golang-src - Go programming language compiler - source files
sudo apt-get install golang
```

### Mac OS X package installer

Open the [package file](http://code.google.com/p/go/downloads/list?q=OpSys-Darwin+AND+Type-Installer) and follow the prompts to install the Go tools. The package installs the Go distribution to `/usr/local/go`. 

The package should put the `/usr/local/go/bin` directory in your `PATH` environment variable. You may need to restart any open Terminal sessions for the change to take effect.
 
### Windows

The Go project provides two installation options for Windows users (besides [installing from source](http://golang.org/doc/install/source)): a zip archive that requires you to set some environment variables and an experimental **MSI** installer that configures your installation automatically. 

### Zip archive

 Extract the [zip](http://code.google.com/p/go/downloads/list?q=OpSys-Windows+Type%3DArchive) file to the directory of your choice (we suggest `c:\Go`). 

If you chose a directory other than `c:\Go`, you must set the `GOROOT` environment variable to your chosen path. 

Add the bin subdirectory of your Go root (for example, `c:\Go\bin`) to to your `PATH` environment variable.

### MSI installer (experimental)

Open the MSI file and follow the prompts to install the Go tools. By default, the installer puts the Go distribution in `c:\Go`. 

The installer should put the `c:\Go\bin` directory in your `PATH` environment variable. You may need to restart any open command prompts for the change to take effect.

### Setting environment variables under Windows

Under Windows, you may set environment variables through the "Environment Variables" button on the "Advanced" tab of the "System" control panel. Some versions of Windows provide this control panel through the "Advanced System Settings" option inside the "System" control panel.

### Test your installation

Check that Go is installed correctly by building a simple program, as follows. 

Create a file named `hello.go` and put the following program in it:

```go
package main

import "fmt"

func main() {
    fmt.Printf("hello, world\n")
}
```

Then run it with the go tool:

```shell
$ go run hello.go
hello, world
```

if you see the "hello, world" message then your Go installation is working.

### What's next

Start by taking [A Tour of Go](http://code.google.com/p/go-tour/). 

For more detail about the process of building and testing Go programs read [How to Write Go Code](http://golang.org/doc/code.html). 

Build a web application by following the [Wiki Tutorial](http://golang.org/doc/articles/wiki/). 

Read [Effective Go](http://golang.org/doc/effective_go.html) to learn about writing idiomatic Go code. 

For the full story, consult Go's extensive [documentation](http://golang.org/doc/). 

Subscribe to the [golang-announce](http://groups.google.com/group/golang-announce) mailing list to be notified when a new stable version of Go is released.

### Community resources

For real-time help, there may be users or developers on #go-nuts on the [Freenode](http://freenode.net/) IRC server. 

The official mailing list for discussion of the Go language is [Go Nuts](http://groups.google.com/group/golang-nuts). 

Bugs should be reported using the [Go issue tracker](http://code.google.com/p/go/issues/list).
