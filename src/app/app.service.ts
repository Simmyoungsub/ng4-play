import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";

@Injectable()
export class AppService {
    title$: Subject<string> = new BehaviorSubject<string>('This is title');
    content$: Subject<string> = new BehaviorSubject<string>('This is content');

    constructor() {

    }

    getTitle() {
        return this.title$.asObservable().take(1);
    }

    getContent() {
        return this.content$.asObservable().delay(800).take(1);
    }
}