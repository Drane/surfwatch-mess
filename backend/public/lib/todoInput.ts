/**
 * Created by jochen on 28/10/15.
 */
import {Component, View/*, Inject*/ /*using @Inject*/, FORM_DIRECTIVES} from "angular2/angular2";
import {TodoService, TodoModel} from "./todoService";

@Component({
    selector: 'todo-input'
})
@View({
    directives:[FORM_DIRECTIVES],
    styles: [`
        form{
            border-bottom: 1px solid black;
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
        }
    `],
    template: `
        <!--<input type="text" #log-me>
        <button (click)="onClick($event, logMe.value)">Log Input</button>-->
        <form (ng-submit)="onSubmit()">
            <!--<input type="text" [(ng-model)]="todoModel"> {{todoModel}}-->
            Title: <input type="text" #title [(ng-model)]="todoModel.title">
            Action: <input type="text" [(ng-model)]="todoModel.action">
            <button type="submit" (click)="title.focus()">Add Todo</button>
        </form>
    `
})
export class TodoInput{
    //todoService; //using @Inject
    //todoModel;
    todoModel: TodoModel = new TodoModel();
    constructor(
        public todoService:TodoService //NOT using @Inject
        //@Inject(TodoService) todoService //using @Inject
    ){
        //this.todoService = todoService; //using @Inject
        console.log(todoService);
    }

    /*onClick(event, value){
        this.todoService.addTodo(value);
        //console.log("clicked:" + value, event);
        console.log(this.todoService.todos);
    }*/

    onSubmit(){
        this.todoService.addTodo(this.todoModel);
        this.todoModel = new TodoModel();
    }
}

//TodoInput.parameters = [[TodoService]] fixed with --emitDecoratorMetadata
