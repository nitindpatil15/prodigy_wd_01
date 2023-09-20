document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    
    if(this.checkValidity()) {
        alert("Form is valid. You can send the data to the server here.");
    } else {
        alert("Please ensure all fields are filled out correctly.");
    }
});
