(function() {
  const password = prompt("Enter the password to view this portfolio:");

  // Change this to your desired password
  const correctPassword = "mypassword";

  if (password === correctPassword) {
    document.getElementById("content").style.display = "block";
  } else {
    alert("Incorrect password. You cannot view this portfolio.");
    document.body.innerHTML = "<h2>Access denied</h2>";
  }
})();
