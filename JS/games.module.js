import { UI } from "./UI.module.js";
import { details } from "./details.module.js";
export class games {
    constructor(){
        document.querySelectorAll(".menu a").forEach((link) => {
            this.getGames('mmorpg');
            link.addEventListener("click", (e) => {
               document.querySelector(".menu .active").classList.remove("active");
               e.target.classList.add("active");
               this.getGames(e.target.innerHTML);
            });
        });
    }
    async getGames(categoryOption) {
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "b7ddeaba2emsh4c7f9a279de19b4p17f62fjsn9ef33d17e7d9",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          },
        };
      
        const api = await fetch(
          `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryOption}`,
          options
        );
        const response = await api.json();
        const x = new UI()
        x.displayGames(response)
        this.detailsclick();
        loading.classList.add("d-none");
    }
    detailsclick(){
        document.querySelectorAll(".card").forEach((item) => {
            item.addEventListener("click", () => {
               const id = item.id;
               this.showdetails(id);
            });
         });
    }
    showdetails(id){
        const det = new details(id)
        document.querySelector(".games").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
    }
}