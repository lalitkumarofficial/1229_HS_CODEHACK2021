function processForm(e) {
    if (e.preventDefault) e.preventDefault();
    
    return false;
}

document.getElementById('sellfrm').addEventListener("submit", processForm);