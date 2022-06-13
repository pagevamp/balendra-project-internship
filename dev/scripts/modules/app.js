import 'popper.js';
// import 'bootstrap/js/dist/button';
import 'bootstrap/js/dist/modal';
import { swiper } from './slider';
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/collapse';
// import 'bootstrap-select';
// import 'bootstrap/js/dist/modal';




class global {
    constructor() {
        this.myModal = document.getElementById('exampleModal')
        this.stickyHeader();
        this.megamenuPopup();
        this.toggleContent();
        this.readMore();
        this.slider();
    }
    
    slider () {
        swiper();
    }
}

export default global;
new global();
