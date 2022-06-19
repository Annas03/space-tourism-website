let navBar = document.querySelector(".mobile-navbar")
let menu = document.getElementById("mobile-menu")

let menuActive = false

let styleElem = document.head.appendChild(document.createElement("style"));

function DisplayMenu(){
    if(menuActive === false){
        navBar.style.display = "block"
        document.body.style.height = "100%"
        document.body.style.overflowY = "hidden"
        ChangeMobileMenu()
    } 
    else{
        navBar.style.display = "none"
        document.body.style.overflowY = "auto"
        UnChangeMobileMenu()
    }
    menuActive = !menuActive;
}

function ChangeMobileMenu(){
    styleElem.innerHTML = "#mobile-menu{margin-top:1rem;margin-right:1rem;transform:rotate(45deg);}#mobile-menu::after{left:0;bottom:0;transform:rotate(-92.5deg);}#mobile-menu::before{display:none;}"
}

function UnChangeMobileMenu(){
    styleElem.innerHTML = "#mobile-menu::before{display:span;}"
}

document.getElementById("mobile-menu").addEventListener("click", DisplayMenu);