document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const status = document.getElementById('formStatus');
  
    if (name && email && message) {
      status.textContent = "Thanks for contacting me, " + name + "!";
      status.style.color = "green";
      this.reset();
    } else {
      status.textContent = "Please fill in all fields.";
      status.style.color = "red";
    }
  });