/**
 * Created by jochen on 28/10/15.
 */
import {bootstrap, Component, View} from "angular2/angular2";
import {TodoInput} from "./todoInput";
import {TodoService} from "./todoService";
import {TodoList} from "./todoList";

@Component({
    selector: 'app'
})
@View({
    directives: [TodoInput, TodoList],
    template: `
        <div>
            <todo-input></todo-input>
            <todo-list></todo-list>
        </div>
    `
})
class App{}

// Any component requesting the service will get the same instance
bootstrap(App, [TodoService]);