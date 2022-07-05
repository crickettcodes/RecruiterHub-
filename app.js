let sectBtns = document.querySelectorAll(".controls");
let sectBtn = document.querySelectorAll(".control");
let allSections = document.querySelector(".main-content");
let sections = document.querySelectorAll(".section");

function PageTransitions() {
  // Button click for active class

  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        " "
      );
      this.className += "active-btn";
    });
  }
  // Sections Active Class
  allSections.addEventListener("click", (e) => {
    let id = e.target.dataset.id;
    if (id) {
      // remove selected from the other button
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      // hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      let element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

// let themeBtn = document.querySelector(".theme-btn");

// themeBtn.addEventListener("click", () => {
//   let element = document.body;
//   element.classList.toggle(".light-mode");
//   console.log("tehe tehe");
// });
PageTransitions();
