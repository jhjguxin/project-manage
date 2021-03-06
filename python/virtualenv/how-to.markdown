## virtualenv 1.7.1.2

### Resource

* [virtualenv doc](http://pypi.python.org/pypi/virtualenv)
* [virtualenv搭建虚拟环境](http://www.cnblogs.com/kym/archive/2011/12/29/2306428.html)
* [VirtualEnvironments](http://code.google.com/p/modwsgi/wiki/VirtualEnvironments)
  > Support for Python virtual environments.


### Installation

You can install virtualenv with `pip install virtualenv`, or the latest development version with `pip install virtualenv==dev`.

You can also use `easy_install`, or if you have no Python package manager available at all, you can just grab the single file [virtualenv.py](https://raw.github.com/pypa/virtualenv/master/virtualenv.py) and run it with `python virtualenv.py`.

### What It Does

`virtualenv` is a tool to create isolated Python environments.

The basic problem being addressed is one of dependencies and versions, and indirectly permissions. Imagine you have an application that needs `version 1` of `LibFoo`, but another application requires `version 2`. How can you use both these applications? If you install everything into `/usr/lib/python2.7/site-packages` (or whatever your platform's standard location is), **it's easy to end up in a situation where you unintentionally 无意地 upgrade an application that shouldn't be upgraded**.

Or more generally, what if you want to install an application and leave it be? If an application works, any change in its libraries or the versions of those libraries can break the application.

Also, what if you can't install packages into the global `site-packages` directory? For instance, on a shared host.

In all these cases, `virtualenv` can help you. It creates an environment that has its own installation directories, that doesn't share libraries with other virtualenv environments (and optionally doesn't access the globally installed libraries either).

The basic usage is:

  ```shell
  $ python virtualenv.py ENV
  ```

If you install it you can also just do `virtualenv ENV`.

This creates `ENV/lib/pythonX.X/site-packages`, where any libraries you install will go. It also creates `ENV/bin/python`, which is a Python interpreter that uses this environment. Anytime you use that interpreter (including when a script has `#!/path/to/ENV/bin/python` in it) the libraries in that environment will be used.

It also installs either [Setuptools](http://peak.telecommunity.com/DevCenter/setuptools) or [distribute](http://pypi.python.org/pypi/distribute) into the environment. To use Distribute instead of setuptools, just call virtualenv like this:

  ```shell
  $ python virtualenv.py --distribute ENV
  ```

You can also set the environment variable `VIRTUALENV_USE_DISTRIBUTE`.

A new virtualenv also includes the [pip](http://pypi.python.org/pypi/pip) installer, so you can use `ENV/bin/pip` to install additional packages into the environment.

### Environment variables and configuration files

virtualenv can not only be configured by passing command line options such as `--distribute` but also by two other means:

  * Environment variables

    Each command line option is automatically used to look for environment variables with the name format `VIRTUALENV_<UPPER_NAME>`. That means the name of the command line options are capitalized and have dashes ('-') replaced with underscores ('_').

    For example, to automatically install Distribute instead of setuptools you can also set an environment variable:

      ```shell
      $ export VIRTUALENV_USE_DISTRIBUTE=true
      $ python virtualenv.py ENV
      ```

    It's the same as passing the option to virtualenv directly:

      ```shell
      $ python virtualenv.py --distribute ENV
      ```

    This also works for appending command line options, like --find-links. Just leave an empty space between the passsed values, e.g.:

      ```shell
      $ export VIRTUALENV_EXTRA_SEARCH_DIR="/path/to/dists /path/to/other/dists"
      $ virtualenv ENV
      ```

    is the same as calling:

      ```shell
      $ python virtualenv.py --extra-search-dir=/path/to/dists --extra-search-dir=/path/to/other/dists ENV
      ```
  * Config files

    virtualenv also looks for a standard ini config file. On Unix and Mac OS X that's `$HOME/.virtualenv/virtualenv.ini` and on Windows, it's `%HOME%\\virtualenv\\virtualenv.ini`.

    The names of the settings are derived from the long command line option, e.g. the option `--distribute` would look like this:

      ```shell
      [virtualenv]
      distribute = true
c

    Appending options like `--extra-search-dir` can be written on multiple lines:

      ```shell
      [virtualenv]
      extra-search-dir =
          /path/to/dists
          /path/to/other/dists
      ```shell

Please have a look at the output of `virtualenv --help` for a full list of supported options.

### activate script 激活这个虚拟环境

In a newly created virtualenv there will be a bin/activate shell script. For Windows systems, activation scripts are provided for CMD.exe and Powershell.

On Posix systems you can do:

  ```shell
  $ source py-blogserver/bin/activate
  $ pip freeze # check install package in this env
  $ which python
  /home/jhjguxin/blogserver/bin/python
  ```

This will change your $PATH to point to the virtualenv's bin/ directory. (You have to use source because it changes your shell environment in-place.) This is all it does; it's purely a convenience. If you directly run a script or the python interpreter from the virtualenv's bin/ directory (e.g. `path/to/env/bin/pip` or `/path/to/env/bin/python script.py`) there's no need for activation.

After activating an environment you can use the function `deactivate` to **undo** the changes to your `$PATH`.

The `activate` script will also modify your shell prompt to indicate which environment is currently active. You can disable this behavior, which can be useful if you have your own custom prompt that already displays the active environment name. To do so, set the `VIRTUAL_ENV_DISABLE_PROMPT` environment variable to any non-empty value before running the activate script.

### Running the tests

Virtualenv's test suite is small and not yet at all comprehensive, but we aim to grow it.

The easy way to run tests (handles test dependencies automatically):

  ```shell
  $ python setup.py test
  ```

If you want to run only a selection of the tests, you'll need to run them directly with nose instead. Create a virtualenv, and install required packages:

  ```shell
  $ pip install nose mock
  ```

Run nosetests:

  ```shell
  $ nosetests
  ```

Or select just a single test file to run:

  ```shell
  $ nosetests tests.test_virtualenv
  ```

