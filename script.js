function getUsername() {
  const username = document.getElementById("usernameInput").value;
  console.log("Username yang dimasukkan:", username);

   // Misalnya, menampilkan nilai username di elemen dengan ID "displayUsername"
   const displayElement = document.getElementById("displayUsername");
   displayElement.textContent = "Username: " + username;
}
