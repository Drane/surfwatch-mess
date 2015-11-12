/**
 * Created by jochen on 28/10/15.
 */
export class TodoService{
    /*todos:string[] = [
        "eat",
        "sleep",
        "code"
    ];*/
    todos:TodoModel[] = [
        new TodoModel("eat", "nom nom"),
        new TodoModel("sleep", "zzzz"),
        new TodoModel("code", "type type")
    ];



    //addTodo(value:any):void {
    addTodo(value:TodoModel):void {
        this.todos.push(value);
    }

}

export class TodoModel{
    static STARTED:string = "started";
    static COMPLETED:string = "completed";

    status:String = TodoModel.STARTED;

    constructor(
        public title:string = "",
        public action:string = ""
    ){}

    toggle():void{
        if(this.status == TodoModel.STARTED) this.status = TodoModel.COMPLETED;
        else this.status = TodoModel.STARTED;

    }
}
