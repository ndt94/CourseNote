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

1. Observer is just a object with 3 methods : `next`, `error`, `complete`
2. `Observable` is lazy,  they only emit value if there is a `subscriber` aka `Observer` subscribed to it

