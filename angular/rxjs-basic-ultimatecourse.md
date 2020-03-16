---
description: Note about RxJS Basic
---

# RxJS Basic\(UltimateCourse\)

## Section 1. Getting started with RxJS

### Lesson 1. The missing introduction to RxJS

**ReactiveX is a combination of the best ideas from the Observer pattern, the Iterator pattern, and functional programming**

### Lesson 2. Configuring your project to use RxJS

```text
npm i rxjs
```

### Lesson 3. Create your first observable

\[[https://stackblitz.com/edit/create-your-first-observable](https://stackblitz.com/edit/create-your-first-observable)\]

`Note`: 

1. `Observer` is either a object with 3 methods : `next`, `error`, `complete`  or 3 callback functions
2. `Observable` is lazy,  they only emit value if there is a `subscriber` aka `Observer` subscribed to it

### Lesson 4. Understanding observers, partial observers, and subscribers

`Note`:

1. When not using a object, you can supply 3 function in order `next` , `error`, `complete` . If you don't want any of those 3, just use `null`
2.  The `Observer` doesn't need to have all 3 methods, but required atleast 1

### Lesson 5. Deliver values asynchronously with observables

\[[https://stackblitz.com/edit/deliver-values-asynchronously-with-observables](https://stackblitz.com/edit/deliver-values-asynchronously-with-observables)\]

### Lesson 6. Manage observable subscriptions with unsubscribe

\[[https://stackblitz.com/edit/manage-observable-subscriptions-with-unsubscribe](https://stackblitz.com/edit/manage-observable-subscriptions-with-unsubscribe)\]

`Note`:

1.  When you subscribe to an `Observable` , a `Subscription` object is returned, and it has a `unsubscribe` method
2.  Calling unsubscribe will not fire your complete callback, but the returned function will be invoked cleaning up any resources that were created by the subscription

### Lesson 7. Introduction recap and what’s next

1.  `Observables` are pushed based
2. `Observables` are cold \(by default\) which means they only start emitting values when there is a `Subscriber`
3.  `Observables` can emit mutiple values
4. `Observables` can deliver values both synchronously and asynchronously
5. `Observables` can be cancelled

## Section 2. Creation Operators

### Lesson 1. Introduction to creation operators

Create `Observable` from almost any source using creation operators such as `of`, `from`, `fromEvent`, `interval`

### Lesson 2. Create observables from DOM events using fromEvent

\[[https://stackblitz.com/edit/create-observables-from-dom-events-using-fromevent](https://stackblitz.com/edit/create-observables-from-dom-events-using-fromevent)\]

### Lesson 3. Create observables from static values using of

\[[https://stackblitz.com/edit/create-observables-from-static-values-using-of](https://stackblitz.com/edit/create-observables-from-static-values-using-of)\]

### Lesson 4. Turn arrays, iterators, and promises into observables using from

`Note`: `from` depends on the type of value, `from` accept `Observable`, `Promise`, `Array`, or `Iterable` \(like string\).

\[[https://stackblitz.com/edit/turn-arrays-iterators-and-promises-into-observables-using-from](https://stackblitz.com/edit/turn-arrays-iterators-and-promises-into-observables-using-from)\]

### Lesson 5. Emit items based on a duration with interval and timer

\[[https://stackblitz.com/edit/emit-items-based-on-a-duration-with-interval-and-timer](https://stackblitz.com/edit/emit-items-based-on-a-duration-with-interval-and-timer)\]

### Lesson 6. Creation operators recap and what’s next

`Note`: `Pipeable` Operators can:

1. Combine streams
2. Filter streams
3. Transform streams
4. + more

## Section 3. Getting Started with Operators

### Lesson 1. Introduction to operators

`Recap`:

1. `Operators` are the power behind RxJS, letting you more easily compose complex asynchronus code
2. `Operators` can be applied by including them into `pipe` method
3. `Operators` returns a new `Observable` without modifying the input `Observable`
4.  A core set of operators can solve the majority of use cases, while others can be picked up as the situation arise

### Lesson 2. Introduction to marble diagrams

`Note`:

1. Input diagrams
2. Operator
3. Output diagrams

We can even use text description of these diagrams to write unit test

### Lesson 3. Transform streams using map, pluck, and mapTo

\[[https://stackblitz.com/edit/transform-streams-using-map-pluck-and-mapto](https://stackblitz.com/edit/transform-streams-using-map-pluck-and-mapto)\]

`Note`:

1. `map` is used to extract 1 or more properties on an object
2. `pluck` is used to extract a property\(even nested property\) on an object
3. `mapTo` is use to emit a given constant value whenever the source `Observable` emits a value

### Lesson 4.  Ignore unneeded values with filter

\[[https://stackblitz.com/edit/ignore-unneeded-values-with-filter](https://stackblitz.com/edit/ignore-unneeded-values-with-filter)\]

### Lesson 5. Create a scroll progress bar with fromEvent and map

\[[https://stackblitz.com/edit/lab-1-create-a-scroll-progress-bar-with-fromevent-and-map](https://stackblitz.com/edit/lab-1-create-a-scroll-progress-bar-with-fromevent-and-map)\]

### Lesson 6. Accumulate data over time using reduce

\[[https://stackblitz.com/edit/accumulate-data-over-time-using-reduce](https://stackblitz.com/edit/accumulate-data-over-time-using-reduce)\]

`Note`:

1. `reduce` only emits one value, the final accumulated value
2. use `scan` if you want to emit each accumulated value

### Lesson 7. Manage state changes incrementally with scan

\[[https://stackblitz.com/edit/manage-state-changes-incrementally-with-scan](https://stackblitz.com/edit/manage-state-changes-incrementally-with-scan)\]

### Lesson 8. Create a countdown timer using interval, map, and scan

\[[https://stackblitz.com/edit/create-a-countdown-timer-using-fromevent-map-and-scan](https://stackblitz.com/edit/create-a-countdown-timer-using-fromevent-map-and-scan)\]

### Lesson 9. Debug your observable streams with tap

\[[https://stackblitz.com/edit/debug-your-observable-streams-with-tap](https://stackblitz.com/edit/debug-your-observable-streams-with-tap)\]

`Note`:

1. Avoid jamming side-effects into `tap` , side-effects should be handle inside `subscribe`
2.  Usually `tap` is use for debugging, console log value in the streams

## Section 4. Filtering Operators

### Lesson 1.  Introduction to filtering operators

`Recap`:

1. Ignores values based on some criteria

   1. filtering out special event
   2. removing duplicate emissions
   3. completing observable on conditions
   4. + more

2. Some operators to explore: `take`, `takeUntil`, `takeWhile`, `distinctUntilChanged`

### Lesson 2. Emit a set number of values from a stream with take

\[[https://stackblitz.com/edit/emit-a-set-number-of-values-from-a-stream-with-take](https://stackblitz.com/edit/emit-a-set-number-of-values-from-a-stream-with-take)\]

`Note`:

1. Use `take` when you want to only take a number of values from stream
2. If you want to only take the 1st value that match some condition, you can also use `first` compare to using `take(1)` combine with `filter`









