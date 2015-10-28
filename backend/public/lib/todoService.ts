/**
 * Created by jochen on 28/10/15.
 */
export class TodoService{
    todos:string[] = [
        "eat",
        "sleep",
        "code"
    ];

    addTodo(value:any):void {
        this.todos.push(value);
    }
}
