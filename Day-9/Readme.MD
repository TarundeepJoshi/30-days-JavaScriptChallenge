## Day 9: DOM Manipulation

This lesson plan covers techniques for manipulating the Document Object Model (DOM) using JavaScript. The DOM represents the structure and content of a web page. By manipulating the DOM, you can dynamically change the content, style, and behavior of a web page after it has loaded.

**Tasks/Activities**

- **Activity 1: Selecting and Manipulating Elements**

  - **Task 1: Select by ID**

    - Use JavaScript's `document.getElementById()` method to select an element by its unique ID attribute.
    - Modify the text content displayed within the selected element.

  - **Task 2: Select by Class**
    - Use `document.getElementsByClassName()` to select elements that share a specific CSS class name.
    - Change the style of the selected elements using properties like `style.backgroundColor`.

- **Activity 2: Creating and Appending Elements**

  - **Task 3: Create and Append div**

    - Create a new HTML division element (`<div>`) with text content using JavaScript's `document.createElement()` method.
    - Append the newly created element to the `document.body` using the `appendChild()` method.

  - **Task 4: Create and Append List Item**
    - Create a new list item element (`<li>`) using `document.createElement('li')`.
    - Select an existing ordered list (`<ol>`) or unordered list (`<ul>`) using methods like `getElementById` or `getElementsByTagName`.
    - Add the list item to the selected list using the `appendChild()` method.

- **Activity 3: Removing Elements**

  - **Task 5: Remove Element**

    - Select an HTML element using methods like `getElementById` or `querySelector`.
    - Remove the selected element from the DOM using the `parentNode.removeChild()` method.

  - **Task 6: Remove Last Child**
    - Select a parent element using methods like `getElementById`.
    - Access the last child element using `parentNode.lastChild`.
    - Remove the last child element using `parentNode.removeChild()`.

- **Activity 4: Modifying Attributes and Classes**

  - **Task 7: Modify Attribute**

    - Select an HTML element, such as an image (`<img>`) tag, using `getElementById` or other methods.
    - Change the value of an attribute, for example, the `src` attribute that specifies the image source, using `element.setAttribute('attributeName', 'newValue')`.

  - **Task 8: Add/Remove Class**
    - Select an HTML element.
    - Use `element.classList.add('className')` to add a CSS class name to the element.
    - Use `element.classList.remove('className')` to remove a CSS class name from the element. This allows you to dynamically change the element's appearance based on styles defined in your CSS.

- **Activity 5: Event Handling**

  - **Task 9: Click Event Listener**

    - Select a button element using `getElementById`.
    - Add a click event listener using `buttonElement.addEventListener('click', functionName)`.
    - Define a function (the event handler) that will be executed when the button is clicked. Inside the function, you can manipulate the DOM to change content, styles, or perform other actions.

  - **Task 10: Mouseover Event Listener**
    - Select an element using `getElementById` or other methods.
    - Add a mouseover event listener using `element.addEventListener('mouseover', functionName)`.
    - Define a function (the event handler) that will be executed when the mouse hovers over the element. Inside the function, you can change the element's style, for example, its border color.

**Feature Request (Optional)**

Consider creating scripts or exercises to solidify understanding of these concepts:

1. **Text Content Manipulation Script:** Write a script that selects an element and changes its text content based on user input or other conditions.
2. **Element Creation Script:** Create a script that demonstrates creating new HTML elements and appending them to the DOM at different locations.
3. **Element Removal Script:** Write a script that allows users to click on elements to remove them from the page.
4. **Attribute Modification Script:** Create a script that modifies various attributes of HTML elements, such as image source (`src`), link URL (`href`), or form element properties.
5. **Event Handling Script:** Write a script that adds event listeners to various elements (buttons, links, images, etc.) to trigger different functionalities based on user interactions.

**Achievement**

- By the end of these activities, students will:

- Select and manipulate DOM elements using JavaScript.
- Create and append new elements to the DOM.
- Remove elements from the DOM.
- Modify attributes and classes of HTML elements.
- Add and handle events to make web pages interactive.
