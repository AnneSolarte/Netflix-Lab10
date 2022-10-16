const container = document.getElementById("container");
const series = document.getElementById("series");
const movies = document.getElementById("movies");
const Banner = document.getElementById("Banner");

//Lista de series
let Series = []
let Anne = {
    image: "./series/1.jpg",
    image2: "./series2/1.jpg",
    tittle: "Anne with an E",
    rating: 4,
    description: "En la década de 1890, una niña huérfana de 13 años es enviada por error a vivir con hermanos mayores a la Isla del Príncipe Eduardo.",
    isSaved: false,
    PG: 13
}
let Arcane = {
    image: "./series/2.jpg",
    image2: "./series2/2.jpg",
    tittle: "Arcane",
    rating: 2,
    description: "El brujo Geralt, un cazador de monstruos, trata de encontrar su lugar en un mundo en el que las personas suelen ser más malvadas que las bestias.",
    isSaved: false,
    PG: 18
}
let Aventuras = {
    image: "./series/3.jpg",
    image2: "./series2/3.jpg",
    tittle: "Aventuras Psicodelicas",
    rating: 3,
    description: "El brujo Geralt, un cazador de monstruos, trata de encontrar su lugar en un mundo en el que las personas suelen ser más malvadas que las bestias.",
    isSaved: false,
    PG: 18
}
let Dark = {
    image: "./series/4.jpg",
    image2: "./series2/4.jpg",
    tittle: "Dark",
    rating: 1,
    description: "El brujo Geralt, un cazador de monstruos, trata de encontrar su lugar en un mundo en el que las personas suelen ser más malvadas que las bestias.",
    isSaved: false,
    PG: 18
}
let Outlander = {
    image: "./series/5.jpg",
    image2: "./series2/5.jpg",
    tittle: "Outlander",
    rating: 3,
    description: "El brujo Geralt, un cazador de monstruos, trata de encontrar su lugar en un mundo en el que las personas suelen ser más malvadas que las bestias.",
    isSaved: false,
    PG: 15
}
let Psycho = {
    image: "./series/6.jpg",
    image2: "./series2/6.jpg",
    tittle: "Pyscho Pass",
    rating: 3,
    description: "El brujo Geralt, un cazador de monstruos, trata de encontrar su lugar en un mundo en el que las personas suelen ser más malvadas que las bestias.",
    isSaved: false,
    PG: 18
}
let Stranger = {
    image: "./series/7.jpg",
    image2: "./series2/7.jpg",
    tittle: "Stranger",
    rating: 3,
    description: "El brujo Geralt, un cazador de monstruos, trata de encontrar su lugar en un mundo en el que las personas suelen ser más malvadas que las bestias.",
    isSaved: false,
    PG: 13
}
let Witcher = {
    image: "./series/8.jpg",
    image2: "./series2/8.jpg",
    tittle: "Witcher",
    rating: 5,
    description: "El brujo Geralt, un cazador de monstruos, trata de encontrar su lugar en un mundo en el que las personas suelen ser más malvadas que las bestias.",
    isSaved: false,
    PG: 18
}
Series.push(Anne, Arcane, Aventuras, Dark, Outlander, Psycho, Stranger, Witcher)

//Lista de movies
let Movies = []
let Barbie = {
    image: "./movies/1.jpg",
    image2: "./Movies2/1.png",
    tittle: "Barbie Escuela de Princesas",
    rating: 5,
    decription: "Blair Willows es una plebeya de 17 años en el reino de Gardania que gana una lotería para asistir a una prestigiosa y mágica escuela de princesas.",
    isSaved: false,
    PG: 5
}
let Chihiro = {
    image: "./movies/2.jpg",
    image2: "./Movies2/2.png",
    tittle: "El viaje de Chihiro",
    rating: 4,
    description: "Chihiro es una niña caprichosa que debe adentrarse en un mundo de fantasía para poder salvar a sus padres, convertidos en cerdos.",
    isSaved: false,
    PG:13
}
let Hoyo = {
    image: "./movies/3.jpg",
    image2: "./Movies2/3.png",
    tittle: "El hoyo",
    rating: 1,
    description: "En el futuro, las prisiones funcionan con un sistema de celdas verticales. Los presos de las celdas superiores son alimentados mientras los de abajo mueren de hambre.",
    isSaved: false,
    PG: 18
}

