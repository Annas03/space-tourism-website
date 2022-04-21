let selDes = document.getElementById("selected-destination")
let destText = document.getElementById("destination-text")
let distance = document.getElementById("dist")
let days = document.getElementById("days")
let img = document.getElementById("star")

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
    for(let i = 0; i < 3; i++){
        if(i !== x){
            document.getElementById(arr[x]).style.borderBottom = "2px solid transparent"
            document.getElementById(arr[x]).style.fontSize = "18px"
        }
    }
}

moonSelected()

document.getElementById("moon").addEventListener("click", moonSelected, removeStyle(0));
document.getElementById("mars").addEventListener("click", marsSelected, removeStyle(1));
document.getElementById("europa").addEventListener("click", europaSelected, removeStyle(2));
document.getElementById("titan").addEventListener("click", titanSelected, removeStyle(3));
function moonSelected(){
    changeStyle("moon")
    changeData(0)
}
function marsSelected(){
    changeStyle("mars")
    changeData(1)
}
function europaSelected(){
    changeStyle("europa")
    changeData(2)
}
function titanSelected(){
    changeStyle("titan")
    changeData(3)
}

