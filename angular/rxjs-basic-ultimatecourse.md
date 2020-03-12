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



