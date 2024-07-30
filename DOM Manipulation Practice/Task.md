# DOM Manipulation Exercise

## 1. Setup
Create an HTML file with the following structure:

## 2. Selection
In your JavaScript file (`script.js`), perform the following tasks:
- Select the `<h1>` element by its ID and change its text content to “DOM Manipulation Example”.
- Select all elements with the class name `item` and change their text color to blue.

## 3. Attributes
In `script.js`:
- Add a custom data attribute `data-info` with the value “Important” to the `<h1>` element.
- Retrieve and log the value of the `data-info` attribute to the console.
- Remove the `data-info` attribute from the `<h1>` element.

## 4. Properties
In `script.js`:
- Change the inner HTML of the `<h1>` element to include bold text: `<strong>DOM Manipulation Example</strong>`.
- Set the text content of the last paragraph with class `item` to “Last Item”.

## 5. Styles
In `script.js`:
- Add a class `highlight` to the first `<p>` element with class `item`.
- After 3 seconds, remove the `highlight` class from the first `<p>` element with class `item`. You can use a `setTimeout` function for this.

## 6. Inserting Elements
In `script.js`:
- Create a new paragraph element with the text “Newly Added Item” and append it to the end of the `<div>` with ID `container`.
- Create another paragraph element and insert it before the button with ID `addItemBtn`.

## 7. Deleting Elements
In `script.js`:
- Directly select and remove the last paragraph element with class `item` from the DOM.
- Remove the newly added paragraph element that you appended in the previous step.

## 8. Bonus Task: Dynamic Content
In `script.js`:
- Create a new paragraph element with a unique ID and append it to the `<div>` with ID `container`. The content of the new `<p>` element should be “Dynamic Item X” where X is a number. You can manually set the number for this task.

