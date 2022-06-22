export function openClose() {
    // console.log(window.innerWidth);
    if(window.innerWidth <= 1100){
        // console.log('reached here');
        const opener = document.querySelectorAll('.opener');
        
        // console.log(toggleContent);
        opener.forEach(item => {
            item.addEventListener('click', event => {
                //handle click
                // console.log(item.nextSibling);
                event.target.nextSibling.classList.toggle('show-element');
            })
        })
    }
}
// window.onresize = openClose;
window.addEventListener('resize', openClose);