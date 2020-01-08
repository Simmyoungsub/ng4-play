import { Component, OnInit, Output, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
    selector: 'app-event',
    template: `
        <app-event-register></app-event-register>
    `
})
export class EventComponent {
    constructor() {

    }

}

@Component({
    selector: 'app-event-register',
    template: `
        <div [formGroup]="formGroup">
            <div>Event1
                <app-event-form [formGroup]="formGroup.get('formGroup1')"></app-event-form>
            </div>
            <app-event-form [formGroup]="formGroup.get('formGroup2')"></app-event-form>
        </div>
        <button (click)="save()">저장</button>
    `
})
export class EventRegisterComponent implements OnInit {
    formGroup: FormGroup;

    constructor() {
        this.formGroup = new FormGroup({
            formGroup1: new FormGroup({
                name: new FormControl(''),
                description: new FormControl('')
            }),
            formGroup2: new FormGroup({
                name: new FormControl(''),
                description: new FormControl('')
            })
        });
    }

    ngOnInit(): void {

    }

    save() {
        console.log(this.formGroup.value);
    }
}

@Component({
    selector: 'app-event-form',
    template: `
        <form [formGroup]="formGroup">
            <label>event name</label>
            <input type="text" formControlName="name">
            <label>event description</label>
            <input type="text" formControlName="description">
        </form>
    `
})
export class EventFormComponent implements OnInit {
    @Input() formGroup: FormGroup;

    constructor() {
        this.formGroup = new FormGroup({
            name: new FormControl(''),
            description: new FormControl('')
        });
    }

    ngOnInit(): void {

    }
}