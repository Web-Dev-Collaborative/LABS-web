

# Node.js Intro & Installation
 Node.jsIntro
 


- Understand the high-level view of what a *runtime* is
- Explain what Node.js is, a bit of its history, and why you would use it
- Use npm, Node's package manager
- Install npm packages

## What is Node.js?

Node.js (sometimes called just _Node_ for short) is a JavaScript **runtime** developed by Ryan Dahl, at the time of Joyent. In short, Dahl created Node because of the [synchronous limitations of current web frameworks](https://www.infoq.com/interviews/node-ryan-dahl). Node has allowed us to run JavaScript anywhere, including web servers and robots.

In the past, the only runtime environment for JavaScript was the browser. Chrome, Safari, and Internet Explorer had their own JavaScript runtimes, but we *could not* run JavaScript on our computers.

Dahl changed this by extracting the open source `V8 runtime environment` from Chrome, and creating an implementation for servers.

## Installing Node

Installing Node is relatively easy. We can use `brew` or `apt-get` to install Node on Mac or Linux, but we're also going to want to keep Node up to date.

In addition, some projects may use a different version of Node than your own. This can become a hassle to deal with, so what we would suggest doing is installing [Node Version Manager(nvm)](https://github.com/creationix/nvm).

NVM allows you to pick which version of Node to use, install new versions, and more.

### Installing NVM

First, we have to install some prerequisites.

#### Mac

In the terminal:

```
$ xcode-select --install
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
$ nvm install --lts
$ nvm use --lts
```

#### Ubuntu

In the terminal:

```
$ apt-get update
$ apt-get install build-essential libssl-dev
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
$ nvm install --lts
$ nvm use --lts
```

And to test to make sure the installation is complete:

```
$ node --version
8.9.3
```

Once node is installed, you will have to install some additional packages that we will use in the bootcamp:

```
$ npm install --global eslint eslint-config-airbnb-base@latest htmlhint
```

## Extra Resources

- [NPM Packages](https://www.npmjs.com/)
