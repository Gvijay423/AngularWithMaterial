import {Component, OnDestroy} from '@angular/core';

import{Observable, Subscription} from 'rxjs/Rx';

@Component({
    selector: 'async-pipe',
    template: `
    <pre ngNonBindable>{{ promiseData }}</pre>
    <p>{{ promiseData }}</p>
    <br>
    <pre ngNonBindable>{{ promise | async}}</pre>
    <p>{{ promise | async}}</p>
    <br>
    <pre ngNonBindable>{{ observableData }}</pre>
    <p>{{ observableData }}</p>
    <br>
    <pre ngNonBindable>{{ observable }}</pre>
    <p>{{observable | async}}</p>
    `
})

export class AsyncPipeComponent implements OnDestroy {
    promiseData: string;
    observableData: number;
    subscription: Subscription = null;
    promise: Promise<string>;
    observable: Observable<number>;
    constructor() {
        this.getPromise().then(response => this.promiseData = response);
        this.promise = this.getPromise();
        this.subscribeObservable();
        this.observable = this.getObservable();
    }

    getPromise(): Promise<string> {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("Promise Complete!"), 3000);
        });
    }

    getObservable() {
        return Observable
               .interval(1000)
               .take(10)
               .map(n => n * 10);
    }

    subscribeObservable() {
        this.subscription = this.getObservable()
            .subscribe(n => this.observableData = n);
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}

