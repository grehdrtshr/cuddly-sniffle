
var firebaseConfig = {
    apiKey: "AIzaSyADlSrG8tkdVedUkhQwiXLvlbZBzLaBkGw",
    authDomain: "kwitter-3bd12.firebaseapp.com",
    databaseURL: "https://kwitter-3bd12-default-rtdb.firebaseio.com",
    projectId: "kwitter-3bd12",
    storageBucket: "kwitter-3bd12.appspot.com",
    messagingSenderId: "599131973006",
    appId: "1:599131973006:web:7dfad16b91109ade39b0df"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
