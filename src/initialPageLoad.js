const brandBarInitialize = (() => {
    let contentDiv = document.getElementById('content');
    let brandBarDiv = document.createElement('div');
    let brandBarText = document.createElement('p');
    let brandBarLogo = document.createElement('IMG');
    brandBarDiv.classList.add("brand-bar");
    brandBarLogo.setAttribute("src", "../src/pizza-logo.png");
    brandBarLogo.setAttribute("id", "brandbar-logo");
    brandBarText.innerText = "Pizzeria Gusto";
    brandBarDiv.appendChild(brandBarLogo);
    brandBarDiv.appendChild(brandBarText);
    contentDiv.appendChild(brandBarDiv);
})();

export default brandBarInitialize
