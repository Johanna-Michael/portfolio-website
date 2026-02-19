const contactBtn = document.getElementById("contact-btn");
const message = document.getElementById("message");

contactBtn.addEventListener("click", function () {
  message.style.display = "block";
  contactBtn.style.display = "none";
});
