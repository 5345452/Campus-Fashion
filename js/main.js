/* ================= MOBILE MENU ================= */

/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", (event) => {

        event.stopPropagation();

        const isOpen = mobileMenu.classList.toggle("show");

        menuBtn.classList.toggle("active", isOpen);

        menuBtn.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );

    });


    /* Close when clicking a menu link */

    mobileMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("show");
            menuBtn.classList.remove("active");

            menuBtn.setAttribute("aria-label", "Open menu");

        });

    });


    /* Close when clicking anywhere outside the menu */

    document.addEventListener("click", (event) => {

        if (
            mobileMenu.classList.contains("show") &&
            !mobileMenu.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {

            mobileMenu.classList.remove("show");
            menuBtn.classList.remove("active");

            menuBtn.setAttribute("aria-label", "Open menu");

        }

    });

}


/* ================= PRODUCT FILTERS ================= */

const filters = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product-card");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        const selectedCategory = filter.dataset.filter;


        /* active button */

        filters.forEach(item => {
            item.classList.remove("active");
        });

        filter.classList.add("active");


        /* products */

        products.forEach(product => {

            const productCategory = product.dataset.category;

            if (
                selectedCategory === "all" ||
                productCategory === selectedCategory
            ) {

                product.style.display = "";

            } else {

                product.style.display = "none";

            }

        });

    });

});