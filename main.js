const closeModal = () => {
  let menu = document.querySelector(".container__navigationMenu");
  let closeIcon = document.querySelector(".navbar__icon--close");
  let openIcon = document.querySelector(".navbar__icon--open");
  menu.classList.remove("visible");
  closeIcon.classList.add("hidden");
  openIcon.classList.remove("hidden");
}

const openModal = () => {
  let menu = document.querySelector(".container__navigationMenu");
  let closeIcon = document.querySelector(".navbar__icon--close");
  let openIcon = document.querySelector(".navbar__icon--open");
  menu.classList.add("visible");
  closeIcon.classList.remove("hidden");
  openIcon.classList.add("hidden");
}

// Scroll Events

const scrollToSection = (event) => {
  event.preventDefault();

  const getTargetID = event.target.getAttribute('href');
  const section = document.querySelector(getTargetID);

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}