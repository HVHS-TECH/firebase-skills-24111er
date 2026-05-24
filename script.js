/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
var scoreTable;

scoreTable = {
  users: {
    Geoff: 103,
    Bob: 54,
    Katy: 305
  }
}

function helloWorld(){
  console.log("Running helloWorld()")
  firebase.database().ref('/').set(
    {
      message: 'Hello World!'
    }
  )
}

function changeMessage() {
  console.log("changing message")
  firebase.database().ref('/message').set("Kia Ora")
}

function goodbye() {
  console.log("Goodbye")
  firebase.database().ref('/message').set('Ka kite ano')
}

function readMessage() {
  console.log("Reading Message")
  firebase.database().ref('/message').once('value', showMessage)
}

function showMessage(snapshot) {
    console.log("Running showMessage(). The message is " + snapshot.val())
    HTML_OUTPUT.innerHTML = snapshot.val();
}

function safeRead() {
  console.log("Reading Message safeRead()")
  firebase.database().ref('/message').once('value', safeMessage, readError)

}

function safeMessage(firebase_data) {
  var srData = firebase_data.val();
  if (srData == null) {
    console.log("There was no record of the data you were trying to find")
  } else {
    console.log("Running safeMessage(). The message is " + firebase_data.val())
  }

}

function readListener() {
  console.log("Setting a listener")
  firebase.database().ref('/message').on('value', displayListener, readError)

}

function displayListener(snapshot) {
  console.log(snapshot.val())
  HTML_OUTPUT.innerHTML = snapshot.val();
}

function stopListener(snapshot) {
  firebase.database().ref('/message').off()
}

function createTable() {
  console.log("Creating Table")
  firebase.database().ref('/High Scores').set(scoreTable)
}

function updateScore() {
  console.log("Updating Table")
  firebase.database().ref('/High Scores/users').update({
    Amy:205
  })
}

function readScore() {
  console.log("Reading high scores")
  firebase.database().ref('/High Scores/users').once('value', displayScore, readError)
}

function displayScore(snapshot_score) {
  console.log("Displaying Score")
  var highScore = snapshot_score.val();
  console.log("Geoff got " + highScore["Geoff"] + " points")
  HTML_OUTPUT.innerHTML = "Geoff got " + highScore["Geoff"] + " points";

}

function readTable() {
  console.log("Reading Table")
  firebase.database().ref('/High Scores/users').once('value', displayTable, readError)
}

// function displayTable(snapshot_table) {
//   console.log("Displaying Table")
//   var scoreTable = snapshot_table.val();
//   var users = Object.keys(scoreTable);
//   HTML_OUTPUT.innerHTML = "";
//   console.log(users)
//   for (i = 0; i < users.length; i++) {
//     var keys = users[i];
//     console.log(keys + " got " + scoreTable[keys] + " points")
//     HTML_OUTPUT.innerHTML += "<li>" + keys + " got " + scoreTable[keys] + " points</li>";
//   }

// }

function displayTable(snapshot) {
  snapshot.forEach(showScoresAll)
  
}

function showScoresAll(child) {
  console.log(userNames + child.val())
}


