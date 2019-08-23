// Form validation
// Inputs
const name = document.getElementById('name');
const email = document.getElementById('email');
const msg = document.getElementById('msg');
const btn = document.getElementById('btn');

// NAV BAR
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
// NAV BAR SLUT


// VALIDERING
btn.onclick = () => {
    if (name.value.length <= 0 ) {
    name.style.borderBottom = "2px solid red";
    name.placeholder = 'Udfyld venligst dit fulde navn i dette felt!';
} else {
    name.style.border = "unset";
}
    if (email.value.length <= 0 ) {
    email.style.borderBottom = "2px solid red";
    email.placeholder = 'Udfyld venligst din email i dette felt!';
} else {
    email.style.border = "unset";
}
if (msg.value.length <= 0 ) {
    msg.style.borderBottom = "2px solid red";
    msg.placeholder = 'Udfyld en besked på mere end 20 bogstaver.';    
} else {
    msg.style.border = "unset";
}

}