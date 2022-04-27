let tech = document.getElementById("technology")
let about = document.getElementById("about-technology")
let img = document.getElementById("tech-image")

let active = "first-btn"

function changeData(n){
    fetch("data.json")
    .then(des_obj => des_obj.text())
    .then(obj=>{main = JSON.parse(obj)
        tech.innerText = main["technology"][n]["name"]
        about.innerText = main["technology"][n]["description"]
        img.src = main["technology"][n]["images"]["portrait"]})
}

function VehicleSelected(){
    changeData(0)
}

function SpaceportSelected(){
    changeData(1)
}

function SpaceCapsuleSelected(){
    changeData(2)
}

VehicleSelected()

document.getElementById("first-btn").addEventListener("click", VehicleSelected);
document.getElementById("second-btn").addEventListener("click", SpaceportSelected);
document.getElementById("third-btn").addEventListener("click", SpaceCapsuleSelected);
