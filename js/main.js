/* =====================================================
   JESTO — MAIN JAVASCRIPT
   ===================================================== */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

function closeMobileMenu() {
    if (!menuBtn || !mobileMenu) return;

    mobileMenu.classList.remove("show");
    menuBtn.classList.remove("active");

    menuBtn.setAttribute("aria-label", "Open menu");
}

function openMobileMenu() {
    if (!menuBtn || !mobileMenu) return;

    mobileMenu.classList.add("show");
    menuBtn.classList.add("active");

    menuBtn.setAttribute("aria-label", "Close menu");
}

if (menuBtn && mobileMenu) {

    menuBtn.setAttribute("aria-label", "Open menu");

    menuBtn.addEventListener("click", (event) => {

        event.stopPropagation();

        const isOpen = mobileMenu.classList.contains("show");

        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });


    /* Close when clicking a menu link */

    mobileMenu.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {
            closeMobileMenu();
        });

    });


    /* Close when clicking outside */

    document.addEventListener("click", (event) => {

        if (
            mobileMenu.classList.contains("show") &&
            !mobileMenu.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {
            closeMobileMenu();
        }

    });


    /* Close with Escape */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeMobileMenu();
        }

    });

}


/* ================= PRODUCT FILTERS ================= */

const filters = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product-card");

function filterProducts(selectedCategory, shouldScroll = false) {

    /* Update active filter */

    filters.forEach((filter) => {

        filter.classList.toggle(
            "active",
            filter.dataset.filter === selectedCategory
        );

    });


    /* Show / hide products */

    products.forEach((product) => {

        const productCategory = product.dataset.category;

        const shouldShow =
            selectedCategory === "all" ||
            productCategory === selectedCategory;

        product.style.display = shouldShow ? "" : "none";

    });


    /* Smoothly move to shop */

    if (shouldScroll) {

        const shopSection = document.getElementById("shop");

        if (shopSection) {

            shopSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }
}


/* Filter buttons */

filters.forEach((filter) => {

    filter.addEventListener("click", () => {

        filterProducts(
            filter.dataset.filter,
            true
        );

    });

});


/* ================= CATEGORY CARDS ================= */

const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach((card) => {

    card.addEventListener("click", (event) => {

        const selectedCategory = card.dataset.filter;

        if (!selectedCategory) {
            return;
        }

        event.preventDefault();

        filterProducts(
            selectedCategory,
            true
        );

    });

});


/* ================= WHATSAPP LINKS ================= */

/*
   Makes sure any old placeholder WhatsApp number
   in the product links is replaced with your real number.
*/

const whatsappNumber = "254115134329";

document.querySelectorAll('a[href*="wa.me/"]').forEach((link) => {

    const currentHref = link.getAttribute("href");

    if (!currentHref) return;

    const updatedHref = currentHref.replace(
        /wa\.me\/\d+/,
        `wa.me/${whatsappNumber}`
    );

    link.setAttribute("href", updatedHref);

    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");

});
/* =====================================================
   JESTO INTRO
   ===================================================== */

const jestoIntro = document.getElementById("jestoIntro");

if (jestoIntro) {

    document.body.style.overflow = "hidden";

    window.addEventListener("load", () => {

        setTimeout(() => {

            jestoIntro.classList.add("hide");

            document.body.style.overflow = "";

        }, 3000);

    });

}
/* =====================================================
   CUSTOMER FEEDBACK → WHATSAPP
   ===================================================== */

const feedbackBtn = document.getElementById("feedbackBtn");

if (feedbackBtn) {

    feedbackBtn.addEventListener("click", () => {

        const clothingSuggestion =
            document.getElementById("clothingSuggestion").value.trim();

        const websiteFeedback =
            document.getElementById("websiteFeedback").value.trim();


        if (!clothingSuggestion && !websiteFeedback) {

            alert("Tell us something first 😊");

            return;
        }


        const message =
`Hi JESTO! 👋

I have some feedback for you.

👗 Clothes I'd like to see:
${clothingSuggestion || "No suggestion yet."}

💻 What I think about the website:
${websiteFeedback || "No feedback yet."}

Thank you!`;

        const whatsappUrl =
            `https://wa.me/254115134329?text=${encodeURIComponent(message)}`;

        window.open(
            whatsappUrl,
            "_blank"
        );

    });

}