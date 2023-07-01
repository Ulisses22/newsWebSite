function headline(country,pageSize){
    var url = `https://newsapi.org/v2/top-headlines?`
            + `country=${country}&`
            + `apiKey=${API_KEY}&`
            + `pageSize=${pageSize}`

        var req = new Request(url);

        fetch(req)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // Handle the fetched news data here
                var articles = data.articles;
                var newsSection = document.querySelector('.list-headline');

                // Clear existing news content
                newsSection.innerHTML = '';

                // Loop through each article and create the corresponding HTML
                articles.forEach(function (article) {
                    var card = document.createElement('div');
                    card.className = 'col-sm-6 col-md-4 col-lg-3 mb-1';

                    var cardContent = `
                            <div class="card" style="height:250px;">
                                 <a href="${article.url}" class="text-decoration-none"> 

                                <img class="card-img-top align-self-center" src="${article.urlToImage  == null ? 'src/failed_load_image.png' : article.urlToImage}" alt="Card image cap" style="height: 100px">
                             
                                <div class="card-body">
                                    <h6 class="card-title text-dark" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;">${article.title}</h6>
                                    <p class="card-text text-secondary mb-1" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;">
                                        ${article.description == null ? '' : article.description}
                                    </p>
                                    </a>
                                </div>
                            </div>
                    

                `;

                    card.innerHTML = cardContent;
                    newsSection.appendChild(card);
                });
            })
            .catch(function (error) {
                console.log('Error:', error);
            });
}

function news(country,category,pageSize){
    var url = 'https://newsapi.org/v2/top-headlines?'
            + `country=${country}&`
            + `category=${category}&`
            + `apiKey=${API_KEY}&`
            + `pageSize=${pageSize}`

        var req = new Request(url);

        fetch(req)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // Handle the fetched news data here
                var articles = data.articles;
                var newsSection = document.querySelector('.list-news');

                // Clear existing news content
                newsSection.innerHTML = '';

                // Loop through each article and create the corresponding HTML
                articles.forEach(function (article) {
                    var card = document.createElement('div');
                    card.className = 'col-sm-6 col-md-4 col-lg-3 mb-0';

                    console.log(article.urlToImage);

                    var cardContent = `
                    <div class="card mb-2" style="height:320px;">
                        <img class="card-img-top align-self-center" src="${article.urlToImage  == null ? 'src/failed_load_image.png' : article.urlToImage}" alt="Card image cap" style="${article.urlToImage == null ? 'width: 25%' : 'width: 100%'};max-height:150px">
                        <div class="card-body">
                        <h5 class="card-title" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;">${article.title}</h5>
                    </div>
                        <div class="card-footer">
                        <small class="text-muted"><a href="${article.url}" class="btn btn-primary">Read More</a></small>
                        </div>
                    </div>
                `;

                    card.innerHTML = cardContent;
                    newsSection.appendChild(card);
                });
            })
            .catch(function (error) {
                console.log('Error:', error);
            });
}

function weather() {
    const url_weather = 'https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1131200.json'
    const request = new Request(url_weather)
    fetch(request).then(function (res) {
        return res.json();
    }).then(function (data) {
        
        let news = data.data[0]
        var newsSection = document.querySelector('.weather-data');
        // Clear existing news content
        newsSection.innerHTML = '';

        var card = document.createElement('div');
        card.className = 'row mt-0';

        var cardContent = `
        <div class="col-6 col-sm-4 col-md-3 col-lg-3 mb-3 mb-1">
            <div class="weather-card">
                <i class="fas fa-sun"></i>
                <h5 class="weather-title">Max Temperature</h5>
                <h5 class="weather-description">${news.tMax}</h5>
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3 col-lg-3 mb-3 m-0">
            <div class="weather-card">
                <i class="fas fa-cloud"></i>
                <h5 class="weather-title">Min Temperature</h5>
                <h5 class="weather-description">${news.tMin}</h5>
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3 col-lg-3 mb-3 m-0">
            <div class="weather-card">
                <i class="fas fa-cloud-showers-heavy"></i>
                <h5 class="weather-title">Precipitation</h5>
                <h5 class="weather-description">${news.precipitaProb}</h5>
            </div>
        </div>
        `;

        card.innerHTML = cardContent;
        newsSection.appendChild(card);
    })
}

function time(){
    // Function to format the date and time
    function formatDateTime(date) {
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return date.toLocaleDateString("en-US", options);
    }

    // Update the content of the h2 element with the current date and time
    const h2Element = document.getElementById('dateAndTime');
    setInterval(function () {
        const currentDate = new Date();
        h2Element.textContent = formatDateTime(currentDate);
    }, 1000); // Update every second
}

// functions for getting news on the page search.html
function search_news(pageSize,q){
    var url = 'https://newsapi.org/v2/everything?'
            + `apiKey=${API_KEY}&`
            + `pageSize=${pageSize}&`
            + `q=${q}`

        var req = new Request(url);

        fetch(req)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // Handle the fetched news data here
                var articles = data.articles;
                var newsSection = document.querySelector('.list-news');

                // Clear existing news content
                newsSection.innerHTML = '';

                // Loop through each article and create the corresponding HTML
                articles.forEach(function (article) {
                    var card = document.createElement('div');
                    card.className = 'col-sm-6 col-md-4 col-lg-3 mb-0';

                    var cardContent = `
                    <div class="card mb-2"  style="height:320px;">
                        <img class="card-img-top" src="${article.urlToImage  == null ? 'yout.jpg' : article.urlToImage}" alt="Card image cap">
                        <div class="card-body">
                        <h5 class="card-title" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;">${article.title}</h5>
                        </div>
                        <div class="card-footer">
                        <small class="text-muted"><a href="${article.url}" class="btn btn-primary">Read More</a></small>
                        </div>
                    </div>
                `;

                    card.innerHTML = cardContent;
                    newsSection.appendChild(card);
                });
            })
            .catch(function (error) {
                console.log('Error:', error);
            });
}

// listen the form submit
function sendForm(event){
    event.preventDefault();

    const input_search = document.getElementById('input_search');

    if(input_search.value === ""){
        return false;
    }
    search_news(pageSize=20,q=`${input_search.value}`)
    // event.target.submit();
}
const form = document.getElementById('form_search');
// verify if the element exists
if (form != null) {
    form.addEventListener("submit", sendForm)
}

// call primary functions
weather();
time();
