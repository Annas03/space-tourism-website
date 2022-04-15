let moon = document.getElementById("selected-destination")
moonSelected()
// function selectedDestination(d){
//     // d.style.font = "'Bellefair', serif"
//     d.style.fontSize = "100px"
//     d.style.fontWeight = "500"
//     d.style.borderBottom = "2px solid white"
// }

function moonSelected(){
    // let moonTxt = document.getElementById("#destination-text")
    // moon.style.fontSize = "100px"
    // moon.style.fontWeight = "500"
    // moon.style.borderBottom = "2px solid white"
    // selectedDestination(moon)
    fetch("data.json")
    .then(des_obj => des_obj.text())
    .then(dest=>moon.innerText = dest.destinations[0].name)

    
}

