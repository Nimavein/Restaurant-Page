const showHomeTab = () => {
    let contentDiv = document.getElementById('content');
    if (document.getElementsByClassName("tab-content").length == 0) {
        let homeTabContent = document.createElement('div');
        homeTabContent.classList.add('tab-content');
        homeTabContent.innerText = "Home";
        contentDiv.appendChild(homeTabContent);
    } else {
        
        let elements = document.getElementsByClassName("tab-content");
        elements[0].parentNode.removeChild(elements[0]);
        let homeTabContent = document.createElement('div');
        homeTabContent.classList.add('tab-content');
        homeTabContent.innerText = "Home";
        contentDiv.appendChild(homeTabContent);
    }
    
}

export default showHomeTab