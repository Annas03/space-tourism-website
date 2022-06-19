let selDes = document.getElementById("selected-destination")
let destText = document.getElementById("destination-text")
let distance = document.getElementById("dist")
let days = document.getElementById("days")
let img = document.getElementById("star")
let menu = document.getElementById("mobile-menu")
let navBar = document.querySelector(".mobile-navbar")

let active = "moon"
let menuActive = false

let styleElem = document.head.appendChild(document.createElement("style"))

function changeData(n){
    fetch("Data/data.json")
    .then(des_obj => des_obj.text())
    .then(obj=>{main = JSON.parse(obj)
        selDes.innerText = main["destinations"][n]["name"]
        destText.innerText = main["destinations"][n]["description"]
        distance.innerText = main["destinations"][n]["distance"]
        days.innerText = main["destinations"][n]["travel"]
        img.src = main["destinations"][n]["images"]["png"]})
}

function changeStyle(s){
    let x = document.getElementById(s)
    x.style.fontSize = "20px";
    x.style.fontWeight = "500"
    x.style.borderBottom = "2px solid white"
}

function removeStyle(x){
    let arr = ["moon", "mars", "europa", "titan"]
    for(let i = 0; i <= 3; i++){
        if(i != x){
            document.getElementById(arr[i]).style.borderBottom = "2px solid transparent"
            document.getElementById(arr[i]).style.fontSize = "18px"
        }
    }
}
function hoveringeffect(e){
    if(active != e){
        document.getElementById(e).style.borderBottom = "2px solid rgba(199, 187, 187, 0.407)"
    }
}
function nothoveringeffect(f){
    if(active != f){
        document.getElementById(f).style.borderBottom ="2px solid transparent"
        document.getElementById(f).style.fontSize = "18px"
    }
}

moonSelected()

document.getElementById("moon").addEventListener("click", moonSelected);
document.getElementById("mars").addEventListener("click", marsSelected);
document.getElementById("europa").addEventListener("click", europaSelected);
document.getElementById("titan").addEventListener("click", titanSelected);
document.getElementById("mobile-menu").addEventListener("click", DisplayMenu);

function moonSelected(){
    active = "moon"
    removeStyle(0)
    changeStyle("moon")
    changeData(0)
}
function marsSelected(){
    active = "mars"
    removeStyle(1)
    changeStyle("mars")
    changeData(1)
}
function europaSelected(){
    active = "europa"
    removeStyle(2)
    changeStyle("europa")
    changeData(2)
}
function titanSelected(){
    active = "titan"
    removeStyle(3)
    changeStyle("titan")
    changeData(3)
}
function DisplayMenu(){
    if(menuActive === false){
        navBar.style.display = "block"
        document.body.style.height = "100%"
        document.body.style.overflowY = "hidden"
        img.style.zIndex = 0;
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