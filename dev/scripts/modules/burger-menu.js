export function burgerMenu() {
    const body = document.getElementsByTagName("body")[0];
    const btns = document.querySelectorAll(".nav-opener");
    
    btns.forEach((btn) => {
        btn.onclick = () => toggleClass(body, "nav-active");
    });
    
    
}

function toggleClass(target, className) {
    let isToggled = target.classList.contains(className);
    if (isToggled) {
        target.classList.remove(className);
    } else {
        target.classList.add(className);
    }
}