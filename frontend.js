function testAPI(){
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/",
        success: function(response){
            $("#test").text("Found " + response.count + " entries!");
            console.log(response);
        } 
    });
}

function getPokemon(name){
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/" + name,
        success: function(response){
            console.log(response);

            $("#poke-image").attr("src", response.sprites.front_default);
            $('#poke-name').text(response.name);
            $('#poke-height').text(response.height);
            $('#poke-weight').text(response.weight);

        }
    });
}

function postPokemon(pokestuff) {
    $.ajax({
        type:"POST",
        url: "http://127.0.0.1:5000/update",
        //data: {'name': $("#poke-name").text(), 'height': $("#poke-height").text(), 'weight': $("#poke-weight").text()},  
        data: pokestuff,
        contentType: "application/json; charset=utf-8",
        //data: JSON.stringify({'name': $("#poke-name").text(), 'height': $("#poke-height").text(), 'weight': $("#poke-weight").text()}),  
    });
}

$(document).ready(function(){
    $("#test-btn").click(function(){
        testAPI();
    });
    $("#post-btn").click(function() {
        pokestuff = JSON.stringify({'name': $("#poke-name").text(), 'height': $("#poke-height").text(), 'weight': $("#poke-weight").text()});
        postPokemon(pokestuff);
    });

    $('form').submit(function(e){
        e.preventDefault();

        name = $('#poke-request').val();
        getPokemon(name);
    });
});