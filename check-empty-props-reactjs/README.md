# Introduction 

- This project is created to showcase how a custom hook can be used to check if a prop sent to a component is empty, the purpose is to return false if the prop is empty to avoid rendering the component unnecessarily.

## Technologies
-React : 18.3.1
-Node : 20.14.0

## Custom Hook

- CheckDataIsEmpty.tsx file inside the hooks folder contains the custom hook that determines whether the prop sent to a component is empty or not.
- The hook returns false if a prop has no truthy value in any of it's keys, it even checks the nested objects. If even one of the keys has a truthy value the hook returns true.

## Example Component 

- ExampleComponent.tsx is created to test and display if the prop that is being send is empty or not.