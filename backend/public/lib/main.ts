/**
 * Created by jochen on 28/10/15.
 */
import {bootstrap, provide, Component, View, Inject} from "angular2/angular2";
import {TodoInput} from "./todoInput";
import {TodoService} from "./todoService";
import {TodoList} from "./todoList";
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {AuthHttp} from 'angular2-jwt/angular2-jwt';

@Component({
    selector: 'app'
})
@View({
    directives: [TodoInput, TodoList],
    template: `
        <div>
            <todo-input></todo-input>
            <todo-list></todo-list>
            <button (click)="getThing()">getThing</button>
        </div>
    `
})
class App {

    thing: string;

    constructor(@Inject(AuthHttp) public authHttp:AuthHttp) {}

    getThing() {
        console.log("in getThing()", this.authHttp);
        this.authHttp.get('http://example.com/api/thing')
            .map(res => res.json())
            .subscribe(
                data => this.thing = data,
                err => console.log(error),
                () => console.log('Request Complete')
            );
    }
}

bootstrap(App, [
    TodoService,
    HTTP_PROVIDERS,
    provide(AuthHttp, { useFactory: () => {
        console.log("in AuthHttp factory");
        return new AuthHttp(/*{
            headerName: "YOUR_HEADER_NAME",
            headerPrefix: "YOUR_HEADER_PREFIX",
            tokenName: "YOUR_TOKEN_NAME",
            tokenGetter: "YOUR_TOKEN_GETTER_FUNCTION",
            noJwtError: true
        }*/)
    }})
])
/*
class App{

    thing: string;

    constructor(public authHttp:AuthHttp){}

    getThing(){
        this.authHttp.get("")
            .map(res => res.json())
            .subscribe(
                data => this.thing = data,
                err => console.error(err),
                () => console.log('Request Complete')
            );
    }

}

// Any component requesting the service will get the same instance
bootstrap(App, [
    TodoService,
    HTTP_PROVIDERS,
        provide(AuthHttp, { useFactory: () => {
            return new AuthHttp()
        }})
    ]);*/
