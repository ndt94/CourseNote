---
description: Note about Typescript course
---

# note

## The TS Type System benefits

1. Helps us catch errors during development
2. Uses 'type annotations' to analyze our code
3. Only active during development
4. Doesn't provide any performance optimization

## Type Annotations & Type Inference

### Type Annotation: We \(Developers\) tell TS the type

### Type Inference: TS guesses the type if declaration and initialization are on the same line

#### Way to use Type Annotation and Type Inference with:

1. `Variables`  Ex:  a: number = 5  **Mostly use Type Inferrence except 3 situation**  **When To Use** 
   1. When a function returns the 'any' type and we need to clarify the value
   2. When we declare a variable on one line and initialize it later
   3. When we want a variable to have a type that can't be inferred
2. `Functions`
   1. Always use type annotations for both argument and the value returned from function
3. `Objects`  Ex:  const { age }: { age: number } = profile;

## Section 5. Arrays in Typescript

### Why do we care

1. TS can do type inference when extracting values from an array
2. TS can prevent us from adding incompatible values to the array
3. We can get help with iterate function like 'map', 'forEach', 'reduce'
4. Flexible - arrays can still contain multiple different types

## Section 7. The All-important Interface

1. `Definition`  Interfaces create a new type, describing the property names and value types of an object
2. `Why do we care`  Create reusable code with interfaces
3. `Implementation`
   1. Create functions that accept arguments that are typed with interfaces
   2. Objects/classes can decide to 'implement' a given interface to work with a function

## Section 8. Classes

1. `Definition`  Blueprint to create an object with some fields\(value\) and methods\(functions\) to represent a thing
2. `Different between TS Classes and ES2015 Classes`
   1. `Modifier`
      1. `public`  This method can be called anywhere, anytime
      2. `private`  This method can only be called by other methods in this classes
      3. `protected`  
          This method can be called by other methods in this classes, or by other methods in child classes

          **`NOTE:`**  
          **`1.Modifier can use with both methods and fields`**  
          **`2.Cannot overide modifier from child classes to parent class`**
   2. `Fields`
      1. `constructor`  +\) Method runs when initialize a new classes  +\) If you want to use constructor in child class, you need to call super\(\) inside that child constructor 
3. `Why do we care`  Reuseable code

## Section 9. Design Pattern with TS

Note:

1. "\|" can only show common properties between 2 types
2. A single value/object can have multiple types
3. implements inferface for class help TS to show us error better
4. Interface is linked **tightly** with classes

## Section 10. More Design Patterns

Note:

1. `tsc --init` to create ts.config file which tell the compiler what to do
2. `npm init -y` to create package.json file where you can control dependencies and scripting command
3. ```text
   class Sorter {
       constructor(public collection: number[]) {}
   }
   ```

   is equal to

   ```text
   class Sorter {
   	collection: number[];
   	constructor(collection: number[]) {
   		this.collection = collection;
   	}
   }
   ```

4. `Type Guards` use to restore access to properties of a type when using `|` operator

   1. `typeof` for primitive value \(number, string, boolean, symbol\)
   2. `instanceof` for other type value
   3. `get` modifier is used to treat length\(\) function as a property of some class

   ```text
       get length(): number {
      	return this.data.length;
       }
   ```

5. `Abstract classes`
   1. Can't be used to create an object directly
   2. Only used as a parent class
   3. Can contain real implementation for some methods
   4. The implemented methods can refer to other methods that don't actually exist yet \( We still have to provide names and types for the un-implemented methods\)
   5. Can make child classes promise to implement some other method
6. Different between `Interface` and `Abstract classes`
   1. `Interface`
      1. Sets up a contract between different classes
      2. Use when we have very different objects that we want to work together
      3. Promotes `loose coupling`
   2. `Abstract classes`
      1. Sets up a contract between different classes
      2. Use when we are trying to build up a definition of an object
      3. Strongly `couples` classes together

