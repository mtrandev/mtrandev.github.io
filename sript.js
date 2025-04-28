const projects = [
    {
      title: "BookStore Web App",
      description: "Full-stack application using React, Node.js, and MongoDB.",
      link: "https://github.com/mtrandev/BookStore"
    },
    {
      title: "Organic Shop Website",
      description: "Responsive e-commerce site using HTML5, CSS3, JavaScript, and Bootstrap.",
      link: "http://biocherry.byethost12.com/"
    }
  ];
  
  // Function to display projects
  const projectsGrid = document.getElementById('projects-grid');
  
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>
    `;
    projectsGrid.appendChild(projectCard);
  });
  