// To select an html element in js we write the code -
// document.querySelector()  <-- querySelector is a method available on document object
//            Here document means html document and we are attempting yo choose its elements with
//         the querySelector() method. And inside this method we pass selector names like we use
//       selector names in a CSS file. The selector name is passed as a string within single quote
//e.g - document.querySelector('.messageBox');  <-- If its a classname then selector is (.dot)
//e.g - document.querySelector('#messageBox');  <-- If its a Id then selector is (#hashtag)
//
//When we are selecting a html element itself then we do not use dot or hashtag for selection instead
//we just mention element itself
// e.g - document.querySelector(body);
//
// The DOM, or Document Object Model, is a programming interface for web documents. It represents the
// structure of a document as a tree of objects, where each object corresponds to a part of the document,
// such as elements, attributes, and text. The DOM provides a way for programs and scripts to interact
// with the content, structure, and style of a document dynamically. In the context of web development,
// the term "document" usually refers to an HTML or XML document
//
//DOM allows JS to access HTML elements and styles. Hence DOM is connection point between HTML document
//and JavaScript code. DOM is automatically created by browser as soon as HTML page/document loads.
//DOM manipulation involves modifying the structure, content, or style of a document using JavaScript.
//Developers can use JavaScript to dynamically update and change the elements and attributes within an
//HTML document, responding to user interactions or other events.
//
//In this DOM tree each html element is represented as a NODE/OBJECT and even for the texts present
//in html elements, nodes are created for them too
//
//DOM always start with document object at start of DOM Tree right at the very top and document
//is a special object that we have access to in JavaScript and this object serves as an entry point
// into the DOM. After the document object the first or root child element of document is HTML element
//that we we place at start of HTML document i.e <html>
//                                               <head>   </head>
//                                                </html>
//
// In short we can say that DOM is a complete Head to Toe representation of HTMl documents
//
// Even console.log(document.querySelector('.messageBox')) this line of code is referred to as most
// simple form of DOM manipulation
//
// When we have multiple dot(.) operators in a javascript code then its execution is done from left to right
//
// As we know for object to access its property we use dot operator
// console.log(document.querySelector('.messageBox').textContent) <-- here we access the textContent
// present in the document object by using the textContent property of the document object
//
// console.log(document.querySelector('.messageBox').value <-- the value property peeps into value inserted
// into input box of html object and accesses that value and this value will be in string form
//.value property is mainly used for from elements like input box,text areas,etc
//
//DOM methods and properties for DOM manipulation are not part of javascript or these methods are not
//defined by JS in anyways. JS at the end of day is just a dialect of ECMAscript specification and all
//DOM related stuffs are not present in specifications of ECMAscript
//Instead DOM methods and properties are part of WEB API's. Web apis are libraries that browsers
// implement which we can access via JavaScript code/script. We can access these libraries via JS
//bcoz these libraries themselves are implemented in JavaScript language
//
//There exists a official DOM specification which is the reason why DOM Manipulation is same in
// all browsers
//
//Besides DOM web api there are ton other web apis like timers,Fetch api,etc
//
//When we want our javascript code to respond to some event or user interaction we use EVENT LISTENER
//Event means anything like mouse click,mouse moving,key press,etc. Using event listener we can wait
//an event to occur and then react to that event
//
// There are many ways to capture events in js but the best event listener is a built-in function called
// addEventListener(event_name,event_response) and into this function we pass two parameters i.e
// event_name and event_response. The event_response can be any function,etc and it is called as
// EVENT HANDLER
//
//click is the event name for mouse click event
//
//If we are developing a web app then in its logic the first thing we need to do is set up handling code
//for null input or no input
//
//Whatever we define inside a click event handler it would always get executed from start on every new
//click
//
//document.querySelector('.number').value = Math.trunc(Math.random() * 20) + 1;
//OR    these both gives random number from 1 to 20
//document.querySelector('.number').value = Math.floor(Math.random() * 20) + 1;
//
//We can manipulate the whole css styling of the page via DOM manipulation
//to manipulate css style of the element we first access it via ".style" property
//e.g - document.querySelector(element_name/classname,etc).style.(css_style_property)
//css_style_property includes .background-color,.flex-direction,.height,etc but in JS such (-) syntax
//is not allowed for such multiple words css properties and for this we use camelCase syntax
//i.e .backgroundColor,.flexDirection,.height,etc
//
//Whenever we are manipulating css style we always specify it in string form even its just a number we
//specify it in string form by using quote marks('')
//If css value is related to some sizing then we mention its size along with its unit together in a string
//
// window.location.reload();  <-- this JS function is equal to pressing the reload button in CHROME
//
//To reset an input form field to empty we do -
//document.querySelector('.classname').value = ``;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//