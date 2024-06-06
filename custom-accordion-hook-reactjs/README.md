# Custom Accordion with Custom Hook

This project is created to showcase how a custom accordion can be created paired with a custom hook.

## Hook

- Hook is created inside the hook folder with the name useAccordion
- The hook toggles the accordion with the help of a state and shows/hides the children wrapped inside the Accordion component in App.js file.

## Accordion Component

- The component takes in the title of the accordion and the children wrapped inside the Accordion
- The onClick event toggles the accordion with the help of useAccordion hook
- Based on the isOpen state value the - and + sign of the accordion as well as the accordion content is manipulates