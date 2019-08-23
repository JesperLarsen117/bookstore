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
// NAVBAR SLUT


// Form validation. //
// Inputs //
const name = document.getElementById('name');
const email = document.getElementById('email');
const city = document.getElementById('city');
const post = document.getElementById('post');
const adress = document.getElementById('adress');


submit.onclick = () => {
    if (name.value.length <= 0 ) {
    name.style.border = "2px solid red";
} else {
    name.style.border = "unset";
    name.placeholder = 'Husk at udfylde her'
}
    if (city.value.length <= 0 ) {
    city.style.border = "2px solid red";
    city.placeholder = 'Husk at udfylde her'
} else {
    city.style.border = "unset";
}
if (adress.value.length <= 0 ) {
    adress.style.border = "2px solid red";
    adress.placeholder = 'Husk at udfylde her'
} else {
    adress.style.border = "unset";
}
    if (email.value.length <= 0 ) {
    email.style.border = "2px solid red";
    email.placeholder = 'Husk at udfylde her'
} else {
    email.style.border = "unset";
}

if (post.value.length < 4 ) {
    post.style.border = "2px solid red";
    post.placeholder = 'Husk at udfylde her'
} else {
    post.style.border = "unset";
}

}