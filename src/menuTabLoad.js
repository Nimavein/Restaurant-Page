const menuHomeTab = () => {
    let contentDiv = document.getElementById('content');
if (document.getElementsByClassName("tab-content").length == 0) {
    let menuTabContent = document.createElement('div');
    menuTabContent.classList.add('tab-content');
    menuTabContent.innerText = "Menu";
    contentDiv.appendChild(menuTabContent);
} else {
    
    let elements = document.getElementsByClassName("tab-content");
    elements[0].parentNode.removeChild(elements[0]);
    let menuTabContent = document.createElement('div');
    menuTabContent.classList.add('tab-content');
    menuTabContent.innerText = "Menu";
    contentDiv.appendChild(menuTabContent);
}

}


export default menuHomeTab