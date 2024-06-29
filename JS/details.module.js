import { UI } from "./UI.module.js";
export class details{
    constructor(gameid){
        this.ui = new UI()
        document.getElementById("btnClose").addEventListener("click", () => {
            document.querySelector(".games").classList.remove("d-none");
            document.querySelector(".details").classList.add("d-none");
        });
        this.getDetails(gameid)
    }
    async getDetails(gameid){
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
            `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameid}`,
            options
          );
          const response = await api.json();
          const x = new UI()
          x.displayDetails(response)
          loading.classList.add("d-none");
    }
}