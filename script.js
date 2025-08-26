// 2. Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 3. Scroll-to-Top Button
const scrollBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 6. Scroll-Triggered Animations (Intersection Observer)
const animatedEls = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
animatedEls.forEach(el => observer.observe(el));

// 8. Animated Counter
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = +el.getAttribute('data-target');
      let current = 0;
      const increment = Math.ceil(target / 100);

      const updateCounter = () => {
        current += increment;
        if (current >= target) {
          el.textContent = target;
        } else {
          el.textContent = current;
          requestAnimationFrame(updateCounter);
        }
      };

      updateCounter();
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 1 });

counters.forEach(counter => counterObserver.observe(counter));

// 10. Contact Form Validation
const form = document.querySelector('form');
form?.addEventListener('submit', function (e) {
  const name = form.querySelector('input[name="name"]');
  const email = form.querySelector('input[name="email"]');
  const message = form.querySelector('textarea[name="message"]');

  let errors = [];

  if (!name.value.trim()) errors.push("Name is required.");
  if (!email.value.trim() || !email.value.includes('@')) errors.push("Valid email is required.");
  if (!message.value.trim()) errors.push("Message cannot be empty.");

  if (errors.length > 0) {
    e.preventDefault();
    alert(errors.join('\n'));
  }
});