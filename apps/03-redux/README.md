# Introduction to Redux

## Introduction to Reducers and Actions

The first exercise will teach you about Reducers and Actions in Redux.

A reducer is a function that takes 2 parameters

> The state
> The action that is dispatched

A reducer will always return a new state, it will never mutate the current one.

An action is an object composed of generally 2 properties

> A type, it can be just a string
> A payload, which is any value that you want to pass to your reducer, it can also be null

## First exercise

The first exercises is split in 2 parts:

First you'll have to implement the reducers of the app. We wrote some tests, and your implementation must pass all the tests to make sure that it is right

Then you'll have to implement the actions/action creators for the reducers. We also wrote tests to help you implement those.

To launch the tests for the reducers, you need to run :

> yarn test:reducers

Then for the actions:

> yarn test:actions

## Second exercise

In this exercise, you'll need to implement the reducer, the actions, and then create the Redux store.

Once it is created, you have to plug it in your React app using the package react-redux.

Then you will need to modify the components to use Redux.
