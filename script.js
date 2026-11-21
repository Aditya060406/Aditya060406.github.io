/**
 * Catppuccin Mocha Portfolio - Interactive Experience
 * Aditya Panigrahi (Aditya060406)
 * Features: Spotlight mouse-follow, Interactive Terminal, Cozy Desk Widget,
 * Web Audio Lofi Synth, Sparkles, Filterable Arsenal & Toast Notifications.
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
    'the CozyDesk desktop productivity suite. 🛋️✨',
    'multimodal AI & OCR solutions (SIH). 🏆',
    'high-performance algorithms in C/C++. ⚡',
    'clean code fueled by coffee & lofi beats. ☕💜'
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

  // 4. Spotlight Mouse-Tracking Effect (Apple / Linear style)
  const spotlightCards = document.querySelectorAll('.spotlight-card, .code-terminal-card');
  spotlightCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // 5. Interactive Terminal Tab Switcher
  const termTabs = document.querySelectorAll('.term-tab');
  const terminalCode = document.getElementById('terminalCode');

  const tabContents = {
    engineer: `<span class="syn-keyword">const</span> <span class="syn-entity">Aditya</span>: <span class="syn-type">DeveloperProfile</span> = {
  <span class="syn-prop">name</span>: <span class="syn-string">"Aditya Panigrahi"</span>,
  <span class="syn-prop">handle</span>: <span class="syn-string">"Aditya060406"</span>,
  <span class="syn-prop">role</span>: <span class="syn-string">"Full-Stack Developer & CS Undergrad"</span>,
  <span class="syn-prop">superpowers</span>: [
    <span class="syn-string">"TypeScript & React"</span>,
    <span class="syn-string">"Node.js & Microservices"</span>,
    <span class="syn-string">"C/C++ Problem Solving"</span>,
    <span class="syn-string">"PostgreSQL & Redis"</span>
  ],
  <span class="syn-prop">currentVibe</span>: <span class="syn-string">"Crafting CozyDesk with coffee ☕💜"</span>,
  <span class="syn-prop">status</span>: <span class="syn-keyword">function</span>() {
    <span class="syn-keyword">return</span> <span class="syn-string">"Ready to build high-impact software!"</span>;
  }
};`,
    cozydesk: `<span class="syn-keyword">{</span>
  <span class="syn-prop">"appName"</span>: <span class="syn-string">"CozyDesk"</span>,
  <span class="syn-prop">"version"</span>: <span class="syn-string">"1.0.0-beta"</span>,
  <span class="syn-prop">"philosophy"</span>: <span class="syn-string">"Serenity meets peak productivity 🛋️✨"</span>,
  <span class="syn-prop">"features"</span>: [
    <span class="syn-string">"Modular Desktop Widgets"</span>,
    <span class="syn-string">"Ambient Lofi Audio Themes"</span>,
    <span class="syn-string">"Pomodoro & Flow State Timers"</span>,
    <span class="syn-string">"Catppuccin Palette Engine"</span>
  ],
  <span class="syn-prop">"openSource"</span>: <span class="syn-type">true</span>,
  <span class="syn-prop">"repository"</span>: <span class="syn-string">"github.com/Aditya060406/CozyDesk"</span>
<span class="syn-keyword">}</span>`,
    philosophy: `<span class="syn-keyword"># Engineering Philosophy</span>

<span class="syn-string">1. Code is written for humans first, computers second.</span>
<span class="syn-string">2. Performance and beauty are not mutually exclusive.</span>
<span class="syn-string">3. Master the fundamentals: Data Structures, Memory, I/O.</span>
<span class="syn-string">4. Build tools that bring genuine calmness and joy. 🌸</span>

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

  // 7. Cozy Corner: Virtual Coffee Counter
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

  // 8. Cozy Corner: Web Audio Generative Lofi Ambience (Pure Web Audio!)
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
      masterGain.gain.setValueAtTime(0.06, audioCtx.currentTime); // Soft soothing volume

      // Soft Catppuccin Major-7th chord (C#m9 / Emaj7 lofi vibe frequencies)
      const freqs = [138.59, 164.81, 207.65, 246.94, 277.18]; // C#3, E3, G#3, B3, C#4

      oscillators = freqs.map((freq, i) => {
        const osc = audioCtx.createOscillator();
        const filter = audioCtx.createBiquadFilter();

        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, audioCtx.currentTime);

        osc.connect(filter);
        filter.connect(masterGain);
        osc.start();
        return osc;
      });

      masterGain.connect(audioCtx.destination);
      isPlayingLofi = true;
      if (lofiStatus) lofiStatus.textContent = '🎵 Cozy Lofi Ambience Playing';
      if (toggleLofiBtn) toggleLofiBtn.textContent = 'Pause Ambience ⏸️';
      showToast('🎵 Ambient lofi vibe active. Enjoy the cozy atmosphere!');
    } catch (e) {
      console.warn('AudioContext not allowed yet:', e);
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
    if (lofiStatus) lofiStatus.textContent = 'Sound is muted';
    if (toggleLofiBtn) toggleLofiBtn.textContent = 'Play Ambience 🎵';
  }

  // 9. Sparkle Shower Particle Generator
  const sparkleBtn = document.getElementById('sparkleBtn');
  const showerSparklesBtn = document.getElementById('showerSparklesBtn');

  function spawnSparkles(e) {
    const originX = e ? e.clientX : window.innerWidth / 2;
    const originY = e ? e.clientY : window.innerHeight / 2;
    const sparkleEmojis = ['✨', '🌸', '✦', '✧', '💜', '☕', '⋆'];

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
      showToast('✨ Magic Catppuccin sparkles sprinkled!');
    });
  }

  if (showerSparklesBtn) {
    showerSparklesBtn.addEventListener('click', (e) => {
      spawnSparkles(e);
      showToast('🌸 Pastel sparkles shower! Have a wonderful day!');
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
});
