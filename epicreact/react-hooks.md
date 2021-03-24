# React Hooks

## Use State

1.  `setState` make the component `rerender`
2.  `useState` allow you to pass a function instead of a value, and then it will only call that function to get the state value when the component is rendered the first time. This technique is call `lazy state initialization` and it's super useful when your 1st state is kinda `expensive computation`

## Use Effect

1. Run on every render and re-render \(after the browser has render actual DOM nodes\)
2. Shallow comparison
3. Custom hook to reuse logic between components

## React Hooks Flow

![Hook Flow](../.gitbook/assets/hook-flow.png)

1. Updates are caused by a parent re-render, state change, or context change.
2. Lazy initializers are functions passed to useState and useReducer.
3. [https://codesandbox.io/s/react-hook-flow-jhj3f](https://codesandbox.io/s/react-hook-flow-jhj3f)

## Lifting state

1. `lift the state`which basically amounts to finding the lowest common parent shared between the two components and placing the state management there, and then passing the state and a mechanism for updating that state down into the components that need it.
2. [https://reactjs.org/docs/lifting-state-up.html](https://reactjs.org/docs/lifting-state-up.html)
3. [https://kentcdodds.com/blog/colocation](https://kentcdodds.com/blog/colocation)
4. [https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster](https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster)

## useRef and useEffect

1. Everytime you interact with the dom using `useRef`, that becomes side-effect, so you have to use `useEffect`
2. `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument \(`initialValue`\). The returned object will persist for the full lifetime of the component.
3. Mutating the `useRef` object doesn't trigger `rerender`

