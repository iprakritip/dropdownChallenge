const menuIcon = document.getElementsByClassName('menuicon')[0];
const closeIcon = document.getElementsByClassName('closemenu')[0];
const navContent = document.getElementsByClassName('navcontent')[0];
const overlay = document.getElementsByClassName('overlay')[0];
menuIcon.addEventListener("click", ()=>{

    closeIcon.style.display = "block";
    navContent.style.display = "block";
overlay.style.display= "block";


})
closeIcon.addEventListener("click", ()=>{

    closeIcon.style.display = "none";
    navContent.style.display = "none";
    overlay.style.display= "none";
})
