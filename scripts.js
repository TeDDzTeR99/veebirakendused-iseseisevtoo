function enableHamburgerMenu() {
  const toggle = document.getElementById("menu-toggle");
  const navList = document.getElementById("nav-list");
  if (toggle && navList) {
    toggle.addEventListener("click", () => {
      navList.classList.toggle("active");
    });
  }
}
// FAQ toggle 
//function enableFaqToggle() { 
//    const questions = document.querySelectorAll(".faq-question"); 
//    questions.forEach((question) => { question.addEventListener("click", () => { 
//        const answer = question.nextElementSibling; 
//        answer.style.display = 
//        answer.style.display === "block" ? "none" : "block"; }); }); }

// Laeb header, main menu ja footer
fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
    enableHamburgerMenu();
  });

fetch("main_menu.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("main-menu").innerHTML = data;
    enableHamburgerMenu();
  });

fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });
