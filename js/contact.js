// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAsP0g3VtY5YrBh46-ZK3ncUWuaONyX9yE",
    authDomain: "final-project-d2ccc.firebaseapp.com",
    databaseURL: "https://final-project-d2ccc.firebaseio.com",
    projectId: "final-project-d2ccc",
    storageBucket: "final-project-d2ccc.appspot.com",
    messagingSenderId: "608145295124"
  };
  firebase.initializeApp(config);
//refference messages collection
  var messagesRef = firebase.database().ref('messages');
//listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
//submit form
function submitForm(e) {
  e.preventDefault();
  
  var name = getInputVal('name');
  var mail = getInputVal('mail');
  var msg = getInputVal('msg');

    saveMessage(name, mail, msg);
    //clear form
    document.getElementById('contactForm').reset();
}

//function to get elements id
function getInputVal(id){
  return document.getElementById(id).value;
}

//save messages
  function saveMessage(name, mail, msg){
  var messagesRef = firebase.database().ref('messages');
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    mail: mail,
    msg: msg
  });
}