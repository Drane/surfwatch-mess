/**
 * Created by jochen on 28/10/15.
 */
import {Component, View} from "angular2/angular2";

@Component({
    selector: 'todo-input'
})
@View({
    template: `
        <input type="text" #log-me>
        <button (click)="onClick($event, logMe.value)">Log Input</button>
    `
})
export class TodoInput{
    onClick(event, value){
        console.log("clicked:" + value, event);
    }
}

