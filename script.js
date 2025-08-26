// ===== PROJECT DATA =====
const projects = [
  {
    title: "Todo List App",
    description:
      "An elegant task manager built with vanilla JavaScript. Includes localStorage for persistence, intuitive UI, and responsive design.",
    link: "https://github.com/your-github-username/todo-list"
  },
  {
    title: "Image Slider",
    description:
      "A smooth, responsive image carousel with autoplay, manual navigation, and clean transitions — built from scratch with no libraries.",
    link: "https://github.com/your-github-username/image-slider"
  },
  {
    title: "Simple Calculator",
    description:
      "Fully functional calculator with keyboard support, input validation, and a clean layout. A great example of DOM-based app logic.",
    link: "https://github.com/your-github-username/calculator"
  }
];

// ===== INJECT PROJECT CARDS =====
const projectGrid = document.getElementById('project-grid');

projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'project-card hidden';

  card.innerHTML = `
    <div class="card-content">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View on GitHub →</a>
    </div>
  `;

  projectGrid.appendChild(card);
});

// ===== SCROLL FADE-IN ANIMATION =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target); // Animate only once
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.project-card').forEach(card => {
  observer.observe(card);
});

// ===== TYPING EFFECT IN HERO SECTION =====
const heroText = "I build clean, functional, and responsive websites using modern frontend technologies.";
const heroParagraph = document.querySelector('.hero p');
let i = 0;

function typeHeroText() {
  if (i < heroText.length) {
    heroParagraph.textContent += heroText.charAt(i);
    i++;
    setTimeout(typeHeroText, 30);
  }
}

heroParagraph.textContent = "";
typeHeroText();

// ===== SMOOTH SCROLL FOR ANCHORS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});