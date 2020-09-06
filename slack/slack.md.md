---
description: Message from Slack VID
---

# slack

`11/12/2019` `Form Validation: https://angular-templates.io/tutorials/about/angular-forms-and-validations`

`12/12/2019` `Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them. William Shakespeare`

`Observable: https://medium.com/@benlesh/learning-observable-by-building-observable-d5da57405d87`

`16/12/2019` `How states combined && initialized in ngrx : https://stackoverflow.com/questions/43822967/ngrx-how-are-states-combined-and-initialized`

`Note: Meta-reducers in NgRx are similar to middleware used in Redux.`

`19/12/2019` \[[https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)\]

`25/12/2019` \[[https://medium.com/better-humans/how-to-wake-up-at-5-a-m-every-day-ceb02e29c802](https://medium.com/better-humans/how-to-wake-up-at-5-a-m-every-day-ceb02e29c802)\]

`26/12/2019` \[[https://exercism.io/tracks/go](https://exercism.io/tracks/go)\]

`27/12/2019` \[[https://medium.com/got-it-vietnam/chuy%E1%BB%87n-th%E1%BB%B1c-t%E1%BA%ADp-5-training-program-cho-software-engineer-%E1%BB%9F-got-it-fcc0730ba5d1](https://medium.com/got-it-vietnam/chuy%E1%BB%87n-th%E1%BB%B1c-t%E1%BA%ADp-5-training-program-cho-software-engineer-%E1%BB%9F-got-it-fcc0730ba5d1)\]

`PgKy2B2XEBu683fMycMt; gitlab http code`

`30/12/2019` `IIFE: https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6`

`Next time whenever you are creating a bunch of variables and functions in global scope that no one uses outside your code, just wrap all of that in an IIFE and get a lot of good JavaScript karma for doing that. Your code will continue to work, but now you are not polluting global scope. Also you are shielding your code from someone who may change your globals accidentally, or sometimes intentionally!`

`Google JS Style Guide: https://google.github.io/styleguide/jsguide.html`

```text
Custom pipe price/currency:
import { Pipe, PipeTransform } from "@angular/core";
@Pipe({ name: "customPipe" })
export class CustomPipe implements PipeTransform {
    transform(value: number): string {
        let newStr: string = `${value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} đ`;
        return newStr;
    }
}
```

`06/01/2020` `Generators: https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5 https://medium.com/dailyjs/a-simple-guide-to-understanding-javascript-es6-generators-d1c350551950`

`https://exploringjs.com/es6/index.html#toc_pt_standard-library`

`Redux for beginners: https://viblo.asia/p/redux-cho-nguoi-moi-bat-dau-part-1-introduction-ZjleaBBZkqJ`

`07/01/2020` `Redux best practices: https://blog.strongbrew.io/Redux-best-practices/`

`08/01/2020` \[[https://dmitripavlutin.com/react-fetch-lifecycle-methods-hooks-suspense/](https://dmitripavlutin.com/react-fetch-lifecycle-methods-hooks-suspense/)\]

`17/01/2020` \[[https://medium.com/javascript-in-plain-english/how-to-use-async-function-in-react-hook-useeffect-typescript-js-6204a788a435](https://medium.com/javascript-in-plain-english/how-to-use-async-function-in-react-hook-useeffect-typescript-js-6204a788a435)\]

`21/01/2020` `https://scotch.io/bar-talk/5-tips-to-write-better-conditionals-in-javascript`

`30/01/2020` \[[https://viblo.asia/p/typescript-decorator-va-metadata-reflection-m68Z0w2dKkG](https://viblo.asia/p/typescript-decorator-va-metadata-reflection-m68Z0w2dKkG)\]

\[[https://viblo.asia/p/18-ki-thuat-rut-gon-code-javascript-cua-ban-Qbq5QqRL5D8](https://viblo.asia/p/18-ki-thuat-rut-gon-code-javascript-cua-ban-Qbq5QqRL5D8)\]

`04/02/2020` `React with Typescript book:`

1. \[[https://www.amazon.co.uk/gp/product/1789610257/ref=as\_li\_qf\_asin\_il\_tl?ie=UTF8&tag=carlrippon-21&creative=6738&linkCode=as2&creativeASIN=1789610257&linkId=381e967dda69affdbd3b7266d0def018](https://www.amazon.co.uk/gp/product/1789610257/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=carlrippon-21&creative=6738&linkCode=as2&creativeASIN=1789610257&linkId=381e967dda69affdbd3b7266d0def018)\]
2. \[[https://www.amazon.co.uk/dp/1789133041/ref=sspa\_dk\_detail\_0?psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFISE1JMDkzNTFSWFImZW5jcnlwdGVkSWQ9QTAyMjk0MDMyVzJTUFBSVlZYWk0zJmVuY3J5cHRlZEFkSWQ9QTA5NzY0MDkyVzlWSk1ET09ON0pHJndpZGdldE5hbWU9c3BfZGV0YWlsJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==](https://www.amazon.co.uk/dp/1789133041/ref=sspa_dk_detail_0?psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFISE1JMDkzNTFSWFImZW5jcnlwdGVkSWQ9QTAyMjk0MDMyVzJTUFBSVlZYWk0zJmVuY3J5cHRlZEFkSWQ9QTA5NzY0MDkyVzlWSk1ET09ON0pHJndpZGdldE5hbWU9c3BfZGV0YWlsJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==)\]
3. \[[https://www.amazon.co.uk/Effective-TypeScript-Specific-Ways-Improve/dp/1492053740/ref=pd\_aw\_sbs\_14\_4/258-2185948-1132714?\_encoding=UTF8&pd\_rd\_i=1492053740&pd\_rd\_r=2ae117f0-df26-435f-8459-f737dcad87b7&pd\_rd\_w=IOkgg&pd\_rd\_wg=jzPla&pf\_rd\_p=0208d703-a674-4413-8899-c3889837d212&pf\_rd\_r=J6JDBA0NCZTA9XBAQ478&psc=1&refRID=J6JDBA0NCZTA9XBAQ478](https://www.amazon.co.uk/Effective-TypeScript-Specific-Ways-Improve/dp/1492053740/ref=pd_aw_sbs_14_4/258-2185948-1132714?_encoding=UTF8&pd_rd_i=1492053740&pd_rd_r=2ae117f0-df26-435f-8459-f737dcad87b7&pd_rd_w=IOkgg&pd_rd_wg=jzPla&pf_rd_p=0208d703-a674-4413-8899-c3889837d212&pf_rd_r=J6JDBA0NCZTA9XBAQ478&psc=1&refRID=J6JDBA0NCZTA9XBAQ478)\]
4. \[[https://www.amazon.co.uk/Mastering-TypeScript-enterprise-ready-industrial-strength-applications/dp/1789536707/ref=pd\_aw\_sbs\_14\_2/258-2185948-1132714?\_encoding=UTF8&pd\_rd\_i=1789536707&pd\_rd\_r=2ae117f0-df26-435f-8459-f737dcad87b7&pd\_rd\_w=IOkgg&pd\_rd\_wg=jzPla&pf\_rd\_p=0208d703-a674-4413-8899-c3889837d212&pf\_rd\_r=J6JDBA0NCZTA9XBAQ478&psc=1&refRID=J6JDBA0NCZTA9XBAQ478](https://www.amazon.co.uk/Mastering-TypeScript-enterprise-ready-industrial-strength-applications/dp/1789536707/ref=pd_aw_sbs_14_2/258-2185948-1132714?_encoding=UTF8&pd_rd_i=1789536707&pd_rd_r=2ae117f0-df26-435f-8459-f737dcad87b7&pd_rd_w=IOkgg&pd_rd_wg=jzPla&pf_rd_p=0208d703-a674-4413-8899-c3889837d212&pf_rd_r=J6JDBA0NCZTA9XBAQ478&psc=1&refRID=J6JDBA0NCZTA9XBAQ478)\]

`Explanation on useEffect https://dev.to/bdbch/a-quick-explanation-on-useeffect-2nn9`

`06/02/2020` `Just Javascript Note`

1. `Using wires is going to be very important for explaining numerous other concepts, like strict equality, object identity, and mutation. We're going to stick with wires, so you might as well start getting used to them now! My universe is full of wires.`
2. `In our JavaScript universe, there is an infinite number of BigInts — one for each integer in math.`
3. `In my universe, objects and functions float closest to my code. This reminds me that I can manipulate them and even make more of them.`

`07/02/2020` \[[https://illustrated.dev/customhooks](https://illustrated.dev/customhooks)\] `Use effect from Dan`: \[[https://overreacted.io/a-complete-guide-to-useeffect/](https://overreacted.io/a-complete-guide-to-useeffect/)\]

`Resource for writing techtalk #1:`

1. \[[https://blog.logrocket.com/the-new-react-lifecycle-methods-in-plain-approachable-language-61a2105859f3/](https://blog.logrocket.com/the-new-react-lifecycle-methods-in-plain-approachable-language-61a2105859f3/)\]
2. \[[https://stackoverflow.com/questions/52979915/why-we-dont-need-to-bind-the-arrow-function-in-react](https://stackoverflow.com/questions/52979915/why-we-dont-need-to-bind-the-arrow-function-in-react)\]
3. \[ttps://viblo.asia/p/reactjs-life-cycle-hooks-XL6lAAoNlek\#\_componentdidupdate-6\]
4. \[[https://viblo.asia/p/reactjs-tim-hieu-ve-component-life-cycle-naQZRw4Plvx](https://viblo.asia/p/reactjs-tim-hieu-ve-component-life-cycle-naQZRw4Plvx)\]
5. \[[https://viblo.asia/p/vong-doi-cua-mot-component-trong-reactjs-3Q75wqMMZWb](https://viblo.asia/p/vong-doi-cua-mot-component-trong-reactjs-3Q75wqMMZWb)\]
6. \[[https://viblo.asia/p/vong-doi-cua-mot-component-trong-reactjs-voi-es6-aWj531qPZ6m](https://viblo.asia/p/vong-doi-cua-mot-component-trong-reactjs-voi-es6-aWj531qPZ6m)\]

`08/02/2020`: `XState: https://stackoverflow.com/questions/54482695/what-is-an-actual-difference-between-redux-and-a-state-machine-e-g-xstate`

`10/02/2020`: \[[https://medium.com/@sho\_mukai/angular-4-life-cycle-functions-and-the-equivalent-react-js-ones-for-fun-293c0742419](https://medium.com/@sho_mukai/angular-4-life-cycle-functions-and-the-equivalent-react-js-ones-for-fun-293c0742419)\]

\[[https://medium.com/@khaledosman/angular-for-react-developers-63239f278158](https://medium.com/@khaledosman/angular-for-react-developers-63239f278158)\]

`11/02/2020`: \[[https://www.rockyourcode.com/format-and-fix-all-files-with-prettier-and-es-lint-recursively/](https://www.rockyourcode.com/format-and-fix-all-files-with-prettier-and-es-lint-recursively/)\]

`13/02/2020`: \[[https://stackoverflow.com/questions/51274343/angular-6-why-use-ngrx-store-rather-than-service-injection](https://stackoverflow.com/questions/51274343/angular-6-why-use-ngrx-store-rather-than-service-injection)\]

`15/02/2020`:

1. `https://neovim.io/doc/user/`
2. `https://devtechnica.com/vim-neovim/best-neovim-plugins-for-software-development-in-2019`
3. `https://jdhao.github.io/2018/12/24/centos_nvim_install_use_guide_en/`
4. `https://www.linode.com/docs/tools-reference/tools/how-to-install-neovim-and-plugins-with-vim-plug/`
5. `https://www.freecodecamp.org/news/a-guide-to-modern-web-development-with-neo-vim-333f7efbf8e2/`
6. `https://www.circuidipity.com/neovim/`
7. `https://medium.com/usevim/nerd-tree-guide-bb22c803dcd2`
8. `https://github.com/joshdick/onedark.vim`
9. `https://vimcolors.com/`

`17/02/2020`:

\[[https://calibreapp.com/blog/react-performance-profiling-optimization](https://calibreapp.com/blog/react-performance-profiling-optimization)\]

`18/02/2020`:

```text
function getMessagebyErrorCode(errorCode) {
  const error = {
    '200': 'null',
    '500': 'Internal server Error',
    '403': 'Permission denied',
    '502': 'Bad gatway',
    '503': 'Service Unavailable',
    '504': 'Gateway Timeout',
    '505': 'HTTP Version Not Supported',
    '301': ' Moved Permanently',
    default: 'hihi'
  }
  return error[errorCode] || error.default
}
```

\[[https://basarat.gitbook.io/typescript/](https://basarat.gitbook.io/typescript/)\]

`19/02/2020`:

\[[https://indepth.dev/everything-you-need-to-know-about-change-detection-in-angular/](https://indepth.dev/everything-you-need-to-know-about-change-detection-in-angular/)\]

\[[https://indepth.dev/a-gentle-introduction-into-change-detection-in-angular/](https://indepth.dev/a-gentle-introduction-into-change-detection-in-angular/)\]

\[[https://stackoverflow.com/questions/56785866/why-is-change-detection-called-twice](https://stackoverflow.com/questions/56785866/why-is-change-detection-called-twice)\]

`When the default change detector detects changes, it invokers ngOnChanges() if supplied, regardless of whether you perform additional change detection. Typically, you should not use both DoCheck and OnChanges to respond to changes on the same input.`

`SQL`: \[[https://noads.sqlzoo.net/](https://noads.sqlzoo.net/)\]

`24/02/2020`:

\[[https://blog.bitsrc.io/understanding-react-default-props-5c50401ed37d](https://blog.bitsrc.io/understanding-react-default-props-5c50401ed37d)\]

`25/02/2020`:

\[[https://www.amazon.jobs/en/jobs/999366/front-end-engineer](https://www.amazon.jobs/en/jobs/999366/front-end-engineer)\]

\[[https://viblo.asia/p/vuejs-va-nhung-dieu-chua-biet-Eb85oaV8Z2G](https://viblo.asia/p/vuejs-va-nhung-dieu-chua-biet-Eb85oaV8Z2G)\]

\[[https://academind.com/learn/flutter/react-native-vs-flutter-vs-ionic-vs-nativescript-vs-pwa/](https://academind.com/learn/flutter/react-native-vs-flutter-vs-ionic-vs-nativescript-vs-pwa/)\]

`26/02/2020`:

\[[https://kentcdodds.com/blog/usememo-and-usecallback?fbclid=IwAR30yEsj22joMp7TGHRUMyOkInU3xoGadv9oeMHknbAdW3H54nMacgUXN3s](https://kentcdodds.com/blog/usememo-and-usecallback?fbclid=IwAR30yEsj22joMp7TGHRUMyOkInU3xoGadv9oeMHknbAdW3H54nMacgUXN3s)\]

`04/03/2020`:

\[[https://stackoverflow.com/questions/53215285/how-can-i-force-component-to-re-render-with-hooks-in-react](https://stackoverflow.com/questions/53215285/how-can-i-force-component-to-re-render-with-hooks-in-react)\]

`06/03/2020`:

\[[https://blog.logrocket.com/introduction-to-vue-lifecycle-hooks/](https://blog.logrocket.com/introduction-to-vue-lifecycle-hooks/)\]

`09/03/2020`:

\[[https://1morethingteam.slack.com/archives/CQ8BR083B/p1583723403223400?thread\_ts=1583136667.156600&cid=CQ8BR083B](https://1morethingteam.slack.com/archives/CQ8BR083B/p1583723403223400?thread_ts=1583136667.156600&cid=CQ8BR083B)\]

`21/03/2020`:

\[[https://blogs.msmvps.com/deborahk/higher-order-observable/](https://blogs.msmvps.com/deborahk/higher-order-observable/)\]

\[[http://alanpryorjr.com/2019-05-15-rxjs-flattening-operators/](http://alanpryorjr.com/2019-05-15-rxjs-flattening-operators/)\]

`26/03/2020`:

\[[https://stackoverflow.com/questions/44864303/send-data-through-routing-paths-in-angular](https://stackoverflow.com/questions/44864303/send-data-through-routing-paths-in-angular)\]

`06/04/2020`:

\[[https://rxjs-visualize.explosionpills.com/,race,combineLatest](https://rxjs-visualize.explosionpills.com/,race,combineLatest)\]

`08/04/2020`:

\[[https://stackoverflow.com/questions/8640887/git-merge-without-auto-commit](https://stackoverflow.com/questions/8640887/git-merge-without-auto-commit)\]

`13/04/2020`:

\[[https://duncanhunter.gitbook.io/angular-and-ngrx/18.-create-selectors](https://duncanhunter.gitbook.io/angular-and-ngrx/18.-create-selectors)\]

`Ngrx v8`: \[[https://www.youtube.com/playlist?list=PLV-DQnYj14bQr0pqsdfUvbXlBtC\_9L1dB](https://www.youtube.com/playlist?list=PLV-DQnYj14bQr0pqsdfUvbXlBtC_9L1dB)\]

\[[https://stackblitz.com/edit/angular6-json-schema-form?file=src%2Fapp%2FjsonSchema.ts](https://stackblitz.com/edit/angular6-json-schema-form?file=src%2Fapp%2FjsonSchema.ts)\]

`14/04/2020`:

```text
ng generate store ProductState --statePath=products/store --module=products/products.module.ts --stateInterface=ProductStat
```

\[[https://ultimatecourses.com/blog/ngrx-store-understanding-state-selectors](https://ultimatecourses.com/blog/ngrx-store-understanding-state-selectors)\]

\[[https://blog.angular-university.io/ngrx-entity/](https://blog.angular-university.io/ngrx-entity/)\]

`16/04/2020`:

\[[https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape)\]

\[[https://blog.angular-university.io/](https://blog.angular-university.io/)\]

`18/04/2020`:

\[[https://levelup.gitconnected.com/typescript-validation-with-ajv-1b70a76dd678](https://levelup.gitconnected.com/typescript-validation-with-ajv-1b70a76dd678)\]

`20/04/2020`:

`Select all option angular`: Được viết sẵn ở component new-rules của module voucher-scan-and-go

\[[https://stackoverflow.com/questions/48745256/how-to-toggle-mat-expansion-panel-with-button-click](https://stackoverflow.com/questions/48745256/how-to-toggle-mat-expansion-panel-with-button-click)\]

`23/04/2020`:

`Custom sort header on mat-table` : Được viết ở component lead-list của module Lead của project `crm-sale-portal`

`24/04/2020`:

`Handle error in ngrx`

\[[https://medium.com/city-pantry/handling-errors-in-ngrx-effects-a95d918490d9](https://medium.com/city-pantry/handling-errors-in-ngrx-effects-a95d918490d9)\]

\[[https://indepth.dev/ngrx-how-and-where-to-handle-loading-and-error-states-of-ajax-calls/](https://indepth.dev/ngrx-how-and-where-to-handle-loading-and-error-states-of-ajax-calls/)\]

\[[https://medium.com/dev-channel/a-netflix-web-performance-case-study-c0bcde26a9d9](https://medium.com/dev-channel/a-netflix-web-performance-case-study-c0bcde26a9d9

)\]

\[[https://web.dev/learn/](https://web.dev/learn/)\]

`02/05/2020`:

\[[https://www.tiepphan.com/rxjs-reactive-programming/\#rxjs-observer](https://www.tiepphan.com/rxjs-reactive-programming/#rxjs-observer)\]

`07/05/2020`:

```text
https://stackblitz.com/edit/angular-bwdrz7?file=app/app.component.css
```

Customize vertical tabs in angular material: link before and in `user-list` component in `sales-portal` project 

`08/05/2020`:

\[[https://stackoverflow.com/questions/45940965/angular-material-customize-tab](https://stackoverflow.com/questions/45940965/angular-material-customize-tab)\]

\[[https://medium.com/angular-in-depth/ngrx-action-creators-redesigned-d396960e46da](https://medium.com/angular-in-depth/ngrx-action-creators-redesigned-d396960e46da)\]

\[[https://timdeschryver.dev/blog/ngrx-creator-functions-101](https://timdeschryver.dev/blog/ngrx-creator-functions-101)\]

\[[https://indepth.dev/building-your-own-observable-part-3-the-observer-pattern-and-creational-methods/](https://indepth.dev/building-your-own-observable-part-3-the-observer-pattern-and-creational-methods/)\]

\[[https://medium.com/@benlesh/learning-observable-by-building-observable-d5da57405d87](https://medium.com/@benlesh/learning-observable-by-building-observable-d5da57405d87)\]

\[[https://www.stackchief.com/tutorials/JavaScript%20Observables%20in%205%20Minutes](https://www.stackchief.com/tutorials/JavaScript%20Observables%20in%205%20Minutes)\]

`09/05/2020`:

```text
https://indepth.dev/author/nate/
```

Good article about understanding about source code of RxJS

`13/05/2020`:

```text
https://stackoverflow.com/questions/54891110/router-getcurrentnavigation-always-returns-null
```

transfer state through url navigate 

`18/05/2020:`

```text
https://github.com/MikeRyanDev/habits-graphql-angular
```

```text
https://www.samjulien.com/write-a-basic-graphql-client-for-ngrx
```

GraphQL w NgRx

```text
https://medium.com/razroo/angular-using-ngrx-store-as-your-apollo-cache-with-graphql-d6c539932219
```

NgRx Store as ApolloCache

```text
https://blog.learngoprogramming.com/
```

 `19/05/2020:`

`Debugger Tools Docs`  
[https://developer.mozilla.org/en-US/docs/Tools/Debugger](https://developer.mozilla.org/en-US/docs/Tools/Debugger)  
`SCSS angular`  
[https://scotch.io/tutorials/angular-shortcut-to-importing-styles-files-in-components](https://scotch.io/tutorials/angular-shortcut-to-importing-styles-files-in-components)  
  
`30/05/2020`:

`Full Calendar related`   
[https://stackoverflow.com/questions/57194259/react-fullcalendar-v4-tooltip](https://stackoverflow.com/questions/57194259/react-fullcalendar-v4-tooltip)

```text
https://github.com/fullcalendar/fullcalendar-react/issues/12
```

how to render a functional component on eventRender method of FullCalendar API  
  
`24/06/2020`:  
`Handle error with async pipe`

```text
https://sebastian-holstein.de/post/error-handling-angular-async-pipe/
https://stackoverflow.com/questions/56089077/handling-errors-with-rxjs-and-angular-async-pipe
https://stackoverflow.com/questions/50049527/handle-observable-errors-with-async-pipe-in-a-reactive-way
```

 `02/07/2020`:  
`Resource for RxJS Best Practices`

```text
https://blog.thoughtram.io/angular/2017/02/27/three-things-you-didnt-know-about-the-async-pipe.html
https://indepth.dev/everything-you-need-to-know-about-change-detection-in-angular/
https://medium.com/better-programming/rxjs-best-practices-7f559d811514
https://blog.strongbrew.io/rxjs-best-practices-in-angular/
https://blog.strongbrew.io/rxjs-best-practices-in-angular/?utm_source=dormosheio&utm_campaign=dormosheio
https://blog.angular-university.io/functional-reactive-programming-for-angular-2-developers-rxjs-and-observables/
https://github.com/madhurakhal/rxjs-best-practices
https://www.intertech.com/angular-best-practice-unsubscribing-rxjs-observables/
https://medium.com/angular-in-depth/rxjs-avoiding-takeuntil-leaks-fb5182d047ef
https://blog.bitsrc.io/rxjs-patterns-efficiency-and-performance-10bbf272c3fc
https://netbasal.com/creating-custom-operators-in-rxjs-32f052d69457
https://medium.com/javascript-everyday/rxjs-custom-operators-f8b9aeab9631
https://medium.com/@benlesh/rxjs-dont-unsubscribe-6753ed4fda87
https://www.youtube.com/channel/UCfiGD529EyGGA6fbQsl99BQ/videos
https://dev.to/stephenradams/reactive-programming-a-shift-in-mindset-4cm3#:~:text=Having%20a%20more%20reactive%20mindset,more%20responsive%20to%20the%20user.
https://www.youtube.com/watch?v=Z76QlSpYcck&feature=youtu.be
https://levelup.gitconnected.com/lets-be-more-reactive-7b1a1554e6da
https://www.freecodecamp.org/news/an-introduction-to-observables-in-reactive-programming-1cfd3e23bb94/
https://stackblitz.com/edit/angular-autocomplete-imperative-vs-reactive?file=app%2Fapi.service.ts
https://levelup.gitconnected.com/angular-and-rxjs-patterns-use-reactive-programming-to-compose-and-manage-data-in-angular-apps-2e0c4ce7a39c
https://nitayneeman.com/posts/all-talks-from-ng-conf-2019/
https://itnext.io/angular-rxjs-detecting-memory-leaks-bdd312a070a0
https://egghead.io/lessons/angular-avoid-memory-leaks-when-subscribing-to-rxjs-observables-in-angular-components
https://stackoverflow.com/questions/54658614/how-to-detect-rxjs-related-memory-leaks-in-angular-apps
https://medium.com/javascript-everyday/yet-another-way-to-handle-rxjs-subscriptions-1f15554ce3b5
https://medium.com/angular-in-depth/the-best-way-to-unsubscribe-rxjs-observable-in-the-angular-applications-d8f9aa42f6a0
```

 `22/07/2020`:

`Resource for React-Router Scable Architect`

```text
https://github.com/react-boilerplate/react-boilerplate/blob/master/docs/js/routing.md
https://github.com/react-boilerplate/react-boilerplate/blob/master/docs/general/introduction.md
https://github.com/react-boilerplate/react-boilerplate/issues/27
https://dev.to/evilspark/how-i-edited-a-complex-react-boilerplate-that-now-works-perfectly-for-me-42km
https://viblo.asia/p/cung-tim-hieu-ve-react-boilerplate-YWOZrwbPlQ0
https://medium.com/better-programming/react-router-architecture-thats-simple-scalable-and-protected-da896827f946
https://web.dev/react/
https://blog.logrocket.com/how-react-hooks-can-replace-react-router/
https://luuxuantruong.info/gioi-thieu-ve-umijs-p3-permission-routing/
https://medium.com/javascript-in-plain-english/enterprise-react-in-2020-78155bc99259
https://reactrouter.com/web/guides/quick-start
https://www.freecodecamp.org/news/hitchhikers-guide-to-react-router-v4-a957c6a5aa18/
https://www.atlassian.com/engineering/react-resource-router-deep-dive
https://misscoded.com/react-router-patterns/
https://blog.bitsrc.io/must-know-concepts-of-react-router-fb9c8cc3c12
https://www.sitepoint.com/react-router-complete-guide/
https://dev.to/legobox/my-react-routing-structure-d8i
https://medium.com/@hassan.djirdeh/domain-driven-react-redux-a474ecf7d126
https://marmelab.com/blog/2015/12/17/react-directory-structure.html
https://medium.com/swlh/react-router-with-a-single-config-file-61777f306b4f
https://auth0.com/docs/authorization/authentication-and-authorization
https://jasonwatmore.com/post/2019/02/01/react-role-based-authorization-tutorial-with-example
https://levelup.gitconnected.com/role-based-authentication-with-react-router-and-typescript-b707af568ccf
https://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71
```

 `27/07/2020`:

`Hook related resource`

```text
https://www.freecodecamp.org/news/testing-react-hooks/
https://usehooks.com/
```

 `30/07/2020`:  
`Algorithm resource`

```text
https://scrimba.com/p/pk57XHz/cpD8NGc9
```

 `31/07/2020`:  
`React Profiler and Performance resource`

```text
https://www.youtube.com/watch?v=00RoZflFE34
https://www.youtube.com/watch?v=Q7NEfD4FNYE
https://calibreapp.com/blog/react-performance-profiling-optimization
https://reactjs.org/docs/optimizing-performance.html
```

 `06/08/2020`:  
`Access child state & method from parent comp in React`

```text
https://stackoverflow.com/questions/37949981/call-child-method-from-parent
```

```text
https://linguinecode.com/post/get-child-component-state-from-parent-component
```

 `13/08/2020`:  
`React Resource`  
[https://reactresources.com/](https://reactresources.com/)  
`React Native optiomization`  
[https://callstack.com/blog/download-the-ultimate-guide-to-react-native-optimization-ebook/](https://callstack.com/blog/download-the-ultimate-guide-to-react-native-optimization-ebook/)

`Redux 101`  
[https://www.valentinog.com/blog/redux/](https://www.valentinog.com/blog/redux/)

`26/08/2020`:

angular resource recommend in main page angular

```text
https://angular.io/resources
```

`01/09/2020`

`Monorepo resource`

```text
https://www.netlify.com/blog/2020/04/21/deploying-nx-monorepos-to-netlify/
https://nx.dev/react
https://blog.nrwl.io/painlessly-build-and-deploy-next-js-apps-with-nx-225e2721da78
https://github.com/korfuri/awesome-monorepo
https://danluu.com/monorepo/
https://blog.thundra.io/mono-or-multi-repository-a-dilemma-in-the-serverless-world
https://news.ycombinator.com/item?id=19303082
https://medium.com/@Jakeherringbone/you-too-can-love-the-monorepo-d95d1d6fcebe
https://itnext.io/monorepo-pains-9064db3b9882
https://medium.com/@hoangbkit/why-monorepo-in-2018-89221acd4bfb
https://www.atlassian.com/git/tutorials/monorepos
https://thedeployguy.com/2020-05-10-monorepo-introduction/
https://medium.com/@maoberlehner/monorepos-in-the-wild-33c6eb246cb9
https://eng.uber.com/ios-monorepo/
https://medium.com/opendoor-labs/our-python-monorepo-d34028f2b6fa
https://blog.nrwl.io/misconceptions-about-monorepos-monorepo-monolith-df1250d4b03c
https://www.toptal.com/front-end/guide-to-monorepos
https://blog.salsitasoft.com/pitfalls-of-building-a-monorepo-for-react-native-and-react-web-apps/
https://medium.com/@luisvieira_gmr/building-large-scale-react-applications-in-a-monorepo-91cd4637c131
```

`03/09/2020`

```text
https://github.com/PatrickJS/angular-starter/issues/727
```

`Closure resource`

```text
https://ui.dev/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/
```

`04/09/2020`

`NextJS authenication & authorization resource`

```text
https://jolvera.dev/posts/user-authentication-with-nextjs
https://www.youtube.com/watch?v=j4Tob0KDbuQ&list=PLYSZyzpwBEWS3vaMHM8cCJv6qv6DNzzA9
https://next-auth.js.org/
https://leerob.io/blog/nextjs-authentication
https://www.youtube.com/watch?v=NSR_Y_rm_zU
https://gitlab.id.vin/khanhnv14/react-boilerplate/-/tree/master/nextjs
https://medium.com/@anMagpie/next-js-jwt-auth-example-app-4ea4d7f49fa3
https://www.jaygould.co.uk/2020-01-31-nextjs-auth-jwt-context-hooks/
```

`Micro-frontend && Scalable FE Structure`

```text
https://dev.to/vycke/how-to-create-a-scalable-and-maintainable-front-end-architecture-4f47
https://medium.com/razroo/micro-front-end-architecture-an-introduction-initial-thoughts-5b34333c1218
https://frontend-architecture.com/2020/02/13/micro-frontends/
```

`Mastering NextJS series`

```text
https://www.youtube.com/playlist?list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR
```

`06/09/2020`

`Webpack related resource`

```text
https://blog.logrocket.com/guide-performance-optimization-webpack/
```

