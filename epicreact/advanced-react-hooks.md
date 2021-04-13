# Advanced React Hooks

## useReducer

1. [https://levelup.gitconnected.com/usetypescript-a-complete-guide-to-react-hooks-and-typescript-db1858d1fb9c](https://levelup.gitconnected.com/usetypescript-a-complete-guide-to-react-hooks-and-typescript-db1858d1fb9c)
2. [https://kentcdodds.com/blog/should-i-usestate-or-usereducer](https://kentcdodds.com/blog/should-i-usestate-or-usereducer)
3. [https://kentcdodds.com/blog/how-to-implement-usestate-with-usereducer](https://kentcdodds.com/blog/how-to-implement-usestate-with-usereducer)
4. `useReducer` has many styles, it can take a single value, a function or an object, switch case like traditional redux, and `lazy initializer` like `useState` when dealing with `expensive computation` too. In FB source code, `useReducer` is made of `useState` 
5. React guarantees that `dispatch` function identity is stable and won’t change on re-renders. This is why it’s safe to omit from the `useEffect` or `useCallback` dependency list.
6. `useReducer` also lets you optimize performance for components that trigger deep updates because [you can pass `dispatch` down instead of callbacks](https://reactjs.org/docs/hooks-faq.html#how-to-avoid-passing-callbacks-down).

## useCallback

1. [https://kentcdodds.com/blog/usememo-and-usecallback](https://kentcdodds.com/blog/usememo-and-usecallback)
2. [https://reactjs.org/docs/hooks-reference.html\#usecallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
3. [https://epicreact.dev/memoization-and-react](https://epicreact.dev/memoization-and-react)
4. [https://whatthefork.is/closure](https://whatthefork.is/closure)
5. `useCallback` can extract logic into custom hook



## useContext

1. [https://reactjs.org/docs/context.html](https://reactjs.org/docs/context.html)
2. [https://reactjs.org/docs/composition-vs-inheritance.html](https://reactjs.org/docs/composition-vs-inheritance.html)
3. `Context` also has the unique ability to be scoped to a specific section of the React component tree. A common mistake of context \(and generally any "application" state\) is to make it globally available anywhere in your application when it's actually only needed to be available in a part of the app \(like a single page\). Keeping a context value scoped to the area that needs it most has improved performance and maintainability characteristics.

