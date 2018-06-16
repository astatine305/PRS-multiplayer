// Initialize Firebase
const config = {
    apiKey: "AIzaSyAN0cKu5S0p_-4pDZg6M2tel1c0pw0jThE",
    authDomain: "mpprs-e491a.firebaseapp.com",
    databaseURL: "https://mpprs-e491a.firebaseio.com",
    projectId: "mpprs-e491a",
    storageBucket: "",
    messagingSenderId: "744441324669"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

$("#newPlayerBtn").on("click", function(e){
  e.preventDefault(e);

firebase.auth().signInAnonymously().catch(function(error){
  alert("help me");
  var errorCode = error.code;
  var errorMessage = error.message;
})

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    // ...
  } else {
    // User is signed out.
    // ...
  }
  // ...
});
 
})












//   var maxPlayer = 2;
//   var playerList = [];

// // Click event listener

// $("#newPlayerBtn").on("click", function(e){
//   e.preventDefault(e);

//   var userName = $(".newPlayerName").val().trim();
//     database.ref().push({
//         Name: userName 
//     })
// })
// console.log(firebase.database().ref(parent));