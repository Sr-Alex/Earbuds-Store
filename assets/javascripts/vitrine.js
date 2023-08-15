const vitrine = document.querySelector('#vitrine')
const vitrineImgs = document.querySelectorAll('#vitrine img');
const vitrineBtns = document.querySelectorAll('#vitrine-buttons button');


vitrine.onscroll = () => {
    vitrineVerify(vitrine.scrollLeft);
}

vitrineBtns.forEach((btn, index) => {
    btn.onclick = () => {
        switchButton(index);
        vitrineImgs[index].scrollIntoView({ 
            behavior: "smooth",
            block: "center", 
            inline: "center"
        });
    };
});

function vitrineVerify(scrolled){
    let scrollOffset = vitrine.scrollWidth/vitrineImgs.length;
    
    if(scrolled < scrollOffset/2){
        switchButton(0);
    }
    if(scrolled > scrollOffset/2 && scrolled < scrollOffset * 2){
        switchButton(1);
    }
    if(scrolled > (scrollOffset * 2) && scrolled < scrollOffset * 3){
        switchButton(2);
    }
}

function switchButton(index) {
    vitrineBtns.forEach(btn => {
        btn.classList.replace('bg-pink-700', 'bg-white');
        btn.classList.replace('w-4', 'w-3');
        btn.classList.replace('h-4', 'h-3');
    });
    
    vitrineBtns[index].classList.replace('bg-white', 'bg-pink-700');
    vitrineBtns[index].classList.replace('w-3', 'w-4');
    vitrineBtns[index].classList.replace('h-3', 'h-4');
}