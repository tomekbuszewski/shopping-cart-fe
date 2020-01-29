# A Shopping Cart

Simple JavaScript app built with React, Redux and Styled Components.


## Tech stack

I've created the entire architecture without using any bootstrap tools (eg. Create React App). I believe this
offers more insight into how I structure and work with my code.

Most significant libraries I've used:

- React, for UI rendering;
- Redux, for managing state across the app;
- Styled Components, for CSS-in-JS;
- React Router, for navigation between pages;


## About

This is a Single Page Application depicting a sample shopping list with possibility to add product(s) into the cart
and then proceed to a checkout. Data is provided in an external JSON file and loaded – to simulate fetching – via 
`setTimeout`. 

Since I've been given very little time, I had to take some shortcuts. For example, I didn't really implement any tests. 
I even installed `jest` and hoped to write them, but I realized I won't make it, if I want to implement the required
features.

Another thing is, styles are done very poorly and without any artistic direction. They are just "there", I simply
wanted to avoid using a premade UI kit.

Since this is a very small app, I didn't use any serious architectural patterns. For example, I haven't implemented
atomic design, which I am very fond of. The only really significant thing here is a mobile-first approach for styles. 
I also didn't use any aliases, so there is regular path traversal inside the code. I also refrained from using any 
normalisation or data-sensitive tools, like Immutable, of which I am normally a huge fan.

Also, as for Redux goes, I simplified a lot of processes. For example, after user adds something to the basket, 
backend should be notified and update the stock. Here, it is all handled within Redux' actions. So there is 
a side effect of certain actions that bleeds to another store. I know this is a bad practice, but like I've said,
given this amount of time and an actual lack of backend, this is a compromise I've chosen.
