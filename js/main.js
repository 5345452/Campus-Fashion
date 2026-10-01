/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("show");
    });

    mobileMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            mobileMenu.classList.remove("show");
        });

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