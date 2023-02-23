const modal = new BSN.Modal("#exampleModal"); // Плагин модального окна, который привязывается к разметке


const PROMT_DELAY = 3000;
const MAX_PROMT_ATTEMPTS = 3;
let promtCounter = 0;
let hasSubscribed = false;


const refs = {
    modal: document.querySelector("#exampleModal"),
    subscrBtn: document.querySelector(".btn-primary")
}


openModal();


refs.modal.addEventListener("hide.bs.modal", openModal);
refs.subscrBtn.addEventListener("click", onSubscrBtnClick);




//--------- Functions -----------------------
function openModal() {
    if (promtCounter === MAX_PROMT_ATTEMPTS || hasSubscribed) {
        console.log("Ну хватит надоедать или подписался");
        return;
    }

    setTimeout(() => {        
        console.log('Открытие надоедалки');
        modal.show();
        promtCounter += 1;
    }, PROMT_DELAY);
}


function onSubscrBtnClick () {
    hasSubscribed = true;
    modal.hide();
}