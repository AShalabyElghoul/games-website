var mmorpg = document.getElementById("mmorpg")
var shooter = document.getElementById("shooter")
var sailing = document.getElementById("sailing")
var permadeath = document.getElementById("permadeath")
var superhero = document.getElementById("superhero")
var pixel = document.getElementById("pixel")
var bo = document.getElementById("bo")
var buttonDetails = document.getElementById("buttonDetails")
var details = document.getElementById("details")
var exit = document.getElementById("exit")
var loading = document.getElementById("loading")

(function(){
    displayGames("mmorpg")
    mmorpg.addEventListener("click", function () {
  displayGames("mmorpg")
})
    shooter.addEventListener("click", function () {
        displayGames("shooter")
    })
    sailing.addEventListener("click", function () {
        displayGames("sailing")
    })
    permadeath.addEventListener("click", function () {
        displayGames("permadeath")
    })
    superhero.addEventListener("click", function () {
        displayGames("superhero")
    })
    pixel.addEventListener("click", function () {
        displayGames("pixel")
    })
    exit.addEventListener("click", function () {
        exit ();
    })
}());


// mmorpg.addEventListener("click", function () {
//   displayGames("mmorpg")
// })
// shooter.addEventListener("click", function () {
//     displayGames("shooter")
// })
// sailing.addEventListener("click", function () {
//     displayGames("sailing")
// })
// permadeath.addEventListener("click", function () {
//     displayGames("permadeath")
// })
// superhero.addEventListener("click", function () {
//     displayGames("superhero")
// })
// pixel.addEventListener("click", function () {
//     displayGames("pixel")
// })
// exit.addEventListener("click", function () {
//     exit ();
// })



async function displayGames(category) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '029d432d6fmsh4608ddc87aaa114p1fba38jsna278a9cfedaf',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    n = 0;
    var data = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
    var res = await data.json();
    console.log(res);
    var box = ``;

    for (var i = 0; i<res.length; i++) {
            let text = res[i].short_description;
            let description = text.split(" ", 10);
            box += ` <div class="col-12 col-md-6 col-lg-4 col-xl-3 card px-4 gy-4"style="background-color: rgb(39, 43, 48);">
            <img src="${res[i].thumbnail}" alt="">
    <div class="det d-flex justify-content-between align-items-center py-2">
        <h2>${res[i].title}</h2>
        <button class="btn btn-primary" id="buttonDetails" onclick="displayDetails(${res[i].id})">free</button>
    </div>
    <p>${description}</p>
    <div class="categ d-flex justify-content-between align-content-end">
        <p>${res[i].genre}</p>
        <p>${res[i].platform}</p>
    </div>
</div>`
    }
    bo.innerHTML += box;
}



    async function displayDetails (ID){
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '029d432d6fmsh4608ddc87aaa114p1fba38jsna278a9cfedaf',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
    var da = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${ID}`, options)
        var ress = await da.json()
        console.log(ress)
        details.style.display="unset";
    
box3=``;

box3+=`<div class="row d-flex">
        <div class="col-4 px-5 my-3">
            <h2>Details Game</h2>
            <img src="${ress.thumbnail}" alt="" class="w-100 py-4">
        </div>
        <div class="col-6 tes">
            <h2>Title : <span class="bg-transparent text-white fs-2">${ress.title}</span></h2>
            <h3>Category : <span>${ress.genre}</span></h3>
            <h3>Platform : <span>${ress.platform}</span></h3>
            <h3>Status : <span>${ress.status}</span></h3>
            <p>${ress.description}</p>
            <button class="btn btn-outline-primary"><a href="${ress.game_url}" target="_blank">show game</a></button>
        </div>
        <div class="col-2 text-right" id="exit">
        <a href=""><i class="fa-solid fa-xmark my-4"></i></a>
    
        </div>
       </div>`
       details.innerHTML+=box3
}
function exit (){
    details.style.display="none";
}
function load (){
    loading.style.display="unset";
}