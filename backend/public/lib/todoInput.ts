/**
 * Created by jochen on 28/10/15.
 */
import {Component, View/*, Inject*/ /*using @Inject*/} from "angular2/angular2";
import {TodoService} from "./todoService";

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
    //todoService; //using @Inject
    constructor(
        public todoService:TodoService //NOT using @Inject
        //@Inject(TodoService) todoService //using @Inject
    ){
        //this.todoService = todoService; //using @Inject
        console.log(todoService);
    }

    onClick(event, value){
        this.todoService.addTodo(value);
        //console.log("clicked:" + value, event);
        console.log(this.todoService.todos);
    }
}

//TodoInput.parameters = [[TodoService]] fixed with --emitDecoratorMetadata
