(function () {
    "use strict";

    /* ---------- Design detail data ---------- */
    var cardDetails = {
        "Typography Cutout": {
            category: "Creative Typography & Branding",
            description: "A bold cutout-style typography piece where letterforms are shaped from imagery and texture to create a striking, brand-forward visual.",
            type: "Typography Artwork", usage: "Branding, social media, print",
            customization: "Text, imagery, color palette", size: "Instagram Post, A3, Custom",
            delivery: "PNG, JPG, PDF — high resolution", revisions: "2 free revisions included",
            price: "Starting at $30 — final quote after requirements"
        },
        "Typographic Logo": {
            category: "Creative Typography & Branding",
            description: "A custom wordmark built entirely from expressive type, designed to work as a standalone logo across your brand.",
            type: "Logo / Wordmark", usage: "Branding, packaging, website, print",
            customization: "Wordmark text, font pairing, colors", size: "Vector, PNG, SVG",
            delivery: "Source file + exported PNG/SVG", revisions: "3 free revisions included",
            price: "Starting at $60 — final quote after requirements"
        },
        "Image Filled Typography": {
            category: "Creative Typography & Branding",
            description: "Large display type filled with photography or texture, ideal for eye-catching headlines and cover art.",
            type: "Typography Artwork", usage: "Covers, social media, posters",
            customization: "Text, fill imagery, color grading", size: "A3, Instagram Post, Custom",
            delivery: "PNG, JPG, PDF — high resolution", revisions: "2 free revisions included",
            price: "Starting at $35 — final quote after requirements"
        },
        "Commercial Graphic Designs": {
            category: "Creative Typography & Branding",
            description: "Versatile commercial graphics tailored for advertising and business use, balancing clarity with visual impact.",
            type: "Commercial Graphic", usage: "Advertising, business collateral",
            customization: "Layout, text, brand colors", size: "A4, A3, Custom digital sizes",
            delivery: "PNG, JPG, PDF — high resolution", revisions: "2 free revisions included",
            price: "Starting at $40 — final quote after requirements"
        },
        "Sports Promotional Poster": {
            category: "Promotional & Entertainment Designs",
            description: "A high-energy sports poster designed to promote teams, matches or athletic events with dynamic composition.",
            type: "Poster Design", usage: "Print, social media, stadium display",
            customization: "Team names, colors, player imagery", size: "A3, A2, Instagram Post",
            delivery: "PNG, JPG, PDF — print ready", revisions: "2 free revisions included",
            price: "Starting at $35 — final quote after requirements"
        },
        "Comic Book Fan Art": {
            category: "Promotional & Entertainment Designs",
            description: "Stylized comic-inspired fan art with bold linework and dramatic color, built for entertainment and fan communities.",
            type: "Illustration / Fan Art", usage: "Prints, social media, merchandise",
            customization: "Character styling, color scheme", size: "A3, Digital Print, Custom",
            delivery: "PNG, JPG — high resolution", revisions: "2 free revisions included",
            price: "Starting at $45 — final quote after requirements"
        },
        "Automotive Promotional Poster": {
            category: "Promotional & Entertainment Designs",
            description: "A sleek automotive poster highlighting vehicles with dramatic lighting and motion-driven layout.",
            type: "Poster Design", usage: "Dealership marketing, print, social media",
            customization: "Vehicle imagery, text, colors", size: "A3, A2, Instagram Post",
            delivery: "PNG, JPG, PDF — print ready", revisions: "2 free revisions included",
            price: "Starting at $40 — final quote after requirements"
        },
        "Restraunt Promotional Designs": {
            category: "Promotional & Entertainment Designs",
            description: "Appetizing restaurant promotional artwork designed to draw attention to menu items and special offers.",
            type: "Poster / Social Design", usage: "Print, social media, in-store display",
            customization: "Menu items, pricing, brand colors", size: "A4, A3, Instagram Post",
            delivery: "PNG, JPG, PDF — print ready", revisions: "2 free revisions included",
            price: "Starting at $30 — final quote after requirements"
        },
        "Global campigns design": {
            category: "Campaign & Business Designs",
            description: "A cohesive campaign visual built to scale across multiple markets and touchpoints for global brand messaging.",
            type: "Campaign Graphic", usage: "Advertising, multi-platform campaigns",
            customization: "Messaging, imagery, brand colors", size: "Multiple digital and print sizes",
            delivery: "PNG, JPG, PDF — high resolution", revisions: "3 free revisions included",
            price: "Starting at $70 — final quote after requirements"
        },
        "YouTube Channel Banner": {
            category: "Campaign & Business Designs",
            description: "A professional YouTube channel banner sized and safe-zoned correctly for desktop, tablet and mobile.",
            type: "Channel Art", usage: "YouTube channel branding",
            customization: "Channel name, colors, imagery", size: "2560x1440px (safe-zone compliant)",
            delivery: "PNG — platform ready", revisions: "2 free revisions included",
            price: "Starting at $25 — final quote after requirements"
        },
        "Charity poster": {
            category: "Campaign & Business Designs",
            description: "A warm, purposeful charity poster designed to communicate a cause clearly and encourage support.",
            type: "Poster Design", usage: "Print, social media, fundraising events",
            customization: "Cause details, imagery, colors", size: "A3, A2, Instagram Post",
            delivery: "PNG, JPG, PDF — print ready", revisions: "2 free revisions included",
            price: "Starting at $30 — final quote after requirements"
        },
        "Real Estate promotional poster": {
            category: "Campaign & Business Designs",
            description: "A polished real estate poster showcasing property highlights with a trustworthy, professional layout.",
            type: "Poster Design", usage: "Print, social media, listing marketing",
            customization: "Property details, imagery, branding", size: "A3, A2, Instagram Post",
            delivery: "PNG, JPG, PDF — print ready", revisions: "2 free revisions included",
            price: "Starting at $35 — final quote after requirements"
        },
        "Beverage and Food Design": {
            category: "Marketing & Promotional Graphics",
            description: "Vibrant food and beverage marketing artwork designed to make products look irresistible.",
            type: "Marketing Graphic", usage: "Print, social media, packaging promo",
            customization: "Product imagery, text, colors", size: "A4, A3, Instagram Post",
            delivery: "PNG, JPG, PDF — high resolution", revisions: "2 free revisions included",
            price: "Starting at $30 — final quote after requirements"
        },
        "Election Campaigns design": {
            category: "Marketing & Promotional Graphics",
            description: "A clear, credible election campaign design built to communicate a candidate's message effectively.",
            type: "Campaign Graphic", usage: "Print, social media, canvassing materials",
            customization: "Candidate details, colors, imagery", size: "A3, A2, Instagram Post",
            delivery: "PNG, JPG, PDF — print ready", revisions: "2 free revisions included",
            price: "Starting at $40 — final quote after requirements"
        },
        "YouTube thumbnail designs": {
            category: "Marketing & Promotional Graphics",
            description: "A high-contrast, click-worthy YouTube thumbnail designed to stand out in a crowded feed.",
            type: "Thumbnail Design", usage: "YouTube video marketing",
            customization: "Text, expression/imagery, colors", size: "1280x720px",
            delivery: "PNG/JPG — platform ready", revisions: "2 free revisions included",
            price: "Starting at $15 — final quote after requirements"
        },
        "Workshop poster": {
            category: "Marketing & Promotional Graphics",
            description: "An informative workshop poster laying out event details clearly while staying visually engaging.",
            type: "Poster Design", usage: "Print, social media, event promotion",
            customization: "Event details, imagery, colors", size: "A3, A2, Instagram Post",
            delivery: "PNG, JPG, PDF — print ready", revisions: "2 free revisions included",
            price: "Starting at $25 — final quote after requirements"
        },
        "Sports Event Match Poster": {
            category: "Events, Culture & Special Promotions",
            description: "A dynamic match-day poster built to hype an upcoming sporting event with bold typography and imagery.",
            type: "Poster Design", usage: "Print, social media, stadium display",
            customization: "Match details, team colors, imagery", size: "A3, A2, Instagram Post",
            delivery: "PNG, JPG, PDF — print ready", revisions: "2 free revisions included",
            price: "Starting at $35 — final quote after requirements"
        },
        "Travel & Tourism Poster": {
            category: "Events, Culture & Special Promotions",
            description: "An inviting travel poster that captures a destination's atmosphere to inspire bookings and interest.",
            type: "Poster Design", usage: "Print, social media, agency marketing",
            customization: "Destination imagery, text, colors", size: "A3, A2, Instagram Post",
            delivery: "PNG, JPG, PDF — print ready", revisions: "2 free revisions included",
            price: "Starting at $30 — final quote after requirements"
        },
        "Cultural festival poster": {
            category: "Events, Culture & Special Promotions",
            description: "A vibrant cultural festival poster celebrating tradition and community through color and pattern.",
            type: "Poster Design", usage: "Print, social media, community boards",
            customization: "Event details, imagery, color palette", size: "A3, A2, Instagram Post",
            delivery: "PNG, JPG, PDF — print ready", revisions: "2 free revisions included",
            price: "Starting at $30 — final quote after requirements"
        },
        "Sale and discount poster": {
            category: "Events, Culture & Special Promotions",
            description: "A punchy sale poster designed to grab attention fast and communicate an offer clearly.",
            type: "Poster Design", usage: "Print, social media, in-store display",
            customization: "Offer details, pricing, colors", size: "A4, A3, Instagram Post",
            delivery: "PNG, JPG, PDF — print ready", revisions: "2 free revisions included",
            price: "Starting at $20 — final quote after requirements"
        }
    };

    /* ---------- Helpers ---------- */
    function qs(sel, ctx) { return (ctx || document).querySelector(sel); }
    function qsa(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

    var detailModal = qs("#detailModal");
    var orderModal = qs("#orderModal");
    var lastFocusedEl = null;

    function openModal(modal) {
        lastFocusedEl = document.activeElement;
        modal.classList.add("open");
        document.body.style.overflow = "hidden";
        var focusable = modal.querySelector("button, input, textarea, select, a[href]");
        if (focusable) focusable.focus();
        document.addEventListener("keydown", onModalKeydown);
    }

    function closeModal(modal) {
        modal.classList.remove("open");
        document.body.style.overflow = "";
        document.removeEventListener("keydown", onModalKeydown);
        if (lastFocusedEl) lastFocusedEl.focus();
    }

    function onModalKeydown(e) {
        if (e.key === "Escape") {
            qsa(".modal-overlay.open").forEach(closeModal);
        }
    }

    qsa(".modal-overlay").forEach(function (overlay) {
        overlay.addEventListener("click", function (e) {
            if (e.target === overlay) closeModal(overlay);
        });
        qsa("[data-close-modal]", overlay).forEach(function (btn) {
            btn.addEventListener("click", function () { closeModal(overlay); });
        });
    });

    /* ---------- Product card click -> detail modal ---------- */
    var cards = qsa(".product-card");
    var activeCardTitle = null;

    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            cards.forEach(function (c) { c.classList.remove("active"); });
            card.classList.add("active");

            var title = card.getAttribute("data-title");
            var img = card.querySelector("img");
            var data = cardDetails[title];
            if (!data) return;

            activeCardTitle = title;

            qs("#detailImage").src = img.src;
            qs("#detailImage").alt = img.alt;
            qs("#detailCategory").textContent = data.category;
            qs("#detailModalTitle").textContent = title;
            qs("#detailDesc").textContent = data.description;
            qs("#detailType").textContent = data.type;
            qs("#detailUsage").textContent = data.usage;
            qs("#detailCustom").textContent = data.customization;
            qs("#detailSize").textContent = data.size;
            qs("#detailDelivery").textContent = data.delivery;
            qs("#detailRevisions").textContent = data.revisions;
            qs("#detailPrice").textContent = data.price;

            openModal(detailModal);
        });
    });

    /* ---------- Order modal open/prefill ---------- */
    function openOrderModal(prefillTitle) {
        closeModal(detailModal);
        var sel = qs("#ofSelectedDesign");
        sel.value = prefillTitle || "";
        qs("#orderSuccess").classList.remove("show");
        qs("#orderForm").reset();
        if (prefillTitle) sel.value = prefillTitle;
        openModal(orderModal);
    }

    qs("#orderThisDesignBtn").addEventListener("click", function () {
        openOrderModal(activeCardTitle);
    });

    qs("#heroOrderBtn").addEventListener("click", function () { openOrderModal(""); });
    qs("#navOrderBtn").addEventListener("click", function () { openOrderModal(""); });
    qs("#contactOrderBtn").addEventListener("click", function () { openOrderModal(""); });

    qs("#contactDesignerBtn").addEventListener("click", function () {
        window.location.href = "mailto:hello@pixelcraftstudio.com?subject=Design%20Inquiry";
    });
    qs("#contactFromDetailBtn").addEventListener("click", function () {
        var subject = encodeURIComponent("Inquiry about: " + (activeCardTitle || "a design"));
        window.location.href = "mailto:hello@pixelcraftstudio.com?subject=" + subject;
    });

    /* Services -> order modal with design type preselected */
    qsa(".service-card").forEach(function (btn) {
        btn.addEventListener("click", function () {
            qsa(".service-card").forEach(function (b) { b.classList.remove("active"); });
            btn.classList.add("active");
            openOrderModal("");
            var typeSelect = qs("#ofDesignType");
            var wanted = btn.getAttribute("data-service");
            for (var i = 0; i < typeSelect.options.length; i++) {
                if (typeSelect.options[i].text === wanted) { typeSelect.selectedIndex = i; break; }
            }
        });
    });

    /* ---------- Order form submit (no backend — local confirmation) ---------- */
    qs("#orderForm").addEventListener("submit", function (e) {
        e.preventDefault();
        qs("#orderSuccess").classList.add("show");
    });

    /* ---------- Mobile nav toggle ----------
       Uses a CSS class only (see .nav-links.mobile-open in style.css) —
       no inline styles — so nothing gets "stuck" open or misplaced
       when the window is resized across breakpoints. */
    var navToggle = qs("#navToggle");
    var navLinks = qs("#navLinks");

    function setNavOpen(isOpen) {
        navLinks.classList.toggle("mobile-open", isOpen);
        navToggle.classList.toggle("open", isOpen);
        navToggle.setAttribute("aria-expanded", String(isOpen));
    }

    navToggle.addEventListener("click", function () {
        setNavOpen(!navLinks.classList.contains("mobile-open"));
    });

    qsa(".nav-links a").forEach(function (link) {
        link.addEventListener("click", function () { setNavOpen(false); });
    });

    document.addEventListener("click", function (e) {
        if (navLinks.classList.contains("mobile-open") &&
            !navLinks.contains(e.target) &&
            !navToggle.contains(e.target)) {
            setNavOpen(false);
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 900) setNavOpen(false);
    });

    /* ---------- Scroll reveal for sections ---------- */
    if ("IntersectionObserver" in window) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        qsa(".section").forEach(function (section) { revealObserver.observe(section); });
    } else {
        qsa(".section").forEach(function (section) { section.classList.add("in-view"); });
    }

    /* ---------- Stat counter animation ---------- */
    function animateCount(el) {
        var target = parseInt(el.getAttribute("data-count"), 10) || 0;
        var suffix = el.getAttribute("data-suffix") || "";
        var duration = 1200;
        var start = null;

        function step(ts) {
            if (!start) start = ts;
            var progress = Math.min((ts - start) / duration, 1);
            var value = Math.floor(progress * target);
            el.textContent = value + suffix;
            if (progress < 1) requestAnimationFrame(step);
            else el.textContent = target + suffix;
        }
        requestAnimationFrame(step);
    }

    var statEls = qsa(".stat-number");
    if ("IntersectionObserver" in window && statEls.length) {
        var statObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCount(entry.target);
                    statObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });
        statEls.forEach(function (el) { statObserver.observe(el); });
    } else {
        statEls.forEach(function (el) {
            el.textContent = el.getAttribute("data-count") + (el.getAttribute("data-suffix") || "");
        });
    }

    /* ---------- Footer year ---------- */
    var yearEl = qs("#footerYear");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---------- Comment / quick order-note section ----------
       No backend: comments are saved to this browser's localStorage
       (falls back
