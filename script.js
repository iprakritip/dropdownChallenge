const menuIcon = document.getElementsByClassName('menuicon')[0];
const closeIcon = document.getElementsByClassName('closemenu')[0];
const navContent = document.getElementsByClassName('navcontent')[0];
const mainBody = document.getElementsByTagName('body')[0];
menuIcon.addEventListener("click", ()=>{

    closeIcon.style.display = "block";
    navContent.style.display = "block";
mainBody.style.opacity = "1";

})
closeIcon.addEventListener("click", ()=>{

    closeIcon.style.display = "none";
    navContent.style.display = "none";

})
