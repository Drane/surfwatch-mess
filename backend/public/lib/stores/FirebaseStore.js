var FirebaseStore = (function () {
    function FirebaseStore() {
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
    FirebaseStore.prototype.push = function (newString) {
        this.ref.push({
            username: this.displayName,
            text: newString
        });
    };
    FirebaseStore.prototype.authWithTwitter = function () {
        var _this = this;
        console.log("authWithTwitter");
        this.ref.authWithOAuthPopup("twitter", function (error, authData) {
            if (error) {
                console.error("FirebaseStore::authWithTwitter() Authentication Failed!", error);
            }
            else {
                console.log("FirebaseStore::authWithTwitter() Authenticated successfully with payload:", authData);
                _this.afterLogin(authData);
            }
        });
    };
    FirebaseStore.prototype.signOut = function () {
        console.log("FirebaseStore::signOut()");
        this.ref.unauth();
        this.isLoggedIn = false;
    };
    FirebaseStore.prototype.register = function (email, password) {
        console.log("FirebaseStore::register(email: %s password: %s)", email, password);
        this.ref.createUser({
            email: email,
            password: password
        }, function (error, userData) {
            if (error) {
                switch (error.code) {
                    case "EMAIL_TAKEN":
                        console.error("The new user account cannot be created because the email is already in use.");
                        break;
                    case "INVALID_EMAIL":
                        console.error("The specified email is not a valid email.");
                        break;
                    default:
                        console.error("Error creating user:", error);
                }
            }
            else {
                console.log("Successfully created user account with uid:", userData.uid);
            }
        });
    };
    FirebaseStore.prototype.login = function (email, password) {
        console.log("FirebaseStore::login(email: %s password: %s)", email, password);
        this.ref.authWithPassword({
            email: email,
            password: password
        }, function (error, authData) {
            if (error) {
                console.error("Login Failed!", error);
            }
            else {
                console.log("Authenticated successfully with payload:", authData);
                this.afterLogin(authData); //bug with this ctx
            }
        }.bind(this), { remember: "sessionOnly" });
    };
    FirebaseStore.prototype.afterLogin = function (authData) {
        console.log("FirebaseStore::afterLogin()", authData);
        this.authData = authData;
        this.isLoggedIn = true;
        this.displayName = authData[authData.provider].displayName || authData[authData.provider].email;
        this.profileImageURL = authData[authData.provider].profileImageURL;
    };
    return FirebaseStore;
})();
exports.FirebaseStore = FirebaseStore;
