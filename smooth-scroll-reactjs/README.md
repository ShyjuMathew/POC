# Introduction

- This project is created to showcase how smooth scroll functionality can be implemented on click navigation on current page. 

## Technologies

-React : 18.3.1
-Node : 20.14.0

## Custom Hook

- The useSmoothScroll hook is created to scroll to the id of the element whose respective button is clicked on. 
- It uses getElementById to grab the element then scrollIntoView function to scroll to that element.
For smooth transition behavior smooth is passed in the parameter of the scrollIntoView function.

## Smooth Scroll Element

- The component has a few buttons where onClick event calls the handleScroll function with a parameter of the id of the target element to scroll to.
- Some div tags are set with 100vh height so that scrolling effect is observable.
- Each div element is assigned a unique id which is then passed in the handleScroll function to scroll to that div element with the use of the custom hook.