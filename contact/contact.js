function validateForm() {
  // Get values from input fields
  const username = document.getElementById("fuser").value;
  const country = document.getElementById("country").value;
  const subject = document.getElementById("subject").value;

  
  if (username === '' || country === '' || subject === '') {
      alert("Please fill in all the fields.");
  } else {
      
      alert("Message successfully sent!");
  }
}
 