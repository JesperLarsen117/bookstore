const menuBtn = document.getElementById("rightMenuBtn");
const menuBtnClose = document.getElementById("rightMenuBtnClose");
const menu = document.getElementById("rightMenu");
let isOpen = false;

menuBtn.onclick = () => {
    menu.style.transform = "translateX(0)";
    isOpen = true;

}

menuBtnClose.onclick = () => {
    menu.style.transform = "translateX(100%)";
    isOpen = false;

}