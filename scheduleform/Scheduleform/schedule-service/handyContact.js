// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBoYr4CwgHTkzsxtGbBFW3cQX4Yf6ocg4E",
    authDomain: "handyman-c39ac.firebaseapp.com",
    databaseURL: "https://handyman-c39ac.firebaseio.com",
    projectId: "handyman-c39ac",
    storageBucket: "",
    messagingSenderId: "680720300138"
  };
  firebase.initializeApp(config);
//refference messages collection
  var messagesRef = firebase.database().ref('messages');
//listen for form submit
  document.getElementById('scheduleForm').addEventListener('submit', submitForm);
//submit form
function submitForm(e) {
  e.preventDefault();
  
  var a1 = getInputVal('opal_schedule_type1');
  var a2 = getInputVal('opal_schedule_type2');
  var a3 = getInputVal('opal_schedule_type3');
  var a4 = getInputVal('opal_schedule_type4');
  var a5 = getInputVal('opal_schedule_type5');
  var a6 = getInputVal('opal_schedule_type6');
  var a7 = getInputVal('opal_schedule_explain');
  var a8 = getInputVal('opal_schedule_timeofday1');
  var a9 = getInputVal('opal_schedule_timeofday2');
  var a10 = getInputVal('opal_schedule_timeofday3');
  var a11 = getInputVal('scheduleDate');
  var a12 = getInputVal('scheduleDateTime');
  var a13 = getInputVal('opal_schedule_name');
  var a14 = getInputVal('opal_schedule_email');
  var a15 = getInputVal('opal_schedule_phone');
  var a16 = getInputVal('opal_schedule_zip');
  var a17 = getInputVal('opal_schedule_address');
  

    saveMessage(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17);
    //clear form
    document.getElementById('scheduleForm').reset();
}

//function to get elements id
function getInputVal(id){
  return document.getElementById(id).value;
}

//save messages
  function saveMessage(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17){
  var messagesRef = firebase.database().ref('messages');
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    a1 :a1,
    a2  :a2,
    a3 :a3,
    a4 :a4,
    a5 :a5,
    a6  :a6,
    a7 :a7,
    a8 :a8,
    a9 :a9,
    a10  :a10,
    a11 :a11,
    a12 :a12,
    a13 :a13,
    a14  :a14,
    a15 :a15,
    a16 :a16,
    a17 : a17

  });
}