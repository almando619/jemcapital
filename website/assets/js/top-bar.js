const menuIcon = $("#menu-icon");
const linksPopper = $("#top-bar-links-popper");
const logoIcon = $("#logo-icon");

//variables
let isOpenLinksPopper = false;

//listeners
menuIcon.click(() => {
  if (isOpenLinksPopper) {
    closeLinksPopper();
  } else {
    openLinksPopper();
  }
});

logoIcon.click(() => {
  if (window.location.pathname !== "/m2vproduction/home") {
    window.location.pathname = "/m2vproduction/home";
  }
});

//methods
const openLinksPopper = () => {
  menuIcon.html(`<i id="menu-icon-i" class="fas fa-close"></i>`);
  linksPopper.fadeIn(500);
  isOpenLinksPopper = true;
};

const closeLinksPopper = () => {
  menuIcon.html(`<i id="menu-icon-i" class="fas fa-bars-staggered"></i>`);
  linksPopper.fadeOut(500);
  isOpenLinksPopper = false;
};

$(window).click((e) => {
  if (e.target.id === "menu-icon-i" || e.target.id === "top-bar-links-popper") {
    e.preventDefault();
  } else {
    closeLinksPopper();
  }
});

$(document).ready(() => {
  switch (window.location.pathname.substring(18)) {
    case "/home":
      $("#link-home").addClass("active-link");
      $("#link-home-alt").addClass("active-link");
      break;
    case "/about":
      $("#link-about").addClass("active-link");
      $("#link-about-alt").addClass("active-link");
      break;
    case "/services":
      $("#link-services").addClass("active-link");
      $("#link-services-alt").addClass("active-link");
      break;
    case "/real-estate":
      $("#link-real-estate").addClass("active-link");
      $("#link-real-estate-alt").addClass("active-link");
      break;
    case "/real-training":
      $("#link-real-training").addClass("active-link");
      $("#link-real-training-alt").addClass("active-link");
      break;
    case "/brela":
      $("#link-brela").addClass("active-link");
      $("#link-brela-alt").addClass("active-link");
      break;

    default:
      break;
  }
});
