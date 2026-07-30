document.addEventListener('DOMContentLoaded', () => {
    // Re-initialize Lucide Icons if available
    if (window.lucide) {
        lucide.createIcons();
    }

    // --- 1. Cursor Glow Follower ---
    const cursorGlow = document.getElementById('cursor-glow');
    if (cursorGlow) {
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        });
    }

    // --- 2. Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-open');
            if (navLinks.classList.contains('mobile-open')) {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'var(--glass-bg)';
                navLinks.style.padding = '1.5rem';
                navLinks.style.borderBottom = '1px solid var(--glass-border)';
            } else {
                navLinks.style.display = '';
            }
        });
    }

    // --- 3. Smooth Navigation & Scroll Spy ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                if (navLinks && window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                    navLinks.classList.remove('mobile-open');
                }
            }
        });
    });

    // --- 4. 3D Card Tilt Effect ---
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });

    // --- 5. Stat Counter Animation ---
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateStats = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'), 10);
                if (isNaN(target)) return;

                let current = 0;
                const duration = 1800; // ms
                const stepTime = 20;
                const totalSteps = duration / stepTime;
                const increment = target / totalSteps;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    if (target === 0) {
                        el.textContent = '0%';
                    } else if (target >= 1000) {
                        el.textContent = Math.floor(current).toLocaleString() + '+';
                    } else if (target === 15 || target === 6) {
                        el.textContent = Math.floor(current) + '+';
                    } else {
                        el.textContent = Math.floor(current) + '%';
                    }
                }, stepTime);

                observer.unobserve(el);
            }
        });
    };

    const statObserver = new IntersectionObserver(animateStats, { threshold: 0.5 });
    statNumbers.forEach(stat => statObserver.observe(stat));

    // --- 6. Staggered Reveal Animation ---
    const revealElements = document.querySelectorAll('.major-card, .project-card, .company-card, .cert-card, .toolkit-category, .edu-item, .visual-item, .value-item');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach((el, index) => {
        el.classList.add('reveal');
        const delay = (index % 4) * 120;
        el.style.transitionDelay = `${delay}ms`;
        revealObserver.observe(el);
    });

    // --- 7. Toolkit Category Filters ---
    const filterBtns = document.querySelectorAll('.filter-btn[data-filter]');
    const toolkitCards = document.querySelectorAll('.toolkit-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            toolkitCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || filter === category) {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Case Studies Filter Tabs
    const projFilterBtns = document.querySelectorAll('.filter-btn[data-proj-filter]');
    const projectCards = document.querySelectorAll('.project-card');

    projFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            projFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-proj-filter');
            projectCards.forEach(card => {
                const cat = card.getAttribute('data-proj-cat');
                if (filter === 'all' || filter === cat) {
                    card.style.display = 'flex';
                    card.style.opacity = '1';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Visual Portfolio Filter Tabs
    const visFilterBtns = document.querySelectorAll('.filter-btn[data-vis-filter]');
    const visualCards = document.querySelectorAll('.visuals-grid .visual-item');

    visFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            visFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-vis-filter');
            visualCards.forEach(card => {
                const cat = card.getAttribute('data-vis-cat');
                if (filter === 'all' || filter === cat) {
                    card.style.display = 'flex';
                    card.style.opacity = '1';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Expandable Role Blocks Logic
    const expandableHeaders = document.querySelectorAll('.role-header.expandable-trigger');
    expandableHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const roleBlock = header.closest('.role-block');
            if (roleBlock) {
                roleBlock.classList.toggle('collapsed');
            }
        });
    });

    // --- 8. Interactive Industrial Cost & ROI Calculator ---
    const effSlider = document.getElementById('eff-slider');
    const opsSlider = document.getElementById('ops-slider');
    const samSlider = document.getElementById('sam-slider');

    const effVal = document.getElementById('eff-val');
    const opsVal = document.getElementById('ops-val');
    const samVal = document.getElementById('sam-val');

    const outTarget = document.getElementById('out-target');
    const outCpp = document.getElementById('out-cpp');
    const outSavings = document.getElementById('out-savings');

    function calculateROI() {
        if (!effSlider || !opsSlider || !samSlider) return;

        const eff = parseInt(effSlider.value, 10);
        const ops = parseInt(opsSlider.value, 10);
        const sam = parseInt(samSlider.value, 10);

        effVal.textContent = eff + '%';
        opsVal.textContent = ops;
        samVal.textContent = sam + ' Mins';

        // Garment calculation formula
        // Working hours per day = 9 hrs = 540 mins
        const availableMins = ops * 540 * (eff / 100);
        const dailyTarget = Math.round(availableMins / sam);
        
        // Estimated Cost Per Piece (CPP) assuming avg operator daily wage = PKR 1,500
        const totalDailyWage = ops * 1500;
        const cpp = dailyTarget > 0 ? (totalDailyWage / dailyTarget).toFixed(2) : '0.00';

        // Monthly Savings calculation based on eliminating ~14% waste & 0% voucher errors
        const monthlyBaseSpend = totalDailyWage * 26;
        const monthlySavings = Math.round(monthlyBaseSpend * 0.14);

        outTarget.textContent = dailyTarget.toLocaleString() + ' Pcs';
        outCpp.textContent = 'PKR ' + cpp;
        outSavings.textContent = 'PKR ' + monthlySavings.toLocaleString() + ' / mo';
    }

    if (effSlider && opsSlider && samSlider) {
        effSlider.addEventListener('input', calculateROI);
        opsSlider.addEventListener('input', calculateROI);
        samSlider.addEventListener('input', calculateROI);
        calculateROI(); // initial run
    }

    // --- 9. Lightbox Modal for Full View Images ---
    const lightboxModal = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');

    function openLightbox(src, caption) {
        if (!lightboxModal || !lightboxImg) return;
        lightboxImg.src = src;
        lightboxCaption.textContent = caption || '';
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        if (!lightboxModal) return;
        lightboxModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    lightboxTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const img = trigger.querySelector('img');
            const fullImg = trigger.getAttribute('data-full-img') || (img ? img.src : '');
            const caption = trigger.getAttribute('data-caption') || (img ? img.alt : '');
            if (fullImg) {
                openLightbox(fullImg, caption);
            }
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal || e.target.classList.contains('lightbox-container')) {
                closeLightbox();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
            closeLightbox();
        }
    });

    // --- 10. Theme Accent Switcher Logic ---
    const themeDots = document.querySelectorAll('.theme-dot');
    const savedTheme = localStorage.getItem('portfolio-theme') || 'cyan';
    
    function applyTheme(themeName) {
        document.documentElement.setAttribute('data-theme', themeName);
        themeDots.forEach(dot => {
            if (dot.getAttribute('data-theme') === themeName) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
        localStorage.setItem('portfolio-theme', themeName);
    }

    applyTheme(savedTheme);

    themeDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const theme = dot.getAttribute('data-theme');
            applyTheme(theme);
        });
    });

    // --- 11. Interactive Resume Modal Logic ---
    const resumeModal = document.getElementById('resume-modal');
    const openResumeBtn = document.getElementById('open-resume-btn');
    const closeResumeBtn = document.getElementById('close-resume-btn');

    function openResume() {
        if (!resumeModal) return;
        resumeModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeResume() {
        if (!resumeModal) return;
        resumeModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (openResumeBtn) {
        openResumeBtn.addEventListener('click', openResume);
    }

    if (closeResumeBtn) {
        closeResumeBtn.addEventListener('click', closeResume);
    }

    if (resumeModal) {
        resumeModal.addEventListener('click', (e) => {
            if (e.target === resumeModal) {
                closeResume();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && resumeModal && resumeModal.classList.contains('active')) {
            closeResume();
        }
    });
});
