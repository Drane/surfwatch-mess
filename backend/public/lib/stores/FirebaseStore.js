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
                _this.authData = authData;
                _this.isLoggedIn = true;
                _this.displayName = authData.twitter.displayName;
                _this.profileImageURL = authData.twitter.profileImageURL;
            }
        });
    };
    FirebaseStore.prototype.signOut = function () {
        console.log("FirebaseStore::signOut()");
        this.ref.unauth();
        this.isLoggedIn = false;
    };
    return FirebaseStore;
})();
exports.FirebaseStore = FirebaseStore;
