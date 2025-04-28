// Projects Data
const projects = [
    {
      title: "BookStore Web App",
      description: "Full-stack app built with React, Node.js, and MongoDB.",
      link: "https://github.com/mtrandev/BookStore"
    },
    {
      title: "Organic Shop Website",
      description: "Responsive e-commerce site built with HTML, CSS, JavaScript, and Bootstrap.",
      link: "http://biocherry.byethost12.com/"
    }
  ];
  
  // Insert projects dynamically
  const projectsContainer = document.getElementById('projects-container');
  
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank" class="btn">View Project</a>
    `;
    projectsContainer.appendChild(card);
  });
  