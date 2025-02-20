document.getElementById("contact").addEventListener("submit", function(event) {
    const email = document.getElementById("Email").value;
    const emailConfirm = document.getElementById("Email-Confirmation").value;
    
    if (email !== emailConfirm) {
        alert("Email and Email Confirmation do not match.");
        event.preventDefault(); // Prevent form submission
    }
});
