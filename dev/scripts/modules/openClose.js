import { node } from "webpack";

export function openClose() {
    // console.log(window.innerWidth);
    if(window.innerWidth <= 1200){
        console.log('reached here');
        var toogleInfos = document.getElementsByClassName('toggle-info');
        console.log(toogleInfos);
        
        for(let i=0; i<toogleInfos.length; i++){
            toogleInfos[i].addEventListener("click", function() {
                toggleDiv(this);
                console.log('clicked');
            });
        }
    }    
}

function toggleDiv(node) {
    // console.log(node);
    let toggleContent = node.getElementsByClassName('toggle-list')[0];
    console.log(toggleContent);
    
    if(toggleContent.style.display === 'block'){
        toggleContent.style.display = 'none';
    }
    else{
        toggleContent.style.display = 'block';
    }    
}


