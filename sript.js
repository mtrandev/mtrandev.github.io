const projects = [
    {
      title: "BookStore Web App",
      description: "Full-stack web app with React, Node.js, and MongoDB.",
      link: "https://github.com/mtrandev/BookStore"
    },
    {
      title: "Organic Shop Website",
      description: "Responsive e-commerce site built with HTML5, CSS3, JavaScript, and Bootstrap.",
      link: "http://biocherry.byethost12.com/"
    }
  ];
  
  const projectsGrid = document.getElementById('projects-grid');
  
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>
    `;
    projectsGrid.appendChild(projectCard);
  });
    const faders = document.querySelectorAll('.fade-in, .fade-in-delay, .fade-in-delay2');
  const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  
  const subtitles = ["Web Developer", "Mobile Developer", "Lifelong Learner"];
  let subtitleIndex = 0;
  const subtitleElement = document.getElementById('animated-subtitle');
  
  setInterval(() => {
    subtitleIndex = (subtitleIndex + 1) % subtitles.length;
    subtitleElement.textContent = subtitles[subtitleIndex];
  }, 3000);
  