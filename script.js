
/* ================================================
   1. ADD TO CART LOGIC
================================================ */
let cartCount = 0;
const cartButton = document.querySelector(".nav-items button");


// All “Add to Cart” buttons
const addToCartButtons = document.querySelectorAll(".product-actions .btn:last-child");

addToCartButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        cartCount++;
        cartButton.textContent = "🛒 Cart " + cartCount;
       
    });
});


/* ================================================
   2. SEARCH SYSTEM (LIVE PRODUCT FILTER)
================================================ */

const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    productCards.forEach(card => {
        const name = card.querySelector("h3").textContent.toLowerCase();
        const desc = card.querySelector(".desc").textContent.toLowerCase();

        if (name.includes(value) || desc.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

/* ================================================
   3. SMOOTH SCROLL FOR BUTTONS
================================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});



/* ================================================
   4. BUY NOW → OPEN EMAIL WITH PRODUCT NAME
================================================ */
const buyBtns = document.querySelectorAll(".product-actions .btn:first-child");

buyBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const productName = btn.closest(".product-card").querySelector("h3").textContent;

        window.location.href = 
        `mailto:orders@example.com?subject=Order%20${productName}`;
    });
});




const navLinks = document.querySelectorAll('.nav-items a');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href'); 
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});




const form = document.getElementById('contact-form');
const successMsg =  document.getElementById('successMsg');

form.addEventListener('submit', function(e) {
    e.preventDefault()  


successMsg.textContent = "Your message was sent successfully!"
successMsg.style.display = 'block'

form.reset();

setTimeout(()=>{
    successMsg.style.display = 'none';
} ,3000);
});

