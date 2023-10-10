# keycode

Hosting Link: https://trishadas13.github.io/keycode/
<hr>

<h2>HTML code explanation: </h2>

There's an [h1] element containing a heading, which reads "Choose your Key to know the Keycode." Beneath it, there's an [audio] element with a source attribute linking to an audio file. This element is intended to play a mechanical keyboard sound. Finally, there's a [script] element that includes an external JavaScript file called "script.js," indicating that this script will likely control the behavior of the web page.

<hr>

<h2>CSS code explanation: </h2>

The styles for the body element define the layout of the webpage. The body element is set to occupy the entire viewport width and height, and it uses flexbox to center its child elements both horizontally and vertically. The child elements are displayed in a column layout with a specified gap between them.

The h1 element is styled to have a certain font family, opacity, padding, and a box shadow to create a visually appealing heading. It's centered within its container with rounded corners.

A CSS class named .key is defined for key elements. These elements are styled as block-level elements with a particular font size, font family, opacity, padding, font weight, text alignment, border-radius, and a box shadow. This class is used to style multiple key elements on the webpage.

Additionally, the last key element with the .key:last-child selector receives specific styling, including an increased font size and a defined width.

<hr>

<h2>JavaScript code explanation: </h2>

1.	It selects the body element and an audio element on the web page and stores them in variables called body and myAudio, respectively.
2.	It adds an event listener to the document's body, specifically listening for the "keydown" event.
3.	When a key is pressed, the event listener is triggered, and it captures two pieces of information:
    •	keycodes: The key code of the pressed key, obtained from the e.keyCode property.
    •	keys: The actual character or key name pressed, obtained from the e.key property.
4.	Inside the event listener, it dynamically updates the body element's innerHTML to display the key pressed and its corresponding key code in paragraphs. This effectively replaces the content of the body element with this new information.
5.	It plays an audio element (myAudio) when a key is pressed. However, the code assumes that the myAudio element has been properly configured with an audio source and can be played when needed.

<hr>

<h2>Summary: </h2>

In summary, this CSS code collectively creates a visually appealing and centered webpage layout with styled heading and key elements. The keys have a semi-transparent appearance, and the last key is larger and green with a shadow. These styles can be applied to various elements to create a cohesive and attractive design for a webpage.

This code listens for keydown events on the document's body, captures information about the pressed key and key code, updates the content of the body element to display this information, and plays an audio when a key is pressed. It can be used to create a simple interactive keyboard-based experience on a web page.

<hr>

<h2>UI: </h2>

[keyCode.webm](https://github.com/trishaDas13/keycode/assets/126088849/17d480f8-f3e4-4f56-b779-76f3ed1bbb46)
