const showContactTab = () => {
    let contentDiv = document.getElementById('content');
    if (document.getElementsByClassName("tab-content").length == 0) {
        let contactTabContent = document.createElement('div');
        contactTabContent.classList.add('tab-content');
        contactTabContent.innerText = "Contact";
        contentDiv.appendChild(contactTabContent);
    } else {
        
        let elements = document.getElementsByClassName("tab-content");
        elements[0].parentNode.removeChild(elements[0]);
        let contactTabContent = document.createElement('div');
        contactTabContent.classList.add('tab-content');
        contactTabContent.innerText = "Contact";
        contentDiv.appendChild(contactTabContent);
    }
    
}


export default showContactTab