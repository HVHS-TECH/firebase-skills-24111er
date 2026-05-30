/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/
var GLOBAL_user;
var authenticationListener;
logIn();


function readError(error) {
    console.log("An error has occured reading the message")
    console.log(error)
}

function logIn () {
   authenticationListener = firebase.auth().onAuthStateChanged(handleLogIn);
 }

async function handleLogIn(_user) {
   if (_user) {
     console.log("User is logged in")
     GLOBAL_user = _user;
   } else {
     console.log("User is NOT logged in")
     await logInPopup();
   }

}

async function logInPopup() {
  var provider = new firebase.auth.GoogleAuthProvider();
  var result = await firebase.auth().signInWithPopup(provider)
  GLOBAL_user = result.user;
    console.log("The user has logged in")
    console.log(GLOBAL_user)
    firebase.database().ref('/googleUsers/').update(
        {[GLOBAL_user.uid] : {
            DisplayName: GLOBAL_user.displayName,
            Email: GLOBAL_user.email,
            ProfilePicture: GLOBAL_user.photoURL
        }
    })
    
}


function logOut() {
    authenticationListener();
    firebase.auth().signOut();
    console.log("the user has logged out")
}
