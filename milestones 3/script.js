// Grab the form and preview elements
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
// Add event listener to handle form submission and update the preview
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Get values from the form fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Create the HTML structure for the dynamic resume
    var resumeHTML = "\n        <h2><b>Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b> ".concat(name, "</p>\n        <p><b>Email:</b> ").concat(email, "</p>\n        <p><b>Phone:</b> ").concat(phone, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    // Display the resume in the resume-display div
    resumeDisplayElement.innerHTML = resumeHTML;
    // Optionally, clear the form after submission
    form.reset();
});
