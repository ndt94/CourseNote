# RxJS Master \(UltimateCourse\)

## Section 1. Subjects and multicasting operators

`Note`:

1. A `Subject` is like an `Observable`, but can multicast to many `Observers`. Subjects are like `EventEmitters`: they maintain a registry of many listeners.
2. While plain `Observables` are `unicast` \(each subscribed `Observer` owns an independent execution of the Observable\), `Subjects` are `multicast`.
3. `Subjects` are the only way of making any Observable execution be shared to multiple Observers.

`Source`:

1. \[[http://reactivex.io/documentation/subject.html](http://reactivex.io/documentation/subject.html)\]
2. \[[https://rxjs.dev/guide/subject](https://rxjs.dev/guide/subject)\]

### Section 2. Share data among multiple subscribers with Subjects

\[[https://stackblitz.com/edit/share-data-among-multiple-subscribers-with-subjects](https://stackblitz.com/edit/share-data-among-multiple-subscribers-with-subjects)\]

