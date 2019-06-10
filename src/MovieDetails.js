export default class MovieDetails extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return ['moviequery'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        var self = this;
        if (newValue.length > 0) {
            fetch('http://www.omdbapi.com/?apikey=d97e566d&t=' + newValue).then(function (response) {
                return response.json();
            }).then(function (respJson) {
                self.shadowRoot.innerHTML = "";
                self.shadowRoot.innerHTML = `
                    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                    <div class="card" style="width: 30rem;">
                        <img src="${respJson.Poster}" class="card-img-top"/>
                        <div class="card-body">
                            <h5 class="card-title">${respJson.Title}</h5>
                            <p class="card-text">${respJson.Plot}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Actors : ${respJson.Actors}</li>
                            <li class="list-group-item">Awards : ${respJson.Awards}</li>
                            <li class="list-group-item">Director : ${respJson.Director}</li>
                            <li class="list-group-item">Genre : ${respJson.Genre}</li>
                            <li class="list-group-item">Writer : ${respJson.Writer}</li>
                            <li class="list-group-item">Rating : ${respJson.imdbRating}</li>
                        </ul>
                    </div>`;
            });
        }
    }
}