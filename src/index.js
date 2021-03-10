import brandBarInitialize from "./initialPageLoad"
import navBarInitialize from "./navbarLoad"
import showHomeTab from "./homeTabLoad"
import showMenuTab from "./menuTabLoad"
import showContactTab from "./contactTabLoad"
import footerInitialize from "./footerLoad"

showHomeTab();
navBarInitialize.homeTabButton.style.textDecoration = "underline";


navBarInitialize.homeTabButton.addEventListener("click", function() {
    showHomeTab();
    navBarInitialize.contactTabButton.style.textDecoration = "none";
    navBarInitialize.menuTabButton.style.textDecoration = "none";
    navBarInitialize.homeTabButton.style.textDecoration = "underline";
});

navBarInitialize.menuTabButton.addEventListener("click", function(){
    showMenuTab();
    navBarInitialize.contactTabButton.style.textDecoration = "none";
    navBarInitialize.homeTabButton.style.textDecoration = "none";
    navBarInitialize.menuTabButton.style.textDecoration = "underline";
});

navBarInitialize.contactTabButton.addEventListener("click", function(){
    showContactTab();
    navBarInitialize.homeTabButton.style.textDecoration = "none";
    navBarInitialize.menuTabButton.style.textDecoration = "none";
    navBarInitialize.contactTabButton.style.textDecoration = "underline";
});

