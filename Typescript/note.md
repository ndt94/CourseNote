# Typescript = Javascript + A type system

## The TS Type System benefits

1. Helps us catch errors during development
2. Uses 'type annotations' to analyze our code
3. Only active during development
4. Doesn't provide any performance optimization

## Type Annotations & Type Inference

### Type Annotation: We (Developers) tell TS the type

### Type Inference: TS guesses the type if declaration and initialization are on the same line

#### Way to use Type Annotation and Type Inference with:

1. Variables<br>
   Ex:<br> a: number = 5<br>
   **Mostly use Type Inferrence except 3 situation**<br>
   **When To Use**<br>

    1. When a function returns the 'any' type and we need to clarify the value
    2. When we declare a variable on one line and initialize it later
    3. When we want a variable to have a type that can't be inferred

2. Functions
    1. Always use type annotations for both argument and the value returned from function
3. Objects<br>
   Ex:<br> const { age }: { age: number } = profile;

## Section 5. Arrays in Typescript

### Why do we care

1. TS can do type inference when extracting values from an array
2. TS can prevent us from adding incompatible values to the array
3. We can get help with iterate function like 'map', 'forEach', 'reduce'
4. Flexible - arrays can still contain multiple different types

## Section 7. The All-important Interface

1. Definition<br>
   Interfaces create a new type, describing the property names and value types of an object
2. Why do we care<br>
   Create reusable code with interfaces
3. Implementation
    1. Create functions that accept arguments that are typed with interfaces
    2. Objects/classes can decide to 'implement' a given interface to work with a function

## Section 8. Classes

1. Definition<br>
   Blueprint to create an object with some fields(value) and methods(functions) to represent a thing
2. Different between TS Classes and ES2015 Classes
    1. Modifier
        1. public<br>
           This method can be called anywhere, anytime
        2. private<br>
           This method can only be called by other methods in this classes
        3. protected<br>
           This method can be called by other methods in this classes, or by other methods in child classes<br><br>
           **NOTE: 1.Modifier can use with both methods and fields**<br>
           **2.Cannot overide modifier from child classes to parent class**
    2. Fields
        1. constructor<br>
           +) Method runs when initialize a new classes<br>
           +) If you want to use constructor in child class, you need to call super() inside that child constructor<br>
3. Why do we care<br>
   Reuseable code

## Section 9. Design Pattern with TS

Note:<br>

1. "|" can only show common properties between 2 types
2. A single value/object can have multiple types
3. implements inferface for class help TS to show us error better
4. Interface is linked **tightly** with classes
