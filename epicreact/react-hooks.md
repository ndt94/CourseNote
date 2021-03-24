# React Hooks

## Use State

1.  `setState` make the component `rerender`
2.  `useState` allow you to pass a function instead of a value, and then it will only call that function to get the state value when the component is rendered the first time. This technique is call `lazy state initialization` and it's super useful when your 1st state is kinda `expensive computation`

## Use Effect

1. Run on every render and re-render
2. Shallow comparison
3. Custom hook to reuse logic between components

## React Hooks Flow

{% file src="../.gitbook/assets/hook-flow.pdf" caption="Hook Flow" %}

