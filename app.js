const navbtn=document.getElementById("nav-btn");
const navbar=document.getElementById("navbar");
const navclose=document.getElementById("navbar-close");

function add()
{
    navbar.classList.add("showNav");
    
}

function close()
{
    navbar.classList.remove("showNav");
}



navbtn.addEventListener("click",add);
navclose.addEventListener("click",close);# Tong-Ghor
