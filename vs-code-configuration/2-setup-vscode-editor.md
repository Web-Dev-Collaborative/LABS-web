

# Visual Studio Code Setup

## 

After this lesson, you will:

- Understand what a source code editor is.
- Know what Visual Studio Code is and why it is useful.
- Be able to install, configure, and use Visual Studio Code on your computer.

## Introduction

>Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity).

A source code editor is an application that facilitates writing code. It is a text editor, but is specially made for editing source code of computer programs. This will be your fundamental programming tool when writing and editing code.

VSCode is *only* for writing the code. You will write the code, save it to your file system, and then *run* the code with a different application, such as Node.js.

## Installation

VSCode's site will detect our [OS](https://en.wikipedia.org/wiki/Operating_system) automatically. Visit [https://code.visualstudio.com/](https://code.visualstudio.com/) and download it by clicking on the button to download the application.

![image](https://user-images.githubusercontent.com/23629340/33931225-a969a4e4-dfef-11e7-930d-e45bdac3fa30.png)

### Installing VSCode on Mac

1) Download the application from [https://code.visualstudio.com/](https://code.visualstudio.com/).
1) Extract the zip file you just downloaded in your "Desktop" folder.
1) Drag the new Visual Studio Code application into your "Applications" folder.


### Installing VSCode on Ubuntu

1) Use the comand line to download the file:
    ```
    $ sudo dpkg -i <file>.deb
    ```
2) Install Visual Studio Code's dependencies if they are missing:
    ```
    $ sudo apt-get -f install
    ```

## VSCode Configuration

### Getting Started

Now that VSCode is installed on your system, let's fire it up, configure it, and get acquainted with the editor.

When you launch VSCode for the first time, you will see the Welcome Guide. You can also open the Welcome page to get started with the basics of VS Code. Help > Welcome.

![image](https://user-images.githubusercontent.com/23629340/33936105-a2621280-dffe-11e7-8f65-2f996f75c8dc.png)

### Command Palette

If you press `Cmd⌘`+`Shift`+`P` or `Ctrl+Shift+P` while focused in an editor panel, the command palette will pop up.

![opencommandpalatte](https://user-images.githubusercontent.com/23629340/33935336-dec8c668-dffb-11e7-943e-63ed5e9c8e99.gif)

#### Default keyboard shortcuts

All of the commands are in the Command Palette with the associated key binding (if it exists). If you forget a keyboard shortcut, use the Command Palette to help you out.

![image](https://user-images.githubusercontent.com/23629340/33935366-f89f3e96-dffb-11e7-842c-b949b0e43412.png)

You can download the default keyboard shortcuts for your OS.

- [macOS](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
- [Linux](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf)

### Customization

#### Change your theme

You can change the theme by clicking on keyboard shortcut: `⌘K ⌘T` or `Ctrl+K Ctrl+T` and choose the one you prefer.

![image](https://user-images.githubusercontent.com/23629340/33936674-9aebb630-e000-11e7-9b6e-51ee91f03c94.png)

Additionally, you can install and change your File Icon themes.

![image](https://user-images.githubusercontent.com/23629340/33936724-d11e95c4-e000-11e7-8b0a-a34cec1f7a22.png)

**You can install more themes from the extension Marketplace.**

### Tune your settings

Open the user settings file `setting.json` (Keyboard Shortcut: `⌘,` or  `Ctrl+,`). 

![image](https://user-images.githubusercontent.com/23629340/33937007-fc839862-e001-11e7-99da-6bd8d05f111d.png)

For changing any configuration, we should add it at the file on the right.

:::info
VSCode Recommended Configuration

If you want to start coding like a true Ironhacker, set your TabSize configuration to [two spaces](https://www.youtube.com/watch?v=SsoOG6ZeyUI):
:::

## VSCode Packages

This is one of the interesting things about VSCode. Many of its core features are actually just packages implemented the same way you would implement any other functionality.

Packages that are bundled with VSCode are referred to as **Core packages**. Ones that aren't bundled with VSCode are referred to as **Community packages**. You can download and install packages to add functionalities to your text editor or even develop your own packages.

You can install and manage packages in the Settings view. There you will find your installed packages in the Packages tab.

![image](https://user-images.githubusercontent.com/23629340/33937224-e7eef094-e002-11e7-977a-3ef8da1c7403.png)


### VSCode Linters

Let's install some useful packages for practice.

**Linting is the process of running a program that analyses the code for potential errors.**

Linter programs automatically find basic mistakes and tell you where they are and how to fix them. It will make your code break less and prevent confusing problems.

*Lint* was the name originally given to a particular program with a similar functionality in C language source code. Now, the term is applied widely to tools that flag potential errors in any computer language.

In order to improve the functionality of our VSCode environment, let's install the most useful linter programs.

To install packages in VSCode, navigate to **Extensions** tab (`Cmd⌘`+`Shift`+`X` or `Ctrl+Shift+X`).

Search for **ESLint** and **HTMLHint** packages and click on `Install` button. 

![image](https://user-images.githubusercontent.com/23629340/33937076-4c3f0698-e002-11e7-8ee3-9ea6ac02a374.png)
![image](https://user-images.githubusercontent.com/23629340/33937088-5ca158b0-e002-11e7-85f2-3a0d5f95bd9f.png)

**You should reload VSCode after installation**

## Extra Recommended packages

1) **Prettier**: 
2) **Auto rename tag**
3) **Path intellisense**


## Summary

In this lesson we have seen that VSCode is a cool source code editor with great packages and it has a completely customizable toolkit. It's also open source, which means eventually you'll be able to jump into the code for the editor itself.

Keep in mind, we chose VSCode because it's easy to understand, and get up and running. Everyone has an opinion about which text editor is the best, but we all know what they say about opinions :). Stick with VSCode, and explore later on so we can focus on the code during the course.


## Extra Resources

- [VSCode User Guide](https://code.visualstudio.com/docs/editor/codebasics)
- [VSCode Blog](https://code.visualstudio.com/blogs/2017/11/15/connect)
