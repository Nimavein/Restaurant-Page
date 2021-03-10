const navBarInitialize = (() => {
    let contentDiv = document.getElementById('content');
    //let seperator = document.createElement('hr')
    let navBarDiv = document.createElement('div');
    let homeTabButton = document.createElement('button');
    let menuTabButton = document.createElement('button');
    let contactTabButton = document.createElement('button');
    //let allTabs = document.createElement('div');
    //allTabs.classList.add('all-tabs');
    homeTabButton.innerText = "Home";
    menuTabButton.innerText = "Menu";
    contactTabButton.innerText = "Contact";
    homeTabButton.classList.add('tab-buttons');
    menuTabButton.classList.add('tab-buttons');
    contactTabButton.classList.add('tab-buttons');
    //seperator.classList.add('separator');
    navBarDiv.classList.add('navbar');
    //contentDiv.appendChild(seperator);
    contentDiv.appendChild(navBarDiv);
    navBarDiv.appendChild(homeTabButton);
    navBarDiv.appendChild(menuTabButton);
    navBarDiv.appendChild(contactTabButton);
    //contentDiv.appendChild(allTabs);
    //allTabs.appendChild(homeTabContent);
    //allTabs.appendChild(menuTabContent);
    //allTabs.appendChild(contactTabContent);
    return {homeTabButton, menuTabButton, contactTabButton}
})();

export default navBarInitialize