
Window Object
The window object represents an open window in a browser. It is browser’s object (not JavaScript’s)
& is automatically created by browser.

It is a global object with lots of properties & methods.

------------------------------------------------------------------------------------------------------------------


What is DOM?

When a web page is loaded, the browser creates a Document Object Model (DOM) of the page

-----------------------------------------------------------------------------------------------------------------------


1. Selection
document.getElementById('id')
Selects an element by its unique ID.
document.getElementsByClassName('class')
Selects a collection of elements by their class name.
document.getElementsByTagName('tag')
Selects a collection of elements by their tag name.
document.querySelector('selector')
Selects the first element that matches the CSS selector.
document.querySelectorAll('selector')
Selects all elements that match the CSS selector.

--------------------------------------------------------------------------------------------------------------------

2. Attributes
element.getAttribute('attr')
Gets the value of the specified attribute.
element.setAttribute('attr', 'value')
Sets the value of the specified attribute, or adds it if it doesn’t exist.
element.removeAttribute('attr')
Removes the specified attribute from the element.


----------------------------------------------------------------------------------------------------------------------


3. Properties



element.tagName : 
returns tag for element nodes
element.innerText 
 returns the text content of the element and all its children
element.textContent
Gets or sets the text content of an element.
element.innerHTML
Gets or sets the HTML content inside an element.
element.style
Provides access to the inline styles of an element. You can set specific CSS properties through element.style.property = 'value'.

-----------------------------------------------------------------------------------------------------------------------


4. Styles

Setting Inline Styles:

node.style

element.style.property = 'value'
Sets an inline style property on the element.
Class Manipulation:

Add Class:
element.classList.add('class')
Remove Class:
element.classList.remove('class')
Toggle Class:
element.classList.toggle('class')
Check if Class Exists:
element.classList.contains('class')

 -----------------------------------------------------------------------------------------------------------------


5. Inserting Elements

Append:

node.append( el ) //adds at the end of node (inside)
Insert Elements

node.prepend( el ) //adds at the start of node (inside)

let el = document.createElement(“div“)

node.before( el ) //adds before the node (outside)

node.after( el ) //adds after the node (outside)

---------------------------------------------------------------------------------------------------------------------

6. Deleting Elements
Remove Child:

parentElement.removeChild(childElement)
Removes childElement from parentElement.
Remove Itself:

element.remove()
Removes element from the DOM.