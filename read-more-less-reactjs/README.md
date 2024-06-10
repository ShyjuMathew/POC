# Introduction

- This project is created to show read more/less functionality can be implemented using a custom hook.

## Technologies
-React : 18.3.1
-Node : 20.14.0

## Custom Hook

- useToggle.tsx file in the hooks folder contains the custom hook that is used to toggle read more/less, it uses useState for storing the toggle value.

## Read More/Less Component
- ReadMoreReadLess.tsx component is created to show the read more/less functionality, with a text that is displayed with 'Read More'/'Read Less' text at the end.
- Clicking on it toggles the expanded or sliced version of the text and changes the 'Read More'/'Read Less' text accordingly which is dynamically set using a ternary operator. 
- Slice method is used to show the short version of the text alonf with the maxLength that is being sent as props from the main App component where this function is being used. 