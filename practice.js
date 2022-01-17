var firebaseConfig = {
    apiKey: "AIzaSyDIB4zLbOiceUBofnOyGSlaXUcINdAfPUA",
    authDomain: "mycity-qx9s.firebaseapp.com",
    databaseURL: "https://mycity-qx9s-default-rtdb.firebaseio.com",
    projectId: "mycity-qx9s",
    storageBucket: "mycity-qx9s.appspot.com",
    messagingSenderId: "752529599435",
    appId: "1:752529599435:web:0f14ed7638e529b0ea244e",
    measurementId: "G-7L2VRB08LV"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function addUser(){
user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose : "addinguser"
});



}