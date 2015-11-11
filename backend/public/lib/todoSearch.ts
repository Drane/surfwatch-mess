/**
 * Created by jochen on 11/11/15.
 */
import {Component, View, FORM_DIRECTIVES} from "angular2/angular2";

@Component({
    selector: 'todo-search'
})
@View({
    directives: [FORM_DIRECTIVES],
    template: `
        Search: <input type="text" [(ng-model)]="term">
    `
})
export class TodoSearch {
}