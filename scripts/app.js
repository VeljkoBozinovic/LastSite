const elementMenuButton = document
  .querySelector(".nav__menu__hamburger")
  .addEventListener("click", () => {
    elementMenu.classList.remove("hide");
  });
const elementMenu = document.querySelector(".menu");
const elementMenuClose = document
  .querySelector(".menu__wrapper__close")
  .addEventListener("click", () => {
    elementMenu.classList.add("hide");
  });
const elementBusinessSection = document.querySelector(".business");
const elementBusinessSectionTitle = document.querySelector(".business-title-for-animation");
const elementBusinessSectionImages = document.querySelectorAll(".business-image-for-animation");
const elementBusinessSectionTexts = document.querySelectorAll(
  ".business__wrapper__cards__item__text"
);
const elementWomanSection = document.querySelector(".woman");
const elementWomanSectionCircles = document.querySelector(".woman__wrapper__circles");
const elementWomanSectionImage = document.querySelector(".woman-image-for-animation");
const elementWomanSectionBg = document.querySelector(".woman-bg-for-animation");
const elementWomanSectionSimpleCards = document.querySelectorAll(".woman-s-cards-for-animation");
const elementWomanSectionCards = document.querySelectorAll(".woman-cards-for-animation");
const elementDigitalSection = document.querySelector(".digital");
const elementDigitalSectionBall = document.querySelector(".digital-ball-for-animation");
const elementDigitalSectionWave = document.querySelector(".digital-wave-for-animation");
const elementDigitalSectionCube = document.querySelector(".digital-cube-for-animation");
const elementDigitalSectionCard = document.querySelector(".digital__wrapper__fixed__card");
const elementDigitalSectionWheel = document.querySelector(".digital-wheel-for-animation");
const elementDigitalSectionPipe = document.querySelector(".digital-pipe-for-animation");
const elementWhatWeDoSection = document.querySelector(".whatWeDo");
const elementWhatWeDoSectionBall = document.querySelector(".whatWeDo-ball-for-animation");
const elementWhatWeDoSectionCard = document.querySelector(".whatWeDo__wrapper__card");
const elementWhatWeDoSectionCube = document.querySelector(".whatWeDo-cube-for-animation");
const elementWhatWeDoSectionWave = document.querySelector(".whatWeDo-wave-for-animation");
const elementTeamSectionContainer = document.querySelector(".team__wrapper__container");
const elementTeamSectionTitle = document.querySelector(".team__wrapper__container__title");
const elementTeamSectionText = document.querySelector(".team__wrapper__container__info");
const elementFormSection = document.querySelector(".form");
const elementFormSectionPipe = document.querySelector(".form__wrapper__pipe");
const elementFormSectionWheel = document.querySelector(".form__wrapper__wheel");
const elementFormSectionPottle = document.querySelector(".form__wrapper__pottle ");
const elementFormSectionWave = document.querySelector(".form__wrapper__wave");
const elementFormSectionBall = document.querySelector(".form__wrapper__ball");
const elementFormSectionPipe2 = document.querySelector(".form__wrapper__pipe2");

const observerBusiness = new IntersectionObserver((element) => {
  elementBusinessSectionTitle.classList.toggle("animate-business-title", element[0].isIntersecting);
  elementBusinessSectionImages.forEach((image) => {
    image.classList.toggle("animate-business-images", element[0].isIntersecting);
  });
  elementBusinessSectionTexts.forEach((text) => {
    text.classList.toggle("animate-business-texts", element[0].isIntersecting);
  });
});
observerBusiness.observe(elementBusinessSection);

const observerWoman = new IntersectionObserver((element) => {
  elementWomanSectionCircles.classList.toggle("animate-woman-circles", element[0].isIntersecting);
  elementWomanSectionImage.classList.toggle("animate-woman-image", element[0].isIntersecting);
  elementWomanSectionBg.classList.toggle("animate-woman-bg", element[0].isIntersecting);
  elementWomanSectionSimpleCards.forEach((sCard) => {
    sCard.classList.toggle("animate-woman-s-cards", element[0].isIntersecting);
  });
  elementWomanSectionCards.forEach((card) => {
    card.classList.toggle("animate-woman-cards", element[0].isIntersecting);
  });
});
observerWoman.observe(elementWomanSection);

const observerDigital = new IntersectionObserver((element) => {
  elementDigitalSectionBall.classList.toggle("animate-digital-ball", element[0].isIntersecting);
  elementDigitalSectionWave.classList.toggle("animate-digital-wave", element[0].isIntersecting);
  elementDigitalSectionCube.classList.toggle("animate-digital-cube", element[0].isIntersecting);
  elementDigitalSectionCard.classList.toggle("animate-digital-card", element[0].isIntersecting);
  elementDigitalSectionWheel.classList.toggle("animate-digital-wheel", element[0].isIntersecting);
  elementDigitalSectionPipe.classList.toggle("animate-digital-pipe", element[0].isIntersecting);
});
observerDigital.observe(elementDigitalSection);

const observerWhatWeDo = new IntersectionObserver((element) => {
  elementWhatWeDoSectionBall.classList.toggle("animate-whatWeDo-ball", element[0].isIntersecting);
  elementWhatWeDoSectionCard.classList.toggle("animate-whatWeDo-card", element[0].isIntersecting);
  elementWhatWeDoSectionCube.classList.toggle("animate-whatWeDo-cube", element[0].isIntersecting);
  elementWhatWeDoSectionWave.classList.toggle("animate-whatWeDo-wave", element[0].isIntersecting);
});
observerWhatWeDo.observe(elementWhatWeDoSection);

const observerTeam = new IntersectionObserver((element) => {
  elementTeamSectionTitle.classList.toggle("animate-team-title", element[0].isIntersecting);
  elementTeamSectionText.classList.toggle("animate-team-info", element[0].isIntersecting);
});
observerTeam.observe(elementTeamSectionContainer);

const observerForm = new IntersectionObserver((element) => {
  elementFormSectionBall.classList.toggle("animate-form-ball", element[0].isIntersecting);
  elementFormSectionPipe.classList.toggle("animate-form-pipe", element[0].isIntersecting);
  elementFormSectionPipe2.classList.toggle("animate-form-pipe2", element[0].isIntersecting);
  elementFormSectionPottle.classList.toggle("animate-form-pottle", element[0].isIntersecting);
  elementFormSectionWave.classList.toggle("animate-form-wave", element[0].isIntersecting);
  elementFormSectionWheel.classList.toggle("animate-form-wheel", element[0].isIntersecting);
});
observerForm.observe(elementFormSection);
