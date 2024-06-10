# Introduction

- This project is created to show how a custom hook can be created to determine the screen size and detect the devices based on standard screen width sizes. 

## Technologies

-React : 18.3.1
-Node : 20.14.0

## Custom Hook 

- useScreenSize hook is created to determine the screen size with the use of window.innerWidth and window.innerHeight, and return which device we're on based on the window width. 
- It uses the window resize envent listener to listen to screen size change and fires the handleResize function that determines what screen size and which device the current screen size is at.

## Screen Size Component

- The ScreenSize.tsx component is created to show the current height, width and device type based on current screen size that we're getting from the custom hook.
- It's then used in the App.tsx file.