let position = document.getElementById("Sndhead")
let person = document.getElementById("person")
let about = document.getElementById("text")
let img = document.getElementById("person-image")
let menu = document.getElementById("mobile-menu")
let navBar = document.querySelector(".mobile-navbar")

let active = "commander"
let menuActive = false

let styleElem = document.head.appendChild(document.createElement("style"));

function changeData(n){
    fetch("../starter-code/Data/data.json")
    .then(des_obj => des_obj.text())
    .then(obj=>{main = JSON.parse(obj)
        position.innerText = main["crew"][n]["role"]
        person.innerText = main["crew"][n]["name"]
        about.innerText = main["crew"][n]["bio"]
        img.src = main["crew"][n]["images"]["png"]})
}

function CommanderSelected(){
    active = "commander"
    removeStyle(0)
    changeStyle("commander")
    changeData(0)
}
function MissionSpecialistSelected(){
    active = "mission-specialist"
    removeStyle(1)
    changeStyle("mission-specialist")
    changeData(1)
}
function PilotSelected(){
    active = "pilot"
    removeStyle(2)
    changeStyle("pilot")
    changeData(2)
}
function EngineerSelected(){
    active = "engineer"
    removeStyle(3)
    changeStyle("engineer")
    changeData(3)
}

function changeStyle(s){
    let x = document.getElementById(s)
    x.style.backgroundColor = "white"
}

function removeStyle(x){
    let arr = ["commander", "mission-specialist", "pilot", "engineer"]
    for(let i = 0; i <= 3; i++){
        if(arr[i] != x){
            document.getElementById(arr[i]).style.backgroundColor = "rgb(59, 59, 59)"
        }
    }
}
function hoveringeffect(e){
    if(active != e){
        document.getElementById(e).style.backgroundColor = "lightgray"
    }
}
function nothoveringeffect(f){
    if(active != f){
        document.getElementById(f).style.backgroundColor = "rgb(59, 59, 59)"
    }
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
    styleElem.innerHTML = "#mobile-menu{margin-top:1rem;margin-right:1rem;transform:rotate(45deg);}#mobile-menu::after{left:0;bottom:0;transform:rotate(-95deg);}#mobile-menu::before{display:none;}"
}

function UnChangeMobileMenu(){
    styleElem.innerHTML = "#mobile-menu::before{display:span;}"
}

CommanderSelected()

document.getElementById("commander").addEventListener("click", CommanderSelected);
document.getElementById("mission-specialist").addEventListener("click",  MissionSpecialistSelected);
document.getElementById("pilot").addEventListener("click", PilotSelected);
document.getElementById("engineer").addEventListener("click", EngineerSelected);
document.getElementById("mobile-menu").addEventListener("click", DisplayMenu);