/**
 * Created by jochen on 28/10/15.
 */
import {bootstrap, Component, View} from "angular2/angular2";
import {TodoInput} from "./todoInput";

@Component({
    selector: 'app'
})
@View({
    directives: [TodoInput],
    template: `
        <div><todo-input></todo-input></div>
    `
})
class App{}

bootstrap(App);