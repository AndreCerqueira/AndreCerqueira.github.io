// Game Developer Portfolio - Main JavaScript File

// DOM Elements
const header = document.querySelector('.header');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const scrollToTopBtn = document.querySelector('.scroll-to-top');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');
const skillBars = document.querySelectorAll('.skill-progress');
const contactForm = document.querySelector('.contact-form');

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeParticles();
    initializeNavigation();
    initializeScrollEffects();
    initializeProjectFilters();
    initializeProjectModal();
    initializeAnimations();
    initializeContactForm();
    initializeSkillBars();
});

// Particles.js Configuration
function initializeParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#e94560'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#e94560',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Navigation Functions
function initializeNavigation() {
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

// Scroll Effects
function initializeScrollEffects() {
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;

        // Header background on scroll
        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Show/hide scroll to top button
        if (scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }

        // Animate elements on scroll
        animateOnScroll();
    });

    // Scroll to top functionality
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Project Filters
function initializeProjectFilters() {
    // Garante que o código só corre se existirem botões de filtro.
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove a classe 'active' de todos os botões e adiciona-a apenas ao clicado.
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            // Itera sobre cada cartão de projeto para decidir se deve ser mostrado ou escondido.
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                // Verifica se o cartão deve ser visível.
                // Um cartão é visível se o filtro for 'all' OU se a sua categoria corresponder ao filtro.
                const shouldBeVisible = (filter === 'all' || category === filter);

                if (shouldBeVisible) {
                    // Se deve ser visível, define o display para 'block'.
                    card.style.display = 'block';
                    // Reinicia a animação para um efeito visual agradável.
                    card.style.animation = 'none'; // Limpa a animação anterior
                    void card.offsetWidth; // Força o "reflow" do DOM
                    card.style.animation = 'fadeIn 0.5s ease'; // Aplica a animação novamente
                } else {
                    // Se não deve ser visível, simplesmente esconde-o.
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Project Modal
function initializeProjectModal() {
    const projectData = {
        'Cosmic Duel': {
            video: 'https://www.youtube.com/embed/CIL81KBdraE?si=ETEpbq0BfzdlioSC',
            description: 'Cosmic Duel is a space-themed roguelite deck-builder: pilot your ship between planets while managing limited fuel, pick strategic routes, win turn-based card battles, and upgrade your deck as you explore the entire galaxy.',
            tech: ['Unity', 'C#', 'Card-Game', 'Desktop'],
            demo: 'https://andrecerqueira.itch.io/cosmic-duel',
            code: 'https://github.com/AndreCerqueira/Cosmic-Duel'
        },
        'Leviatel Legends (pre-alpha)': {
            video: 'https://www.youtube.com/embed/WyXkwhF58CA?si=GPb--bVXibe_Q_cR',
            description: 'A game for 2-4 players about destroying the opponent castle with good looking characters. Still in development.',
            tech: ['Unity', 'C#', 'Card-Game', 'AI', 'WebGL'],
            demo: 'https://andrecerqueira.github.io/games/LeviatelLegendsAlpha/',
            code: '#'
        },
        'Cubinho': {
            video: 'https://www.youtube.com/embed/NTHVDC3fX38',
            description: 'In this icy world, players control an ice cube, travel the greatest distance, compete on the global leaderboard, and collect coins to unlock customizable items.',
            tech: ['Unity', 'C#', 'WebGL'],
            demo: 'https://andrecerqueira.github.io/Cubinho-Game/',
            code: 'https://github.com/AndreCerqueira/Cubinho'
        },
        'Casual Sweeper': {
            video: 'https://www.youtube.com/embed/cuEbQhUodq4',
            description: 'A modern mobile version of the classic Minesweeper, with intuitive controls and clean aesthetics.',
            tech: ['Unity', 'C#', 'Mobile'],
            demo: '#',
            code: '#'
        },
        'Till I Fall': {
            video: 'https://www.youtube.com/embed/Jb2eAHtPa6Q?si=lxFGrlviTxOCs1RY',
            description: "You're a die dropped onto a fragile grid floating in the void. Choose your direction and roll with precision.",
            tech: ['Unity', 'C#', 'WebGL'],
            demo: 'https://andrecerqueira.itch.io/till-i-fall',
            code: 'https://github.com/AndreCerqueira/Till-I-Fall'
        },
        'Bubble Invasion': {
            video: 'https://www.youtube.com/embed/7yaXTbInRbs?si=xEdpwyiRdU0y8Ac5',
            description: "An alien invasion is underway! Extraterrestrial worms have descended through a fishing rod, ready to take Aloísio. Defend him by popping the bubbles that protect the worms before they reach him in this frantic, colorful arcade game.",
            tech: ['Unity', 'C#', 'WebGL'],
            demo: 'https://andrecerqueira.itch.io/bubble-invasion',
            code: 'https://github.com/AndreCerqueira/Bubble-Invasion'
        },
        'Deep Rooted': {
            video: 'https://www.youtube.com/embed/tHKROa9d12s?si=pp3ledNCFUycrJ8_',
            description: "Embark on a subterranean adventure as a dwarf trying to grow the root of his magical tree to the Earth's core. Navigate challenging soil, avoid underground creatures, and collect nutrients to extend the root's reach.",
            tech: ['Unity', 'C#', 'WebGL'],
            demo: 'https://andrecerqueira.itch.io/deep-rooted',
            code: 'https://github.com/AndreCerqueira/Deep-Rooted'
        },
        'Bad Romance': {
            video: 'https://www.youtube.com/embed/XFcvSq-0RiY?si=38Ec42ETjwcQvOFe',
            description: "A puzzle-platformer where the objective is to gather all the treasures scattered across the level to win the maiden's affection. Overcome obstacles and enemies to prove your worth.",
            tech: ['Unity', 'C#', 'Desktop'],
            demo: 'https://andrecerqueira.itch.io/bad-romance',
            code: 'https://github.com/AndreCerqueira/Bad-Romance'
        },
        'Horse Manager': {
            video: 'https://www.youtube.com/embed/5bf3BlF-mcY?si=V-IR4XElP_nCl0mF',
            description: "A command-line interface game where you take on the role of a stable manager. Buy, sell, and train horses, enter them into competitive events, and manage your finances to become a horse racing tycoon.",
            tech: ['CLI', 'C#', 'Desktop'],
            demo: 'https://store.steampowered.com/app/3220650/Horse_Manager/',
            code: '#'
        },
        'I Scream': {
            video: 'https://www.youtube.com/embed/Xy8hvkvYYoc?si=U5dWEhCdAIjfq_Xb',
            description: "You are a scoop of ice cream on a hot day! In 'I Scream', the goal is to accumulate as many points as possible by collecting toppings before you melt away. A simple and fun game built with web technologies.",
            tech: ['HTML', 'CSS', 'JS', 'WebGL'],
            demo: 'https://andrecerqueira.itch.io/i-scream',
            code: 'https://github.com/AndreCerqueira/I-Scream'
        },
        'Jump Yeah': {
            video: 'https://www.youtube.com/embed/keZ1llnRtZ0',
            description: 'An addictive mobile game where the only way is up! Control your character and jump from platform to platform, climbing as high as you can to achieve the best score and unlock new characters.',
            tech: ['Unity', 'C#', 'Mobile'],
            demo: 'https://play.google.com/store/apps/details?id=com.ipca.game.JumpYeah',
            code: 'https://github.com/AndreCerqueira/JumpYeah-AM-Unity'
        },
        'Catch them all': {
            video: 'https://www.youtube.com/embed/MnBbXC7q93s?si=R9g_MQ7EiJLmN1fT',
            description: 'A simple yet engaging game created with Processing. Use a green claw to catch falling objects, testing your reflexes and timing to get the highest score.',
            tech: ['Processing', 'Desktop'],
            demo: '#',
            code: 'https://github.com/AndreCerqueira/Catch-Them-All'
        },
        'Fluffy Fighters': {
            video: 'https://www.youtube.com/embed/t2rm2Y1a0hA?si=bvOa_vmHEHrAMfsM',
            description: 'Assemble your team of adorable but fierce Fluffy Fighters. Explore a vibrant world, engage in strategic turn-based battles, and level up your fighters to take on greater challenges. Created with the Monogame framework.',
            tech: ['Monogame', 'C#', 'Desktop'],
            demo: '#',
            code: 'https://github.com/AndreCerqueira/Fluffy-Fighters'
        },
        'Bombs & Carrots': {
            video: 'https://www.youtube.com/embed/uUX3_vi4OkU?si=uuA_Aj_yZHP78er5',
            description: "A two-player strategy game reminiscent of Battleship, but with a twist. Hide your special carrot on a grid and use bombs to find your opponent's carrot before they find yours. Developed using Pygame.",
            tech: ['Pygame', 'Python', 'Desktop'],
            demo: 'https://andrecerqueira.itch.io/bombs-and-carrots',
            code: 'https://github.com/AndreCerqueira/Bombs-And-Carrots'
        },
        'Otaryoudoing?': {
            video: 'https://www.youtube.com/embed/mnMGXZl5fPw?si=D2N2ufZmdQr2noDW',
            description: 'Awakening in a mysterious labyrinth, you must solve a series of intricate puzzles and uncover hidden secrets to find your way out. What are you doing here? The answer lies within the maze.',
            tech: ['Unity', 'C#', 'Desktop'],
            demo: 'https://andrecerqueira.itch.io/otaryoudoing',
            code: 'https://github.com/AndreCerqueira/Otaryoudoing'
        },
        'Step Out': {
            video: 'https://www.youtube.com/embed/9sPfKorrx3s',
            description: "A location-based mobile game that turns the real world into your playground. Using Mapbox integration, 'Step Out' encourages you to explore your surroundings to find and catch virtual objects.",
            tech: ['Unity', 'C#', 'Mobile', 'Mapbox'],
            demo: 'https://andrecerqueira.itch.io/step-out',
            code: 'https://github.com/AndreCerqueira/StepOut'
        },
        'Manly Punch': {
            video: 'https://www.youtube.com/embed/31jmMo91TZs?si=nWvGtR1GbpDrIfSM',
            description: 'A retro-style boxing game with a pixel art aesthetic. Choose from a roster of well-known characters and duke it out in the ring to see who is the manliest puncher of them all.',
            tech: ['Unity', 'C#', 'Desktop'],
            demo: 'https://andrecerqueira.itch.io/manly-punch',
            code: 'https://github.com/AndreCerqueira/ManlyPunch'
        },
        'Tales of Leviatel 2D': {
            video: 'https://www.youtube.com/embed/WQ0hddoqOFI?si=mWThd8d3POb4tkPn',
            description: 'A 2D adventure game where you have to kill monsters and do missions to explore the map.',
            tech: ['Unity', 'C#', 'Desktop'],
            demo: 'https://andrecerqueira.itch.io/tales-of-leviatel-2d',
            code: '#'
        },
        'Tales of Leviatel 3D': {
            video: 'https://www.youtube.com/embed/rVcPMLmOA4g?si=8gUDPwuVlg5HV8pD',
            description: 'A 3D adventure game where you have to kill all the 4 bosses around the map.',
            tech: ['Unity', 'C#', 'Desktop'],
            demo: 'www.dropbox.com/scl/fi/ukixlr26ozlzpipgxwhmd/Tales-of-Leviatel.zip?rlkey=v08zotjkatcklo4dcdy5o0oan&dl=0',
            code: '#'
        },
        'Fartura de risos': {
            video: 'https://www.youtube.com/embed/f7SHd9pwpG4?si=wSpuxAB0Qt80ZZWg',
            description: "Let the teasing begin! In 'Fartura de Risos', your goal is to interact with and tease a group of clowns to elicit as many laughs as possible. A lighthearted game designed for fun.",
            tech: ['Unity', 'C#', 'WebGL'],
            demo: 'https://andrecerqueira.itch.io/fartura-de-risos',
            code: 'https://github.com/AndreCerqueira/MakeMeLaugh'
        },
        'Roll Away': {
            video: 'https://www.youtube.com/embed/Pbu1nX6TSx4?si=4fpPLao-9zQZ0OZc',
            description: 'A simple adventure game where you roll a character through a multi-level map. Interact with NPCs, complete missions, and explore the charming world of Roll Away.',
            tech: ['Unity', 'C#', 'Desktop'],
            demo: 'https://andrecerqueira.itch.io/rollaway',
            code: '#'
        }
    };

    // Open modal when project card is clicked
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('.project-title').textContent;
            const data = projectData[title];

            if (data) {
                // NOVO: Seleciona o novo contentor de média
                const mediaContainer = document.getElementById('modalMediaContainer');
                mediaContainer.innerHTML = ''; // Limpa o conteúdo anterior

                // NOVO: Lógica para decidir se mostra vídeo ou imagem
                if (data.video) {
                    const iframe = document.createElement('iframe');
                    iframe.setAttribute('src', data.video);
                    iframe.setAttribute('title', 'YouTube video player');
                    iframe.setAttribute('frameborder', '0');
                    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
                    iframe.setAttribute('allowfullscreen', true);
                    mediaContainer.appendChild(iframe);
                } else if (data.image) {
                    const img = document.createElement('img');
                    img.src = data.image;
                    img.alt = title;
                    mediaContainer.appendChild(img);
                }
                
                document.getElementById('modalTitle').textContent = title;
                document.getElementById('modalDescription').textContent = data.description;
                
                const techContainer = document.getElementById('modalTech');
                techContainer.innerHTML = '';
                data.tech.forEach(tech => {
                    const span = document.createElement('span');
                    span.className = 'tech-tag';
                    span.textContent = tech;
                    techContainer.appendChild(span);
                });

                document.getElementById('modalDemo').href = data.demo;
                document.getElementById('modalCode').href = data.code;

                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        const mediaContainer = document.getElementById('modalMediaContainer');
        if (mediaContainer) {
            mediaContainer.innerHTML = '';
        }
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}   

// Scroll Animations
function initializeAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    
    // Add animation classes to elements
    document.querySelectorAll('.section-title, .section-subtitle').forEach(el => {
        el.classList.add('fade-in');
    });

    document.querySelectorAll('.project-card').forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.animationDelay = `${index * 0.1}s`;
    });

    document.querySelector('.about-image')?.classList.add('slide-in-left');
    document.querySelector('.about-text')?.classList.add('slide-in-right');

    // Trigger animations on scroll
    animateOnScroll();
}

