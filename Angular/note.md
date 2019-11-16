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

6. When using event binding, (`$event`) gives us access to event data

## `Directives`

1. `Directives` are instructions in the DOM<br>
2. Some built-in directives are:
   1. \*`ngIf`
   2. \*`ngFor`
   3. `ngStyle`
   4. `ngClass`

# `Section 3. Course Project: The Basics`

# `Section 4. Debugging`

Note:

1. We can use source map in Developer Tools to debug, under `webpack` tab
2. Using `Augury` to understand and debug your Angular application

# `Section 5. Components and Data binding Deep Dive`

Note:

## `Data binding`

1. We can use property and event binding on `HTML element`, `Directives`, `Component`
2. Use `@Input()` decorator to pass data down from a parent component to a child component, you can assign an alias using `@Input('alias')`
3. Use `@Output()` decorator to pass data up from a child component to a parent component
4. Use `EventEmitter<T>()` to emit a new event
5. `View encapsulation` is used to encapsulate CSS to each component which means the CSS in that component only affect itself, but can be override to affect global view
6. `Local reference` return a HTML element, often use with input
   Ex: #serverNameInput
7. Use `@ViewChild()` decorator to access a DOM element
   Ex: @ViewChild("serverContentInput", { static: true })
   serverContentInput: ElementRef;
8. Use `ng-content` to display HTML inside your component selector

## `Lifecycle`

1. `ngOnChanges`: Called after a bound input property (`@Input()`) changes, run before `ngOnInit`
2. `ngOnInit`: Called once the component is initialized ( run after `constructor()`)
3. `ngDoCheck`: Called during every change detection run
4. `ngAfterContentInit`: Called after content (ng-content) has been projected into view
5. `ngAfterContentChecked`: Called every time the projected content has been checked
6. `ngAfterViewInit`: Called after the component’s view (and child views) has been initialized ( `You can access DOM templates here`)
7. `ngAfterViewChecked`: Called every time the view (and child views) have been checked
8. `ngOnDestroy`: Called once the component is about to be destroyed (`You can do cleanup in here`)
