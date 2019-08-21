// Form validation. //
// Form submit button //
const submit = document.getElementById('submit');
// Inputs //
const name = document.getElementById('name');
const email = document.getElementById('email');
const city = document.getElementById('city');
const post = document.getElementById('post');
const address = document.getElementById('address');


submit.onclick = () => {
    if (name.value.length <= 0 ) {
    console.log('Udfyld venligst');
    name.style.border = "2px solid red";
} else {
    name.style.border = "unset";
    name.placeholder = 'Husk at udfylde her'
}
    if (city.value.length <= 0 ) {
    console.log('Udfyld venligst');
    city.style.border = "2px solid red";
    city.placeholder = 'Husk at udfylde her'
} else {
    city.style.border = "unset";
}
if (address.value.length <= 0 ) {
    console.log('Udfyld venligst');
    address.style.border = "2px solid red";
    address.placeholder = 'Husk at udfylde her'
} else {
    address.style.border = "unset";
}
    if (email.value.length <= 0 ) {
    console.log('Udfyld venligst');
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
