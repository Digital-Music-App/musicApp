function validateForm() {
  // Get values from input fields
  var username = document.getElementById("fuser").value;
  var country = document.getElementById("country").value;
  var subject = document.getElementById("subject").value;

  
  if (username === '' || country === '' || subject === '') {
      alert("Please fill in all the fields.");
  } else {
      
      alert("Message successfully sent!");
  }
}
 