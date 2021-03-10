const footerInitialize = (() => {
    let contentDiv = document.getElementById('content');
    let footerDiv = document.createElement('div');
    let footerText = document.createElement('p');
    footerDiv.classList.add('footer-div')
    footerText.classList.add('footer-text')
    footerText.innerText = "Copyright © 2021 Nimavein";
    contentDiv.appendChild(footerDiv);
    footerDiv.appendChild(footerText);
})();

export default footerInitialize