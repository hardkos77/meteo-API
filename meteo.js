'use strict';

/**********************************
 * FONCTIONS
 **********************************/

function search(){
    let city = $("input[name=ville]").val().replace(/\s/g, "");

    if(city.length == 0){
        alert("Vous n'avez rien saisi")
    }
    else{
    let params = {
        q : city,
        appid : "ddc1fb46496269d36a7cb86214f42266",
        units : "metrics",
        lang : "fr", 
    };
        $.ajax({
            url : `https://api.openweathermap.org/data/2.5/weather`,
            method : 'GET',
            dataType : 'JSONP', 
            data: params,
            success: show,
            error: (xhr, status, error) => console.log(xhr, status, error)
         });
    }
}



/*
<h2>Actuellement à <strong></strong><sup></sup>
        </h2>
        <p>La température actuelle est de <strong></strong>°C</p>
        <div>
            <img src="" alt="">
            <small></small>
        </div>
*/

// fonction : .replace(/\s/g, "") : insère un espace

/**********************************
 * GESTIONNAIRE D'EVENEMENTS
 **********************************/

function show(datas){
    $('article h2 strong').text(datas.name); //cibler, récupérer et afficher le nom de la ville
    $('article h2 sup').text(datas.sys.country); //pays
    $('article p strong').text(datas.main.temp); //température
    $('article div small').text(datas.weather[0].description); //description
    $('article div img').attr("src", `img/${datas.weather[0].icon}.png`)
    $('article').fadeIn();
}

$(document).ready(function(){
    $("#submit").on("click", search);
});



