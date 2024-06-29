// async function getGames(categoryOption) {
//     const loading = document.querySelector(".loading");
//     loading.classList.remove("d-none");
//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "b7ddeaba2emsh4c7f9a279de19b4p17f62fjsn9ef33d17e7d9",
//         "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
//       },
//     };
  
//     const api = await fetch(
//       `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryOption}`,
//       options
//     );
//     const response = await api.json();
//     displayGames(response)
//     loading.classList.add("d-none");
// }  

// function displayGames(response){
//     let cartona = ``
//     for(var i = 0;i<response.length;i++){
//         cartona += `
//         <div id="${response[i].id}" class="card mx-2" style="width: 19rem;" onclick="detailsclick(this)">
//                 <div class="image card-img-top mt-3 position-relative">
//                   <img src="${response[i].thumbnail}" class="w-100" alt="...">
//                 </div>
//                 <div class="card-body">
//                   <div class="card-title d-flex justify-content-between align-items-center">
//                     <span class="name small small">${response[i].title}</span>
//                     <span class="badge text-bg-primary p-2">free</span>
//                   </div>
//                   <p class="card-text text-center">${response[i].short_description}</p>
//                 </div>
//                 <ul class="list-group list-group-flush">
//                   <li class="list-group-item d-flex justify-content-between">
//                     <span>${response[i].genre}</span>
//                     <span>${response[i].platform}</span>
//                   </li>
//                 </ul>
//               </div>
//         `
//     }
//     document.getElementById('content').innerHTML = cartona
// }
// async function getDetails(gameid){
//     const loading = document.querySelector(".loading");
//     loading.classList.remove("d-none");
//     const options = {
//         method: "GET",
//         headers: {
//           "X-RapidAPI-Key": "b7ddeaba2emsh4c7f9a279de19b4p17f62fjsn9ef33d17e7d9",
//           "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
//         },
//       };
    
//       const api = await fetch(
//         `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameid}`,
//         options
//       );
//       const response = await api.json();
//       displayDetails(response)
//       loading.classList.add("d-none");
// }
// function displayDetails(response){
//     let cartona = ``
//     cartona += `
//     <div class="col-md-4">
//             <img src="${response.thumbnail}" class="w-100" alt="image details">
//             </div>
//             <div class="col-md-8">
//               <h3>Title: ${response.title}</h3>
//               <p>Category: <span class="badge text-bg-info"> ${response.genre}</span> </p>
//               <p>Platform: <span class="badge text-bg-info"> ${response.platform}</span> </p>
//               <p>Status: <span class="badge text-bg-info"> ${response.status}</span> </p>
//               <p class="small">${response.description}</p>
//             <a class="btn btn-outline-warning text-white" target="_blank" href="${response.game_url}">Show Game</a>
//             </div>
//     `
//     document.getElementById('detailsContent').innerHTML = cartona
// }
// document.querySelectorAll(".menu a").forEach((link) => {
//     getGames('mmorpg');
//     link.addEventListener("click", (e) => {
//        document.querySelector(".menu .active").classList.remove("active");
//        e.target.classList.add("active");
//        this.getGames(e.target.innerHTML);
//     });
//  });

// document.getElementById("btnClose").addEventListener("click", () => {
//     document.querySelector(".games").classList.remove("d-none");
//     document.querySelector(".details").classList.add("d-none");
// });
// function detailsclick(e){
//     showdetails(e.id)
// }
// function showdetails(id){
//     getDetails(id)
//     document.querySelector(".games").classList.add("d-none");
//     document.querySelector(".details").classList.remove("d-none");
// }
import { games } from "./games.module.js";
new games()