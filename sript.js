document.addEventListener('DOMContentLoaded', () => {
    // Project Data
    const projectsData = [
      {
        title: "BookStore Web App",
        description: "A full-stack web application built with React, Node.js, and MongoDB.",
        link: "https://github.com/mtrandev/BookStore"
      },
      {
        title: "Organic Shop Website",
        description: "A responsive e-commerce website developed using HTML, CSS, JavaScript, and Bootstrap.",
        link: "http://biocherry.byethost12.com/"
      }
      // Add more projects here
    ];
  
    // Get the projects container
    const projectsContainer = document.getElementById('projects-container');
  
    // Function to create a project card HTML
    function createProjectCard(project) {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <h3><span class="math-inline">\{project\.title\}</h3\></4\>
  <p\></span>{project.description}</p>
        <a href="${project.link}" target="_blank" class="button primary">View Project</a>
      `;
      return card;
    }
  
    // Function to display all projects
    function displayProjects(projects) {
      projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsContainer.appendChild(projectCard);
      });
    }
  
    // Display projects on page load
    displayProjects(projectsData);
  
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu after clicking a link
        const navbarLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');
        if (window.innerWidth <= 768 && navbarLinks.classList.contains('active')) {
          navbarLinks.classList.remove('active');
          hamburger.classList.remove('open');
        }
      });
    });
  
    // Hamburger menu functionality for mobile
    const hamburger = document.querySelector('.hamburger');
    const navbarLinks = document.querySelector('.nav-links');
  
    if (hamburger && navbarLinks) {
       hamburger.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
        hamburger.classList.toggle('open');
      });
    }
  });