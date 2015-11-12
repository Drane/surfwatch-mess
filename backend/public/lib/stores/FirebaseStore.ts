/**
 * Created by jochen on 12/11/15.
 */
import {Inject} from "angular2/angular2";

export class FirebaseStore {

    firebaseUrl: string;
    ref: Firebase;
    isLoggedIn: boolean;
    authData: any;
    displayName: string;
    profileImageURL: string;

    constructor(){
        this.firebaseUrl = "https://prefab.firebaseio.com/todos";
        this.ref = new Firebase(this.firebaseUrl);
        /*this.ref.on("value", snapshot => {
            console.log("FirebaseStore::constructor snapshot.val=", snapshot.val());
            this.data = snapshot.val();
        });*/
       /* this.ref.onAuth((user) => {
            console.log("FirebaseStore::constructor onAuth:", user);
            this.authData = user;
            this.isLoggedIn = true;
        });*/
    }

    push(newString: string){
        this.ref.push({
            username: this.displayName,
            text: newString
        });
    }

    authWithTwitter(){
        console.log("authWithTwitter");
        this.ref.authWithOAuthPopup("twitter", (error, authData) => {
            if(error){
                console.error("FirebaseStore::authWithTwitter() Authentication Failed!", error);
            }else{
                console.log("FirebaseStore::authWithTwitter() Authenticated successfully with payload:", authData);
                this.authData = authData;
                this.isLoggedIn = true;
                this.displayName = authData.twitter.displayName;
                this.profileImageURL = authData.twitter.profileImageURL;
            }
        });
    }

    signOut(){
        console.log("FirebaseStore::signOut()");
        this.ref.unauth();
        this.isLoggedIn = false;
    }

}