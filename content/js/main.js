//Navigation
const menuBtn = document.getElementById("rightMenuBtn");
const menuBtnClose = document.getElementById("rightMenuBtnClose");
const menu = document.getElementById("rightMenu");

//slider
const sliderBtnLeft = document.getElementById("arrow-left");
const sliderBtnRight = document.getElementById("arrow-right");
const sliderContainer = document.getElementById("sliderContainer");

//filter


const fagBtn = document.getElementById("fag");
const skoenBtn = document.getElementById("skoen");
const ungeBtn = document.getElementById("unge");
const allBtn = document.getElementById("all");


const fag = document.getElementsByClassName("fag");
const skoen = document.getElementsByClassName("skoen");
const unge = document.getElementsByClassName("unge");

//popup
const popup = document.getElementById("popup");
const bookBtn = document.getElementsByClassName("main__button");

let bookTitle = document.getElementById("book-title");
let bookImg = document.getElementById("book-img");
popup.style.display = "none";

let sliderBox = document.getElementsByClassName("slider__box")
let sliderInt = 0;

menuBtn.onclick = () => {
    menu.style.transform = "translateX(0)";
    isOpen = true;
}


menuBtnClose.onclick = () => {
    menu.style.transform = "translateX(100%)";
    isOpen = false;

}

sliderBtnLeft.onclick = () => {
    if (sliderInt > 0) {
        sliderInt--;
        console.log(sliderInt);
        console.log("translateX("+ parseInt(sliderBox[0].clientWidth+32) +"px)");
        sliderContainer.style.transform = "translateX(-"+parseInt(sliderBox[0].clientWidth+32) * sliderInt+"px)";
    }
}
sliderBtnRight.onclick = () => {
    if (sliderInt < 2) {
        sliderInt++;
        console.log(sliderInt);
        console.log("translateX("+sliderBox[0].clientWidth * sliderInt +"px)");
        sliderContainer.style.transform = "translateX(-"+parseInt(sliderBox[0].clientWidth+32) * sliderInt+"px)";
    }
}
setInterval(() => {
    if (sliderInt < 2) {
        sliderInt++;
        console.log(sliderInt);
        console.log("translateX("+sliderBox[0].clientWidth * sliderInt +"px)");
        sliderContainer.style.transform = "translateX(-"+parseInt(sliderBox[0].clientWidth+32) * sliderInt+"px)";
    } else if (sliderInt > 0) {
        sliderInt = 0;
        console.log(sliderInt);
        console.log("translateX("+ parseInt(sliderBox[0].clientWidth+32) +"px)");
        sliderContainer.style.transform = "translateX(-"+parseInt(sliderBox[0].clientWidth+32) * sliderInt+"px)";
    }
}, 8000);

fagBtn.onclick = () => {
    for (let i = 0; i < skoen.length; i++) {
        skoen[i].style.opacity = "0";
        skoen[i].style.width = "0";
        skoen[i].style.margin = "0";
        skoen[i].style.display = "none";

        
    }
    for (let i = 0; i < unge.length; i++) {
        unge[i].style.opacity = "0";
        unge[i].style.width = "0";
        unge[i].style.margin = "0";
        unge[i].style.display = "none";

    }
    for (let i = 0; i < fag.length; i++) {
        fag[i].style.opacity = "1";
        fag[i].style.width = "40%";
        fag[i].style.margin = "2em";
        fag[i].style.display = "inline-block";
    }
}

skoenBtn.onclick = () => {

    for (let i = 0; i < fag.length; i++) {
        fag[i].style.opacity = "0";
        fag[i].style.width = "0";
        fag[i].style.margin = "0";
        fag[i].style.display = "none";
    }
    for (let i = 0; i < unge.length; i++) {
        unge[i].style.opacity = "0";
        unge[i].style.width = "0";
        unge[i].style.margin = "0";
        unge[i].style.display = "none";

    }
    for (let i = 0; i < skoen.length; i++) {
        skoen[i].style.opacity = "1";
        skoen[i].style.width = "40%";
        skoen[i].style.margin = "2em";
        skoen[i].style.display = "inline-block";
    }
}
ungeBtn.onclick = () => {
    for (let i = 0; i < fag.length; i++) {
        fag[i].style.opacity = "0";
        fag[i].style.width = "0";
        fag[i].style.margin = "0";
        fag[i].style.display = "none";

    }
    for (let i = 0; i < skoen.length; i++) {
        skoen[i].style.opacity = "0";
        skoen[i].style.width = "0";
        skoen[i].style.margin = "0";
        skoen[i].style.display = "none";

    }
    for (let i = 0; i < unge.length; i++) {
        unge[i].style.opacity = "1";
        unge[i].style.width = "40%";
        unge[i].style.margin = "2em";
        unge[i].style.display = "inline-block";
    }
}

allBtn.onclick = () => {
    for (let i = 0; i < unge.length; i++) {
        unge[i].style.opacity = "1";
        unge[i].style.width = "40%";
        unge[i].style.margin = "2em";
        unge[i].style.display = "inline-block";
    }
    for (let i = 0; i < skoen.length; i++) {
        skoen[i].style.opacity = "1";
        skoen[i].style.width = "40%";
        skoen[i].style.margin = "2em";
        skoen[i].style.display = "inline-block";
    }
    for (let i = 0; i < fag.length; i++) {
        fag[i].style.opacity = "1";
        fag[i].style.width = "40%";
        fag[i].style.margin = "2em";
        fag[i].style.display = "inline-block";
    }
}

for (let i = 0; i < bookBtn.length; i++) {
    bookBtn[i].onclick = () => {
        bookTitle.innerHTML = bookBtn[i].parentNode.childNodes[1].innerHTML;
        bookImg.attributes[0].nodeValue = bookBtn[i].parentNode.parentNode.childNodes[1].childNodes[1].attributes[0].nodeValue;
        popup.style.display = "block";
    } 
}
popup.addEventListener("click", function(event) {
	// If user clicks inside the element, do nothing
	if (event.target.closest(".popup")) return;

    // If user clicks outside the element, hide it!
    popup.style.display = "none";

	;
});
