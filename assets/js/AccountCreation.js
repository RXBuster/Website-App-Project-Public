function createAccount(event) {
    event.preventDefault();
  
    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Validation (Add your own validation logic here)
  
    // Display message
    const message = document.getElementById('message');
    message.innerHTML = `Account created successfully!<br>Username: ${username}<br>Email: ${email}`;
  }