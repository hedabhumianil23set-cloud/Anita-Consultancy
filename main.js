/* =========================================
   ANITA CONSULTANCY — LOGIC ENGINE
   Interactivity & Interactive Form Rules
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  // 1. PAGE LIQUID PRELOAD CONTROLLER
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 600); // Smooth buffer exit
  });

  // 2. FIXED HEADER INTERACTIVE SCROLL TRIGGER
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // 3. RESPONSIVE MOBILE ACCORDION DRAWER
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function toggleMenu() {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  }

  hamburger.addEventListener('click', toggleMenu);
  mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

  // 4. PREMIUM AXIS LAG INTERIOR CUSTOM CURSOR
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');

  if (cursor && follower) {
    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.top = `${mouseY}px`;
      cursor.style.left = `${mouseX}px`;
    });

    // Inertia loop for fluid follower element lag
    function updateFollower() {
      posX += (mouseX - posX) * 0.16;
      posY += (mouseY - posY) * 0.16;
      follower.style.top = `${posY}px`;
      follower.style.left = `${posX}px`;
      requestAnimationFrame(updateFollower);
    }
    updateFollower();

    // Scale trigger states upon link element hover actions
    const interactables = document.querySelectorAll('a, button, select, input, textarea');
    interactables.forEach(item => {
      item.addEventListener('mouseenter', () => {
        cursor.style.width = '14px';
        cursor.style.height = '14px';
        follower.style.width = '48px';
        follower.style.height = '48px';
        follower.style.borderColor = '#c9a84c';
      });
      item.addEventListener('mouseleave', () => {
        cursor.style.width = '8px';
        cursor.style.height = '8px';
        follower.style.width = '32px';
        follower.style.height = '32px';
        follower.style.borderColor = 'rgba(201,168,76,0.5)';
      });
    });
  }

  // 5. SECURE INPUT INTAKE FORM DISPATCH ENGINE
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simulate modern async payload transfer pipeline
      const submitBtn = contactForm.querySelector('.form-submit');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Sending...</span>`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        formSuccess.style.display = 'block';
        contactForm.reset();

        // Auto-clear notification toast layer frame
        setTimeout(() => {
          formSuccess.style.display = 'none';
        }, 5000);
      }, 1200);
    });
  }
});