// Import required library for PDF generation (if using html2pdf)
// import html2pdf from 'html2pdf.js';

  const form = document.getElementById("resume-form") as HTMLFormElement;
  const resumeDisplay = document.getElementById("resume-display") as HTMLElement;
  const shareableLinkContainer = document.getElementById("shareable-link-container") as HTMLElement;
  const shareableLink = document.getElementById("shareable-link") as HTMLAnchorElement;
  const downloadBtn = document.getElementById("download-pdf") as HTMLButtonElement;


  // handle form submission 
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent page reload
    
   
   // collect input values 
    const username = (document.getElementById("username") as HTMLInputElement).value;
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    const resumeData = {
      name,
      email,
      phone,
      education,
      experience,
      skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // saving the data locally

    const resumeHTML = `
      <h2>${name}'s Resume</h2>
      <p><strong>Username:</strong> ${username}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h3>Education</h3>
      <p>${education}</p>
      <h3>Experience</h3>
      <p>${experience}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
    `;

    //Display the generated resume
    resumeDisplay.innerHTML = resumeHTML;
    
    const shareableURL =
    `${window.location.origin}?username=${encodeURIComponent(username)}`
    // display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLink.href = shareableURL;
    shareableLink.textContent = shareableURL;
  });

  // handle pdf download
  downloadBtn.addEventListener('click', () => {
     window.print();
  });

  //prefill the form based on the username in the URL
  window.addEventListener('DOMContentLoaded' , () => {
    const urlPrams = new URLSearchParams(window.location.search);
    const username = urlPrams.get('username');
    if (username) {
      const savedResumeData = localStorage.getItem(username);
      if (savedResumeData) {
        const resumeData = JSON.parse(savedResumeData);
    (document.getElementById("username") as HTMLInputElement).value;
    (document.getElementById("name") as HTMLInputElement).value =
    resumeData.name;
    (document.getElementById("email") as HTMLInputElement).value =
    resumeData.email;
    (document.getElementById("phone") as HTMLInputElement).value =
    resumeData.phone;
    (document.getElementById("education") as HTMLTextAreaElement).value =
    resumeData.education;
    (document.getElementById("experience") as HTMLTextAreaElement).value =
    resumeData.experience;
    (document.getElementById("skills") as HTMLTextAreaElement).value =
    resumeData.skills;
  }
    }
  });