function animateOnScroll() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Skill Bars Animation
function initializeSkillBars() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillProgress = entry.target;
                const width = skillProgress.getAttribute('data-width');
                skillProgress.style.width = width + '%';
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Contact Form
function initializeContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            // Show loading state
            submitBtn.innerHTML = '<span class="loading"></span> Sending...';
            submitBtn.disabled = true;

            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                // Reset form
                this.reset();
                
                // Show success message
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = '#28a745';
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
            }, 2000);
        });

        // Form field animations
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });

            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });
        });
    }
}

// Utility Functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Optimized scroll handler
const optimizedScroll = debounce(function() {
    animateOnScroll();
}, 10);

window.addEventListener('scroll', optimizedScroll);

// Resize handler
window.addEventListener('resize', function() {
    // Reinitialize particles on resize
    if (typeof pJSDom !== 'undefined' && pJSDom[0]) {
        pJSDom[0].pJS.fn.particlesRefresh();
    }
});

// Preload images
function preloadImages() {
    const images = [
        'assets/images/project1.jpg',
        'assets/images/project2.jpg',
        'assets/images/project3.jpg',
        'assets/images/project4.jpg',
        'assets/images/profile.jpg'
    ];

    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
preloadImages();

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(26, 26, 46, 0.95);
        backdrop-filter: blur(10px);
        padding: 2rem;
        border-top: 1px solid rgba(233, 69, 96, 0.2);
    }

    .nav-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }

    .nav-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }

    .header.scrolled {
        background: rgba(26, 26, 46, 0.95);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 768px) {
        .nav-menu {
            display: none;
        }
    }
`;

document.head.appendChild(style);

