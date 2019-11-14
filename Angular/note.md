# `Angular 8 Complete Guide`

# `Section 2. The Basics`

Note:<br>

## `How an Angular app gets loaded & started`

1. main.ts
2. app.module.ts
3. app.component.ts

## `Creating components and nesting components`

1. Use command `ng g c <path>`<br>
2. Nest components in the app-root component using the selector

## `Using selector`

1. You can use selector like CSS selector
   Ex: `.app-server`, `[app-server]`, `app-server`

## `Data binding`

1. Data binding is communication between the TS code(business logic) and Template(HTML)
2. To output data from the TS code, we can use `String interpolation` & `Property binding`<br>
   Ex: `{{ data }}`<br>
   `[property]="data"`

3. To react to user event, we can use `Event Binding`
   Ex: `(event)="expression"`

4. To combine both the above, we can use `Two-Way-Binding`<br>
   Ex: `[(ngModel)]="data"`

5. How do you know to which Properties or Events of HTML Elements you may bind? You can basically bind to all Properties and Events - a good idea is to console.log() the element you're interested in to see which properties and events it offers.

   Important: For events, you don't bind to onclick but only to click (=> (click)).

   The MDN (Mozilla Developer Network) offers nice lists of all properties and events of the element you're interested in. Googling for YOUR_ELEMENT properties or YOUR_ELEMENT events should yield nice results.

6. When using event binding, (\$event) gives us access to event data

## `Directives`

1. `Directives` are instructions in the DOM<br>
2. Some built-in directives are:
   1. \*`ngIf`
   2. \*`ngFor`
   3. `ngStyle`
   4. `ngClass`
