# General Assembly Instant Messenger

![GAIM](https://i.giphy.com/3o6ZsX6jbTFoyV5eSc.gif)

## Introduction
This afternoon we are going to continue our practice with Native DOM manipulation
by creating our very own instant messenger tool - well, a simulated one at least...

## Setup
You will all be broken up into pairs and we will be doing a structured pair 
programming for the entirety of the lab. What is pair programming you ask? Well 
we're working off of the old cliche "two heads is better than one", but seriously
it's a real thing. One of your serves as the **Driver** (person on the keyboard), 
and the other person will be their **Navigator** checking each line of code the 
driver is writing spotting spelling/logical errors and acting as a guide.

## What's in the box?!
glad you asked, we've prepared the following for you:
- `index.html` - boilerplate HTML file with some basic structure for your application
- `js/main.js` - boilerplate js file for all of your code
- `css/normalize` - normalize file to, uh well, normalize your css across browsers.
If you're curious for more info you can read more about it [here](https://necolas.github.io/normalize.css/)
- `css/main.css` - css file for all of your styles

## Part 1 - Planning & Design
We will start this lab off with a 20 minute planning session with our partners. 
Before moving forward you should consider the design of your application. Take 
this time to go over how you would like your chatroom app to look - we suggest 
something simple like a box containing the dialog, and a box underneath with 
an input box and a 'send' button, but feel free to get crazy with it. You and 
your partner should also take this time to strategize how you are going to break
out functionality based on the specs below.

## Part 2 - Programming functionality
Your app must do the following:
- Accept text in an input box that will then be added to a dialog box
- After a user sends an input, there should be a response from the user's simulated
chatroom friend Irwin (or some other random name) - to make it easier, this response
should be completely random and pulled from a global array of responses.

```
Me: Hey, I hear New Hampshire is quite beautiful in the summer. Is that true?
Irwin: No way man, Tom Brady is the GOAT - get that trash outta here!
Me: You're kind of weird
Irwin: nm what's up with you?
```

### Bonus
- Make it look good
- Make Irwin's responses delayed so it feels more realistic - _look up window.setTimeout()_



