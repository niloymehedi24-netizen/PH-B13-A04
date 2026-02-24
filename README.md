Answer to the questions:

Answer 1:
getElementById= It selects an element using its id.
getElementsByClassName= It selects all classes with the same class names.
querySelector= It selects the first matching element only using CSS.
querySelectorAll= It selects all the matching elements using CSS.

Answer 2: To create and insert a new element into the DOM I can use "createElement",
"innerText", "appendChild", "add.ClassList", "innerText" etc.

Answer 3: Event Bubbling is a process in JavaScript through which the event bubbles up from child to parent; parent to grandparent; grandparent to document.

It works like; when we click an element, the event runs into the clicked element, then it runs into the parent, then goes to the grandparent and finally to the document.

Answer 4: Event delegation is a technique by which we add one event listener to a parent element instead of adding event listener to all the children.

Work process of event delegation: when a button clicked, the event bubbles up to the parent. Then the parent catches the event and checks which child was clicked.

Answer 5: The difference between preventDefault() and stopPropagation() methods is preventDefault() stops browser's default action where stopPropagation() stops the event from bubbling to the parent elements.