let Mitchell = {
    image: "./movies/4.jpg",
    image2: "./Movies2/4.png",
    tittle: "La Familia Mitchell vs. Las Máquinas",
    rating: 5,
    description: "El viaje por carretera de la familia Mitchell, que va a acompañar a uno de sus hijos a su primer día de universidad, se ve interrumpido por una insurrección tecnológica que amenaza a la humanidad.",
    isSaved: false,
    PG: 13
}
let Rescate = {
    image: "./movies/5.jpg",
    image2: "./Movies2/5.png",
    tittle: "Misión de Rescate",
    rating: 2,
    description: "Un criminal internacional que está en prisión contrata a un mercenario para rescatar a su hijo secuestrado.",
    isSaved: false,
    PG: 18
}
let Violet = {
    image: "./movies/6.jpg",
    image2: "./Movies2/6.png",
    tittle:"Violet Evergarden",
    rating: 5,
    description: "Violet, una joven que fue utilizada como arma humana, aprende a vivir una vez terminada la guerra. Mientras trabaja en nombre de su pueblo, encuentra una razón para vivir.",
    isSaved: true,
    PG: 15
}
let Wick = {
    image: "./movies/7.jpg",
    image2: "./Movies2/7.png",
    tittle: "John Wick 3: Parabellum",
    rating: 2,
    description: "El legendario sicario John Wick es perseguido por las calles de Nueva York. Lo buscan unos mercenarios por una recompensa de 14 millones de dólares por su cabeza y por romper con una regla.",
    isSaved: false,
    PG: 18
}
let YourName = {
    image: "./movies/8.jpg",
    image2: "./Movies2/8.png",
    tittle: "YourName",
    rating: 5,
    description: "Mitsuha es una adolescente que detesta su vida rural en el campo. Por otro lado, Taki es un chico que vive en Tokio y sueña con ser un artista o un arquitecto.",
    isSaved: false,
    PG: 15
}
Movies.push(Barbie, Chihiro, Hoyo, Mitchell, Rescate, Violet, Wick, YourName)



//Funcion que muestra el mapa en forma de Banner
function ShowBanner(map){
        let html = `<div class="Caja">
                        <img id="img" src="${map.image2}"/>
                        <div id="caja2">
                            <div id="caja22">
                                <h1>${map.tittle}</h1> (${map.rating} Rating)
                            </div>
                            <h4>${map.description}</h4>
                        </div>
                        <h3 id="pg">${map.PG}+</h3>
                    <div/>
                    `;
        return html


}

//Funcion que convierte el rating num en estrellas
function ShowStars(map){
    let stars = ""
    for(var i=0; i<5; i++){
        if(i<map.rating){
            stars += `<img src="/icons/Star.png" alt="" width="20px"></img>`
        } else{
            stars += `<img src="/icons/Starline.png" alt="" width="20px"></img>`
        }
    }
    return stars

}


//Funcion que muestra el mapa en forma de Card
function showCard(map){
    let stars = ShowStars(map);
    let html = `
                        <div class="movie">
                            <img src="${map.image} " alt="" width="200px" height="300px"> <p id="num">${map.PG}+</p> <button id="bplay">Play<img src="/icons/play.png" alt="" width="20px" height="16px"></button>
                            <p id="text">Rating ${stars} <img id="savem" src="icons/Save.png" width="20px" height="20px"></p>
                        </div>`
    return html
}




//Mostrar en el inner las series
for(let i=0; i<Series.length; i++){
    let map2 = showCard(Series[i]);
    series.innerHTML += map2;

}

//Mostrar en el inner las movies
for(let i=0; i<Movies.length; i++){
    let map2 = showCard(Movies[i]);
    movies.innerHTML += map2;

}

//Mostrar el mapa incial en el banner
let mapa = ShowBanner(Violet);
Banner.innerHTML += mapa

//Funcion para hacer el evento del buttonsave
const buttonsave = document.getElementById("buttonsave")

function changeButton(map){
    console.log(map.isSaved);
    if(map.isSaved){
        buttonsave.classList.add("saved")
        buttonsave.classList.remove("nonsaved")
        map.isSaved = false
    } else{
        buttonsave.classList.remove("saved")
        buttonsave.classList.add("nonsaved")
        map.isSaved = true
    }
}

//Evento para que le buttonsave cambie de color al guardarlo
buttonsave.addEventListener("click", function(e){
    console.log("CLICK");
    e.preventDefault();
    changeButton(Violet)
})







