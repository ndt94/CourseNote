`11/12/2019` `Form Validation: https://angular-templates.io/tutorials/about/angular-forms-and-validations`

`12/12/2019` `Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them. William Shakespeare`

`Observable: https://medium.com/@benlesh/learning-observable-by-building-observable-d5da57405d87`

`16/12/2019` `How states combined && initialized in ngrx : https://stackoverflow.com/questions/43822967/ngrx-how-are-states-combined-and-initialized`

`Note: Meta-reducers in NgRx are similar to middleware used in Redux.`

`19/12/2019` [https://angular.io/guide/rx-library]

`25/12/2019` [https://medium.com/better-humans/how-to-wake-up-at-5-a-m-every-day-ceb02e29c802]

`26/12/2019` [https://exercism.io/tracks/go]

`27/12/2019` [https://medium.com/got-it-vietnam/chuy%E1%BB%87n-th%E1%BB%B1c-t%E1%BA%ADp-5-training-program-cho-software-engineer-%E1%BB%9F-got-it-fcc0730ba5d1]

`PgKy2B2XEBu683fMycMt; gitlab http code`

`30/12/2019` `IIFE: https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6`

`Next time whenever you are creating a bunch of variables and functions in global scope that no one uses outside your code, just wrap all of that in an IIFE and get a lot of good JavaScript karma for doing that. Your code will continue to work, but now you are not polluting global scope. Also you are shielding your code from someone who may change your globals accidentally, or sometimes intentionally!`

`Google JS Style Guide: https://google.github.io/styleguide/jsguide.html`

```typescript
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

`08/01/2020` [https://dmitripavlutin.com/react-fetch-lifecycle-methods-hooks-suspense/]

`17/01/2020` [https://medium.com/javascript-in-plain-english/how-to-use-async-function-in-react-hook-useeffect-typescript-js-6204a788a435]

`21/01/2020` `https://scotch.io/bar-talk/5-tips-to-write-better-conditionals-in-javascript`

`30/01/2020` [https://viblo.asia/p/typescript-decorator-va-metadata-reflection-m68Z0w2dKkG]

[https://viblo.asia/p/18-ki-thuat-rut-gon-code-javascript-cua-ban-Qbq5QqRL5D8]

`04/02/2020` `React with Typescript book:`

1. [https://www.amazon.co.uk/gp/product/1789610257/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=carlrippon-21&creative=6738&linkCode=as2&creativeASIN=1789610257&linkId=381e967dda69affdbd3b7266d0def018]
2. [https://www.amazon.co.uk/dp/1789133041/ref=sspa_dk_detail_0?psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFISE1JMDkzNTFSWFImZW5jcnlwdGVkSWQ9QTAyMjk0MDMyVzJTUFBSVlZYWk0zJmVuY3J5cHRlZEFkSWQ9QTA5NzY0MDkyVzlWSk1ET09ON0pHJndpZGdldE5hbWU9c3BfZGV0YWlsJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==]
3. [https://www.amazon.co.uk/Effective-TypeScript-Specific-Ways-Improve/dp/1492053740/ref=pd_aw_sbs_14_4/258-2185948-1132714?_encoding=UTF8&pd_rd_i=1492053740&pd_rd_r=2ae117f0-df26-435f-8459-f737dcad87b7&pd_rd_w=IOkgg&pd_rd_wg=jzPla&pf_rd_p=0208d703-a674-4413-8899-c3889837d212&pf_rd_r=J6JDBA0NCZTA9XBAQ478&psc=1&refRID=J6JDBA0NCZTA9XBAQ478]
4. [https://www.amazon.co.uk/Mastering-TypeScript-enterprise-ready-industrial-strength-applications/dp/1789536707/ref=pd_aw_sbs_14_2/258-2185948-1132714?_encoding=UTF8&pd_rd_i=1789536707&pd_rd_r=2ae117f0-df26-435f-8459-f737dcad87b7&pd_rd_w=IOkgg&pd_rd_wg=jzPla&pf_rd_p=0208d703-a674-4413-8899-c3889837d212&pf_rd_r=J6JDBA0NCZTA9XBAQ478&psc=1&refRID=J6JDBA0NCZTA9XBAQ478]

`Explanation on useEffect https://dev.to/bdbch/a-quick-explanation-on-useeffect-2nn9`

`06/02/2020` `Just Javascript Note`

1. `Using wires is going to be very important for explaining numerous other concepts, like strict equality, object identity, and mutation. We're going to stick with wires, so you might as well start getting used to them now! My universe is full of wires.`
2. `In our JavaScript universe, there is an infinite number of BigInts — one for each integer in math.`
3. `In my universe, objects and functions float closest to my code. This reminds me that I can manipulate them and even make more of them.`

`07/02/2020` [https://illustrated.dev/customhooks]
`Use effect from Dan`: [https://overreacted.io/a-complete-guide-to-useeffect/]

`Resource for writing techtalk #1:`

1.  [https://blog.logrocket.com/the-new-react-lifecycle-methods-in-plain-approachable-language-61a2105859f3/]
2.  [https://stackoverflow.com/questions/52979915/why-we-dont-need-to-bind-the-arrow-function-in-react]
3.  [ttps://viblo.asia/p/reactjs-life-cycle-hooks-XL6lAAoNlek#_componentdidupdate-6]
4.  [https://viblo.asia/p/reactjs-tim-hieu-ve-component-life-cycle-naQZRw4Plvx]
5.  [https://viblo.asia/p/vong-doi-cua-mot-component-trong-reactjs-3Q75wqMMZWb]
6.  [https://viblo.asia/p/vong-doi-cua-mot-component-trong-reactjs-voi-es6-aWj531qPZ6m]

`08/02/2020`: `XState: https://stackoverflow.com/questions/54482695/what-is-an-actual-difference-between-redux-and-a-state-machine-e-g-xstate`

`10/02/2020`: [https://medium.com/@sho_mukai/angular-4-life-cycle-functions-and-the-equivalent-react-js-ones-for-fun-293c0742419]

[https://medium.com/@khaledosman/angular-for-react-developers-63239f278158]

`11/02/2020`: [https://www.rockyourcode.com/format-and-fix-all-files-with-prettier-and-es-lint-recursively/]
