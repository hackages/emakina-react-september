## How to use this repo

Each exercise will teach you about a core concept of React. To jump from one exercise to another, edit `src/index.js` and change the path of the import of the `<App />` component.

## 1. Our first component

The goal of this exercise is to teach you about React Components and how to create them.

JSX is just there to allow you to write React in a pretty way but behind the scene it really is just JavaScript.

For example, the following JSX code is a React component:

```JavaScript
const MyComponent = () => (
  <h1 className="title big">Hello, world!</h1>
)
```

## 2. Props

How do you pass data from one Component to another? How do you communicate between Components? 

There is a concept in React called Props. Props are the properties that you pass from one Component to another

## 3. Simple counter

This exercise will go over how to create a simple counter in React

```
hint: there is something called useState
```

## 4. Synchronized Counters

This exercise will have you mix Props and State to make sure you understand it all

## 5. Conditional Rendering

JSX is just Javascript, right? That means you can use any javascript expression you'd like inside of your JSX!

Here's a non-exaustive list of javascript expressions you can use to conditionally render component

```JavaScript
const MyComponent = () => (
  <div>
    {/** the <h1/> will only appear if condition is true **/}
    {condition && <h1>Hello, world!</h1>}
    {/** Ternary operator **/}
    {condition ? <ComponentA /> : <ComponentB />}
    {someMarkup || <FallBack />}
  </div>
)
```

## 6. Collection of objects

Once again, JSX is just Javascript! If you want to iterate over a list or filter elements based on a predicate you don't need to learn some complicated domain specific language, you can just use JavaScript!

```JavaScript
const MyComponent = () => (
  <div>
    {
      /** Returns an array of numbers from 0 to 50, let's filter out the odd numbers and return a <p> for each even number **/
      range(0, 50)
        .filter(x => x % 2)
        .map(number => <p>{number}</p>)
    }
  </div>
)
```

## 7. Effects

### 01

The first effect that we will implement is simple: whenever the user type somthing in the input field, the document.title should be updated with what the user has entered

### 02

Try to display the number of seconds the user has spent on the page using a useEffect hook!

## 8. Context

In this exercise we can see that the App Component has a state and a function to change that state. It passed those values down to the Family Component.

But the Family Component doesn't ned them, that Component just forward those props to the Person Component. 

Using React Context try to avoid passing down useless props!

## 9. useReducer

UseReducer is a hook that help us to manage complex state. It takes a reducer and the initial state, and returns an array containing the state and a dispatch function. 

