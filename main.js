document.addEventListener('DOMContentLoaded', () => {
    const menuBars = document.getElementById('menu-bars');
    const navMenu = document.getElementById('nav-menu');
    const closeBtn = document.getElementById('close-btn');
    const subNavTriggers = document.querySelectorAll('.nav-text > .nav-link');
  
    menuBars.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  
    closeBtn.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  
    subNavTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        const subNav = trigger.nextElementSibling;
        if (subNav && subNav.classList.contains('sub-nav')) {
          e.preventDefault();
          subNav.style.display = subNav.style.display === 'block' ? 'none' : 'block';
        }
      });
    });
  });
  