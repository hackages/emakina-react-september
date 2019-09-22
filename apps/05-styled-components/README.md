# Styled-components

## How to use this repo

Each exercise will teach you about a concept of Styled Components in React. To jump from one exercise to another, edit `src/index.js` and change the path of the import of the `<App />` component.

## Resources

https://www.styled-components.com/docs

##

### 1. Basics

The goal of this exercise to learn how to create Styled Components.

If you take a look at the App Component you can see that it renders a `section` tag and this tag renders a `h1`

##### First version

Create a StyledSection and a StyledTitle and use them in the App.js

##### Second version

Try to replicate the same app with only one Styled Component. You can target children from a Style Component to style them

### 2. Props

Since Styled Components are in fact React Components, you can modify the style based on props that you pass down.

### 3. Extend Style

In this exercise you can see that you have 3 inputs. All of the base input have the same style, and then some specific style is applied via classNames

The goal here is to create a "base" StyledInput, and then to create different Styled Components that extends the base style

### 4. Animations

Let's try to create a small loading animation using Styled Components.
We gave you the same animation using css, try to recreate it using Styled Components, there are comments in the file!

### 5. Themes

Who doesn't love when there is a dark theme available for the website that they are visiting?

Try to play with the Themes feature, we already did some of the react logic to toggle the theme, try to use it in the app

`hint: check the ThemeProvider in the Styled Components documentation`

### 6. Responsive

Styled Components also provides you a way to handle media queries. Check the documentation about them.

In this exercise the color changes depending on the width of the screen, try to replicate that feature using Styled Components!
