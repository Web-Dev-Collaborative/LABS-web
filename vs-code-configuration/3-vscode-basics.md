

# Visual Studio Code Basics

## 



- Open and Save a new file in VSCode.
- Change a file's syntax highlighting.
- Open a folder in VSCode.
- Create folders and files through the folder tree.
- Open a file temporarily and permanently while you are in a folder tree.
- Rename and Delete files using VSCode.
- Use some common VSCode keyboard shortcuts.

## Introduction

<img src="https://user-images.githubusercontent.com/23629340/33947650-3d0b1d56-e025-11e7-9bfb-563695f5f9c4.png" style="display: block; margin: 0 auto; width: 300px; margin-bottom: 50px;">

As a reminder **VSCode** is:
> [Visual Studio Code](https://code.visualstudio.com/) is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity)..

VSCode is great for beginners because of it's helpful tips and ease of navigation, but equally great for the experienced dev because you can actually modify the source code. 

In this lesson you will learn the basics of using VSCode, the text editor you will be using through the course.

You will understand how VSCode works with files, how to change the file language and extensions, how to manage with the folder tree and use the most used shortcuts in VSCode.

## Files

### Create a new File

There are different ways to create a new file in VSCode. You can do it by:

- Choosing `File > New file` on the menu bar:

![image](https://user-images.githubusercontent.com/23629340/33947750-89f16c2e-e025-11e7-9403-e4d77257c2a8.png)

- **MacOS:** Pressing `Cmd ⌘` + `N` to create a blank new file on the editor.
- **Linux:** Pressing `Control` + `N` to create a blank new file on the editor.

### Open a File

There are several ways to open a file in VSCode. You can do it by:

- Choosing `File > Open...` on the menu bar:

![image](https://user-images.githubusercontent.com/23629340/33947787-9ebc4d72-e025-11e7-9b87-f8fa5bd46bc8.png)

- **MacOS:** `Cmd ⌘` + `O` to choose a file from the standard dialog.
- **Linux:** `Control` + `O` to choose a file from the standard dialog.

### Edit and Save a File

Editing a file is pretty straightforward. You can click around and scroll with your mouse and type to change the content. There is no special editing mode or key commands.

You can save a file in different ways:

- Choosing `File > Save` from the menu bar:

![image](https://user-images.githubusercontent.com/23629340/33947841-be3f45f0-e025-11e7-9a72-25acd95437e0.png)

- **MacOS:** `Cmd ⌘` + `S` to save the file.
- **Linux:** `Control` + `S` to save the file.
- If you choose `File > Save As` or press `Shift`+ `Cmd ⌘` + `S` (for MacOS) or `Shift`+ `Control` + `S` (for Linux) then you can save the current content in your editor under a different file name.
- You can choose `File > Save All` or press `Alt` + `Cmd ⌘` + `S` (for MacOS) to save all the open files in VSCode.

#### The Unsaved icon (&bull;)

Sometimes, you will not remember if a file is saved with your latest modifications.

It is pretty easy to just press the save shortcut in case you are dealing with 1 file, but if you have been editing several files, it can be pretty tedious to save them all.

Even if you do, there is a chance you don't remember a file you where modifying 10 minutes ago. VSCode comes with a handy tool to distinguish what has been saved and what hasn't, the "Unsaved Icon":


---
|**Unsaved**|**Saved**|
|--|--|
|![image](https://user-images.githubusercontent.com/23629340/33947899-e079ca82-e025-11e7-9396-bb90eb68eb69.png)|![image](https://user-images.githubusercontent.com/23629340/33947908-e656789c-e025-11e7-8da5-94da986b18a4.png)|



## Working on a project

It is not very usual to work just with one file. Usually the projects you will work with will have several files and folders. You could open the full project you are working on with VSCode.

### Open directories

There are different ways to do that:

- Choose the menu item `File > Open` (for MacOS) or `File > Open Folder` (for Linux), and select a directory from the dialog.
- Drag the project folder over the VSCode icon on the Dock.
- You can open a project folder from the iTerm, Terminator or any other terminal emulator. Locate the project path and type `code .` to open VSCode with the full project.
![image](https://user-images.githubusercontent.com/23629340/33948411-11cc9758-e027-11e7-9527-42ff426682fe.png)

You can also add several directories to your current VSCode window, by choosing `File > Add Project Folder` from the menu bar.

## The Folder Tree

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_d802f2c82fbe91c18f521a25188dc91e.png)
*Ironhack web project folder made in [Sinatra](http://www.sinatrarb.com/)*

The folder tree is a view of the opened folder on VSCode. This **tree view** will allow you access to any file and folder under the root path of your project (or opened folder).

It is **very important** to get used to working with this view, because most of the time you will be working with projects that will contain a bunch of files since the very beginning.

### Open a file in the folder tree

If you have the folder tree opened you will be working with a lot of files at the same time. Sometimes, you will need to modify them, but other times you will open a file just to check something out. That could cause a mess like this:

![image](https://user-images.githubusercontent.com/23629340/33948466-3c36ea52-e027-11e7-9e92-ebbf9126b510.png)

Really easy to get lost in there, right? Let's see how to partially avoid this problem.

**Open file temporarily:** If you click a file in the folder tree **once**, it will open it on VSCode automatically. You can see what its content and scroll as much as you want.

Then, if you click on any other file, the actual window will change to the last file selected.

**Open file permanently:** If you **double click** on a file or you edit a file, it will open a new tab for that file. Next files will be opend in different tabs.

### Search a file on folder tree

![image](https://user-images.githubusercontent.com/23629340/34097111-256d7fd4-e3d8-11e7-9635-903b239f90d2.png)

Once you have a project opened in VSCode, you can easily find and open any file within the project.

If you press `Cmd⌘+P` (for MacOS) or `Control+P` (for Linux), the Fuzzy Finder will pop up. It will let you quickly search for any file in any directory inside your project by typing parts of the path.

### Basic operations on Folder tree

There are many basic operations you can do directly from the folder tree by clicking the right button of the mouse.

#### Folder operations

![image](https://user-images.githubusercontent.com/23629340/34097056-f809dba0-e3d7-11e7-9f0f-6232149f2df6.png)

#### File operations

![image](https://user-images.githubusercontent.com/23629340/34097088-13377eaa-e3d8-11e7-9588-c6f5ca3b47ad.png)

## VSCode shortcuts

:::warning
:warning: You don't have to memorize each of these shortcuts. **Please reference this as you continue working**. Make an effort to learn 2-3 new shortcuts a week for the entire course, and you will be an VSCode wizard.
:::

### General

| Command | Mac OS X | Windows | Linux | Description |
| ------- | -------- | ------- | ----- | ----------- |
| Preferences/Settings | `cmd-,` | `ctrl-,`  | `ctrl-,` | Opens the Preferences/Settings view |
| Command Palette | `shift-cmd-p` | `shift-ctrl-p`  | `ctrl-shift-p` | Opens & closes the command palette |
| Open File (Fuzzy) | `cmd-p` | `ctrl-p`<br/>or<br/>`ctrl-t`  | `ctrl-p` | Opens the Fuzzy Finder palette in which you can search and open files  |
| Grammar Selector | `cmd-k-m` | `ctrl-k-m`  | `ctrl-k-m` | Selects the language the file is in  |
| Toggle Terminal Tools | `shift-cmd-m` | `ctrl-shift-m`  | `ctrl-shift-m` | Opens up the Chrome Developer Tools/Console |

### Window management

| Command | Mac OS X | Windows | Linux | Description |
| ------- | -------- | ------- | ----- | ----------- |
| New File | `cmd-n` | `ctrl-n`  | `ctrl-n` | Opens an empty file in a new tab |
| New Window | `shift-cmd-n` | `ctrl-shift-n`  | `ctrl-shift-n` | Opens a new editor window |
| Open | `cmd-o` | `ctrl-o`  | `ctrl-o` | Shows the _Open File_ dialog, which lets you select a file to open in the editor |
| Open Folder | `cmd-shift-o` | `ctrl-shift-o`  | `ctrl-shift-o` | Shows the _Open Folder_ dialog, which lets you select a folder to add to the editor's Tree View |
| Save | `cmd-s` | `ctrl-s`  | `ctrl-s` | Saves the currently active file |
| Save As | `shift-cmd-s` | `ctrl-shift-s`  | `ctrl-shift-s` | Saves the currently active file under a different name  |
| Save All | `alt-cmd-s` |  |  | Saves all changed files |
| Close Tab | `cmd-w` |  `ctrl-w` | `ctrl-w` | Closes the currently active tab|
| Close Window | `shift-cmd-w` | `ctrl-shift-w`  | `ctrl-shift-w` | Closes the currently active editor window  |

### Editing

| Command | Mac OS X | Windows | Linux | Description |
| ------- | -------- | ------- | ----- | ----------- |
| Duplicate Lines | `shift-alt-down` / `shift-alt-up` | `ctrl-shift-alt-down` / `ctrl-shift-alt-up` | `ctrl-shift-alt-down` / `ctrl-shift-alt-up` | Duplicates the line of the current cursor position and creates a new line under it with the same contents |
| Delete Line | `cmd-shift-k` | `ctrl-shift-k` | `ctrl-shift-k` | Deletes the current line |
| Move Line Up | `alt-up` | `alt-up`  | `alt-up` | Moves the contents of the current cursor position up one line. If there is a line above with content, the current lines content will swap with the one above it. |
| Move Line Down | `alt-down` | `alt-down`  | `alt-down` | Moves the contents of the current cursor position down one line. If there is a line below with content, the line's content will swap with the one below it. |
| Find/Replace | `cmd-f` | `ctrl-f`  | `ctrl-f` | Opens up the Find/Replace panel |
| Find Next | `cmd-g` | `F3`  | `F3` | Toggles forward through the results of the current buffer in the file while the Find/Replace panel is active |
| Find Previous | `shift-cmd-g` | `shift-F3`  | `shift-F3` | Toggles backward through the results of the current buffer in the file while the Find/Replace panel is active|
| Find in Project | `shift-cmd-f` | `ctrl-shift-f`  | `ctrl-shift-f` | Opens the Find in Project Panel |
| Go To Line | `ctrl-g` | `ctrl-g`  | `ctrl-g` | Opens the Go To Line panel |
| Select Line | `cmd-l` | `ctrl-l`  | `ctrl-l` | Selects the entire line the cursor's current position is in |
| Toggle Comment | `cmd-/` | `ctrl-/`  | `ctrl-/` | Toggles the selected text into a comment of the current grammar |
| Column Selection | `ctrl-shift-up/down` |  | `shift-alt-up/down`  | Allows to select multiple rows, where the same edit will be applied |
| Select Same Words | `cmd-d` | `ctrl-d` | `ctrl-d` | If you select a word, and then hit the key combo for this command, VSCode will select the next same word for you. Then you can either type directly (which will replace the old words) or use left or right arrow to append things.

## Summary

In this lesson we have seen that VSCode is a cool source code editor with great packages and it has a completely customizable toolkit. It's also open source, which means eventually you'll be able to jump into the code for the editor itself.

Keep in mind, we chose VSCode because it's easy to understand, and get up and running. Everyone has an opinion about which text editor is the best, but we all know what they say about opinions :). 

Stick with VSCode during the course, and explore [all of the other options](https://en.wikipedia.org/wiki/List_of_text_editors) after the course is over so we can focus on the code.
