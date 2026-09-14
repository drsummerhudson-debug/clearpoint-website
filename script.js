const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});
const backToTop = document.querySelector("#backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
        const faqItem = question.closest(".faq-item");
        const icon = question.querySelector(".faq-icon");

        faqItem.classList.toggle("active");

        if (faqItem.classList.contains("active")) {
            icon.textContent = "−";
        } else {
            icon.textContent = "+";
        }
    });
});
const consultationForm = document.querySelector("#consultationForm");
const formSuccess = document.querySelector("#formSuccess");
const preferredDate = document.querySelector("#date");

if (preferredDate) {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    preferredDate.min = `${year}-${month}-${day}`;
}

if (consultationForm) {
    consultationForm.addEventListener("submit", (event) => {
        event.preventDefault();

        formSuccess.style.display = "block";

        consultationForm.reset();

        formSuccess.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
}