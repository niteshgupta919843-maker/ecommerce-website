/* ============================================
   1. ADD TO CART SYSTEM
============================================ */
let cartCount = 0;
const cartButton = document.querySelector(".cart-btn");

document.querySelectorAll(".product-actions .btn:last-child").forEach(btn => {
  btn.addEventListener("click", () => {
    cartCount++;
    cartButton.innerHTML = `🛒 Cart (${cartCount})`;
    cartButton.classList.add("cart-pop");

    setTimeout(() => cartButton.classList.remove("cart-pop"), 200);
  });
});


/* ============================================
   2. SEARCH FILTER 
============================================ */
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".product-card");

searchInput.addEventListener("input", () => {
  const val = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const name = card.querySelector("h3").innerText.toLowerCase();
    const desc = card.querySelector(".desc").innerText.toLowerCase();

    card.style.display =
      name.includes(val) || desc.includes(val) ? "block" : "none";
  });
});



/* ============================================
   3. SMOOTH SCROLL (NAV & BEST SELLERS FIXED)
============================================ */
document.querySelectorAll('a[href^="#"], .seller').forEach(link => {
  link.addEventListener("click", function (e) {

    // Only prevent default if it's a section link
    if (this.tagName === "A" && this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target?.scrollIntoView({ behavior: "smooth" });
    }

    // Best seller card clicks
    if (this.classList.contains("seller")) {
      const productName = this.querySelector("strong").innerText.toLowerCase();

      productCards.forEach(card => {
        const name = card.querySelector("h3").innerText.toLowerCase();

        if (name.includes(productName)) {
          card.scrollIntoView({ behavior: "smooth", block: "center" });
          card.classList.add("highlight");

          setTimeout(() => card.classList.remove("highlight"), 1500);
        }
      });
    }
  });
});


/* ============================================
   4. BUY NOW EMAIL FIXED
============================================ */
document.querySelectorAll(".btn-buy").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const productName = btn
      .closest(".product-card")
      .querySelector("h3").innerText;

    window.location.href =
      `mailto:orders@example.com?subject=Order%20${encodeURIComponent(productName)}`;
  });
});

/* ============================================
   5. SCROLL ANIMATION
============================================ */
const animatedItems = document.querySelectorAll(".product-card, .service, .seller");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      // 🔥 REMOVE CLASS when going out → animation repeat
      entry.target.classList.remove("show");
    }

  });
}, { threshold: 0.3 });

animatedItems.forEach(item => observer.observe(item));

/* ============================================
   6. CONTACT FORM FIXED
============================================ */
const form = document.getElementById("contact-form");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", e => {
  e.preventDefault();
  successMsg.innerText = "✅ Message sent successfully!";
  successMsg.style.display = "block";

  setTimeout(() => {
    successMsg.style.display = "none";
    form.reset();
  }, 2500);
});




