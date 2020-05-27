// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "xxxxx",
    authDomain: "xxxxx",
    databaseURL: "xxxxx",
    projectId: "xxxxx",
    storageBucket: "xxxxx",
    messagingSenderId: "xxxxx"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('appointment-form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var service_type = getInputVal('service-type');
    var vehical_make = getInputVal('vehical-make');
    var vehical_model = getInputVal('vehical-model');
    var appointment_date = getInputVal('appointment-date');
    var appointment_time = getInputVal('appointment-time');
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(service_type, vehical_make, vehical_model, appointment_date, appointment_time, name, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('appointment-form').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(service_type, vehical_make, vehical_model,appointment_date, appointment_time, name, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        service_type: service_type,
        vehical_make: vehical_make, 
        vehical_model: vehical_model,
        appointment_date:appointment_date,
        appointment_time:appointment_time,
        name: name,
        email:email,
        phone:phone,
        message:message
    });
  }