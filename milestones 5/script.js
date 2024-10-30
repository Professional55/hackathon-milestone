// Import required library for PDF generation (if using html2pdf)
// import html2pdf from 'html2pdf.js';
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    var resumeDisplay = document.getElementById("resume-display");
    var shareableLinkContainer = document.getElementById("shareable-link-container");
    var shareableLink = document.getElementById("shareable-link");
    var downloadBtn = document.getElementById("download-pdf");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        displayResume();
        generateShareableLink();
        shareableLinkContainer.style.display = "block";
    });
    downloadBtn.addEventListener("click", downloadPDF);
    function displayResume() {
        var username = document.getElementById("username").value;
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills").value;
        resumeDisplay.innerHTML = "\n      <h2>".concat(name, "'s Resume</h2>\n      <p><strong>Username:</strong> ").concat(username, "</p>\n      <p><strong>Email:</strong> ").concat(email, "</p>\n      <p><strong>Phone:</strong> ").concat(phone, "</p>\n      <h3>Education</h3>\n      <p>").concat(education, "</p>\n      <h3>Experience</h3>\n      <p>").concat(experience, "</p>\n      <h3>Skills</h3>\n      <p>").concat(skills, "</p>\n    ");
    }
    function generateShareableLink() {
        var name = document.getElementById("name").value;
        var url = new URL(window.location.href);
        url.searchParams.set("name", name);
        shareableLink.href = url.toString();
        shareableLink.textContent = url.toString();
    }
    function downloadPDF() {
        var options = {
            margin: 1,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        // Use html2pdf or a similar library to generate the PDF
        html2pdf().set(options).from(resumeDisplay).save();
    }
});
