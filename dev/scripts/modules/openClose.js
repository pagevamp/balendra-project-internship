export function openClose() {
    // console.log(window.innerWidth);
    if(window.innerWidth <= 1200){
        // console.log('reached here');
        const toogleInfos = document.querySelectorAll('.toggle-info');
        let toggleContent = document.querySelectorAll('.toggle-list');
        
        console.log(toggleContent);
        toogleInfos.forEach(item => {
            item.addEventListener('click', event => {
                //handle click
                // console.log(event.target.nextSibling);
                event.target.nextSibling.classList.toggle('show-element');
                
                
            })
            
            
        })
    }
}

window.onresize = openClose;

