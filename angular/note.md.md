---
description: Note about Angular course
---

# note

## `Angular 8 Complete Guide`

## `Section 2. The Basics`

Note:  


### `How an Angular app gets loaded & started`

1. main.ts
2. app.module.ts
3. app.component.ts

### `Creating components and nesting components`

1. Use command `ng g c <path>` 
2. Nest components in the app-root component using the selector

### `Using selector`

1. You can use selector like CSS selector Ex: `.app-server`, `[app-server]`, `app-server`

### `Data binding`

1. Data binding is communication between the TS code\(business logic\) and Template\(HTML\)
2. To output data from the TS code, we can use `String interpolation` & `Property binding`  Ex: `{{ data }}`  `[property]="data"`
3. To react to user event, we can use `Event Binding` Ex: `(event)="expression"`
4. To combine both the above, we can use `Two-Way-Binding`  Ex: `[(ngModel)]="data"`
5. How do you know to which Properties or Events of HTML Elements you may bind? You can basically bind to all Properties and Events - a good idea is to console.log\(\) the element you're interested in to see which properties and events it offers.

   Important: For events, you don't bind to onclick but only to click \(=&gt; \(click\)\).

   The MDN \(Mozilla Developer Network\) offers nice lists of all properties and events of the element you're interested in. Googling for YOUR\_ELEMENT properties or YOUR\_ELEMENT events should yield nice results.

6. When using event binding, \(`$event`\) gives us access to event data

### `Directives`

1. `Directives` are instructions in the DOM 
2. Some built-in directives are:
   1. \*`ngIf`
   2. \*`ngFor`
   3. `ngStyle`
   4. `ngClass`

## `Section 3. Course Project: The Basics`

## `Section 4. Debugging`

Note:

1. We can use source map in Developer Tools to debug, under `webpack` tab
2. Using `Augury` to understand and debug your Angular application

## `Section 5. Components and Data binding Deep Dive`

Note:

### `Data binding`

1. We can use property and event binding on `HTML element`, `Directives`, `Component`
2. Use `@Input()` decorator to pass data down from a parent component to a child component, you can assign an alias using `@Input('alias')`
3. Use `@Output()` decorator to pass data up from a child component to a parent component
4. Use `EventEmitter<T>()` to emit a new event
5. `View encapsulation` is used to encapsulate CSS to each component which means the CSS in that component only affect itself, but can be override to affect global view
6. `Local reference` return a HTML element, often use with input Ex: \#serverNameInput
7. Use `@ViewChild()` decorator to access a DOM element  Ex: @ViewChild\("serverContentInput", { static: true }\) serverContentInput: ElementRef;
8. Use `ng-content` to display HTML inside your component selector

### `Lifecycle`

1. `ngOnChanges`: Called after a bound input property \(`@Input()`\) changes, run before `ngOnInit`
2. `ngOnInit`: Called once the component is initialized \( run after `constructor()`\)
3. `ngDoCheck`: Called during every change detection run
4. `ngAfterContentInit`: Called after content \(ng-content\) has been projected into view
5. `ngAfterContentChecked`: Called every time the projected content has been checked
6. `ngAfterViewInit`: Called after the component’s view \(and child views\) has been initialized \( `You can access DOM templates here`\)
7. `ngAfterViewChecked`: Called every time the view \(and child views\) have been checked
8. `ngOnDestroy`: Called once the component is about to be destroyed \(`You can do cleanup in here`\)

## `Section 7. Directive Deep Dive`

Note:

1. `Attribute Directives`
   1. Look like a normal HTML attribute
   2. Only affect/change the element they are added to
2. `Structural Directives`
   1. Look like a normal HTML attribute but have a leading \* \(for desugaring\)
   2. Affect a whole area in the DOM \(elements get added/removed\)
3. You can't bind 2 structural directives on the same element
4. You can create your own `Directives`, remember to import it into the `declarations` array in `app.module.ts`  Ex: 

```text
import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appBasicHighlight]"
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = "green";
  }
}
```

1. A better way to create your own `Directives` is using the `Renderer`  Use `ng g d <path>` to create new directive  Ex: 

```text
import { Directive, Renderer2, OnInit, ElementRef } from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      "background-color",
      "blue"
    );
  }
}
```

1. Using `HostListener` to listen to Host Event  Ex: 

```text
@HostListener("mouseenter") mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      "background-color",
      "blue"
    );
  }

@HostListener("mouseleave") mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      "background-color",
      "transparent"
    );
  }
```

1. Using `HostBinding` to bind to Host Properties  Ex: 

```text
@HostBinding("style.backgroundColor") backgroundColor = "transparent";

@HostListener("mouseenter") mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "blue"
    // );
    this.backgroundColor = "blue";
  }
```

1. You can dynamically settings values from outside using `@Input()` and `Property Binding` on the same `Directive`
2. `*ngIf="expression"` = `<ng-template [ngIf]="expression">`
3. You can build your own `Structural Directives` like `*ngIf`, `*ngFor`  Ex: 

```text
import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appUnless]"
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
```

1. Use `ngSwitch` if you have too many `*ngIf` directives  Ex: 

```text
<div [ngSwitch]="value">
    <p *ngSwitchCase="5">Value is 5</p>
    <p *ngSwitchCase="10">Value is 10</p>
    <p *ngSwitchCase="100">Value is 100</p>
    <p *ngSwitchDefault>Value is Default</p>
</div>
```

## `Section 9. Services & Depencies Injection`

Note:

1. `The Angular dependency injector actually is a hierarchical injector`
2. Provide service in `app.module.ts` ==&gt; the same instance of that service is available `Application-wide`
3. Provide service in `app.component.ts` ==&gt; the same instance of that service is available for `all Components` \(but not for `other services` and the `App component` itself\)
4. Provide service in `any other component` ==&gt; he same instance of that service is available for `the Component and all its child component`
5. `When create a service in constructor, we actually only create an instance of that service, so if we want to create a same instance of the service, don't add that service into the providers array, and the opposite is we want to create different instance of the same service, we add that service into the providers array`
6. `We can also inject a service into another service`, to do that `remember to provide the service on the AppModule`
7. The `Injectable()` decorator mean that service can be injected with other service. With this `Injectable` syntax, Services can be loaded lazily by Angular \(behind the scenes\) and redundant code can be removed automatically. This can lead to a better performance and loading speed - though this really only kicks in for bigger services and apps in general.
8. In service, we can emit an event and listen to it in other component but you `SHOULDN NOT DO IT` as it's against angular pattern  Ex: 

```text
ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }
```

1. `of(data)` returns an Observable that emits a single value, `data`

