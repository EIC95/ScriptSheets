# JavaScript User Input

## Introduction
JavaScript allows capturing user input through various methods, such as prompt dialogs, form elements, and event listeners. This enables interaction between the user and the web application.

## Using `prompt()`
The `prompt()` function displays a dialog box asking for user input.
```js
let name = prompt("Enter your name:");
console.log("Hello, " + name);
```
- The input is always returned as a string.
- If the user cancels, `null` is returned.

## Using `confirm()`
The `confirm()` function displays a confirmation dialog with OK and Cancel buttons.
```js
let result = confirm("Do you want to proceed?");
if (result) {
    console.log("User clicked OK");
} else {
    console.log("User clicked Cancel");
}
```
- Returns `true` if OK is clicked, otherwise `false`.


