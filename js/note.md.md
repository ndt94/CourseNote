---
description: Note about JS basic course
---

# note

## Objects In-Depth

### Lesson 4. Destructuring Object Properties

`Ex`:

```text
const drink = {
  id: 'xhs8Pla',
  name: 'Lemonade',
  price: {
    sale: 99,
    full: 129,
  },
};
```

```text
const {
	id: myId, // create a new varible call myId then refer to the value of property 'id'
	price: { full }, // destructuring object inside object
	...rest // get other properties using rest operator
} = drink
```

### Lesson 5. Property and Value Existence Checking

// value exists

```text
if (drink.id) {
  console.log(drink.id);
}

for (const prop in drink) {
  if (drink[prop] === 'Lemonade') {
    console.log(drink[prop]);
  }
}
```

```text
const hasLemonade = Object.values(drink).includes('Lemonade');
console.log(hasLemonade);
```

// property exists

```text
console.log(drink.hasOwnProperty('name'));
console.log(Object.prototype.hasOwnProperty.call(drink, 'name'));
console.log(Object.keys(drink).includes('name'));
```

### Lesson 6. Adding and Updating Object Properties

\[[https://stackblitz.com/edit/add-and-update-properties](https://stackblitz.com/edit/add-and-update-properties)\]

### Lesson 7. Removing Object Properties

\[[https://stackblitz.com/edit/delete-object-properties](https://stackblitz.com/edit/delete-object-properties)\]

### Lesson 8. Shallow and Deep Object Cloning

\[[https://stackblitz.com/edit/shallow-and-deep-object-cloning](https://stackblitz.com/edit/shallow-and-deep-object-cloning)\]

### Lesson 9. Merging Objects

\[[https://stackblitz.com/edit/merging-objects](https://stackblitz.com/edit/merging-objects)\]

### Lesson 10. Correctly Type-Checking Objects

\[[https://stackblitz.com/edit/correctly-type-checking-objects](https://stackblitz.com/edit/correctly-type-checking-objects)\]

### Lesson 11. Imperative Object Iteration

\[[https://stackblitz.com/edit/imperative-object-iteration](https://stackblitz.com/edit/imperative-object-iteration)\]

### Lesson 12. Declarative Object Iteration

\[[https://stackblitz.com/edit/declarative-object-iteration](https://stackblitz.com/edit/declarative-object-iteration)\]

## Arrays In-Depth

### Lesson 1. Array Literal, Function and Constructor Syntax

\[[https://stackblitz.com/edit/array-literal-function-and-constructor-syntax](https://stackblitz.com/edit/array-literal-function-and-constructor-syntax)\]

### Lesson 2. Properties, Indexes and Elements

\[[https://stackblitz.com/edit/properties-indexes-and-elements](https://stackblitz.com/edit/properties-indexes-and-elements)\]

### Lesson 3. Multi-dimensional Arrays

\[[https://stackblitz.com/edit/multi-dimensional-arrays](https://stackblitz.com/edit/multi-dimensional-arrays)\]

### Lesson 4. Destructuring Arrays

\[[https://stackblitz.com/edit/destructuring-array](https://stackblitz.com/edit/destructuring-array)\]

### Lesson 5. Adding Array Elements

\[[https://stackblitz.com/edit/adding-array-elements](https://stackblitz.com/edit/adding-array-elements)\] 

`Note`: The splice method doesn't work with spread operators \(mutable\), but slice does \(immutable\)

### Lesson 6. Removing Array Elements

\[[https://stackblitz.com/edit/removing-array-elements](https://stackblitz.com/edit/removing-array-elements)\]

### Lesson 7. Finding Array Elements

\[[https://stackblitz.com/edit/finding-elements-in-array](https://stackblitz.com/edit/finding-elements-in-array)\]

### Lesson 8. Shallow and Deep Array Cloning

\[[https://stackblitz.com/edit/shallow-and-deep-array-cloning](https://stackblitz.com/edit/shallow-and-deep-array-cloning)\]

### Lesson 9. Merging Arrays

\[[https://stackblitz.com/edit/merging-arrays](https://stackblitz.com/edit/merging-arrays)\]

### Lesson 10. Imperative Array Iteration

\[[https://stackblitz.com/edit/imperative-array-iteration](https://stackblitz.com/edit/imperative-array-iteration)\]

### Lesson 11. Iteration with Break and Continue

\[[https://stackblitz.com/edit/iteration-with-break-and-continue](https://stackblitz.com/edit/iteration-with-break-and-continue)\]

### Lesson 12. Iteration with for…of

\[[https://stackblitz.com/edit/iteration-with-forof](https://stackblitz.com/edit/iteration-with-forof)\]

### Lesson 13. Declarative Iteration with Array.forEach

\[[https://stackblitz.com/edit/declarative-iteration-with-arrayforeach](https://stackblitz.com/edit/declarative-iteration-with-arrayforeach)\]

### Lesson 14. Declarative Iteration with Array.map

\[[https://stackblitz.com/edit/declarative-iteration-with-arraymap](https://stackblitz.com/edit/declarative-iteration-with-arraymap)\]

### Lesson 15. Declarative Iteration with Array.filter

\[[https://stackblitz.com/edit/declarative-iteration-with-arrayfilter](https://stackblitz.com/edit/declarative-iteration-with-arrayfilter)\]

### Lesson 16. Declarative Iteration with Array.reduce

\[[https://stackblitz.com/edit/declarative-iteration-with-arrayreduce](https://stackblitz.com/edit/declarative-iteration-with-arrayreduce)\]

