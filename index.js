  // Custom cursor
        const cursor = document.querySelector('.cursor');
        const follower = document.querySelector('.cursor-follower');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                follower.style.left = e.clientX - 10 + 'px';
                follower.style.top = e.clientY - 10 + 'px';
            }, 100);
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Generate particles
        const particlesContainer = document.getElementById('particles');
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (15 + Math.random() * 10) + 's';
            particlesContainer.appendChild(particle);
        }

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe feature cards
        
        document.querySelectorAll('.feature-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
        document.querySelectorAll('.stat-card',).forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
        document.querySelectorAll('.info-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
        
        // Counter animation for stats
        const animateCounter = (element, target) => {
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current) + (element.textContent.includes('%') ? '%' : 
                                     element.textContent.includes('+') ? '+' : 
                                     element.textContent.includes('★') ? '★' : '');
            }, 20);
        };

        // Observe stats
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    entry.target.classList.add('animated');
                    const statNumber = entry.target.querySelector('.stat-number');
                    const targetValue = parseInt(statNumber.textContent);
                    if (!isNaN(targetValue)) {
                        animateCounter(statNumber, targetValue);
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.stat-item').forEach(stat => {
            statsObserver.observe(stat);
        });


// // Hero Text to Chat Bar Animation
// const mainText = document.getElementById("mainText");
// const chatBar = document.getElementById("chatBar");
// const heading = mainText.querySelector("h1");

// // Animation functions

// function resetAnimation() {
//   // Reset all classes to initial state
//   mainText.classList.remove("fade-in-up", "fade-out-up", "hidden");
//   chatBar.classList.remove("fade-in-up", "fade-out-up", "hidden");
  
//   // Reset heading animation
//   heading.style.animation = 'none';
//   void heading.offsetWidth; // force reflow
// }

// function showText() {
//   resetAnimation();
  
//   // Show text with typing animation
//   mainText.classList.add("fade-in-up");
  
//   // Restart typing animation
//   heading.style.animation = `
//     fadeIn 0.5s ease forwards,
//     typing 3.5s steps(40, end) 0.5s forwards,
//     blink-caret 0.75s step-end infinite 4s
//   `;
// }

// function hideText() {
//   mainText.classList.remove("fade-in-up");
//   mainText.classList.add("fade-out-up");
  
//   // Hide text after fade animation
//   setTimeout(() => {
//     mainText.classList.add("hidden");
//     mainText.classList.remove("fade-out-up");
//   }, 400);
// }

// function showChat() {
//   chatBar.classList.remove("hidden", "fade-out-up");
//   chatBar.classList.add("fade-in-up");
  
//   // Focus on input field for better UX
//   setTimeout(() => {
//     const inputField = chatBar.querySelector('.input-field');
//     if (inputField) {
//       inputField.focus();
//     }
//   }, 500);
// }

// function hideChat() {
//   chatBar.classList.remove("fade-in-up");
//   chatBar.classList.add("fade-out-up");
  
//   // Hide chat bar after fade animation
//   setTimeout(() => {
//     chatBar.classList.add("hidden");
//     chatBar.classList.remove("fade-out-up");
//   }, 400);
// }

// function loopAnimation() {
//   // Step 1: Show hero text with typing animation
//   showText();

//   // Step 2: Hide text after typing completes (4.5s total)
//   setTimeout(() => {
//     hideText();
//   }, 4500);

//   // Step 3: Show chat bar after text disappears (5s total)
//   setTimeout(() => {
//     showChat();
//   }, 5000);

//   // Step 4: Hide chat bar after 8 seconds
//   setTimeout(() => {
//     hideChat();
//   }, 13000);
// }

// // Start animation immediately and then loop every 30 seconds
// loopAnimation();
// setInterval(loopAnimation, 15000);

// fix animation gleitch 
// Hero Text to Chat Bar Animation
const mainText = document.getElementById("mainText");
const chatBar = document.getElementById("chatBar");
const heading = mainText.querySelector("h1");

function resetAnimation() {
  mainText.classList.remove("fade-in-up", "fade-out-up", "hidden");
  chatBar.classList.remove("fade-in-up", "fade-out-up", "hidden");

  heading.style.animation = "none";
  void heading.offsetWidth; // reflow
}

function showText() {
  resetAnimation();
  mainText.classList.add("fade-in-up");

  heading.style.animation = `
    fadeIn 0.5s ease forwards,
    typing 3.5s steps(40, end) 0.5s forwards,
    blink-caret 0.75s step-end infinite 4s
  `;
}

function hideText() {
  mainText.classList.remove("fade-in-up");
  mainText.classList.add("fade-out-up");

  setTimeout(() => {
    mainText.classList.add("hidden");
    mainText.classList.remove("fade-out-up");
  }, 400);
}

function showChat() {
  chatBar.classList.remove("hidden", "fade-out-up");
  chatBar.classList.add("fade-in-up");

  setTimeout(() => {
    const inputField = chatBar.querySelector(".input-field");
    if (inputField) {
      try {
        inputField.focus({ preventScroll: true });
      } catch {
        inputField.focus();
      }
    }
  }, 500);
}

function hideChat() {
  chatBar.classList.remove("fade-in-up");
  chatBar.classList.add("fade-out-up");

  setTimeout(() => {
    chatBar.classList.add("hidden");
    chatBar.classList.remove("fade-out-up");
  }, 400);
}

function loopAnimation() {
  showText();

  setTimeout(hideText, 4500);   // hide text
  setTimeout(showChat, 5000);   // show chat bar
  setTimeout(hideChat, 13000);  // hide chat bar
}

loopAnimation();
setInterval(loopAnimation, 15000);
;
