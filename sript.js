document.addEventListener('DOMContentLoaded', () => {
    // Данни за проектите
    const projectsData = [
      {
        title: "BookStore Web App",
        description: "Full-stack приложение, изградено с React, Node.js и MongoDB.",
        link: "https://github.com/mtrandev/BookStore"
      },
      {
        title: "Organic Shop Website",
        description: "Адаптивен уебсайт за онлайн магазин, изграден с HTML, CSS, JavaScript и Bootstrap.",
        link: "http://biocherry.byethost12.com/"
      }
    ];
  
    // Референция към контейнера за проекти
    const projectsContainer = document.getElementById('projects-container');
  
    // Функция за създаване на HTML за проектна карта
    function createProjectCard(project) {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank" class="btn">Вижте проекта</a>
      `;
      return card;
    }
  
    // Функция за добавяне на всички проекти към контейнера
    function displayProjects(projects) {
      projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsContainer.appendChild(projectCard);
      });
    }
  
    // Извикване на функцията за показване на проектите при зареждане на DOM
    displayProjects(projectsData);
  
    // Бонус: Плавно превъртане при кликване на навигационните линкове
    const navLinks = document.querySelectorAll('#navbar a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });