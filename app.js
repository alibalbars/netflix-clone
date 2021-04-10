
let faq_click = () => {
    console.log()
    console.log("geldi")
    // e.classList.remove("closed")
    // children[i].classList.add("opened")
}

function deneme() {
    console.log("deneme")
}

const buttons = document.querySelectorAll(".faq-list-item button");
const descriptions = document.querySelectorAll(".faq-list-item div");

let flag = 0;
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", deneme, false);
}

function close_other_lists(i){

}
