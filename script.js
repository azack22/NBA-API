let button = document.querySelector("#searchButton")
button.addEventListener('click', getData)
// const mediaElem = document.getElementById("swish");
// setTimeout(() => {
//     mediaElem.onplay()
// }, 600);



async function getData(event){
    event.preventDefault()
    let textInput = document.querySelector("#inputBar").value
    let textInput2 = document.querySelector("#inputBar2").value
    const url = `https://www.balldontlie.io/api/v1/players/${textInput}`
    const url2 = `https://www.balldontlie.io/api/v1/players/${textInput2}`
//     const mediaElem = document.getElementById("swish");
// setTimeout(() => {
//     mediaElem.onplay()
// }, 600);

    fetch(url)
    .then(res => res.json())
    .then(res =>{console.log("Yip Yip!", res.first_name, res)
    let name = document.querySelector("#name")
    name.innerText= res.first_name + ' '+res.last_name
    let height = document.querySelector("#height")
    height.innerText= res.height_feet + "'" + res.height_inches
    let position = document.querySelector("#position")
    position.innerText= res.position
    let weight = document.querySelector("#weight") 
    weight.innerText= res.weight_pounds + " lbs" 
    let team = document.querySelector("#team")
    team.innerText= res.team.full_name
  
    
    


 
})
    fetch(url2)
    .then(res => res.json())
    .then(res =>{console.log("Yip Yip!", res.team.full_name)
    let name2 = document.querySelector("#name2")
    name2.innerText= res.first_name + ' '+res.last_name
    let height2 = document.querySelector("#height2")
    height2.innerText= res.height_feet + "'" + res.height_inches
    let position2 = document.querySelector("#position2")
    position2.innerText = res.position 
    let weight2 = document.querySelector("#weight2") 
    weight2.innerText= res.weight_pounds + " lbs"
    let team2 = document.querySelector("#team2")
    team2.innerText= res.team.full_name
//     const mediaElem = document.getElementById("swish");
// setTimeout(() => {
//     mediaElem.onplay()
// }, 600);
    
     
const mediaElem = document.getElementById("audio");
setTimeout(() => {
    mediaElem.play()
}, 100); 
    
    
})

    

    .catch(err => console.log("Opp's buddy", err))

//     const mediaElem = document.getElementById("audio");
// setTimeout(() => {
//     mediaElem.onplay()
// }, 100);
}












