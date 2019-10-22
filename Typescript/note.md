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
