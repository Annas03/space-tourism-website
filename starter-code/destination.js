let selDes = document.getElementById("selected-destination")
let destText = document.getElementById("destination-text")
let distance = document.getElementById("dist")
let days = document.getElementById("days")
let img = document.getElementById("star")

let active = "moon"

function changeData(n){
    fetch("data.json")
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