const form = document.getElementById("contactForm");
const response = document.getElementById("response");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    response.textContent = `Thank you, ${name}! Your message has been sent.`;
    response.style.color = "green";
    form.reset();
  } else {
    response.textContent = "Please fill out all fields.";
    response.style.color = "red";
  }

  // 4 seconds ke baad message hide ho jayega
  setTimeout(() => {
    response.textContent = "";
  }, 4000);
});
