let category = "Tech";

function clicker(headingText) {
    document.querySelectorAll("aside > a").forEach(function(el)
    {
        el.classList.remove("selected");
    });

    document.querySelector(`aside > a.${headingText}`).classList.add("selected")

    let heading = document.querySelector('#images > h2');
    heading.innerText = headingText;

    category = headingText;
    fetcher();
}

function fetcher()
{
    document.querySelector("#result").innerHTML = "";
    let clientid = "_jqWxk5TcpzC-WXKC4BHjv7okFkqxKI0QdBVqYXwJUY";
    let url = "https://api.unsplash.com/search/photos/?client_id=" + clientid + "&query=" + category;
    fetch(url)
        .then(function (data) {
            return data.json();
        })
        .then(function(data) {
            console.log(data);
            data.results.forEach(photo => {
                let result = `
                <img src="${photo.urls.regular}"/>
                <br><h3>Likes: ${photo.likes}</h3>
                <h3>User: ${photo.user.name}</h3>
                `;
                $("#result").append(result);
            })
        })
}

fetcher();

function Tech(){
    clicker("Tech");
}

function Cars(){
    clicker("Cars");
}

function Apple(){
    clicker("Apple");
}