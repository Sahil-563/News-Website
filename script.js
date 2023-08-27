const API_key="6b36743150ea426880d1f7200e34c5a5"
const url = "https://newsapi.org/v2/everything?q="
const searchBar=document.querySelector("#searchBar");
searchBar.addEventListener("submit",function(e){
    e.preventDefault();
    let userInput = document.querySelector("#user-input").value;
    console.log(userInput);
    window.addEventListener("load",fetchnews(userInput))
})
window.addEventListener("load",fetchnews('world'));
const logo = document.querySelector('#logo');
logo.addEventListener("click",function(e){
    window.addEventListener("load",fetchnews('world'));
})

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
    row.innerHTML='';
    // console.log(cards);
    
    articles.forEach(element => {
       
        const cards = document.createElement("div");
        const alink = document.createElement("a");
        alink.href=element.url;
        alink.id='links'
        const card = document.createElement("div");
        const cardHeader = document.createElement("div");
        const img = document.createElement("img");
        const cardContent = document.createElement("div");
        const h3 = document.createElement("h3");
        const h6 = document.createElement("h6");
        const p = document.createElement("p");
        const classes = ["col-md-4", "col-sm-12"]
        for (const i of classes) {
            cards.classList.add(i);
        }
        if (element.urlToImage) {
            // document.body.appendChild(alink)
            
            cards.appendChild(alink);
            alink.appendChild(card)
            card.classList.add("card")
            card.appendChild(cardHeader);
            cardHeader.classList.add("card-header")
            cardHeader.appendChild(img);
            img.src = element.urlToImage
            card.appendChild(cardContent);
            cardContent.appendChild(h3);
            h3.textContent = element.title
            cardContent.appendChild(h6);
            cardContent.appendChild(p);
            p.textContent = element.description
            row.appendChild(cards);
        
        }
    });
}


function onNavItemClick(id){
    fetchnews(id);
}

// 
// router.addEventListener("click", (e)=>{
//     e.target.href=
// })