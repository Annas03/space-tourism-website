let tech = document.getElementById("technology")
let about = document.getElementById("about-technology")
let img = document.getElementById("tech-image")

let active = "vehicle"

function changeData(n){
    fetch("data.json")
    .then(des_obj => des_obj.text())
    .then(obj=>{main = JSON.parse(obj)
        tech.innerText = main["technology"][n]["name"]
        about.innerText = main["technology"][n]["description"]
        img.src = main["technology"][n]["images"]["portrait"]})
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

VehicleSelected()

document.getElementById("first-btn").addEventListener("click", VehicleSelected);
document.getElementById("second-btn").addEventListener("click", SpaceportSelected);
document.getElementById("third-btn").addEventListener("click", SpaceCapsuleSelected);