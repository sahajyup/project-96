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
//ADD YOUR FIREBASE LINKS HERE

    user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

function addroom()

{
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html"

}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - "+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });
});
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="_page.Html"
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
   window.location = "index.html";

}








