# JavaScript DOM Manipulation

## Introduction
The **Document Object Model (DOM)** represents the structure of an HTML document as a tree. JavaScript allows you to manipulate the DOM dynamically.

## Selecting Elements

### `getElementById`
```js
const element = document.getElementById("myElement");
console.log(element);
```

### `getElementsByClassName`
```js
const elements = document.getElementsByClassName("myClass");
console.log(elements[0]);
```

### `getElementsByTagName`
```js
const elements = document.getElementsByTagName("p");
console.log(elements[0]);
```

### `querySelector` and `querySelectorAll`
```js
const firstElement = document.querySelector(".myClass");
const allElements = document.querySelectorAll(".myClass");
console.log(firstElement);
console.log(allElements);
```

## Modifying Elements

### Changing Content
```js
document.getElementById("myElement").innerText = "New Text";
document.getElementById("myElement").innerHTML = "<strong>Bold Text</strong>";
```

### Changing Attributes
```js
document.getElementById("myImage").src = "newImage.jpg";
```

### Changing Styles
```js
document.getElementById("myElement").style.color = "red";
```

## Creating and Removing Elements

### Creating an Element
```js
const newElement = document.createElement("div");
newElement.innerText = "I am a new element";
document.body.appendChild(newElement);
```

### Removing an Element
```js
const element = document.getElementById("myElement");
element.remove();
```

## Event Handling

### Adding an Event Listener
```js
document.getElementById("myButton").addEventListener("click", () => {
    alert("Button clicked!");
});
```

### Removing an Event Listener
```js
const myFunction = () => alert("Button clicked!");
document.getElementById("myButton").addEventListener("click", myFunction);
document.getElementById("myButton").removeEventListener("click", myFunction);
```
