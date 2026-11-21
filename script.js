/**
 * Oceanic Teal Portfolio - Interactive Experience
 * Aditya Panigrahi (Aditya060406)
 * Palette: #031716, #032F30, #0A7075, #0C969C, #6BA3BE, #274D60
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll Progress Indicator
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${progress}%`;
    }
  });

  // 2. Typewriter Effect
  const typewriterElement = document.getElementById('typewriter');
  const roles = [
    'scalable full-stack web applications. 🚀',
    'clean, maintainable system architectures. ⚡',
    'high-performance algorithms in C/C++. 💻',
    'reliable backend services & modern APIs. 🛠️',
    'impactful software through continuous building. 🌊'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;

  function typeEffect() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = 45;
    } else {
      typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 95;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typingDelay = 2200; // Pause at completion
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingDelay = 400; // Pause before new line
    }

    setTimeout(typeEffect, typingDelay);
  }

  if (typewriterElement) {
    typeEffect();
  }

  // 3. Navbar Sticky Effect & Mobile Toggle
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      const spans = hamburgerBtn.querySelectorAll('span');
      if (navLinks.classList.contains('mobile-open')) {
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        const spans = hamburgerBtn.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }

  // 4. Spotlight Mouse-Tracking Effect
  function bindSpotlights() {
    const spotlightCards = document.querySelectorAll('.spotlight-card, .code-terminal-card, .repo-card');
    spotlightCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }
  bindSpotlights();

  // 5. Interactive Terminal Tab Switcher
  const termTabs = document.querySelectorAll('.term-tab');
  const terminalCode = document.getElementById('terminalCode');

  const tabContents = {
    engineer: `<span class="syn-keyword">const</span> <span class="syn-entity">Aditya</span>: <span class="syn-type">DeveloperProfile</span> = {
  <span class="syn-prop">name</span>: <span class="syn-string">"Aditya Panigrahi"</span>,
  <span class="syn-prop">handle</span>: <span class="syn-string">"Aditya060406"</span>,
  <span class="syn-prop">role</span>: <span class="syn-string">"Software Engineer & CS Undergrad"</span>,
  <span class="syn-prop">focus</span>: [
    <span class="syn-string">"Scalable Full-Stack Web Systems"</span>,
    <span class="syn-string">"Systems & Algorithmic Problem Solving in C++"</span>,
    <span class="syn-string">"API & Database Architecture"</span>
  ],
  <span class="syn-prop">status</span>: <span class="syn-keyword">function</span>() {
    <span class="syn-keyword">return</span> <span class="syn-string">"Constantly learning, building, and shipping! 🚀"</span>;
  }
};`,
    architecture: `<span class="syn-keyword">{</span>
  <span class="syn-prop">"domain"</span>: <span class="syn-string">"Full-Stack & Systems Engineering"</span>,
  <span class="syn-prop">"workflow"</span>: [
    <span class="syn-string">"Modular Component Architecture"</span>,
    <span class="syn-string">"RESTful API & Relational Schema Design"</span>,
    <span class="syn-string">"Clean Code & Automated Testing"</span>,
    <span class="syn-string">"Continuous Project Delivery"</span>
  ],
  <span class="syn-prop">"activity"</span>: <span class="syn-string">"Regularly engineering & releasing new projects"</span>,
  <span class="syn-prop">"github"</span>: <span class="syn-string">"github.com/Aditya060406"</span>
<span class="syn-keyword">}</span>`,
    philosophy: `<span class="syn-keyword"># Engineering Philosophy</span>

<span class="syn-string">1. Code is written for humans first, computers second.</span>
<span class="syn-string">2. Performance and beauty are not mutually exclusive.</span>
<span class="syn-string">3. Master the fundamentals: Data Structures, Memory, I/O.</span>
<span class="syn-string">4. Build tools that bring genuine calmness, clarity, and joy. 🌊</span>

<span class="syn-entity">// Always learning, always building.</span>`
  };

  termTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      termTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const tabKey = tab.getAttribute('data-tab');
      if (terminalCode && tabContents[tabKey]) {
        terminalCode.innerHTML = tabContents[tabKey];
      }
    });
  });

  const copyCodeBtn = document.getElementById('copyCodeBtn');
  if (copyCodeBtn && terminalCode) {
    copyCodeBtn.addEventListener('click', () => {
      const codeText = terminalCode.innerText || terminalCode.textContent;
      navigator.clipboard.writeText(codeText).then(() => {
        copyCodeBtn.innerHTML = '<i class="fa-solid fa-check"></i> <span>Copied!</span>';
        setTimeout(() => {
          copyCodeBtn.innerHTML = '<i class="fa-regular fa-copy"></i> <span>Copy</span>';
        }, 2000);
        showToast('Code snippet copied to clipboard! 📋✨');
      });
    });
  }

  // 6. Interactive Technical Arsenal Category Filter Tabs
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  const arsenalCards = document.querySelectorAll('.arsenal-category-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      arsenalCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || filter === cat) {
          card.classList.remove('hidden');
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // 7. Zen Lounge: Virtual Coffee Counter
  let coffeeCount = 3;
  const coffeeCountEl = document.getElementById('coffeeCount');
  const sipCoffeeBtn = document.getElementById('sipCoffeeBtn');
  const coffeeIcon = document.getElementById('coffeeIcon');

  if (sipCoffeeBtn && coffeeCountEl) {
    sipCoffeeBtn.addEventListener('click', () => {
      coffeeCount++;
      coffeeCountEl.textContent = coffeeCount;
      if (coffeeIcon) {
        coffeeIcon.style.transform = 'scale(1.3) rotate(-15deg)';
        setTimeout(() => {
          coffeeIcon.style.transform = 'scale(1) rotate(0deg)';
        }, 300);
      }
      showToast(`Mmm! Warm sip taken. ☕ Total: ${coffeeCount} cups today!`);
    });
  }

  // 8. Zen Lounge: Web Audio Generative Ocean Lofi Drone
  let audioCtx = null;
  let isPlayingLofi = false;
  let oscillators = [];
  let masterGain = null;

  const toggleLofiBtn = document.getElementById('toggleLofiBtn');
  const lofiStatus = document.getElementById('lofiStatus');

  if (toggleLofiBtn) {
    toggleLofiBtn.addEventListener('click', () => {
      if (!isPlayingLofi) {
        startLofiAudio();
      } else {
        stopLofiAudio();
      }
    });
  }

  function startLofiAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();

      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.06, audioCtx.currentTime);

      // Cmaj9 harmonic ocean chord: C3, E3, G3, B3, D4
      const freqs = [130.81, 164.81, 196.00, 246.94, 293.66];

      oscillators = freqs.map((freq, i) => {
        const osc = audioCtx.createOscillator();
        const filter = audioCtx.createBiquadFilter();

        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(420, audioCtx.currentTime);

        osc.connect(filter);
        filter.connect(masterGain);
        osc.start();
        return osc;
      });

      masterGain.connect(audioCtx.destination);
      isPlayingLofi = true;
      document.getElementById('lofiWidget')?.classList.add('lofi-playing');
      if (lofiStatus) lofiStatus.textContent = '🎵 Oceanic Chill Drone Playing';
      if (toggleLofiBtn) toggleLofiBtn.textContent = 'Pause Ambience ⏸️';
      showToast('🌊 Oceanic ambient drone active. Enjoy the calm vibe!');
    } catch (e) {
      console.warn('AudioContext error:', e);
    }
  }

  function stopLofiAudio() {
    if (oscillators.length) {
      oscillators.forEach(osc => osc.stop());
      oscillators = [];
    }
    if (audioCtx) {
      audioCtx.close();
      audioCtx = null;
    }
    isPlayingLofi = false;
    document.getElementById('lofiWidget')?.classList.remove('lofi-playing');
    if (lofiStatus) lofiStatus.textContent = 'Sound is muted';
    if (toggleLofiBtn) toggleLofiBtn.textContent = 'Play Ambience 🎵';
  }

  // 9. Sparkle Shower Particle Generator
  const sparkleBtn = document.getElementById('sparkleBtn');
  const showerSparklesBtn = document.getElementById('showerSparklesBtn');

  function spawnSparkles(e) {
    const originX = e ? e.clientX : window.innerWidth / 2;
    const originY = e ? e.clientY : window.innerHeight / 2;
    const sparkleEmojis = ['✨', '🌊', '✦', '✧', '🩵', '☕', '⋆'];

    for (let i = 0; i < 18; i++) {
      const particle = document.createElement('span');
      particle.className = 'magic-sparkle-particle';
      particle.textContent = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];

      const tx = (Math.random() - 0.5) * 350;
      const ty = (Math.random() - 0.5) * 350 - 50;
      const rot = (Math.random() - 0.5) * 360;

      particle.style.left = `${originX}px`;
      particle.style.top = `${originY}px`;
      particle.style.setProperty('--tx', `${tx}px`);
      particle.style.setProperty('--ty', `${ty}px`);
      particle.style.setProperty('--rot', `${rot}deg`);

      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 1600);
    }
  }

  if (sparkleBtn) {
    sparkleBtn.addEventListener('click', (e) => {
      spawnSparkles(e);
      showToast('✨ Oceanic teal sparkles sprinkled!');
    });
  }

  if (showerSparklesBtn) {
    showerSparklesBtn.addEventListener('click', (e) => {
      spawnSparkles(e);
      showToast('🌊 Serene sparkles shower! Have a peaceful day!');
    });
  }

  // 10. Copy Email Actions
  const copyEmailHeroBtn = document.getElementById('copyEmailHeroBtn');
  const copyEmailBtn = document.getElementById('copyEmailBtn');

  function copyEmail() {
    const email = 'adityakuchu@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast('Copied adityakuchu@gmail.com to clipboard! 💌✨');
    }).catch(() => {
      showToast('Email: adityakuchu@gmail.com');
    });
  }

  if (copyEmailHeroBtn) copyEmailHeroBtn.addEventListener('click', copyEmail);
  if (copyEmailBtn) copyEmailBtn.addEventListener('click', copyEmail);

  // 11. Toast System
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  let toastTimeout = null;

  function showToast(msg) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // 12. Scroll Reveal Animations (IntersectionObserver)
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -30px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // 13. Back to Top Button
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 14. Dynamic GitHub Repositories Fetcher
  const githubReposGrid = document.getElementById('githubReposGrid');

  const languageColors = {
    JavaScript: '#F1E05A',
    TypeScript: '#3178C6',
    Python: '#3572A5',
    'C++': '#F34B7D',
    C: '#555555',
    HTML: '#E34C26',
    CSS: '#563D7C',
    Swift: '#F05138',
    Java: '#B07219',
    Shell: '#89E051'
  };

  async function fetchGitHubRepos() {
    if (!githubReposGrid) return;

    try {
      const response = await fetch('https://api.github.com/users/Aditya060406/repos?sort=pushed&per_page=12');
      if (!response.ok) {
        throw new Error(`GitHub API returned status ${response.status}`);
      }

      const repos = await response.json();
      // Filter out the profile readme repo itself
      const activeRepos = repos
        .filter(r => r.name.toLowerCase() !== 'aditya060406' && !r.fork)
        .slice(0, 6);

      if (activeRepos.length === 0) {
        throw new Error('No public repos found');
      }

      githubReposGrid.innerHTML = '';
      activeRepos.forEach(repo => {
        const lang = repo.language || 'Software';
        const langColor = languageColors[lang] || '#0C969C';
        const desc = repo.description || 'Full-stack software engineering project and public repository.';
        const stars = repo.stargazers_count || 0;
        const forks = repo.forks_count || 0;

        const card = document.createElement('article');
        card.className = 'repo-card spotlight-card';
        card.innerHTML = `
          <div class="repo-header">
            <div class="repo-folder-icon">
              <i class="fa-regular fa-folder-open"></i>
            </div>
            <div class="repo-badge active-badge">
              <span class="repo-pulse-dot"></span> Active Repo
            </div>
          </div>
          <h3 class="repo-title">
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a>
          </h3>
          <p class="repo-desc">${escapeHTML(desc)}</p>
          <div class="repo-footer">
            <div class="repo-meta">
              <span class="repo-lang">
                <span class="repo-lang-dot" style="background-color: ${langColor};"></span> ${lang}
              </span>
              <span class="repo-stat" title="Stars"><i class="fa-regular fa-star"></i> ${stars}</span>
              <span class="repo-stat" title="Forks"><i class="fa-solid fa-code-fork"></i> ${forks}</span>
            </div>
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-link-btn" title="View Code on GitHub">
              <i class="fa-brands fa-github"></i> View
            </a>
          </div>
        `;
        githubReposGrid.appendChild(card);
      });

      bindSpotlights();
    } catch (err) {
      console.warn('Using fallback repository cards:', err);
      renderFallbackRepos();
    }
  }

  function renderFallbackRepos() {
    if (!githubReposGrid) return;
    const fallbackData = [
      {
        name: 'event-management-frontend',
        desc: 'Full-stack event management and registration web application featuring responsive interfaces and modern state architecture.',
        lang: 'JavaScript',
        url: 'https://github.com/Aditya060406/event-management-frontend'
      },
      {
        name: 'CozyDesk',
        desc: 'Modular desktop workspace organizer and productivity command center with customizable ambient soundscapes.',
        lang: 'Swift',
        url: 'https://github.com/Aditya060406/CozyDesk'
      },
      {
        name: 'Trip_Sync',
        desc: 'AI-assisted collaborative travel planner system with intelligent routing, schedule management, and itineraries.',
        lang: 'TypeScript',
        url: 'https://github.com/Aditya060406/Trip_Sync'
      },
      {
        name: 'KAPS_MedTech',
        desc: 'Campus health centre appointment booking and medical records management system with role-based security.',
        lang: 'Full-Stack',
        url: 'https://github.com/Aditya060406/KAPS_MedTech'
      }
    ];

    githubReposGrid.innerHTML = '';
    fallbackData.forEach(repo => {
      const card = document.createElement('article');
      card.className = 'repo-card spotlight-card';
      const langColor = languageColors[repo.lang] || '#0C969C';
      card.innerHTML = `
        <div class="repo-header">
          <div class="repo-folder-icon">
            <i class="fa-regular fa-folder-open"></i>
          </div>
          <div class="repo-badge active-badge">
            <span class="repo-pulse-dot"></span> Active Repo
          </div>
        </div>
        <h3 class="repo-title">
          <a href="${repo.url}" target="_blank" rel="noopener noreferrer">${repo.name}</a>
        </h3>
        <p class="repo-desc">${repo.desc}</p>
        <div class="repo-footer">
          <div class="repo-meta">
            <span class="repo-lang">
              <span class="repo-lang-dot" style="background-color: ${langColor};"></span> ${repo.lang}
            </span>
            <span class="repo-stat"><i class="fa-regular fa-star"></i> 0</span>
          </div>
          <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="repo-link-btn">
            <i class="fa-brands fa-github"></i> View
          </a>
        </div>
      `;
      githubReposGrid.appendChild(card);
    });

    bindSpotlights();
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

  fetchGitHubRepos();
});
