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

                const suffix = el.getAttribute('data-suffix') || '';

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = Math.floor(current).toLocaleString() + suffix;
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

    // --- 12. Back to Top Floating Button Logic ---
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- 13. Executive One-Pager Summary Modal Logic ---
    const execModal = document.getElementById('exec-summary-modal');
    const openExecBtn = document.getElementById('open-exec-summary-btn');
    const closeExecBtn = document.getElementById('close-exec-summary-btn');

    function openExecSummary() {
        if (!execModal) return;
        execModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeExecSummary() {
        if (!execModal) return;
        execModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (openExecBtn) {
        openExecBtn.addEventListener('click', openExecSummary);
    }

    if (closeExecBtn) {
        closeExecBtn.addEventListener('click', closeExecSummary);
    }

    if (execModal) {
        execModal.addEventListener('click', (e) => {
            if (e.target === execModal) {
                closeExecSummary();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && execModal && execModal.classList.contains('active')) {
            closeExecSummary();
        }
    });

    // --- 14. Light / Dark Mode Toggle Handler ---
    const modeToggleBtn = document.getElementById('mode-toggle-btn');
    if (modeToggleBtn) {
        modeToggleBtn.addEventListener('click', () => {
            const currentMode = document.documentElement.getAttribute('data-mode') || 'dark';
            const newMode = currentMode === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-mode', newMode);
        });
    }

    // --- 15. FAQ Accordion Handler ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isOpen = item.classList.contains('open');
                faqItems.forEach(i => i.classList.remove('open'));
                if (!isOpen) {
                    item.classList.add('open');
                }
            });
        }
    });

    // --- 16. Case Study Modal Popup Logic ---
    const csModal = document.getElementById('case-study-modal');
    const closeCsBtn = document.getElementById('close-cs-modal-btn');
    const csModalTitle = document.getElementById('cs-modal-title');
    const csModalBody = document.getElementById('cs-modal-body');
    const csButtons = document.querySelectorAll('.case-study-btn');

    const caseStudiesData = {
        "1": {
            title: "Production & OEE Performance Dashboard",
            content: `
                <div class="resume-paper">
                    <h3>Executive Case Study Overview</h3>
                    <p>Designed and deployed an interactive Power BI & SQL reporting engine for manufacturing floor operations at Combined Fabrics Ltd.</p>
                    <h4>Problem Statement</h4>
                    <p>Production managers manually prepared paper logbooks every day, causing a 24-hour reporting lag and hidden operator downtime on sewing lines.</p>
                    <h4>Technical Solution</h4>
                    <p>Connected Power BI live to ERP database SQL streams and INA Hanger Line sensors. Developed DAX measures for real-time OEE, Line Balance %, and Downtime categorization.</p>
                    <h4>Business Impact Delivered</h4>
                    <ul class="exp-bullets">
                        <li><strong>80% Reduced Reporting Lag:</strong> Instant real-time line visibility for floor managers.</li>
                        <li><strong>5+ Hours Saved Daily:</strong> Automated manual compilation across all manufacturing units.</li>
                        <li><strong>100% Floor Visibility:</strong> Live tracking of target vs actual output per operator.</li>
                    </ul>
                </div>
            `
        },
        "2": {
            title: "Cut-to-Pack Costing & CPP Analysis Dashboard",
            content: `
                <div class="resume-paper">
                    <h3>Executive Case Study Overview</h3>
                    <p>Built SAM-validated Cut-to-Pack Costing Engine in Excel & Power BI for tentative cost sheets and buyer submissions.</p>
                    <h4>Problem Statement</h4>
                    <p>Inaccurate labor cost estimation created budget variance and endangered profit margins during bulk garment execution.</p>
                    <h4>Technical Solution</h4>
                    <p>Integrated SAM rates, operation bulletins (OBs), direct/indirect labor ratios, and overhead allowances into dynamic Excel VBA and Power BI cost models.</p>
                    <h4>Business Impact Delivered</h4>
                    <ul class="exp-bullets">
                        <li><strong>60% Reduced CPP Variance:</strong> Protected buyer submission profit margins.</li>
                        <li><strong>Instant Cost Sheet Generation:</strong> Accelerated buyer quote turnaround.</li>
                    </ul>
                </div>
            `
        },
        "3": {
            title: "RFID & INA Hanger Line Real-Time Dashboard",
            content: `
                <div class="resume-paper">
                    <h3>Executive Case Study Overview</h3>
                    <p>Streamed real-time garment hanger movement sensors into Power BI floor bottleneck alerts.</p>
                    <h4>Problem Statement</h4>
                    <p>Paper logbooks failed to catch line balance bottlenecks on active sewing lines until after shifts ended.</p>
                    <h4>Technical Solution</h4>
                    <p>Structured live SQL data feeds from RFID readers on INA Hanger Systems into automated DAX alert dashboards.</p>
                    <h4>Business Impact Delivered</h4>
                    <ul class="exp-bullets">
                        <li><strong>100% Shop Floor Traceability:</strong> Real-time garment tracking from cutting to packing.</li>
                        <li><strong>80% Faster Bottleneck Resolution:</strong> Instant floor manager alerts.</li>
                    </ul>
                </div>
            `
        },
        "4": {
            title: "Production Planning & Capacity Allocation Model",
            content: `
                <div class="resume-paper">
                    <h3>Executive Case Study Overview</h3>
                    <p>Dynamic capacity allocation and attendance allowance forecasting model in Excel VBA & Power BI.</p>
                    <h4>Problem Statement</h4>
                    <p>Unplanned operator absenteeism caused target shortfalls and severe line balance disruptions.</p>
                    <h4>Technical Solution</h4>
                    <p>Created predictive attendance allowance calculations and automated line re-balancing models.</p>
                    <h4>Business Impact Delivered</h4>
                    <ul class="exp-bullets">
                        <li><strong>Stabilized Target Output:</strong> Optimized line presence and daily output goals.</li>
                    </ul>
                </div>
            `
        },
        "5": {
            title: "Quality & Floor Deficit Reduction Engine",
            content: `
                <div class="resume-paper">
                    <h3>Executive Case Study Overview</h3>
                    <p>Executive risk analysis dashboard for floor deficits, scrap rates, and root cause quality matrices.</p>
                    <h4>Problem Statement</h4>
                    <p>Unresolved floor deficits created budget overruns and delayed export shipment schedules.</p>
                    <h4>Technical Solution</h4>
                    <p>Built DAX quality metric models and led weekly executive decision support briefings.</p>
                    <h4>Business Impact Delivered</h4>
                    <ul class="exp-bullets">
                        <li><strong>Reduced Operator Deficits:</strong> Improved shipment on-time completion rates.</li>
                    </ul>
                </div>
            `
        },
        "6": {
            title: "Excel Voucher & Wage Validation Automation",
            content: `
                <div class="resume-paper">
                    <h3>Executive Case Study Overview</h3>
                    <p>Automated piece-rate voucher auditing workflow and operation code standardization engine.</p>
                    <h4>Problem Statement</h4>
                    <p>Manual paper piece-rate vouchers required 3+ days of manual auditing, leading to payment errors and worker friction.</p>
                    <h4>Technical Solution</h4>
                    <p>Standardized 3,400+ operation codes and developed Excel VBA validation routines connected to SQL databases.</p>
                    <h4>Business Impact Delivered</h4>
                    <ul class="exp-bullets">
                        <li><strong>0% Audit Discrepancy Rate:</strong> Completely eliminated payment errors.</li>
                        <li><strong>15 Hours Saved Weekly:</strong> Automated payroll processing.</li>
                    </ul>
                </div>
            `
        }
    };

    csButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-cs');
            if (caseStudiesData[id] && csModal) {
                csModalTitle.textContent = caseStudiesData[id].title;
                csModalBody.innerHTML = caseStudiesData[id].content;
                csModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    if (closeCsBtn) {
        closeCsBtn.addEventListener('click', () => {
            if (csModal) {
                csModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    if (csModal) {
        csModal.addEventListener('click', (e) => {
            if (e.target === csModal) {
                if (csModal) {
                    csModal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    }
});
