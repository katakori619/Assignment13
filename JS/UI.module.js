export class UI {
    displayGames(response){
        let cartona = ``
        for(var i = 0;i<response.length;i++){
            cartona += `
            <div id="${response[i].id}" class="card mx-2" style="width: 19rem;">
                    <div class="image card-img-top mt-3 position-relative">
                      <img src="${response[i].thumbnail}" class="w-100" alt="...">
                    </div>
                    <div class="card-body">
                      <div class="card-title d-flex justify-content-between align-items-center">
                        <span class="name small small">${response[i].title}</span>
                        <span class="badge text-bg-primary p-2">free</span>
                      </div>
                      <p class="card-text text-center">${response[i].short_description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item d-flex justify-content-between">
                        <span>${response[i].genre}</span>
                        <span>${response[i].platform}</span>
                      </li>
                    </ul>
                  </div>
            `
        }
        document.getElementById('content').innerHTML = cartona
    }
    displayDetails(response){
        let cartona = ``
        cartona += `
        <div class="col-md-4">
                <img src="${response.thumbnail}" class="w-100" alt="image details">
                </div>
                <div class="col-md-8">
                  <h3>Title: ${response.title}</h3>
                  <p>Category: <span class="badge text-bg-info"> ${response.genre}</span> </p>
                  <p>Platform: <span class="badge text-bg-info"> ${response.platform}</span> </p>
                  <p>Status: <span class="badge text-bg-info"> ${response.status}</span> </p>
                  <p class="small">${response.description}</p>
                <a class="btn btn-outline-warning text-white" target="_blank" href="${response.game_url}">Show Game</a>
                </div>
        `
        document.getElementById('detailsContent').innerHTML = cartona
    }
}