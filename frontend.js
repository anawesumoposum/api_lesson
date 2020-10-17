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
//this function sends the information to the Flask app
function postPokemon(pokestuff) {
    $.ajax({
        type: //what kind of RESTful call do we want to make here?
        url: //what route do we want to send it to?
        data: //what data do we want to send?
        contentType: "application/json; charset=utf-8",
    });
}

$(document).ready(function(){
    $("#test-btn").click(function(){
        testAPI();
    });
    $("#post-btn").click(function() {
        pokestuff = JSON.stringify({'name': $("#poke-name").text(), 'height': $("#poke-height").text(), 'weight': $("#poke-weight").text()});
        //let's call the function we just defined to send data to the Flask app
    });

    $('form').submit(function(e){
        e.preventDefault();

        name = $('#poke-request').val();
        getPokemon(name);
    });
});