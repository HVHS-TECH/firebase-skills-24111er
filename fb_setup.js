/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config

// Input:  n/a
// Return: n/a
/**************************************************************/
const firebaseConfig = {
  apiKey: "AIzaSyAoBYKxTbO67RXBoFDg1nRWLFdObojIQNo",
  authDomain: "emme-rodwell-12comp.firebaseapp.com",
  databaseURL: "https://emme-rodwell-12comp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "emme-rodwell-12comp",
  storageBucket: "emme-rodwell-12comp.firebasestorage.app",
  messagingSenderId: "786622746866",
  appId: "1:786622746866:web:71bf252b061e566422806b"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);
