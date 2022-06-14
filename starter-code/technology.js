let tech = document.getElementById("technology")
let about = document.getElementById("about-technology")
let img = document.getElementById("tech-image")
let navBar = document.querySelector(".mobile-navbar")
let body = document.getElementsByTagName("body")
let menu = document.getElementById("mobile-menu")
let images = [];

let active = "vehicle"
let menuActive = false

let styleElem = document.head.appendChild(document.createElement("style"));

function changeData(n){
    fetch("data.json")
    .then(des_obj => des_obj.text())
    .then(obj=>{main = JSON.parse(obj)
        tech.innerText = main["technology"][n]["name"]
        about.innerText = main["technology"][n]["description"]
        if(screen.width >= 1200){
            for(let i = 0; i < 3; i++){
                images.push(main["technology"][i]["images"]["portrait"])
            }
        }
        else{
            for(let i = 0; i < 3; i++){
                // img.src = main["technology"][i]["images"]["landscape"]
                images.push(main["technology"][i]["images"]["landscape"])
            }
        }
        img.src = images[n]
    })
}

function VehicleSelected(){
    active = "vehicle"
    removeStyle(0)
    changeStyle("vehicle")
    changeData(0)
}

function SpaceportSelected(){
    active = "spaceport"
    removeStyle(1)
    changeStyle("spaceport")
    changeData(1)
}

function SpaceCapsuleSelected(){
    active = "spacecapsule"
    removeStyle(2)
    changeStyle("spacecapsule")
    changeData(2)
}

function changeStyle(s){
    let x = document.getElementById(s)
    x.style.backgroundColor = "white"
    x.style.color = "black"
}

function removeStyle(x){
    let arr = ["vehicle", "spaceport", "spacecapsule"]
    for(let i = 0; i <= 2; i++){
        if(arr[i] != x){
            document.getElementById(arr[i]).style.backgroundColor = "transparent"
            document.getElementById(arr[i]).style.color = "white"
            document.getElementById(arr[i]).style.borderColor = "rgb(53, 53, 53)"
        }
    }
}
function hoveringeffect(e){
    if(active != e){
        document.getElementById(e).style.borderColor = "white"
    }
}
function nothoveringeffect(f){
    if(active != f){
        document.getElementById(f).style.borderColor = "rgb(53, 53, 53)"
    }
}
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

VehicleSelected()

document.getElementById("first-btn").addEventListener("click", VehicleSelected);
document.getElementById("second-btn").addEventListener("click", SpaceportSelected);
document.getElementById("third-btn").addEventListener("click", SpaceCapsuleSelected);
document.getElementById("third-btn").addEventListener("click", SpaceCapsuleSelected);
document.getElementById("mobile-menu").addEventListener("click", DisplayMenu);

