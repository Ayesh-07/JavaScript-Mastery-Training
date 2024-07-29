Here's a Markdown file structure for the provided content with stickers for better visualization:

```markdown
# Window Object 📜

The window object represents an open window in a browser. It is the browser’s object (not JavaScript’s) and is automatically created by the browser.

It is a global object with lots of properties & methods.

## What is DOM? 🌐

When a web page is loaded, the browser creates a Document Object Model (DOM) of the page.

## Selection 🔍

- **`document.getElementById('id')`**  
  Selects an element by its unique ID.

- **`document.getElementsByClassName('class')`**  
  Selects a collection of elements by their class name.

- **`document.getElementsByTagName('tag')`**  
  Selects a collection of elements by their tag name.

- **`document.querySelector('selector')`**  
  Selects the first element that matches the CSS selector.

- **`document.querySelectorAll('selector')`**  
  Selects all elements that match the CSS selector.

## Attributes 🏷️

- **`element.getAttribute('attr')`**  
  Gets the value of the specified attribute.

- **`element.setAttribute('attr', 'value')`**  
  Sets the value of the specified attribute, or adds it if it doesn’t exist.

- **`element.removeAttribute('attr')`**  
  Removes the specified attribute from the element.

## Properties 📊

- **`element.tagName`**  
  Returns the tag for element nodes.

- **`element.innerText`**  
  Returns the text content of the element and all its children.

- **`element.textContent`**  
  Gets or sets the text content of an element.

- **`element.innerHTML`**  
  Gets or sets the HTML content inside an element.

- **`element.style`**  
  Provides access to the inline styles of an element. You can set specific CSS properties through `element.style.property = 'value'`.

## Styles 🎨

### Setting Inline Styles:

- **`node.style`**  
  Sets an inline style property on the element.
  
  ```javascript
  element.style.property = 'value';
  ```

### Class Manipulation:

- **Add Class:**  
  ```javascript
  element.classList.add('class');
  ```

- **Remove Class:**  
  ```javascript
  element.classList.remove('class');
  ```

- **Toggle Class:**  
  ```javascript
  element.classList.toggle('class');
  ```

- **Check if Class Exists:**  
  ```javascript
  element.classList.contains('class');
  ```

## Inserting Elements ➕

- **Append:**  
  ```javascript
  node.append(el); // Adds at the end of node (inside)
  ```

- **Prepend:**  
  ```javascript
  node.prepend(el); // Adds at the start of node (inside)
  ```

- **Before:**  
  ```javascript
  node.before(el); // Adds before the node (outside)
  ```

- **After:**  
  ```javascript
  node.after(el); // Adds after the node (outside)
  ```

- **Create Element:**  
  ```javascript
  let el = document.createElement("div");
  ```

## Deleting Elements ❌

- **Remove Child:**  
  ```javascript
  parentElement.removeChild(childElement); // Removes childElement from parentElement.
  ```

- **Remove Itself:**  
  ```javascript
  element.remove(); // Removes element from the DOM.
  ```
```
