/**
 * Created by jochen on 28/10/15.
 */
import {bootstrap, provide, Component, View, Inject, NgFor, NgModel} from "angular2/angular2";
import {TodoInput} from "./todoInput";
import {TodoService} from "./todoService";
import {TodoList} from "./todoList";
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {AuthHttp} from 'angular2-jwt/angular2-jwt';
import {TodoService} from "./todoService";
import {FirebaseStore} from "./stores/FirebaseStore";
import {FirebaseEventPipe} from "./pipes/firebasepipe";

@Component({
    selector: 'app'
})
@View({
    directives: [TodoInput, TodoList, NgFor, NgModel],
    pipes: [FirebaseEventPipe],
    styles: [`
        .twitter-small {
            width: 16px;
            height: 16px;
            margin-top: 10px;
            background: url("images/Twitter_logo_white_16.png") no-repeat;
        }
    `],
    template: `
        <div>
            <!--<div class="col s12">
                <div class="input-field col s6">-->
                    <input #email type="email" placeholder="email">
                    <input #password type="password" placeholder="password">
                    <button (click)="fb.register(email.value, password.value)">Register</button>

                    <input #login-email type="email" placeholder="email" value="jochen.szostek@gmail.com">
                    <input #login-password type="password" placeholder="password" value="ZpdtaJKJ46PgkyZf">
                    <button (click)="fb.login.apply(fb, [loginEmail.value, loginPassword.value])">Login</button>
                    <!--<label for="email">Email</label>-->
<!--                </div>
            </div>
-->
            <!--<todo-input></todo-input>
            <todo-list></todo-list>
            <button (click)="getThing()">getThing</button>-->
            <div [hidden]="fb.isLoggedIn">
                Sign in: <button (click)="fb.authWithTwitter()" >authWithTwitter</button>
            </div>

            <div [hidden]="! fb.isLoggedIn">
                <img [src]="fb.profileImageURL" alt="profileImageURL">
                <button (click)="fb.signOut()" >sign out</button>
            </div>


            <!--<a class="waves-effect waves-light btn"  (click)="fb.authWithTwitter()" [hidden]="fb.isLoggedIn">
                <i class="twitter-small left"></i>Twitter</a>-->

            <!--<form (ng-submit)="onSubmit()">-->
                <!--Message: <input type="text" #title (keyup)="doneTyping($event)" placeholder="Enter a message...">-->

            <div id="chat-box" [hidden]="! fb.isLoggedIn">
                <div class="col s12">
                    <div class="input-field col s6">
                      <input id="message" type="text" class="validate" (keyup)="doneTyping($event)">
                      <label for="message">Message</label>
                    </div>
                </div>

                <br/>Messages:
                <ul>
                    <li *ng-for="#message of fb.firebaseUrl | firebaseevent:'child_added'">
                        <strong>{{message.username}}</strong>: {{message.text}}
                    </li>
                </ul>
            </div>


                <!--<button type="submit" (click)="title.focus()">Add Todo</button>-->
            <!--</form>-->
        </div>
    `
})
class App {

    thing: string;
    data: Array;

    constructor(/*@Inject(AuthHttp) public authHttp:AuthHttp*/ public fb: FirebaseStore) {
        this.data = ["test1", "test2"];
        fb.ref.on("value", (snapshot) => {
            //this.data = snapshot.val();
            window.temp = snapshot.val();
            console.log("hier:", snapshot.val());
        });
    }

    doneTyping($event) {
        //$event.preventDefault();
        console.log("App::doneTyping $event.target.value:", $event.target.value);
        if($event.which === 13) {
            this.addMessage($event.target.value);
            $event.target.value = null;
        }
    }

    addMessage(message:string){
        this.fb.push(message);
    }


    /*getThing() {
        console.log("in getThing()", this.authHttp);
        this.authHttp.get('http://example.com/api/thing')
            .map(res => res.json())
            .subscribe(
                data => this.thing = data,
                err => console.log(error),
                () => console.log('Request Complete')
            );
    }*/
}

bootstrap(App, [
    TodoService,
    FirebaseStore,
    HTTP_PROVIDERS,
    provide(AuthHttp, { useFactory: () => {
        console.log("in AuthHttp factory");
        return new AuthHttp({
            //headerName: "YOUR_HEADER_NAME",
            //headerPrefix: "YOUR_HEADER_PREFIX",
            //tokenName: "YOUR_TOKEN_NAME",
            //tokenGetter: "YOUR_TOKEN_GETTER_FUNCTION",
            noJwtError: true
        })
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
