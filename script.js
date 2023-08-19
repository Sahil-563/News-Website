const API_key="6b36743150ea426880d1f7200e34c5a5"
const url = "https://newsapi.org/v2/everything?q="

window.addEventListener("load",fetchnews("India"))


async function fetchnews(query){
    try {
        const response= await fetch(`${url}${query}&apiKey=${API_key}`)
        const data = await response.json()
        console.log(data);
        bindData(data.articles);

        
    } catch (error) {
        console.log(error);
    }
}
function bindData(articles){
    const row = document.getElementById("Row");
   
    const cards = document.getElementById("cards");
    // console.log(cards);
    
    articles.forEach(element => {
        if(!element.urlToImage){
            return;
        }
        const cardClone = cards.cloneNode(true); 
        // console.log(cardClone);
        filldata(cardClone,element)
        row.appendChild(cardClone);
    });
}

function filldata(cardClone, element){
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");
    newsImg.src = element.urlToImage;
    newsTitle.innerHTML = element.title;
    newsDesc.innerHTML = element.description;
    newsSource.innerHTML = element.source.name
    

    
}