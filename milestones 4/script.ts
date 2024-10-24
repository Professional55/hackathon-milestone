const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;
// Grab the form and preview elements


// Add event listener to update the preview as the user types
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); //prevent pagr reload

  
    // collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLTextAreaElement).value
    const education = (document.getElementById('education') as HTMLTextAreaElement).value
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

  
   
   // generate the resume content dynamically
    const resumeHTML = `
       <h2><b>Editable Resume Builder</b></h2>
       <3>Personal Information</h3>
       <p><b>Name:</b><span contenteditable ="true">${name}</span></p>
       <p><b>Email:</b><span contenteditable ="true">${email}<span></p>
       <p><b>Phone:</b><span contenteditable ="true">${phone}</span></p>

       <h3>Education</h3>
       <p contenteditable ="true">${education} </p>
       
       <h3>Experience</h3>
       <p contenteditable ="true">${experience}</p>

       <h3>Skills</h3>
       <p contenteditable ="true">${skills} </p>
       `;

       //Display the generated resume
       if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
       } else {
        console.error("the resume display elements is missing")
       }
    });
  
